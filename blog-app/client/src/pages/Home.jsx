// Home.jsx
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Import other pages
import PostDetail from './PostDetail';
import PostForm from './PostForm';
import Login from './Login';
import Register from './Register';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('/api/posts');
        console.log('Fetched posts:', res.data); // Log posts for debugging
        setPosts(res.data);
      } catch (err) {
        console.error('Error fetching posts', err);
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    if (!window.confirm('Are you sure you want to delete this post?')) return;

    try {
      await axios.delete(`/api/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPosts((prev) => prev.filter((post) => post._id !== id));
    } catch (err) {
      console.error('Delete failed:', err.response?.data || err.message);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Blog Posts</h2>

      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post) => {
          const title = post.title || 'Untitled';
          const content = post.content || 'No content available.';

          return (
            <div
              key={post._id}
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '8px',
                background: '#fff'
              }}
            >
              {post.imageUrl && (
                <img
                  src={`http://localhost:5000/uploads/${post.imageUrl}`}
                  alt={title}
                  style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
                />
              )}

              <h3 style={{ margin: '10px 0' }}>{title}</h3>
              <p>{content.substring(0, 100)}...</p>
              <Link to={`/posts/${post._id}`} style={{ marginRight: '10px' }}>
                Read More
              </Link>
              <button
                onClick={() => handleEdit(post._id)}
                style={{ background: 'orange', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', marginRight: '10px' }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post._id)}
                style={{ background: 'red', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px' }}
              >
                Delete
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Home;
