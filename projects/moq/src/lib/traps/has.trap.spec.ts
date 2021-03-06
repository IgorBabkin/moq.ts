import { Tracker } from "../tracker";
import { InOperatorInteraction } from "../interactions";
import { PropertiesValueStorage } from "./properties-value.storage";
import { InteractionPlayer } from "../interaction-players/interaction.player";
import { HasPropertyExplorer } from "../explorers/has-property.explorer/has-property.explorer";
import { HasMethodExplorer } from "../explorers/has-method.explorer/has-method.explorer";
import { resolveBuilder } from "../../tests.components/resolve.builder";
import { HasTrap } from "./has.trap";
import { InOperatorInteractionExplorer } from "../explorers/in-operator-interaction.explorer/in-operator-interaction.explorer";
import { PresetPlayablesUpdater } from "../playables/preset-playables.updater";

describe("Has trap", () => {
    let resolve: ReturnType<typeof resolveBuilder>;

    beforeEach(() => {
        const storage = jasmine.createSpyObj<PropertiesValueStorage>("", ["has", "get"]);
        const tracker = jasmine.createSpyObj<Tracker>("", ["add"]);
        const interactionPlayer = jasmine.createSpyObj<InteractionPlayer>("", ["play"]);
        const inOperatorInteractionExplorer = jasmine.createSpyObj<InOperatorInteractionExplorer>("", ["has"]);
        const hasPropertyExplorer = jasmine.createSpyObj<HasPropertyExplorer>("", ["has"]);
        const hasMethodExplorer = jasmine.createSpyObj<HasMethodExplorer>("", ["has"]);
        const presetPlayablesUpdater = jasmine.createSpyObj<PresetPlayablesUpdater>("", ["update"]);

        resolve = resolveBuilder([
            [PropertiesValueStorage, storage],
            [Tracker, tracker],
            [InteractionPlayer, interactionPlayer],
            [InOperatorInteractionExplorer, inOperatorInteractionExplorer],
            [HasPropertyExplorer, hasPropertyExplorer],
            [HasMethodExplorer, hasMethodExplorer],
            [PresetPlayablesUpdater, presetPlayablesUpdater],
            [HasTrap, new HasTrap(tracker, storage, interactionPlayer,
                inOperatorInteractionExplorer,
                hasPropertyExplorer,
                hasMethodExplorer,
                presetPlayablesUpdater)]
        ]);
    });

    it("Tracks in operator call", () => {
        const propertyName = "property name";

        const trap = resolve(HasTrap);
        trap.intercept(propertyName);

        expect(resolve(Tracker).add).toHaveBeenCalledWith(new InOperatorInteraction(propertyName));
    });

    it("Returns true if property exists in the values storage", () => {
        const propertyName = "property name";

        resolve(PropertiesValueStorage)
            .has.withArgs(propertyName).and.returnValue(true);

        const trap = resolve(HasTrap);
        const actual = trap.intercept(propertyName);

        expect(actual).toBe(true);
    });

    it("Returns interaction play value if in operator explorer sees it", () => {
        const propertyName = "property name";

        resolve(PropertiesValueStorage)
            .has.withArgs(propertyName).and.returnValue(false);
        resolve(InOperatorInteractionExplorer)
            .has.withArgs(propertyName).and.returnValue(true);
        resolve(InteractionPlayer)
            .play.withArgs(new InOperatorInteraction(propertyName))
            .and.returnValue(true);

        const trap = resolve(HasTrap);
        const actual = trap.intercept(propertyName);

        expect(actual).toBe(true);
    });

    it("Returns true if property explorer sees it", () => {
        const propertyName = "property name";

        resolve(PropertiesValueStorage)
            .has.withArgs(propertyName).and.returnValue(false);
        resolve(InteractionPlayer)
            .play.withArgs(new InOperatorInteraction(propertyName))
            .and.returnValue(false);
        resolve(HasPropertyExplorer)
            .has.withArgs(propertyName).and.returnValue(true);

        const trap = resolve(HasTrap);
        const actual = trap.intercept(propertyName);

        expect(actual).toBe(true);
    });

    it("Updates in operators playables states", () => {
        const propertyName = "property name";

        resolve(PropertiesValueStorage)
            .has.withArgs(propertyName).and.returnValue(false);
        resolve(InteractionPlayer)
            .play.withArgs(new InOperatorInteraction(propertyName))
            .and.returnValue(false);

        const trap = resolve(HasTrap);
        trap.intercept(propertyName);

        expect(resolve(PresetPlayablesUpdater).update)
            .toHaveBeenCalledWith(new InOperatorInteraction(propertyName), undefined);
    });

    it("Returns true if method explorer sees it", () => {
        const propertyName = "property name";

        resolve(PropertiesValueStorage)
            .has.withArgs(propertyName).and.returnValue(false);
        resolve(InteractionPlayer)
            .play.withArgs(new InOperatorInteraction(propertyName))
            .and.returnValue(false);
        resolve(HasPropertyExplorer)
            .has.withArgs(propertyName).and.returnValue(false);
        resolve(HasMethodExplorer)
            .has.withArgs(propertyName).and.returnValue(true);

        const trap = resolve(HasTrap);
        const actual = trap.intercept(propertyName);

        expect(actual).toBe(true);
    });

    it("Returns false", () => {
        const propertyName = "property name";

        resolve(PropertiesValueStorage)
            .has.withArgs(propertyName).and.returnValue(false);
        resolve(InteractionPlayer)
            .play.withArgs(new InOperatorInteraction(propertyName))
            .and.returnValue(false);
        resolve(HasPropertyExplorer)
            .has.withArgs(propertyName).and.returnValue(false);
        resolve(HasMethodExplorer)
            .has.withArgs(propertyName).and.returnValue(false);

        const trap = resolve(HasTrap);
        const actual = trap.intercept(propertyName);

        expect(actual).toBe(false);
    });
});
