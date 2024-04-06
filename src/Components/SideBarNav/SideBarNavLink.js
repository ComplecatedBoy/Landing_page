import React from 'react';

function SideBarNavLink({data}) {
    return ( <div className=''>
        {data && data.map((d,idx)=>{
           return( <a href={d.link_href} key={idx} className="block border-t-2 border-white/30 py-2">
            {d.link_name}
           </a>);
        })
        }

    </div> );
}

export default SideBarNavLink;