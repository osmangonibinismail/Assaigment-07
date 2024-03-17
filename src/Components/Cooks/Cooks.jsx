import PropTypes from 'prop-types'
import Cook from '../Cook/Cook';


const Cooks = ({cooks}) => {
    // console.log(cooks);
    return (
        <div className="  ml-4 rounded-2xl mt-10 pt-4 border-spacing-1">
            <h2 className='text-3xl text-center text-black'>Currently cooking:{cooks.length}
            </h2>
            <div>
            <table className='table'>
                <thead>
                    <tr className='text-2xl gap-5 '>
                        <td></td>
                        <td>Name</td>
                        <td>Time</td>
                        <td>Calories</td>
                    </tr>

                </thead>
                <tbody>
                    {
                        cooks.map((cook, index) => <Cook key = {index}
                        cook = {cook} index = {index +1 }></Cook>)
                    }
                </tbody>
            </table>
            </div>
            
        </div>
    );
};



export default Cooks;