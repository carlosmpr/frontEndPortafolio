import React from "react";
import NavBar from "./components/NavBar";
import Button from "./components/reusables/Button";
import Hero from "./components/reusables/Hero";
import MainPic from "./assets/images/nutrition.png";
import Spnsors from "./components/reusables/Spnsors";
import Meal from "./assets/images/meal.png";
import Meal2 from "./assets/images/meal2.png";
import Metabolic from "./assets/images/metabolic.png";
import Testimonials from "./components/reusables/Testimonials";
import Testi from "./assets/images/testi.png";
import Testi2 from "./assets/images/testi2.png";
import Testi3 from "./assets/images/testi3.png";
import Testi4 from "./assets/images/testi4.png";
import Expert from "./assets/images/expert.png";
import Expert2 from "./assets/images/expert2.png";
function App() {
  return (
    <div className="App bg-gray-100">
      <NavBar />
      <div className="w-full h-screen   overflow-y-scroll ">
        <Hero
          intro="Nutrition just for"
          highlight=" your Goals"
          desc="Take this free 30 second quiz to find out the foods that work for your body!"
          image={MainPic}
        >
          <Button text="start here" />
          <p className="text-sm text-gray">Only takes 30 seconds</p>
        </Hero>
        <Spnsors />
        <div className="w-full h-4/5 bg-white  flex flex-col items-center justify-center gap-y-2">
          <p className="text-2xl text-secondary font-bold">
            Your Body your plan
          </p>
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
              <p className="text-secondary font-bold">
                100% Customized Meal plans
              </p>
              <img src={Meal} alt={Meal} className="w-full" />
            </div>

            <div className="h-full w-3/12 bg-gradient-to-b from-purple-800 via-purple-500 to-purple-300 flex flex-col items-center justify-evenly rounded-md p-4">
              <p className="text-white text-center font-bold">
                Eat the food you love no reason to restrict
              </p>
              <p className="text-sm text-white">
                G-Plans is about having a healthy life style. We encourage you
                to eat the foods you love and make it easy to do so. You deserve
                it!
              </p>
            </div>

            <div className="h-full w-3/12 bg-gradient-to-b from-pink-200 via-pink-200 to-purple-200 flex flex-col items-center justify-evenly rounded-md">
              <p className="text-secondary font-bold">
                100% Customized Meal plans
              </p>
              <img src={Meal2} alt={Meal2} className="w-full" />
            </div>
          </div>
        </div>

        <Hero
          title="Take the metabolic type quiz"
          reverse="bg-white p-9"
          image={Metabolic}
          desc="With this 30 second quiz we can learn about the right foods for your body"
        >
          <Button text="Start here" />
        </Hero>
        <div className="w-full h-1/2 bg-white p-9">
          <p className="text-center text-3xl text-secondary">
            {" "}
            See The Results For yourself!
          </p>

          <div className="w-full h-full flex p-4 justify-evenly">
            <Testimonials
              text="I???ve noticed a huge change in the diet this week and I???ve lost
another 3.5 lbs. ????????So, since being on the plan I???ve lost over 9lbs. ????I???ll post some progress pics later....but guys, press on! This works! "
              image={Testi}
            />

            <Testimonials
              text="Lost another pound down ???? 17 lbs, down 4.5 inches on my waist, 5.75 on my thighs , 6 on my hips and 4 on my arms. My whole body is looking more toned ??? non of my clothes fit
everything is more than big. Energy is fantastic.  "
              image={Testi2}
            />

            <Testimonials
              text="I am down 4.5 lbs since Saturday, I am not hungry, ????feel good and
that is VERY encouraging "
              image={Testi3}
            />

            <Testimonials
              text="I'm in my 8th week on this diet and I'm down 25 lbs. I feel great
!!! Don't get discouraged on this diet it works. The water is one or most important part on this diet. ???? "
              image={Testi4}
            />
          </div>
        </div>
        <Hero title="An Expert Team At your Fingertips!" reverse="p-9 items-center justify-center" image={Expert} desc="Meet your new Nutritionist! Dr. Philp Goglia is the top nutritionist in the world, working with A-list celebrities, athletes and high risk clients in his Santa Monica clinic. Now his team is your team">
        <Button text="start here" />
          </Hero>
        <Hero title="It's time for change! It's time for g-plans" reverse="p-9 items-center flex-row-reverse justify-center" image={Expert2}  >
        <Button text="start here" />
        <div className="flex p-4 bg-white rounded-lg items-center text-primary">
        <i class="fab fa-google-play"></i>
        <p>Google Play</p>
        </div>

        <div className="flex p-4 bg-white rounded-lg items-center text-primary">
        <i class="fab fa-apple"></i>
        <p>Apple Store</p>
        </div>
          </Hero>
        <div className="h-1/2"></div>
      </div>
    </div>
  );
}

export default App;
