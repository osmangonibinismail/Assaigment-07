import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'
import Recips from './Components/Recips/Recips'
import Cooks from './Components/Cooks/Cooks'
import Footer from './Components/Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [bookmarks, setBookmarks] = useState([]);

    const isExist = blog => {
      return bookmarks.find(item => item.recipe_id === blog.recipe_id)
    }
  const handleAddToBookmark = blog => {
    if (!isExist(blog)) {
      const newBookmarks = [...bookmarks, blog];
      toast.success('Recipe added to Card.')
      setBookmarks(newBookmarks);
    } else {
      toast.error('Recipe already add to Card.')
    }
  }
  const [cooks, setCooks] = useState([]);

  const handleAddToCook = bookmarks => {
    setCooks([...cooks, bookmarks]);
    setBookmarks(prevBookmarks => prevBookmarks.filter(item => item.recipe_id !== bookmarks.recipe_id));
  }
  return (
    <>
    <Header></Header>
    <Banner></Banner>
    <Recips></Recips>
    <div className="mx-auto max-w-[100%] lg:max-w-[80%] py-5 flex">
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks bookmarks={bookmarks}
      handleAddToCook ={handleAddToCook}
      cooks = {cooks}
      ></Bookmarks>
      <ToastContainer></ToastContainer>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App;
