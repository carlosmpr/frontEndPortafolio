import React from 'react';
import NavBar from './components/NavBar';
import Button from './components/reusables/Button';
import Hero from './components/reusables/Hero';
import MainPic from './assets/images/nutrition.png'
import Spnsors from './components/reusables/Spnsors';
import Meal from './assets/images/meal.png'
import Meal2 from './assets/images/meal2.png'
import Metabolic from './assets/images/metabolic.png'
function App() {
  return (
    <div className="App bg-gradient-to-r from-gray-50 via-red-200 to-green-100">
    <NavBar />
    <div className="w-full h-screen   overflow-y-scroll ">
      <Hero intro="Nutrition just for" highlight=" your Goals" desc="Take this free 30 second quiz to find out the foods that work for your body!" image={MainPic}>
        <Button text="start here" />
        <p className="text-sm text-gray">Only takes 30 seconds</p>
        </Hero>
        <Spnsors />
        <div className="w-full h-4/5 bg-white  flex flex-col items-center justify-center gap-y-2">
          <p className="text-2xl text-secondary font-bold">Your Body your plan</p>
          <div className="flex text-primary">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          <p className="text-sm ml-2">2,634 Reviews</p>
          </div>
          <div className="w-full h-4/5 flex justify-evenly ">
            <div className="h-full w-3/12 bg-indigo-100 flex flex-col items-center justify-evenly rounded-md ">
              <p className="text-secondary font-bold">100% Customized Meal plans</p>
              <img src={Meal} alt={Meal} className="w-full"/>
            </div>

            <div className="h-full w-3/12 bg-gradient-to-b from-purple-800 via-purple-500 to-purple-300 flex flex-col items-center justify-evenly rounded-md p-4">
              <p className="text-white text-center font-bold">Eat the food you love no reason to restrict</p>
              <p className="text-sm text-white">G-Plans is about having a healthy life style. We encourage you to eat the foods you love and make it easy to do so. You deserve it!</p>
              
            </div>

            <div className="h-full w-3/12 bg-gradient-to-b from-pink-200 via-pink-200 to-purple-200 flex flex-col items-center justify-evenly rounded-md">
              <p className="text-secondary font-bold">100% Customized Meal plans</p>
              <img src={Meal2} alt={Meal2} className="w-full"/>
            </div>
          </div>
        </div>

        <Hero title="Take the metabolic type quiz" reverse="bg-white p-9" image={Metabolic} desc="With this 30 second quiz we can learn about the right foods for your body">
          <Button text="Start here"/>
          </Hero>

          <div className="h-1/2"></div>
      </div> 
    </div>
  );
}

export default App;
