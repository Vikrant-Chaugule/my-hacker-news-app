import React from 'react';
import './nav-bar.css';

export const NavBar = ({ selectedLink, setSelectedLink }) => {
  const topStoriesCss = selectedLink === 'top-stories' ? 'selectedLinkCss' : '';
  const newStoriesCss = selectedLink === 'new-stories' ? 'selectedLinkCss' : '';

  return (
    <nav className="nav-bar">
      <div>
        <span id="heading">Hacker News</span>
        <button
          onClick={() => setSelectedLink('top-stories')}
          className={topStoriesCss}
        >
          Top Stories
        </button>
        <span>|</span>
        <button
          onClick={() => setSelectedLink('new-stories')}
          className={newStoriesCss}
        >
          New Stories
        </button>
      </div>
    </nav>
  );
};
