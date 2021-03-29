import React, { useRef, useState }  from 'react'

export default function AddressItem({title, label}) {
    const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
      console.log('noldu pasik')
    textAreaRef.current.select();
    document.execCommand('copy');
      e.target.focus();
    setCopySuccess('Copied!');
  };
    return (
        <div class="flex__grow">
            <div className='flexible__address'>
            <h3 className='title'>{title}:</h3>
           { document.queryCommandSupported('copy') &&  <img src='/assets/icons/copy (1).svg' style={{marginLeft:'25px'}} onClick={copyToClipboard}/>}
            </div>
            <input ref={textAreaRef} type='hidden' id='label'/> 
            <label for='label'>{label}</label>
        </div>
    )
}
