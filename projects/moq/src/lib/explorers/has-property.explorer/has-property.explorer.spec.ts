import { HasPropertyExplorer } from "./has-property.explorer";
import { PresetHasPropertyExplorer } from "./preset-has-property.explorer";
import { IPreset } from "../../presets/preset";
import { Presets } from "../../preset/presets";
import { resolveBuilder } from "../../../tests.components/resolve.builder";
import { MembersPropertyExplorer } from "../members.explorer/members-property.explorer";

describe("Has property explorer", () => {
    let resolve: ReturnType<typeof resolveBuilder>;

    beforeEach(() => {
        const presets = jasmine.createSpyObj<Presets<unknown>>(["get"]);
        const presetExplorer = jasmine.createSpyObj<PresetHasPropertyExplorer>("", ["has"]);
        const membersExplorer = jasmine.createSpyObj<MembersPropertyExplorer>("", ["hasProperty"]);
        resolve = resolveBuilder([
            [Presets, presets],
            [PresetHasPropertyExplorer, presetExplorer],
            [MembersPropertyExplorer, membersExplorer],
            [HasPropertyExplorer, new HasPropertyExplorer(presets, membersExplorer, presetExplorer)]
        ]);
    });

    it("Returns true when there is a member", () => {
        const name = "name";

        resolve(MembersPropertyExplorer)
            .hasProperty.withArgs(name).and.returnValue(true);

        const explorer = resolve(HasPropertyExplorer);
        const actual = explorer.has(name);

        expect(actual).toBe(true);
    });

    it("Returns true when there is a property", () => {
        const name = "name";
        const preset = <IPreset<unknown>>{};
        resolve(MembersPropertyExplorer)
            .hasProperty.and.returnValue(false);

        resolve(Presets)
            .get.and.returnValue([preset]);

        resolve(PresetHasPropertyExplorer)
            .has.withArgs(name, preset).and.returnValue(true);

        const explorer = resolve(HasPropertyExplorer);
        const actual = explorer.has(name);

        expect(actual).toBe(true);
    });

    it("Returns false when there is no property", () => {
        const name = "name";
        const preset = <IPreset<unknown>>{};

        resolve(MembersPropertyExplorer)
            .hasProperty.and.returnValue(false);

        resolve(Presets)
            .get.and.returnValue([preset]);

        resolve(PresetHasPropertyExplorer)
            .has.withArgs(name, preset).and.returnValue(false);

        const explorer = resolve(HasPropertyExplorer);
        const actual = explorer.has(name);

        expect(actual).toBe(false);
    });
});
