import { THEME_COLOR, FULL_NAME, EMAIL, IS_DARK } from "./action";
const INITIAL_STATE = {
  themeColor: "blue",
  fullName: "iSkillers",
  emailAddress: "",
  isDark: true,
};
function useReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case THEME_COLOR:
      return { ...state, themeColor: action.payload };
    case FULL_NAME:
      return { ...state, fullName: action.payload };
    case EMAIL:
      return { ...state, emailAddress: action.payload };
    case IS_DARK:
      return { ...state, isDark: action.payload };
    default:
      return state;
  }
}
export default useReducer;
