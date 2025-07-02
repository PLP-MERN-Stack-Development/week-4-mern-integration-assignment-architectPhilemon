import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('/api/posts');
        setPosts(res.data);
      } catch (err) {
        console.error('Error fetching posts', err);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Blog Posts</h2>

      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            {post.imageUrl && (
              <img
                src={`http://localhost:5000/uploads/${post.imageUrl}`}
                alt={post.title}
                style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
              />
            )}

            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}...</p>
            <Link to={`/posts/${post._id}`}>Read More</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;
