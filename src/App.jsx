import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'
import Recips from './Components/Recips/Recips'

function App() {
  const [bookmarks setBookmarks] = useState([]);

  const handleAddToBookmark = blog => {
    console.log('blog');
  }
  return (
    <>
    <Header></Header>
    <Banner></Banner>
    <Recips></Recips>
    <div className='md:flex max-w-8xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks></Bookmarks>
    </div>
    </>
  )
}

export default App;
