import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './Pages/MainPage/MainPage'
import CreatePage from './Pages/CreatePage/CreatePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/create' element={<CreatePage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}
