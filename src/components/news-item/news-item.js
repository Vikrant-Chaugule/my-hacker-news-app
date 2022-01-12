import React, { useState, useEffect } from 'react';
import './news-item.css';
import { fetchStoryById } from '../../api/api';
import grayArrow from '../../assets/gray-arrow.gif';
import { formatTime } from '../../utils/formatTIme';
import { formatUrl } from '../../utils/formatUrl';

export const NewsItem = (props) => {
  const { srNo, id } = props;

  const [newsInfo, setNewsInfo] = useState({});

  useEffect(() => {
    (async () => {
      const result = await fetchStoryById(id);
      setNewsInfo(result);
    })();
  }, [id]);

  return newsInfo && newsInfo.url ? (
    <div className="news-item">
      <span>{srNo}.</span>
      <div className="gray-arrow">
        <img alt="logo" src={grayArrow} />
      </div>
      <div>
        <div className="heading-row ">
          <a href={newsInfo.url} target="_blank" rel="noopener noreferrer">
            {newsInfo.title}{' '}
            <span className="url-section">({formatUrl(newsInfo.url)})</span>
          </a>
        </div>
        <div className="info-row">
          <span>{newsInfo.score} points </span>
          <span>by {newsInfo.by} </span>
          <span>{formatTime(newsInfo.time)} ago </span>
          <span>type - {newsInfo.type} </span>
        </div>
      </div>
    </div>
  ) : null;
};
