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
  const upVote = (payload) => {
    dispatch({ type: 'UP_VOTE', payload })
  }
  const downVote = (payload) => {
    dispatch({ type: 'DOWN_VOTE', payload })
  }

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark, upVote, downVote }}>
      {props.children}
    </BookmarkContext.Provider>
  )
}
