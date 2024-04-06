import React from 'react';

function CtaSection({children}) {
    return ( <div className='mt-4 p-2 md:p-4 w-full'>
        <a href='#' className='block w-full grid place-items-center md:w-auto'><button className='px-8 py-4 md:w-auto w-full rounded-lg text-xl font-semibold  bg-gradient-to-r from-red-600/50 via-red-500/50 to-yellow-400/50'>{children} </button></a>
        <div className='text-sm text-center mt-2 text-black/80 font-semibold'>
            <p><span className='text-sm text-red-600/90 font-bold'>4,950</span> video professionals</p>
        <p className='text-stone-700/60'>joined Boords in the last 7 days</p>
        </div>
    </div> );
}

export default CtaSection;