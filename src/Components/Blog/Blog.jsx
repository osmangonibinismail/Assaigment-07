import PropTypes from 'prop-types';
import { CiClock2 } from "react-icons/ci";
import { MdWhatshot } from "react-icons/md";
const Blog = ({ blog }) => {
    const {title,recipe_name,recipe_image,short_description,preparing_time,calories,ingredients} = blog;
    return (
        <div className='mb-20'>
            <img className='w-80% mb-8 rounded-2xl' src={recipe_image} alt= {`Cover picture of the title ${title}`} />
            <h2 className="h2 text-4xl mb-4">{recipe_name}</h2>
            <p className='mb-4'>{short_description}</p>
            <h2 className='mb-3'>{ingredients}</h2>
            <div className='flex justify-between'>
                <div className='flex'>
                    <CiClock2 />
                    <span>{preparing_time} minutes</span>
                </div>
                <div className='flex gap-1'>
                    <MdWhatshot />
                    <span>{calories} calories</span>
                </div>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;