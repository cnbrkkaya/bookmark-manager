import { createContext, useReducer, useState } from 'react'

import BookmarkReducer from '../utils/BookmarkReducer/BookmarkReducer'

export const BookmarkContext = createContext()

export default function BookmarkContextProvider(props) {
  const [bookmarks, dispatch] = useReducer(
    BookmarkReducer,
    JSON.parse(localStorage.getItem('bookmarks')) || []
  )

  const addBookmark = (payload) => {
    dispatch({ type: 'ADD_BOOKMARK', payload })
  }

  const removeBookmark = (payload) => {
    dispatch({ type: 'REMOVE_BOOKMARK', payload })
  }

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark }}>
      {props.children}
    </BookmarkContext.Provider>
  )
}
