export const THEME_COLOR = "THEME_COLOR";
export const FULL_NAME = "FULL_NAME";
export const EMAIL = "EMAIL";
export const IS_DARK = "IS_DARK";
export const setThemeColor = (themeColor) => (dispatch) => {
  dispatch({
    type: THEME_COLOR,
    payload: themeColor,
  });
};
export const setFullName = (fullName) => (dispatch) => {
  dispatch({
    type: FULL_NAME,
    payload: fullName,
  });
};

export const setEmailAddress = (emailAddress) => (dispatch) => {
  dispatch({
    type: EMAIL,
    payload: emailAddress,
  });
};

export const setIsDark = (isDark) => (dispatch) => {
  dispatch({
    type: IS_DARK,
    payload: isDark,
  });
};
