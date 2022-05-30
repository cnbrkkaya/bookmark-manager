import { BrowserRouter, Routes, Route } from 'react-router-dom'
//pages
import MainPage from './Pages/MainPage/MainPage'
import CreatePage from './Pages/CreatePage/CreatePage'
//components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
//useContext
import { useBookmarkContext } from './hooks/useBookmarkContext'

function App() {
  const { bookmarks } = useBookmarkContext()
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage bookmarks={bookmarks} />} />
          <Route path='/create' element={<CreatePage />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
