import { useBookmarkContext } from '../../hooks/useBookmarkContext'

export default function Bookmark({ data }) {
  const { removeBookmark, upVote, downVote } = useBookmarkContext()

  function handleRemove() {
    removeBookmark(data.id)
  }
  function handleUpVote() {
    upVote(data.id)
  }

  function handleDownVote() {
    downVote(data.id)
  }

  return (
    <div
      className='relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      key={data.id}>
      <span className='text-red ' onClick={handleRemove}>
        X
      </span>
      <h3> {data.linkName} </h3>
      <h3> {data.linkUrl} </h3>
      <h3> {data.vote} Points </h3>
      <button className='text-red ' onClick={handleUpVote}>
        +
      </button>
      <button className='text-red ' onClick={handleDownVote}>
        -
      </button>
    </div>
  )
}
