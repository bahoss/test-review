import { PlainObject } from "../../utils/isEqual.js";

export interface InputProps extends PlainObject {
    id: string;
    type?: string;
    placeholder?: string;
    visible?: boolean;
}