// a custom hook that will return the value of the context
//Much more efficient than using React.useContext
import { useContext } from 'react'
import { BookmarkContext } from '../contexts/BookmarkContext'

export function useBookmarkContext() {
  const context = useContext(BookmarkContext)
  if (!context) {
    throw new Error(
      'useBookmarkContext must be used within a BookmarkContext Provider'
    )
  }
  return context
}
