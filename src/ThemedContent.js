// src/components/ThemedContent.js

import React from 'react';
import { useSelector } from 'react-redux';

const ThemedContent = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
      <h1>{`Themed Content (${theme} theme)`}</h1>
      <p>This is the content based on the current theme.</p>
    </div>
  );
};

export default ThemedContent;
