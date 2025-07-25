import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
} 