import { writable } from "svelte/store";

export const VISIBILITY = writable<boolean>(false);
export const RobberyVisible = writable<boolean>(false);
export const PlayerVisible = writable<boolean>(false);
export const IDENTIFIER = writable<any>(null);
export const PLAYERS = writable<any>(null);
export const ROBBERY = writable<any>(null);
export const COOLDOWN = writable<number>(0);
export const BROWSER_MODE = writable<boolean>(false);
export const RESOURCE_NAME = writable<string>("");