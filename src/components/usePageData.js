import { useEffect, useState } from 'react';
import axios from 'axios';

export default function usePageData() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [repos, setRepos] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: 'GET',
      url: 'https://api.github.com/repos/neovim/neovim/pulls?page=',
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setRepos((prevRepos) => {
          return [...new Set([...prevRepos, ...res.data.map((b) => b)])];
        });
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, []);

  return { loading, repos, hasMore };
}
