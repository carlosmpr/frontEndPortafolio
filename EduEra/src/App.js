import React from 'react';
import Content from './components/Content';

import Sidebar from './components/reusables/Sidebar/Sidebar';
function App() {
  return (
    <div className="flex w-screen h-screen bg-primary ">
     <Sidebar />
     <Content />
    </div>
  );
}

export default App;
