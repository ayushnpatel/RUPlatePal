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
import parse from "html-react-parser";

function About() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select tab
        </label>
        <select
          id="tabs"
          className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>About Us</option>
        </select>
      </div>
      <ul
        className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
        id="fullWidthTab"
        data-tabs-toggle="#fullWidthTabContent"
        role="tablist"
      >
        <li className="w-full">
          <button
            id="faq-tab"
            data-tabs-target="#faq"
            type="button"
            role="tab"
            aria-controls="faq"
            aria-selected="false"
            className="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            About Us
          </button>
        </li>
      </ul>

      <div
        className=" p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
        id="faq"
        role="tabpanel"
        aria-labelledby="faq-tab"
      >
        <div
          id="accordion-flush"
          data-accordion="collapse"
          data-active-classNamees="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          data-inactive-classNamees="text-gray-500 dark:text-gray-400"
        >
          <h2 id="accordion-flush-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
              data-accordion-target="#accordion-flush-body-1"
              aria-expanded="true"
              aria-controls="accordion-flush-body-1"
            >
              <span>How can my pantry get food from RUPlatePal?</span>
            </button>
          </h2>
          <div
            id="accordion-flush-body-1"
            className=""
            aria-labelledby="accordion-flush-heading-1"
          >
            <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                RUPlatePal obtains our food from the dining hall. There's over
                <span className="font-extrabold"> 400 lbs </span> of waste
                coming in from dining halls every day. We obtain the food that
                would go to waste and make recipes for pantries like yours!
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out this guide to learn how to{" "}
                <a
                  href="/docs/getting-started/introduction/"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  get started
                </a>{" "}
                on obtaining food from RUPlatePal. You can always contact us on
                the right as well!
              </p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
              data-accordion-target="#accordion-flush-body-2"
              aria-expanded="false"
              aria-controls="accordion-flush-body-2"
            >
              <span>Are these the only recipes that are available?</span>
            </button>
          </h2>
          <div
            id="accordion-flush-body-2"
            className=""
            aria-labelledby="accordion-flush-heading-2"
          >
            <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                No, these are not the only recipes available! We have our list
                of ingredients{" "}
                <a href="https://docs.google.com/spreadsheets/d/1rpPUKeHKyK5rcIFkdOKsT5McFfJqljBstzke9keZPKw/edit?usp=sharing ">
                  here
                </a>
                , where you can receive the ingredients and make any recipe you
                may desire. These are just recommendations! For a full list,
                continue to visit our website!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Contact() {
  return (
    <div>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Talk to us if you want to get food for your pantry!
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

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
        <Modal
          title={props.recipe.title}
          ingredients={props.recipe.ingredients}
          readyInMinutes={props.recipe.readyInMinutes}
          steps={props.recipe.steps}
          summary={props.recipe.summary}
          servings={props.recipe.servings}
        />
        {/* <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
          Read more
        </button> */}
      </div>
    </div>
  );
}

import React from "react";

function Modal({
  title,
  ingredients,
  readyInMinutes,
  steps,
  summary,
  servings,
}) {
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
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none rounded-full">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t text-center">
                  <h3 className="text-3xl font-semibold">{title}</h3>
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
                <div className="relative p-6 flex-auto text-start">
                  <div className="flex flex-row justify-between px-4 py-2">
                    <div className="font-sans font-semibold">
                      {readyInMinutes} minutes
                    </div>

                    <div className="font-sans font-semibold">
                      {servings} servings
                    </div>
                  </div>
                  <div className=" font-light italic text-center py-3 text-sm">
                    {parse(summary)}
                  </div>
                  <div className="h-48 overflow-y-scroll">
                    {steps.map((step) => (
                      <div className="text-md">{step}</div>
                    ))}
                  </div>
                  {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p> */}
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
      const instructionResponse = await fetch("instructionInfo.json");
      const recipeResponse = await fetch("recipeInfo.json");

      const instructionJson = await instructionResponse.json();
      const recipeJson = await recipeResponse.json();

      console.log(instructionJson[0][0]["steps"]);
      console.log(recipeJson);

      const keys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      let objects = [];

      keys.map((i) => {
        let steps = instructionJson[i][0]["steps"].map(
          (step) => step.number + ": " + step.step
        );

        objects.push({
          vegetarian: recipeJson[i].vegetarian,
          title: recipeJson[i].title,
          servings: recipeJson[i].servings,
          summary: recipeJson[i].summary,
          image: recipeJson[i].image,
          readyInMinutes: recipeJson[i].readyInMinutes,
          steps: steps,
        });
      });

      setData(objects);
    }

    fetchData();
  }, []);

  return (
    <Parallax pages={3}>
      <div className="App w-screen flex flex-col justify-between">
        <ParallaxLayer offset={0.1} speed={0.5}>
          <div className="font-sans shadow-blue-900 drop-shadow-lg animate-text bg-gradient-to-r from-cyan-400 via-dark-teal to-indigo-400 bg-clip-text text-transparent text-7xl font-semibold">
            RUPlatePal
          </div>
          <div id="spacer" className="h-8"></div>
          <div className="font-sans shadow-blue-900 drop-shadow-lg animate-text bg-gradient-to-r from-cyan-400 via-dark-teal to-indigo-400 bg-clip-text text-transparent  text-2xl">
            See what recipes your food bank can make.
          </div>
          <div id="spacer" className="h-4"></div>
          <div className="text-black text-2xl italic">
            <a href="https://docs.google.com/spreadsheets/d/1rpPUKeHKyK5rcIFkdOKsT5McFfJqljBstzke9keZPKw/edit?usp=sharing ">
              View recipes below.
            </a>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.4} speed={1.2}>
          <img src={m1} className="w-screen top-0 absolute" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.425} speed={0.96}>
          <img src={m2} className="w-screen top-0 absolute" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.45} speed={0.84}>
          <img src={m3} className="w-screen top-36 absolute" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.475} speed={0.72}>
          <img src={m4} className="w-screen top-56 absolute" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={0.66}>
          <img src={m5} className="w-screen absolute top-72" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.525} speed={2}>
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

        <ParallaxLayer offset={2} speed={0.5}>
          <div className="flex flex-row my-2 justify-between px-10 items-center w-screen h-screen">
            <About />
            <Contact />
          </div>
        </ParallaxLayer>
      </div>
    </Parallax>
  );
}

export default App;
