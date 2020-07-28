import React, { useState } from 'react';
import { NewsItem } from '../news-item/news-item';

export const NewsItemContainer = () => {
  return (
    <div>
      <NewsItem
        by="networdtwo"
        descendants={0}
        id={23976518}
        score={1}
        time={1595948550}
        title="Robotics should look beyond self-driving"
        type="story"
        url="https://allshire.org/robotic-future/"
      />
      {/* <NewsItem />
      <NewsItem />
      <NewsItem /> */}
    </div>
  );
};
