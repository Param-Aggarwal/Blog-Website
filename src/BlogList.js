import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({ blogs, title }) => {
    
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {Object.keys(blogs).length === 0 && <h3 className="no-blog">No Blog Found!! </h3>}  {/* // for empty blog  */}
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`} >
                        <h2 className="blog-title">{blog.title}</h2>
                        <p className="blog-author">Written By: {blog.author}</p>
                    </Link>
                    
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;