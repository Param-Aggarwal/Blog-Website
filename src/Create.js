import { useState } from "react";
import {useHistory} from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const history = useHistory();
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        const blog = { title, body, author };
        setTimeout(() => {
            fetch('http://localhost:8000/blogs/', {
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(blog)
            }).then((res) => {
                console.log(res);
                setIsPending(false);
                history.push('/');
            })
        }, 1000)
        
    }

    return ( 
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>

                <label>Blog Title:</label>
                <input type="text" required value={title}
                    onChange={e => setTitle(e.target.value)} />
                
                <label>Blog Body: </label>
                <textarea required value={body}
                    onChange={(e) => setBody(e.target.value)}>
                </textarea>

                <label>Author Name: </label>
                <input required value={author}
                    onChange={e => setAuthor(e.target.value)} />
                {!isPending && <button>Add the blog</button>}
                {isPending && <button>Adding the Blog</button>}

            </form>
        </div>
     );
    }
    export default Create;
 