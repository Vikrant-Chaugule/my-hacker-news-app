import React, { useState, useEffect } from 'react';
import './news-item.css';
import { fetchStoryById } from '../../api/api';

export const NewsItem = (props) => {
  const { srNo, by, descendants, id, score, time, title, type, url } = props;

  const [newsInfo, setNewsInfo] = useState({});

  useEffect(() => {
    (async () => {
      const result = await fetchStoryById(id);
      setNewsInfo(result);
    })();
  }, [id]);

  return newsInfo && newsInfo.url ? (
    <div className="news-item">
      <div className="heading-row ">
        {srNo}. {newsInfo.title}
      </div>
      <div className="info-row">
        <span>{newsInfo.score} points </span>
        <span>by {newsInfo.by} </span>
        <span>{newsInfo.time} ago </span>
        <span>type : {newsInfo.type} </span>
      </div>
    </div>
  ) : null;
};
