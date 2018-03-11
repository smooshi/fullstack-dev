const initialState = "Terve!"

const reducer = (store = initialState, action) => {
    console.log(action)
    if (action.type === 'CHANGE_STATE') {
        //console.log("???")
        return store = action.content
    } else if (action.type === "REMOVE_NOTF") {
        return store = action.content
    } else {
      return store
    }
//return store
}

export const setNotification = (n) => {
  const content = n
  return {
    type: "CHANGE_STATE",
    content
  }
}

export const removeNotification = () => {
  return {
    type: "REMOVE_NOTF",
    content: ""
  }
}

export default reducer
