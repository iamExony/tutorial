import React, { useState } from "react";
import { data } from "./data";

const App = () => {
  const [people, setPeople] = useState(data);
  const [title, setTitle] = useState("5 Birthdays Today");
  const handleClick = () => {
    setTitle("0 Birthday today")
    setPeople([]);
  };
  
  return (
    <div className="w-screen h-screen flex items-center">
      <section className="bg-white w-[90%] md:w-[50%] md:mt-0 my-[15%] mx-auto rounded py-12 px-8 shadow-xl">
        <h1 className="text-3xl">{title}</h1>
        {people.map((datas) => {
          return (
            <div
              className="flex items-center gap-2 py-4"
              key={datas.id}
              datas={datas}
            >
              <img
                src={datas.image}
                className="h-20 w-20 rounded-full object-cover shadow-lg"
                alt={datas.name}
                onMouseOver={() => {
                  console.log(`I am ${datas.name}`);
                }}
              />
              <div>
                <h1 className="text-2xl font-semibold">{datas.name}</h1>
                <h4 className="text-sm font-semibold text-slate-400">
                  {datas.age}
                </h4>
              </div>
            </div>
          );
        })}
        <button
          type="button"
          className="bg-[#d946ef] w-full rounded  py-4
      text-white shadow-md text-xl
      hover:bg-[#a21caf] hover:shadow-lg"
          onClick={handleClick}
        >
          Clear all
        </button>
      </section>
    </div>
  );
};

export default App;
