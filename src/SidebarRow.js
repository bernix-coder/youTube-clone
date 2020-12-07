import React from 'react'
import './sidebarRow.css'

function SidebarRow({ Icon, title }) {
    return (
        <div className='sidebarRow'>
            <Icon className='sidebarRow__icon'/>
            <p className='sidebarRow__text'>{title}</p>

        </div>
    )
}

export default SidebarRow
