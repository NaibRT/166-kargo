import React from 'react'

export default function AddressItem({title, label}) {
    return (
        <div class="flex__grow">
            <div className='flexible__address'>
            <h3 className='title'>{title}:</h3>
            <img src='/assets/icons/copy (1).svg' style={{marginLeft:'25px'}}/>
            </div>

            <p>{label}</p>
        </div>
    )
}
