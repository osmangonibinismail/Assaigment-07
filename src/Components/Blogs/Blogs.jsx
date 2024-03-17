import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark, handleAddToCook}) => {
    const [blogs, setBlogs ] = useState([]);

    useEffect( () => {
            fetch('Data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
        },[])
    return(
        <div className="md:w-2/3 grid md:grid-cols-2 gap-12">
            {
                blogs.map(blog => <Blog
                    key={blog.recipe_id}
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                    handleAddToCook={handleAddToCook}
                ></Blog>)
            }
        </div>
    )
}

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func
}

export default Blogs;