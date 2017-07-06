/**
 * Action 是把数据从应用传到 store 的有效载荷。它是 store 数据的唯一来源。
 * Created by victor zhang on 2017/7/6.
 */

export const AuthActionType = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  FETCH_PROFILE: 'FETCH_PROFILE',
  UID_NOT_FOUND: 'UID_NOT_FOUND',

  LOGIN_PENDING: 'LOGIN_PENDING',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',

  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',

  FETCH_PROFILE_PENDING: 'FETCH_PROFILE_PENDING',
  FETCH_PROFILE_SUCCESS: 'FETCH_PROFILE_SUCCESS'
};

export const MenuActionType = {
  REFRESH_MENU: 'REFRESH_MENU',
  REFRESH_NAVPATH: 'REFRESH_NAVPATH',

  REFRESH_MENU_SUCCESS: 'REFRESH_MENU_SUCCESS',
  REFRESH_MENU_FAILED: 'REFRESH_MENU_FAILED'
};
