import {  useState } from "react";
import useFetch from "./useFetch.js";
import BlogList from "./BlogList.js";

const Search = () => {
    const [search, setSearch] = useState('');
    const { data: blogs, error, isPending } = useFetch('http://localhost:8000/blogs');
    
    let matchedBlogs;
    if (blogs) { 
        matchedBlogs = blogs.filter((blog) => { // match found
                return (blog.title.toLowerCase().indexOf(search.toLowerCase()) !== -1) && blog;
        });
    }
    
    return ( 
        <div className="search-input">
            <input type="text"
                placeholder=" Search here ...."
                onChange={e => setSearch(e.target.value)}
            />
            <div className="search-preview">
                {isPending && <div>Loading ... </div>}
                {error && <div> error </div>}
                {search && <BlogList blogs={matchedBlogs} title='Search Results ' />}
            </div>
        </div>
            

     )
}
 
export default Search;