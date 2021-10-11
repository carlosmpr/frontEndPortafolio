import React from 'react';
import NavBar from './components/navBar/NavBar';
import Button from './components/navBar/reusables/Button';
import OutlineButton from './components/navBar/reusables/OutlineButton';
import Business from './assets/images/compu.png'
import Hero from './components/navBar/reusables/Hero';
import Shop from './assets/images/shop.png'
import Finan from './assets/images/finan.png'
import Comu from './assets/images/comu.png'
import Servi from './assets/images/service.png'
function App() {
  return (
    <div className="App">
     <NavBar />
     <div className="w-full h-screen p-9  overflow-y-scroll space-y-10">
       <Hero intro="How to" highlight="Level Up" title="Your business" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est faucibus tellus leo non pellentesque lorem vel. Arcu magna eros, potenti duis." image={Business}> 
       <Button text="How we work"/>
            <OutlineButton text="Let's start" />
       </Hero>
       <p className='text-center text-primary'>We working with customers brand and startups</p>
      <div className="w-full flex items-center justify-center">
        <div className="w-1/2 flex text-lg text-gray items-center justify-evenly h-14 shadow-md rounded-md">
        <i class="fab fa-windows"></i>
        <i class="fab fa-google"></i>
        <i class="fab fa-dropbox"></i>
        <i class="fab fa-spotify"></i>
        <i class="fab fa-apple"></i>
        </div>
      
      </div>
      <Hero title="We help design a ecommerce business shop" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed euismod quis sit gravida pharetra sit. Cursus vel enim pretium vulputate semper sem elit magna neque. Aliquet adipisc" image={Shop}/>
      <Hero title="We design invesment funds website in Vietnam" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed euismod quis sit gravida pharetra sit. Cursus vel enim pretium vulputate semper sem elit magna neque. Aliquet adipisc" image={Finan} reverse="flex-row-reverse"/>
      <Hero title="We help design messages app for communication" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed euismod quis sit gravida pharetra sit. Cursus vel enim pretium vulputate semper sem elit magna neque. Aliquet adipisc" image={Comu}/>
      <Hero title="We help maintenance design for customers" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed euismod quis sit gravida pharetra sit. Cursus vel enim pretium vulputate semper sem elit magna neque. Aliquet adipisc" image={Servi} reverse="flex-row-reverse"/>
     </div>
    </div>
  );
}

export default App;
