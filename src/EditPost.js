import { useEffect } from 'react';
import { useParams, Link, useNavigate }  from 'react-router-dom';
import { format } from 'date-fns';
import { useStoreState, useStoreActions } from 'easy-peasy';

const EditPost = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const editTitle = useStoreState((state) => state.editTitle);
    const editBody = useStoreState((state) => state.editBody);

    const editPost = useStoreActions((actions) => actions.editPost);
    const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
    const setEditBody = useStoreActions((actions) => actions.setEditBody);

    const getPostById = useStoreActions((state) => state.getPostById);
    const post = getPostById(id);

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditTitle, setEditBody])

    const handleEdit = (id) => {
        if (!editTitle.trim() || !editBody.trim()) {
            alert('タイトルと本文を入力してください');
            return;
        }
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const updatedPost = { id, title: editTitle, datetime, body: editBody };
        editPost(updatedPost);
        navigate('/post/${id}');
    }

    return (
        <main className="NewPost">
            {editTitle && 
                <>
                    <h2>NewPost</h2>
                    <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="postTitle">Title:</label>
                        <input 
                            id="postTitle"
                            type="text" 
                            required
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}    
                        />
                        <label htmlFor="postBody">Post:</label>
                        <textarea 
                            id="postBody"
                            required
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                        />
                        <button type="edit" onClick={() => handleEdit(post.id)}>編集</button>
                    </form>
                </>
            }
            {!editTitle && 
                <>
                    <h2>Post Not Found</h2>
                    <p>
                        <Link to ="/">Visit Our Homepage</Link>
                    </p>
                </>
            }
        </main>
    )
}

export default EditPost