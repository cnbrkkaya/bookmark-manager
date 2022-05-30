import { BrowserRouter, Routes, Route } from 'react-router-dom'
//pages
import MainPage from './Pages/MainPage/MainPage'
import CreatePage from './Pages/CreatePage/CreatePage'
//components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/create' element={<CreatePage />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
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
