import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <dev className="bg-slate-200 p-4 m-4 rounded-xl flex g-4" >
            <h2 className='text-2xl ml-2'></h2>
            <h2 className='ml-2'>chicken caiser</h2>
            <h2 className='ml-2'>20 min</h2>
            <h2 className='ml-2'>400 calories</h2>
        </dev>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;