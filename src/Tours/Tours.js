import React from 'react';
import Tour from './Tour';


const Tours = ({tours, removeTour, refresh, refreshBtn}) => {
  return (
    <>
    {/* Header */}
    <section className='w-[90%] mx-auto my-16 flex flex-col items-center'>
    <main>
      <article className='flex justify-center flex-col mx-auto'>
    <h1 className='text-5xl content-center'>{refresh ? 'No Tours' : 'Our Tours'}</h1>
    <div className='border-b-4 border-[#10b981] w-28 mx-8 my-2 mb-2'></div>
    </article>
    {refresh && <button class="bg-[#10b981] hover:bg-[#047857] text-white px-4 rounded"
    onClick={refreshBtn}>
  Refresh
</button>}
</main>
<main className='flex flex-wrap gap-4 flex-none' >
    {tours.map((tour) => {

    return <Tour key={tour.id} {...tour} removeTour={removeTour}/>

    })}
  </main>
    </section>
    </>
  )
}

export default Tours