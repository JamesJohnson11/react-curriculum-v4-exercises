import './Lesson07Styles.css';
import { useState, useEffect } from 'react';
import { getPosts } from './api';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    sleep(2000) // Simulate a 2 second delay to test the loading state
      .then(() => getPosts())
      .then((posts) => {
        setLoading(false);
        setPosts(posts);
        setDataIsLoaded(true);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setError(error);
        setDataIsLoaded(false);
      });
  }, []);

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        {isLoading ? (
          <p>Loading...</p>
        ) : dataIsLoaded ? (
          posts.map((post) => (
            <div className="post" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))
        ) : (
          <div>
            <p>{error ? error.message : 'An error occurred'}</p>
          </div>
        )}
      </div>
    </div>
  );
}
