import React, { useState } from "react";
import { data } from "./data";

const App = () => {
  const [person, setPerson] = useState(data);
  const [title, setTitle] = useState("Names of My Friends");

  const removePerson = (id) => {
    let newPeople = person.filter((person) => person.id - id);
    setPerson(newPeople);
  };

  const removeAll = () => {
    setPerson([]);
    setTitle("No Names here");
  };
  return (
    <div className="w-screen h-screen flex items-center flex-col bg-blue-200">
      <section className="bg-white w-[90%] md:w-[50%] mx-auto mt-24 rounded py-12 px-8 shadow-xl">
        <h1 className="text-3xl font-bold text-blue-950 uppercase">{title}</h1>
      </section>
      {person.map((persons) => {
        const { id, name } = persons;
        return (
          <section
            key={id}
            {...persons}
            className="relative flex text-3xl text-blue-950 font-semibold bg-white w-[90%] md:w-[50%] mx-auto mt-4 rounded py-4 px-8 shadow-xl"
          >
            <div className="flex gap-2">
              <span>[{id}]</span>
              <h1 className="">{name}</h1>
            </div>
            <button
              type="button"
              className="absolute right-4 text-blue-500  hover:text-red-400"
              onClick={() => removePerson(id)}
            >
              {" "}
              delete
            </button>
          </section>
        );
      })}
      <button
        type="button"
        className=" text-blue-500 w-[50%]  text-2xl uppercase font-bold rounded mt-8 py-4 bg-blue-950"
        onClick={removeAll}
      >
        {" "}
        Clear All
      </button>
    </div>
  );
};

export default App;
