import router from 'next/router';
import React, { useEffect } from 'react';

function Redirect() {
    useEffect(() => {
        router.push('/register');
    })
    return (

            <div style={{height:'100vh'}}></div>
    )
}

export default Redirect
