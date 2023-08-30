import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from './useFetch.js';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';


const Edit = () => {
    const { id } = useParams();
    const { data: blog} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const [blogBody, setBlogBody]  = useState();
    
    let newBlog;
    if (blog !==null) {
        newBlog = {
            title: blog.title,
            body: blogBody,
            id: id,
            author: blog.author
        }
    }
    

    const handleEdit = (id) => {
        console.log('Edit button clicked');
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newBlog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                history.push('/');
            })
        }

    return ( 
        <>
            {blog &&
                <div className="blog-content-preview">
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>
                    <textarea rows='20' cols='100' required
                        value={blogBody} defaultValue={blog.body} onChange={e => setBlogBody(e.target.value)} >
                    </textarea>
                    <br/>
                        <button onClick={() => handleEdit(blog.id)}>Edit</button>
                </div>
            }
        </>
     );
}
 
export default Edit;
