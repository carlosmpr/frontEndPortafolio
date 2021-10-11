import React from 'react';
import Content from './components/Content';
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <div className="flex w-screen h-screen bg-secondary ">
     <Sidebar />
     <Content />
    </div>
  );
}

export default App;
