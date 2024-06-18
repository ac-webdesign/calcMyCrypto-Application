import React, { useState, useEffect } from 'react';
import './news.css'
export const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCryptoNews() {
      try{
        const apiKey = '38166da16b9752fd59bb9a607275e94f';
        const articleNumber = 7;
        const response = await fetch(`https://gnews.io/api/v4/search?q=crypto&max=${articleNumber}&lang=en&apikey=${apiKey}`);
        
        if (!response.ok) {
          throw new Error('Due to lots of requests, app failed to fetch news');
        }
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
      }catch(error){
        setError(error.message);
        setLoading(false);
      }
    }

    fetchCryptoNews();
  }, []);
 
  if (loading) {
    return <div class='mainMenu'><div className="loading">Loading...</div></div>;
  }

  if (error) {
    return <div className="mainMenu">
      <div className='error'>{error}</div>
    </div>;
  }
  return (
    <div className="mainMenu" id='newsMenu'>

      <h2>Latest Crypto News</h2>

      <div id="news-container">
        {articles.map((article, index) => (
          <div className="news-article" key={index}>
          <div className="article-title">
            {<img src={article.image} alt='articleimage' className="article-image" />}
              <h4>{article.title}</h4>
          </div>
            <p>{truncateDescription(article.description)}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

function truncateDescription(description) {
  const maxLength = 100; // Max length of description
  if (description.length <= maxLength) {
    return description;
  }
  return description.substring(0, maxLength) + '...';
}
