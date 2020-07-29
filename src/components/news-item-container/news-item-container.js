import React, { useState, useEffect } from 'react';
import { NewsItem } from '../news-item/news-item';
import { fetchStories } from '../../api/api';
import Loader from 'react-loader';
import './news-item-container.css';

export const NewsItemContainer = ({ selectedLink }) => {
  const [newsItems, setNewsItems] = useState([]);
  const [fetchLimitData, setFetchLimitData] = useState(30);
  const [loaded, setLoaded] = useState(true);
  const [selectLink, setSelectLink] = useState(selectedLink);

  useEffect(() => {
    (async () => {
      setLoaded(false);
      const items = await fetchStories(fetchLimitData, selectedLink);
      setNewsItems(items);
      setLoaded(true);
    })();

    if (selectedLink !== selectLink) {
      setSelectLink(selectedLink);
      setFetchLimitData(30);
    }
  }, [fetchLimitData, selectedLink, selectLink]);

  const onClickLoadMore = async () => {
    await setFetchLimitData(fetchLimitData + 30);
  };

  return (
    <div>
      <Loader
        loaded={loaded}
        lines={13}
        length={20}
        width={10}
        radius={30}
        corners={1}
        rotate={0}
        direction={1}
        speed={1}
        trail={60}
        shadow={false}
        hwaccel={false}
        className="loader"
        top="50%"
        left="50%"
        scale={1.0}
        loadedClassName="loadedContent"
      />
      {newsItems &&
        newsItems.map((newsItem, index) => (
          <NewsItem key={newsItem} id={newsItem} srNo={index + 1} />
        ))}
      {newsItems && (
        <button className="load-more-button" onClick={onClickLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};
