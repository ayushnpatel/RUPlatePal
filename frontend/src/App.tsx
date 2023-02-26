import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import foodTruck from "./assets/foodtruck.gif";
import m1 from "./assets/mountain-1.svg";
import m2 from "./assets/mountain-2.svg";
import m3 from "./assets/mountain-3.svg";
import m4 from "./assets/mountain-4.svg";
import m5 from "./assets/mountain-5.svg";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ChevronLeft, ChevronRight } from "react-feather";

function CardComponent(props) {
  console.log(props.recipe.usedIngredients);
  return (
    <div
      className="w-64 h-59 my-2 rounded-2xl shadow-md lg:max-w-sm"
      style={{ backgroundColor: "#eccba2" }}
    >
      <img
        className="object-cover w-full h-32 rounded-t-2xl hover:scale-150 transition-transform"
        src={props.recipe.image}
        alt="image"
      />
      <div className="p-4">
        <h4
          className="text-sm font-semibold tracking-tight"
          style={{ color: "#4f2f06" }}
        >
          {props.recipe.title}
        </h4>
        {/* <p className="mb-2 text-black leading-normal">
          {props.recipe.usedIngredients.map((ingredient) => {
            console.log(ingredient);
            return <div>{ingredient.aisle}</div>;
          })}
        </p> */}
        <div className="pt-2"></div>
        <Modal recipeTitle={props.recipe.title} />
        {/* <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
          Read more
        </button> */}
      </div>
    </div>
  );
}

import React from "react";

function Modal({ recipeTitle }) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button
        className="px-4 py-2 text-sm text-blue-100 rounded shadow"
        type="button"
        style={{ backgroundColor: "#a76f2a" }}
        onClick={() => setShowModal(true)}
      >
        Show Recipe
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t text-center">
                  <h3 className="text-3xl font-semibold">{recipeTitle}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
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
        <ParallaxLayer offset={0.1} speed={0.5}>
          <div className="font-sans shadow-blue-900 drop-shadow-lg animate-text bg-gradient-to-r from-red-400 via-dark-teal to-indigo-400 bg-clip-text text-transparent text-7xl font-semibold">
            RUPlatePal
          </div>
          <div id="spacer" className="h-16"></div>
          <div className="font-sans shadow-blue-900 drop-shadow-lg animate-text bg-gradient-to-r from-red-400 via-dark-teal to-indigo-400 bg-clip-text text-transparent  text-2xl">
            See what recipes your food bank can make.
          </div>
          <div id="spacer" className="h-12"></div>
          <div className="text-black text-2xl">View recipes below.</div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={0.05}>
          <img src={m1} className="w-screen top-0 absolute" />
          <img src={m2} className="w-screen top-0 absolute" />
          <img src={m3} className="w-screen top-36 absolute" />
          <img src={m4} className="w-screen top-56 absolute" />
          <img src={m5} className="w-screen absolute top-72" />
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
