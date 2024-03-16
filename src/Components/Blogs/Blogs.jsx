import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
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
                ></Blog>)
            }
        </div>
    )
}
export default Blogs;