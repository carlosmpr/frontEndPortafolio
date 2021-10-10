import React from 'react';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';
import Checkout from './components/Checkout/Checkout'
import Modal from './components/Modal/PaymentModal'
function App() {
  return (
    <div className="flex w-screen h-screen bg-secondary ">
      <Sidebar />
     <Content />
 
    </div>
  );
}

export default App;
