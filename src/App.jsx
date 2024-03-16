import './App.css'
import Banner from './Components/Banner/Banner'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'
import Recips from './Components/Recips/Recips'

function App() {

  return (
    <>
    <Header></Header>
    <Banner></Banner>
    <Recips></Recips>
    <div className='md:flex'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
    </div>
    </>
  )
}

export default App;
