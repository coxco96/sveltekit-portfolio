

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.nSMm_awn.js","_app/immutable/chunks/scheduler.SLKoNyP7.js","_app/immutable/chunks/index.Ddk7O2VX.js"];
export const stylesheets = ["_app/immutable/assets/2.D-ARcAUX.css"];
export const fonts = [];
