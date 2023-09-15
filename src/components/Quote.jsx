import { useState, useEffect } from 'react';

function Quote() {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const apikey = 'c8TNwMQ8N9jAfUdyLFjemEhStsf1XkHmozifISph';

        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
          headers: {
            'X-Api-Key': apikey,
          },
        });

        const json = await response.json();
        setData(json[0].quote);
        setIsLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, [setData]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <>
      <p>{data}</p>
    </>
  );
}

export default Quote;
