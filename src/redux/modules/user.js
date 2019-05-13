import { push } from 'connected-react-router';

export const OPTIONS_REQUESTED = 'user/OPTIONS_REQUESTED';
export const OPTIONS = 'user/OPTIONS';

export const setActiveApp = (appId, appName) => dispatch => {
  dispatch({
    type: OPTIONS,
    active_app: appId,
    app_name: appName,
  });
  dispatch(push('/'));
};

export const removeActiveApp = () => dispatch => {
  dispatch({
    type: OPTIONS,
    active_app: null,
    app_name: null,
  });
};

const initialState = {
  active_app: null,
  app_name: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPTIONS_REQUESTED:
      return {
        ...state,
      };

    case OPTIONS:
      return {
        ...state,
        active_app: action.active_app,
        app_name: action.app_name,
      };

    default:
      return state;
  }
};

export const options = () => dispatch => {
  dispatch({
    type: OPTIONS_REQUESTED,
  });

  dispatch({
    type: OPTIONS,
  });
};

export const optionsAsync = () => dispatch => {
  dispatch({
    type: OPTIONS_REQUESTED,
  });

  return setTimeout(() => {
    dispatch({
      type: OPTIONS,
    });
  }, 3000);
};
