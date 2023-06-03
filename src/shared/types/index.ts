import * as icons from "../../icons";

//Using const assertion with an Object dose not satesfiy TS :(
//@ts-ignore
const iconsKeys = icons as const;
export type IconOptions = keyof typeof iconsKeys;
