import React from 'react';
import './news-item.css';

export const NewsItem = (props) => {
  const { srNo, by, descendants, id, score, time, title, type, url } = props;

  return (
    <div className="news-item">
      <div>1. {title} (reuters.com)</div>
      <div>
        <span>{score} points </span>
        <span>by {by} </span>
        <span>{time} ago </span>
        <span>type : {type} </span>
      </div>
    </div>
  );
};
