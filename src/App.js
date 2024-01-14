// src/App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ThemedContent from './components/ThemedContent';
import ColorButton from './ColorButton';
import YourComponent from './components/YourComponent';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Themed App</h1>
        <ThemedContent />
        <YourComponent />
        <ColorButton />
      </div>
    </Provider>
  );
}

export default App;
