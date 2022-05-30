import { useBookmarkContext } from '../../hooks/useBookmarkContext'

export default function Bookmark({ data }) {
  const { removeBookmark } = useBookmarkContext()

  function handleRemove() {
    removeBookmark(data.id)
  }

  return (
    <div key={data.id}>
      <h3> {data.linkName} </h3>
      <h3> {data.linkUrl} </h3>
      <h3> {data.vote} </h3>
      <span onClick={handleRemove}>X</span>
    </div>
  )
}
