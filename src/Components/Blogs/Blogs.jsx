import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs ] = useState([]);

    useEffect( () => {
            fetch('Data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
        },[])
    return(
        <div className="md:w-2/3">
            <h1 className="text-4xl">Data</h1>
        </div>
    )
}
// useEffect
export default Blogs;