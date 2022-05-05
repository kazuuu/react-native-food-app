import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
    backgroundDark: '#19171f',
    backgroundLight: '#f5f6fe',

    primary: '#FF6C44',
    primaryLight: '#ffa270',
    primaryDark: '#c63f17',
    
    gray: '#918d8a',
    grayDark: '#403c39',
    grayLight: '#d1cdc9',
    white: '#FFFFFF',
    black: '#000000',

    transparent: 'transparent',
    transparentWhite1: 'rgba(255, 255, 255, 0.1)',
    transparentBlack1: 'rgba(0, 0, 0, 0.1)',
    transparentBlack7: 'rgba(0, 0, 0, 0.7)'
};

export const SIZES = {
    // global sizes
    margin: 8,
    fieldSpace: 16,
    radius: 12,

    fontLargest: 44,
    fontLarger: 30,
    fontLarge: 22,
    fontRegular: 16,
    fontSmall: 14,
    fontSmaller: 12,
    fontSmallest: 10,

    // app dimensions
    width,
    height
};

const appTheme = { COLORS, SIZES };

export default appTheme;