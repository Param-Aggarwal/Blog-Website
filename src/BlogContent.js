import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from './useFetch.js';
import { useHistory } from 'react-router-dom';


const BlogContent = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const user = {username: 'Singla'}; // ---------------------

    const handleClick = (id) => {
        console.log('delete button clicked ');
        (window.confirm('Are you sure, you want to delete this blog ?') === true) && 
            fetch('http://localhost:8000/blogs/'+id, {
            method: 'DELETE'
        }).then(res => {
            console.log('blog deleted');
            history.push('/')
        });   
    }

    return (
        <div className="blog-content">
            {isPending && <div>Loading....</div>}
            {error && <div>{ error }</div>}
            {blog &&
                <article className='blog-content-preview' >
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>
                    <span>{blog.body}</span>
                    {(user.username.toLowerCase() === blog.author.toLowerCase()) &&
                        <button className='delete-button'
                        onClick={() => handleClick(blog.id)}>Delete</button>}
                    {(user.username.toLowerCase() === blog.author.toLowerCase()) &&
                        <Link className='edit-button' to={`/edit/${blog.id}`} >
                        <button >Edit</button>
                    </Link>} 
                </article>
            } 
       </div>
     );
}
 
export default BlogContent;