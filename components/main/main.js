import React from 'react'

function Main({children,className,style}) {
    return (
        <main className={`main ${className||''}`} style={style}>
            {children}
        </main>
    )
}

export default Main
