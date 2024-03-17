import PropTypes from 'prop-types';

const Bookmark = ({bookmark, handleAddToCook, index}) => {
    const {recipe_name, preparing_time, calories} = bookmark;
    
    return (
        <>
        <tr className='mx-auto max-w-[90%] lg:max-w-[80%] py-5 g-5' >
            <td >{index}</td>
            <td className=''>{recipe_name}</td>
            <td className=''>{preparing_time} minutes</td>
            <td className=''>{calories} calories</td>
            <td className=''>
                <a
                    onClick={() => handleAddToCook(bookmark)}
                    className='btn btn-primary text-white rounded-full'>
                    preparing
                </a>
            </td>
        </tr>
        </>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;