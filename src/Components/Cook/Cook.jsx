import PropTypes from 'prop-types';

const Cook = ({cook, index}) => {
    const {recipe_name, preparing_time, calories} = cook;
    
    return (
        <>
        <tr className='gap-5'>
            <td>{index}</td>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
            
        </tr>
        </>
    );
};

Cook.propTypes = {
    cook: PropTypes.object
}

export default Cook;