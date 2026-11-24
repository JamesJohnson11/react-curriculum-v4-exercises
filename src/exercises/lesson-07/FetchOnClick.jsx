import './Lesson07Styles.css';
import { useState } from 'react';
import { getSinglePost } from './api';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleFetch = async () => {
    setLoading(true);
    setError(null);

    try {
      await sleep(2000); // Simulate a 2 second delay to test the loading state
      const postId = 1;
      const data = await getSinglePost(postId);
      setPost(data);

      console.log('[handleFetch]: response received:', data);
      if (!data.status || data.status !== 200) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }
      setLoading(false);
      setPost(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={handleFetch}>
        Get post
      </button>
      <div className="content">
        {isLoading ? (
          <p>Loading...</p>
        ) : post ? (
          <div className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ) : (
          <p>{error ? error : 'Click the button to fetch a post'}</p>
        )}
      </div>
    </div>
  );
}
