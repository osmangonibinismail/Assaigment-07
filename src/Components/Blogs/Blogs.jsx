import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark}) => {
    const [blogs, setBlogs ] = useState([]);

    useEffect( () => {
            fetch('Data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
        },[])
    return(
        <div className="md:w-1/3">
            <h1 className="text-4xl">Data: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog
                    key={blog.recipe_id}
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                ></Blog>)
            }
        </div>
    )
}

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func
}

export default Blogs;