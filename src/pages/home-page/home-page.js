import React from 'react';
import { NewsItemContainer } from '../../components/news-item-container/news-item-container';
import './home-page.css';

export const HomePage = (params) => {
  return (
    <div className="home-page">
      <NewsItemContainer />
    </div>
  );
};
