import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/api/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching post:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div style={
        { padding: '20px', maxWidth: '800px', margin: '0 auto' }
        }>
        <h1>{post.title}</h1>
        {post.image && (
            <img
            src={`/uploads/${post.image}`}
            alt={post.title}
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
            />
        )}
        <p>{post.content}</p>
        <p>
            <strong>Category:</strong> {post.category?.name || 'Uncategorized'}
        </p>
        <p>
            <strong>Author:</strong> {post.author?.username || 'Unknown'}
        </p>  
        </div>
    );
};
export default PostDetail;        