import React from 'react';
import PageNottFound from '../assets/images/pageNotFound.png';

export const PageNotFound = () => {
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
        <img src={PageNottFound} alt="PageNotFound" />
        </div>
        <div>

        </div>
      </section>
    </main>
  )
}
