import types from './types';
import themes from '../themes'
const defaultTheme = 'light';

export const setTheme = (themeName = defaultTheme) =>
{
    let theme = themes[themeName];
    if(!theme) {
        theme = themes[defaultTheme];
        themeName = defaultTheme
        } 

        localStorage.theme = themeName;
        return { 
            type: types.SET_THEME, // 'set_theme
            themeName: themeName, // 'light'
            theme: theme,
        }
}