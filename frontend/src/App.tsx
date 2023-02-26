import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function CardComponent(props) {
  console.log(props.recipe.usedIngredients);
  return (
    <div className="w-80 my-2 rounded-2xl shadow-md lg:max-w-sm">
      <img
        className="object-cover w-full h-48 rounded-t-2xl"
        src={props.recipe.image}
        alt="image"
      />
      <div className="p-4">
        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
          {props.recipe.title}
        </h4>
        <p className="mb-2 text-black leading-normal">
          {props.recipe.usedIngredients.map((ingredient) => {
            console.log(ingredient);
            return <div>{ingredient.aisle}</div>;
          })}
        </p>
        <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
          Read more
        </button>
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
    <div className="App h-screen w-screen flex flex-row justify-between px-20">
      <div className="flex flex-col justify-center items-center w-1/2">
        <div className="font-sans shadow-blue-900 drop-shadow-lg animate-text bg-gradient-to-r from-red-400 via-dark-teal to-indigo-400 bg-clip-text text-transparent text-7xl">
          RUPlatePal
        </div>
        <div id="spacer" className="h-16"></div>
        <div className="text-black">See what recipes your food bank.</div>
      </div>
      <div className="my-2 flex flex-col justify-center items-center w-1/2">
        {data.map((item) => (
          <CardComponent recipe={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
