import React, { useRef, useState } from 'react';

export default function AddressItem({title, label}) {
  const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    function copyToClipboard(e) {
      textAreaRef.current.select();
      document.execCommand('copy');
      e.target.focus();
      setCopySuccess('Copied!');
    };
    return (
        <div className="flex__grow">
            <div className='flexible__address'>
            <h3 className='title'>{title}:</h3>
           { document.queryCommandSupported('copy') &&  <img src='/assets/icons/copy (1).svg' style={{marginLeft:'25px'}} onClick={copyToClipboard}/>}
            </div>
            <textarea ref={textAreaRef} className='bg-bg' style={{borderStyle:'none',outline:'none',resize:'none'}} defaultValue={label} rows='4' />  
        </div>
    )
}
