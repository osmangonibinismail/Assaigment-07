import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {recipe_name, preparing_time, calories} = bookmark;
    
    return (
        <>
        <tr>
            <td></td>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
            <td>
                <button className='btn btn-primary text-white rounded-full'>
                    preparing
                </button>
            </td>
        </tr>
        </>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;