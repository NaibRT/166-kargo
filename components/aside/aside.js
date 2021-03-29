import React from 'react'

function Aside({children,style,className}) {
    return (
        <aside className={`aside ${className||''}`} style={style}>
          {children}
        </aside>
    )
}

export default Aside
