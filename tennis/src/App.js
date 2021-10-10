import React from 'react';
import Sidebar from './components/reusables/Sidebar/Sidebar'
import Content from './components/Content/Content'
function App() {
  return (
    <div className="flex w-screen h-screen bg-secondary ">
     <Sidebar />
     <Content />
    </div>
  );
}

export default App;
