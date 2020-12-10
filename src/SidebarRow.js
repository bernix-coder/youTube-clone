import React from 'react'
import './sidebarRow.css'

function SidebarRow({ Icon, title,selected }) {
    return (
        <div className={`sidebarRow ${selected && 'selected'}`}>
            <Icon className={`sidebarRow__icon `}/>
            <p className='sidebarRow__text'>{title}</p>

        </div>
    )
}

export default SidebarRow
