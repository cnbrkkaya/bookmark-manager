export default function CartReducer(state, action) {
  switch (action.type) {
    case 'ADD_BOOKMARK':
      return [...state, action.payload]

    case 'REMOVE_BOOKMARK':
      return state.filter((bookmark) => bookmark.id !== action.payload)

    case 'CLEAR':

    default:
      return state
  }
}
