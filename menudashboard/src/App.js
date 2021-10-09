import React from 'react';
import Checkout from './components/Checkout/Checkout';
import Content from './components/Content/Content';
import Modal from './components/Modal/PaymentModal';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  return (
    <div className="flex w-screen h-screen bg-secondary ">
      <Sidebar />
     <Content />
     <Checkout />
     <Modal />
    </div>
  );
}

export default App;
