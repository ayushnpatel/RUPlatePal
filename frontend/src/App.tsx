import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import foodTruck from "./assets/foodtruck.gif";
import clouds from "./assets/clouds.png";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ChevronLeft, ChevronRight } from "react-feather";

function CardComponent(props) {
  console.log(props.recipe.usedIngredients);
  return (
    <div className="w-64 h-59 my-2 rounded-2xl shadow-md lg:max-w-sm">
      <img
        className="object-cover w-full h-32 rounded-t-2xl"
        src={props.recipe.image}
        alt="image"
      />
      <div className="p-4">
        <h4 className="text-sm font-semibold tracking-tight text-blue-600">
          {props.recipe.title}
        </h4>
        {/* <p className="mb-2 text-black leading-normal">
          {props.recipe.usedIngredients.map((ingredient) => {
            console.log(ingredient);
            return <div>{ingredient.aisle}</div>;
          })}
        </p> */}
        <div className="pt-2"></div>
        <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
          Read more
        </button>
      </div>
    </div>
  );
}

function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides[0]}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
                  transition-all w-3 h-3 bg-white rounded-full
                  ${curr === i ? "p-2" : "bg-opacity-50"}
                `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("temp.json");
      const json = await response.json();
      console.log(json);
      const objects = json.map((item) => {
        console.log(item);
        return {
          image: item.image,
          title: item.title,
          usedIngredients: item.usedIngredients,
        };
      });

      setData(objects);
    }
    fetchData();
  }, []);

  return (
    <Parallax pages={2}>
      <div className="App w-screen flex flex-col justify-between">
        {/* <ParallaxLayer offset={0} speed={0.5}>
          <div className="flex flex-col justify-center items-center w-screen h-screen"> */}
        <ParallaxLayer offset={0} speed={0.05}>
          {/* <div className="w-screen h-1/3 bg-red-200 "></div> */}
          <img src={clouds} className="w-screen h-96 absolute top-0" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.4} speed={0.5}>
          <div className="font-sans shadow-blue-900 drop-shadow-lg animate-text bg-gradient-to-r from-red-400 via-dark-teal to-indigo-400 bg-clip-text text-transparent text-7xl">
            RUPlatePal
          </div>
          <div id="spacer" className="h-16"></div>
          <div className="font-sans shadow-blue-900 drop-shadow-lg animate-text bg-gradient-to-r from-red-400 via-dark-teal to-indigo-400 bg-clip-text text-transparent  text-2xl">
            See what recipes your food bank can make.
          </div>
          <div id="spacer" className="h-12"></div>
          <div className="text-black text-2xl">
            View recipes below.
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={2}>
          <img src={foodTruck} className="absolute w-96 top-0" alt=""></img>
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={2}>
          <img
            src={foodTruck}
            className="absolute w-96 top-0 right-0"
            alt=""
          ></img>
        </ParallaxLayer>

        {/* </div>
        </ParallaxLayer> */}

        <ParallaxLayer offset={1} speed={0.5}>
          <div className="flex flex-col my-2 justify-center items-center w-screen h-screen">
            <div className="grid grid-cols-3 gap-x-36 grid-rows-3">
              {data.slice(0, 9).map((item) => (
                <CardComponent recipe={item} />
              ))}
            </div>
          </div>
        </ParallaxLayer>
      </div>
    </Parallax>
  );
}

export default App;
