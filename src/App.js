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
  const { bookmarks, addBookmark } = useBookmarkContext()
  return (
    <>
      <Navbar />
      <main className='grid place-items-center h-screen mx-auto max-w-7xl px-4 content-center'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage bookmarks={bookmarks} />} />
            <Route
              path='/create'
              element={<CreatePage addBookmark={addBookmark} />}></Route>
          </Routes>
        </BrowserRouter>
      </main>

      <Footer />
    </>
  )
}

export default App
