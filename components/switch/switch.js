import React from 'react'

function Switch({name,value,rest}) {
 return (
<label class="switch">
  <input type="checkbox" name={name} value={value} {...rest}/>
  <span class="slider round"></span>
</label>
 )
}

export default Switch
