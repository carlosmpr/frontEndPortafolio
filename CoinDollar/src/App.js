import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/reusables/Hero";
import MainImage from "./assets/images/coin.png";
import Button from "./components/reusables/Button";
import Pic from "./assets/images/coind.png";
import Pic3 from "./assets/images/coin3.png";
import Pic4 from "./assets/images/app.png";
function App() {
  return (
    <div className="App ">
      <NavBar />
      <div className="relative w-full h-screen   overflow-y-scroll  ">
        <Hero
          style={
            "justify-center items-center bg-gradient-to-b from-pink-400 to-purple-500"
          }
          desc="CoinDollar is a platform for trading your bitcoin and 
        giftcard at the best rate, why not give us a trial."
          highlight="We provide easy solution 
to exchange your Bitcoin/ 
GiftCard for money"
          image={MainImage}
        >
          <Button text="Get Started" style="bg-white text-primary" />
        </Hero>
        <Hero
          title="Welcome to CoinDollar"
          desc="We have the best rates . Simply start your exchange right now. Sign up for our Affiliate program and earn commission from each exchange. The earnings are credited in your account instantly and can be withdrawn right away. Also note some exchange directions are hidden for unregistered user. To ensure to have access to all our exchange directions and benefits kindly sign up and verify your identity."
          image={Pic}
          style={"flex-row-reverse"}
        />
        <div
          className={`relative w-full h-3/5 flex bg-gradient-to-b from-pink-400 to-purple-500  items-center justify-center overflow-hidden`}
        >
          <div className="w-full absolute -top-32">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#ffffff"
                fill-opacity="1"
                d="M0,256L80,229.3C160,203,320,149,480,160C640,171,800,245,960,272C1120,299,1280,277,1360,266.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
              ></path>
            </svg>
          </div>

          <div className="w-full absolute -bottom-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#ffffff"
                fill-opacity="1"
                d="M0,256L80,229.3C160,203,320,149,480,160C640,171,800,245,960,272C1120,299,1280,277,1360,266.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>

          <div className="w-2/3 h-52 bg-white shadow-md rounded-lg pt-6 space-y-4">
            <div className="w-full flex items-center justify-evenly font-bold text-primary">
              <p>OUR RATES</p>
              <p>OUR RESERVES</p>
              <p>LATEST EXCHANGES</p>
            </div>
            <hr />
            <div className="w-full flex items-center justify-evenly  ">
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-x-3 font-light">
                  <i class="fab text-lg fa-bitcoin"></i>
                  <p>BTC</p>
                  <div className="flex flex-col text-xs">
                    <p>We buy @$250</p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-x-3 font-light">
                  <i class="fab fa-ethereum"></i>
                  <p>ETC</p>
                  <div className="flex flex-col text-xs">
                    <p>We buy @$250</p>
                    <p>We Sell @$270</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-center gap-x-3 font-light">
                  <i class="fas fa-university"></i>
                  <p>Bank Trasnfer</p>
                  <div className="flex flex-col text-xs">
                    <p>NGN</p>
                    <p>#345689818</p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-x-3 font-light">
                  <i class="fab fa-ethereum"></i>
                  <p>ETC</p>
                  <div className="flex flex-col text-xs">
                    <p>We buy @$250</p>
                    <p>We Sell @$270</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-center gap-x-3 font-light">
                  <div className="flex flex-col text-xs">
                    <p>Bitcoin BTC = Bank</p>
                    <p>Transfer NGN</p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-x-3 font-light">
                  <div className="flex flex-col text-xs">
                    <p>Amazon Card = Bank</p>
                    <p>Transfer NGN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Hero
          title="Great experience 
with CoinDollar"
          desc="CoinDollar is an online site and a p2admin platform that allows users to buy, sell and/ or exchange digital and fiat assets safely. Owned and managed by CoinBase Business Services established and Incoperated in Nigeria.
"
          image={Pic3}
        >
          <Button text="Discover" />
        </Hero>

        <div
          className={`relative w-full h-1/4 flex bg-gradient-to-b from-pink-400 to-purple-500  items-center justify-center overflow-hidden`}
        >
          <div className="w-full absolute -bottom-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#ffffff"
                fill-opacity="1"
                d="M0,256L80,229.3C160,203,320,149,480,160C640,171,800,245,960,272C1120,299,1280,277,1360,266.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>

        <p className="text-center text-primary font-bold text-2xl">Our Blog</p>
        <div className="w-full h-1/3  flex items-center justify-center ">
          <div className="w-72 h-56 border border-primary rounded-lg flex flex-col p-4 gap-y-2">
            <div className="flex text-xs text-gray">
              <p>19 June, 2019</p> | Business
            </div>
            <p className="font-bold">
              How to SELL YOUR ITUNES GIFTCARD WITH US.
            </p>
            <p className="text-xs">
              Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
              voluptaria in. Ad mei modus quodsi complectitur, postea...
            </p>
            <Button
              text={"Read More"}
              style={"text-center bg-primary text-white"}
            />
          </div>

          <div className="w-72 h-56 border border-primary rounded-lg flex flex-col p-4 gap-y-2">
            <div className="flex text-xs text-gray">
              <p>19 June, 2019</p> | Business
            </div>
            <p className="font-bold">
              How to SELL YOUR ITUNES GIFTCARD WITH US.
            </p>
            <p className="text-xs">
              Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
              voluptaria in. Ad mei modus quodsi complectitur, postea...
            </p>
            <Button
              text={"Read More"}
              style={"text-center bg-primary text-white"}
            />
          </div>

          <div className="w-72 h-56 scale-75 border border-primary rounded-lg flex flex-col p-4 gap-y-2">
            <div className="flex text-xs text-gray">
              <p>19 June, 2019</p> | Business
            </div>
            <p className="font-bold">
              How to SELL YOUR ITUNES GIFTCARD WITH US.
            </p>
            <p className="text-xs">
              Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
              voluptaria in. Ad mei modus quodsi complectitur, postea...
            </p>
            <Button
              text={"Read More"}
              style={"text-center bg-primary text-white"}
            />
          </div>
        </div>

        <div
          className={`relative flex-col w-full h-4/5 flex bg-gradient-to-b from-pink-400 to-purple-500  items-center justify-center overflow-hidden mt-20`}
        >
          <div className="w-full absolute -top-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#ffffff"
                fill-opacity="1"
                d="M0,128L80,160C160,192,320,256,480,234.7C640,213,800,107,960,90.7C1120,75,1280,149,1360,186.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
              ></path>
            </svg>
          </div>
          <div className="w-full absolute -bottom-0 z-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#ffffff"
                fill-opacity="1"
                d="M0,256L80,229.3C160,203,320,149,480,160C640,171,800,245,960,272C1120,299,1280,277,1360,266.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
          <p className="text-white text-2xl font-bold">
            10,000 Satisfied clients around the world
          </p>
          <p className="text-center text-white">
            Yeah! we’re proud with numbers. We’ve helped thousands of clients
            all around the world with our bespoke service. Hover ontop of them
            pic to view their testimonials.
          </p>

          <div className="bg-white w-32 h-32 opacity-20 absolute rounded-full top-0"></div>
          <div className="bg-white w-32 h-32 opacity-20 absolute rounded-full top-0 left-10"></div>
          <div className="bg-white w-32 h-32 opacity-20 absolute rounded-full top-0 right-10"></div>
          <div className="bg-white w-32 h-32 opacity-20 absolute rounded-full bottom-0"></div>
          <div className="bg-white w-32 h-32 opacity-20 absolute rounded-full bottom-0 left-10"></div>
          <div className="bg-white w-32 h-32 opacity-20 absolute rounded-full bottom-0 right-10"></div>
        </div>

        <div
          className={`relative flex-col w-full h-4/5 flex  items-center justify-center overflow-hidden mt-20`}
        >
          <p className="text-primary text-2xl font-bold mt-10">
            Download our app
          </p>
          <p>
            Discover exclusive deals and discounts with our mobile experience.
          </p>
          <div className="flex">
            <div className="flex p-4 bg-white rounded-lg items-center text-primary">
              <i class="fab fa-google-play"></i>
              <p>Google Play</p>
            </div>

            <div className="flex p-4 bg-white rounded-lg items-center text-primary">
              <i class="fab fa-apple"></i>
              <p>Apple Store</p>
            </div>
          </div>
          <img src={Pic4} alt={Pic4} className="w-1/2" />
        </div>
        <div className="h-1/2"></div>
      </div>
    </div>
  );
}

export default App;
