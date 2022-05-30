export default function CartReducer(state, action) {
  switch (action.type) {
    case 'ADD_BOOKMARK':
      localStorage.setItem(
        'bookmarks',
        JSON.stringify([...state, action.payload])
      )
      return [...state, action.payload]

    case 'REMOVE_BOOKMARK':
      return state.filter((bookmark) => bookmark.id !== action.payload)

    case 'CLEAR':

    default:
      return state
  }
}
