import { createContext, useReducer, useState } from 'react'

import BookmarkReducer from '../utils/BookmarkReducer/BookmarkReducer'

export const BookmarkContext = createContext()

export default function BookmarkContextProvider(props) {
  const [bookmarks, dispatch] = useReducer(
    BookmarkReducer,
    JSON.parse(localStorage.getItem('bookmarks')) || []
  )

  return (
    <BookmarkContext.Provider value={{ bookmarks }}>
      {props.children}
    </BookmarkContext.Provider>
  )
}
