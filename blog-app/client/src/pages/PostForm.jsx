import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get('/api/categories');
      setCategories(res.data);
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    try {
      await axios.post(
        '/api/posts',
        { title, content, category },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate('/');
    } catch (err) {
      console.error('Error creating post:', err.response?.data || err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h2>Create Post</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />

      <textarea
        placeholder="Content"
        value={content}
        required
        onChange={(e) => setContent(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', width: '100%', height: '100px' }}
      />

      <select
        value={category}
        required
        onChange={(e) => setCategory(e.target.value)}
        style={{ display: 'block', marginBottom: '10px' }}
      >
        <option value="">Select a category</option>
        {categories.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.name}
          </option>
        ))}
      </select>

      <button type="submit">Create</button>
    </form>
  );
};

export default PostForm;
