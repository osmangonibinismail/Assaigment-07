import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'
import Cooks from '../Cooks/Cooks'

const Bookmarks = ({bookmarks, handleAddToCook, cooks}) => {
    return(
        <div className="w-1/3 bg-gray-400 ml-4 rounded-2xl  pt-4 border-spacing-1">
            <h2 className='text-3xl text-center text-black'>Want to Cook: {bookmarks.length}
            </h2>
            <div>
            <table className='table'>
                <thead>
                    <tr className='text-2xl '>
                        <td></td>
                        <td>Name</td>
                        <td>Time</td>
                        <td>Calories</td>
                    </tr>
                </thead>
                {
                    bookmarks.map((bookmark, index) => <Bookmark key={bookmark.id} bookmark={bookmark}
                        handleAddToCook = {handleAddToCook}
                        index={index + 1 }
                    ></Bookmark>)
                }
            </table>
            </div>
            
            <Cooks cooks = {cooks}></Cooks>
        </div>
    )
}
Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}
export default Bookmarks;