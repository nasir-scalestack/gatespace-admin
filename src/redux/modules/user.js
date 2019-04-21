export const OPTIONS_REQUESTED = 'user/OPTIONS_REQUESTED'
export const OPTIONS = 'user/OPTIONS'

export const setActiveApp = (appId) => ({
  type:  OPTIONS,
  active_app: appId
})

const initialState = {
  active_app: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case OPTIONS_REQUESTED:
      return {
        ...state,
      }

    case OPTIONS:
      return {
        ...state,
        active_app: action.active_app
      }

    default:
      return state
  }
}

export const options = () => {
  return dispatch => {
    dispatch({
      type: OPTIONS_REQUESTED
    })

    dispatch({
      type: OPTIONS
    })
  }
}

export const optionsAsync = () => {
  return dispatch => {
    dispatch({
      type: OPTIONS_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: OPTIONS
      })
    }, 3000)
  }
}