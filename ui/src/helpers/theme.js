export const WHITE = opacity => `rgba(255, 255, 255, ${opacity || 1})`;
export const BLACK = opacity => `rgba(0, 0, 0, ${opacity || 1})`;

export const GREY_250 = opacity => `rgba(250, 250, 250, ${opacity || 1})`;
export const GREY_238 = opacity => `rgba(238, 238, 238, ${opacity || 1})`;
export const GREY_208 = opacity => `rgba(208, 208, 208, ${opacity || 1})`;
export const GREY_160 = opacity => `rgba(160, 160, 160, ${opacity || 1})`;
export const GREY_119 = opacity => `rgba(119, 119, 119, ${opacity || 1})`;

export const ONLINE = `rgba(106, 245, 111, 1)`;
export const AWAY = `rgba(255, 185, 7, 1)`;
export const BUSY = `rgba(249, 54, 54, 1)`;

export const SIDEBAR_1 = (opt = {}) => `hsl(200, ${opt.s || '14%'}, ${opt.l || '21%'})`;
export const SIDEBAR_2 = (opt = {}) => `hsl(275, ${opt.s || '20%'}, ${opt.l || '36%'})`;

export const BREAKPOINT = '740px';

export default {
    WHITE,
    BLACK,
    GREY_119,
    GREY_160,
    GREY_208,
    GREY_250,
    GREY_238,
    ONLINE,
    AWAY,
    BUSY,
    SIDEBAR_1,
    SIDEBAR_2,
    BREAKPOINT
}

