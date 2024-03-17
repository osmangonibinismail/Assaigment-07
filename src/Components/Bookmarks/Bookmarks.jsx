import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks}) => {
    return(
        <div className="md:w-1/3 bg-gray-400 ml-4 rounded-2xl mt-10 pt-4 border-spacing-1">
            <h2 className='text-3xl text-center text-black'>Want to Cook: {bookmarks.length}
            </h2>
            <div>
            <table>
                <thead>
                    <tr className='text-2xl '>
                        <td></td>
                        <td>Name</td>
                        <td>Time</td>
                        <td>Calories</td>
                    </tr>
                </thead>
            </table>
            </div>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    )
}
Bookmarks.propTypes = {
    bookmarks:PropTypes.array
}
export default Bookmarks;