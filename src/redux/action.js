export const THEME_COLOR = "THEME_COLOR";
export const FULL_NAME = "FULL_NAME";
export const EMAIL = "EMAIL";
export const IS_DARK = "IS_DARK";
export const TODO_LIST = "TODO_LIST";
export const TODO_VALUE = "TODO_VALUE";
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

export const setTodoList = (todoList) => (dispatch) => {
  dispatch({
    type: TODO_LIST,
    payload: todoList,
  });
};

export const setTodoValue = (todoValue) => (dispatch) => {
  dispatch({
    type: TODO_VALUE,
    payload: todoValue,
  });
};
