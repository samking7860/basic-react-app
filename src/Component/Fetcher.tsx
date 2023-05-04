import React from 'react';
import axios from 'axios';
export {};

interface IPost {
  id: number;
  name: string;
  username: string;
  email: string;
}

const defaultPosts: IPost[] = [];

const AxiosFetch = () => {
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(
    defaultPosts
  );

  const [loading, setLoading]: [
    boolean,
    (loading: boolean) => void
  ] = React.useState<boolean>(true);

  const [error, setError]: [string, (error: string) => void] = React.useState(
    ''
  );

  React.useEffect(() => {
    axios
      .get<IPost[]>('https://jsonplaceholder.typicode.com/users', {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      })
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((ex) => {
        let error = "error"
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading }
      <ul >
        {posts.map((post) => (
          <li>
            <h2>key={post.id}</h2>
            <h3>{post.name}</h3>
            <h4>{post.username}</h4>
            <p>{post.email}</p>
          </li>
        ))}
      </ul>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AxiosFetch;