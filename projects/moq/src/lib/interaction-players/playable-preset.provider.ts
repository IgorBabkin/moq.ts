import { IPreset } from "../presets/preset";
import { Interaction } from "../interactions";
import { ExpressionMatcher } from "../expression-matchers/expression-matcher";
import { Presets } from "../preset/presets";

/**
 * @hidden
 */
export class PlayablePresetProvider {

    constructor(
        private presets: Presets<unknown>,
        private matcher = new ExpressionMatcher()) {

    }

    public get(interaction: Interaction): IPreset<unknown> | undefined {
        for (const preset of this.presets.get()) {
            const {target, playable: {isPlayable}} = preset;
            if (this.matcher.matched(interaction, target) && isPlayable() === true) {
                return preset;
            }
        }
    }
}
