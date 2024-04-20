import { links } from "./data";

export type SectionName = (typeof links)[number]["name"]; // any of them, take the name property tho
