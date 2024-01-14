// src/components/ThemedContent.js

import React from 'react';
import { useSelector } from 'react-redux';

const ThemedContent = () => {
  const tema = useSelector((state) => state.tema);

  return (
    <div style={{ backgroundColor: tema === 'açık' ? '#fff' : '#333', color: tema === 'açık' ? '#333' : '#fff' }}>
      <h1>{`Temalı İçerik (${tema} tema)`}</h1>
      <p>Bu, mevcut temaya göre içeriktir.</p>
    </div>
  );
};

export default ThemedContent;
