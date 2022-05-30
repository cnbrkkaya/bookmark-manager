import { Link } from 'react-router-dom'

export default function MainPage({ bookmarks }) {
  return (
    <div>
      <h1>Main</h1>
      {bookmarks.lenght > 0
        ? bookmarks.map((bookmark) => (
            <div key={bookmark.id}>
              <h3> {bookmark.linkName} </h3>
              <h3> {bookmark.linkUrl} </h3>
              <h3> {bookmark.vote} </h3>
            </div>
          ))
        : 'No Bookmarks'}

      <Link to='/create'>Create</Link>
    </div>
  )
}
