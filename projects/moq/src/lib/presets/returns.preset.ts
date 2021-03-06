import { IPreset } from "./preset";
import { ExpectedExpressions } from "../expected-expressions/expected-expressions";
import { IPlayable } from "../moq";

export class ReturnsPreset<T, TValue> implements IPreset<T> {
    constructor(
        public readonly playable: IPlayable,
        public readonly target: ExpectedExpressions<T>,
        public readonly value: TValue) {

    }
}

