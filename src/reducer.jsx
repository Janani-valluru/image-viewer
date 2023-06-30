const reducer = (state, action) => {
    switch (action.type) {
        case "GET_DATA":
            return {
                ...state,
                data: action.payload.data
            }
    }
}
export default reducer;