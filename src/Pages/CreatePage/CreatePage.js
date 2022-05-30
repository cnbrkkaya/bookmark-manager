import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

export default function CreatePage({ addBookmark }) {
  let navigate = useNavigate()

  function handleCreate(event) {
    event.preventDefault()
    addBookmark({
      id: uuid(),
      linkName: event.target.elements.linkName.value,
      linkUrl: event.target.elements.linkUrl.value,
      vote: 0,
      createdAt: new Date().toISOString(),
    })
    navigate('/')
  }

  return (
    <div>
      <h1>Create</h1>
      <Link to='/'>Back</Link>

      <form onSubmit={handleCreate} action=''>
        <input type='text' name='linkName' placeholder='Enter Link' />
        <input type='text' name='linkUrl' placeholder='Enter Url' />
        <button>Create</button>
      </form>
    </div>
  )
}
