import React from 'react';
function SideBarNav({setSideBarOption}) {
    return ( <div className='text-lg font-normal'>
                <button className="block text-start border-t-2 w-full border-white/30 py-2" onClick={()=>setSideBarOption("solution")}>
                    Solutions
                </button>
                <button  className="block text-start border-t-2 w-full border-white/30 py-2" onClick={()=>setSideBarOption("feature")}>
                    Features
                </button>
                <button className="block text-start border-t-2 w-full border-white/30 py-2" onClick={()=>setSideBarOption("resource")}>
                    Resources
                </button>
                <a href="#" className="block border-t-2 border-white/30 py-2">
                    Prices
                </a>
    </div>
     );
}

export default SideBarNav;