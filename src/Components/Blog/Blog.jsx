import PropTypes from 'prop-types';
import { CiClock2 } from "react-icons/ci";
import { MdWhatshot } from "react-icons/md";
const Blog = ({ blog, handleAddToBookmark }) => {
    const {title,recipe_name,recipe_image,short_description,preparing_time,calories,ingredients} = blog;
    return (
        <div className='mb-20'>
            <img className='w-80% mb-8 rounded-2xl' src={recipe_image} alt= {`Cover picture of the title ${title}`} />
            <h2 className="h2 text-4xl mb-4">{recipe_name}</h2>
            <p className='mb-4'>{short_description}</p>
            <h2 className='mb-3'>Ingradience: {ingredients.length}</h2>
            <ul className='list-disc pl-8'>
                {
                    ingredients.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
            <div className='flex justify-between mb-3 mt-3 text-wrap'>
                <div className='flex gap-1'>
                    <button className='ml-2 text-xl bg-white'><CiClock2></CiClock2></button>
                    <span>{preparing_time} minutes</span>
                </div>
                <div className='flex gap-1 items-center'>
                    <button className='ml-2 text-xl bg-white'><MdWhatshot></MdWhatshot>
                   </button>
                    <span>{calories} calories</span>
                </div>
            </div>
            <button
                onClick={() => handleAddToBookmark(blog)} 
                className="btn btn-accent rounded-full">Want to Cook
            </button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}

export default Blog;