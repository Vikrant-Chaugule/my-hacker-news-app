import React, { useState } from 'react';
import { NewsItemContainer } from '../../components/news-item-container/news-item-container';
import './home-page.css';
import { NavBar } from '../../components/nav-bar/nav-bar';

export const HomePage = (params) => {
  const [selectedLink, setSelectedLink] = useState('top-stories');

  return (
    <div className="home-page">
      <NavBar selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
      <NewsItemContainer selectedLink={selectedLink} />
    </div>
  );
};
