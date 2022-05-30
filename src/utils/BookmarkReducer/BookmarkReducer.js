export default function CartReducer(state, action) {
  switch (action.type) {
    case 'ADD_BOOKMARK':
      localStorage.setItem(
        'bookmarks',
        JSON.stringify([...state, action.payload])
      )
      return [...state, action.payload]

    case 'REMOVE_BOOKMARK':
      localStorage.setItem(
        'bookmarks',
        JSON.stringify(
          state.filter((bookmark) => bookmark.id !== action.payload)
        )
      )
      return state.filter((bookmark) => bookmark.id !== action.payload)

    case 'UP_VOTE':
      localStorage.setItem(
        'bookmarks',
        JSON.stringify(
          state.map((bookmark) =>
            bookmark.id === action.payload
              ? { ...bookmark, vote: bookmark.vote + 1 }
              : bookmark
          )
        )
      )
      return state.map((bookmark) =>
        bookmark.id === action.payload
          ? { ...bookmark, vote: bookmark.vote + 1 }
          : bookmark
      )

    case 'DOWN_VOTE':
      localStorage.setItem(
        'bookmarks',
        JSON.stringify(
          state.map((bookmark) =>
            bookmark.id === action.payload
              ? { ...bookmark, vote: bookmark.vote - 1 }
              : bookmark
          )
        )
      )
      return state.map((bookmark) =>
        bookmark.id === action.payload
          ? { ...bookmark, vote: bookmark.vote - 1 }
          : bookmark
      )

    case 'CLEAR':

    default:
      return state
  }
}
