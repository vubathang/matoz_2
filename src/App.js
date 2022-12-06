import React from 'react';

import './App.css';



// Custom components
import AppBar from 'components/AppBar/AppBar';
import SideBar from 'components/SideBar/SideBar';
import BoardContent from 'components/BoardContent/BoardContent';


function App() {
  return (
    <div class="App">
      <div class="grid-container">
        <AppBar/>

        <SideBar/>

        <BoardContent/>
      </div>

    </div>
  );
}

export default App;
