import React from 'react'

function Switch({name,value,...rest}) {
 return (
<label className="switch">
  <input type="checkbox"  name={name} value={value} {...rest}/>
  <span className="slider round"></span>
</label>
 )
}

export default Switch
