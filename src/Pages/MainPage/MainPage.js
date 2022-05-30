import { Link } from 'react-router-dom'
//components
import Bookmark from '../../components/Bookmark/Bookmark'
import Pagination from '../../components/Pagination/Pagination'

export default function MainPage({ bookmarks }) {
  return (
    <div>
      <h1>Main</h1>

      {bookmarks.length > 0 && (
        <Pagination data={bookmarks} RenderComponent={Bookmark} dataLimit={3} />
      )}

      <Link to='/create'>Create</Link>
    </div>
  )
}
