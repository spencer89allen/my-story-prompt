import React from 'react';
import './App.css';

import routes from './routes';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      { routes }
      <Footer/>
    </div>
  );
}

export default App;
