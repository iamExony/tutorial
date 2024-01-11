import React, { useState } from 'react';

const Tour = ({ id, title, image, content, price, removeTour }) => {
  const [text, setText] = useState(false);

  return (
    <>
      <div text={text} className ='bg-white mt-12 rounded md:max-w-sm shadow-md hover:shadow-lg'>
        <section className="">
          <div className="relative">
            <img className="object-cover w-full rounded-t h-[20rem]" src={image} alt={title} />
            <span className="absolute text-lg tracking-widest text-white px-4 top-0 right-0 bg-[#10b981]">
              ${price}
            </span>
          </div>
          <section className="p-8">
            <h1 className="text-xl font-semibold text-center my-4">{title}</h1>

            <p className="text-md text-gray-500 mb-2 grow-0">
              {text ? content : `${content.substring(0, 200)} ...`}
              <button className="text-[#10b981]" onClick={() => setText(!text)}>
                {text ? 'See Less' : 'Read More'}
              </button>
            </p>

            <button
              className="border-[#10b981] border text-[#10b981] hover:bg-[#10b981] hover:text-white tracking-widest w-full rounded shadow-md hover:shadow-lg"
              onClick={() => removeTour(id)}
            >
              Not Interested
            </button>
          </section>
        </section>
      </div>
    </>
  );
};

export default Tour;
