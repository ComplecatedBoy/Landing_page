import React from 'react';

function Footer() {
    return ( <div className='p-8 lg:p-24 lg:pt-12 pb-24 bg-black text-white grid lg:grid-cols-5 md:grid-col-4 lg:justify-items-center gap-y-12 grid-col-1 w-full'>
        <div className='flex flex-col items-start gap-2'>
            <h1 className='text-3xl font-bold'>By-SATYAM</h1>
            <p className='text-stone-400'>Shortcuts to effective StoryBoards</p>
            <button className='px-4 py-2 mt-3 rounded bg-white text-black font-semibold'><a>Try for free</a></button>
        </div>
        <div className='flex flex-col items-start gap-1'>
            <h1 className='font-semibold text-xl'>Features</h1>
            <ul className='flex flex-col gap-2 mt-3 text-sm'>
                <li><a className='hover:underline'>Create</a></li>
                <li><a className='hover:underline'>Collabrate</a></li>
                <li><a className='hover:underline'>Iterate</a></li>
                <li><a className='hover:underline'>Export</a></li>
            </ul>
        </div>
        <div className='flex flex-col items-start gap-1'>
            <h1 className='font-semibold text-xl'>AI Tools</h1>
            <ul className='flex flex-col gap-2 mt-3 text-sm'>
                <li><a className='hover:underline'>AI Storyboard Generator</a></li>
                <li><a className='hover:underline'>AI Script Generator </a></li>
                <li><a className='hover:underline'>AI Character Creator</a></li>
                <li><a className='hover:underline'>AI Image variations</a></li>
            </ul>
        </div>
        <div className='flex flex-col items-start gap-1'>
            <h1 className='font-semibold text-xl'>Templates</h1>
            <ul className='flex flex-col gap-2 mt-3 text-sm'>
                <li><a className='hover:underline'>StoryBoards</a></li>
                <li><a className='hover:underline'>Shot lists</a></li>
                <li><a className='hover:underline'>Call sheets</a></li>
                <li><a className='hover:underline'>Filmmaking</a></li>
            </ul>
        </div>
        
        <div className='flex flex-col items-start gap-1'>
            <h1 className='font-semibold text-xl'>Company & Legals</h1>
            <ul className='flex flex-col gap-2 mt-3 text-sm'>
                <li className='flex gap-2'><a className='hover:underline'>Affiliate </a> <span className='border border-red-400 rounded-full grid place-items-center text-red-500 px-2'>new</span></li>
                <li><a className='hover:underline'>Climate Contributions</a></li>
                <li><a className='hover:underline'>Help Center</a></li>    
                <li><a className='hover:underline'>Privacy</a></li>
                <li><a className='hover:underline'>Terms of Use</a></li>
                <li><a className='hover:underline'>Security</a></li>
            </ul>
        </div>
    </div> );
}

export default Footer;