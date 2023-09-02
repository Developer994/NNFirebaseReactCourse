import { useState, useEffect, useRef } from 'react';

export const useFetch = (url, _options) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  // use useRef to wrap an object/array argunemt
  // which is a useEffect dependency
  const options = useRef(_options).current;

  useEffect(() => {
    console.log(options);
    const fetchData = async () => {
      setIsPending(true);

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = await res.json();

        setIsPending(false);
        setData(json);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError('Could not fetch the data');
        console.log(err.message);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, isPending, error };
};
