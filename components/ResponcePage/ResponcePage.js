import React from 'react';
import Card from "../card/card";

function ResponcePage({url,msg,info}) {
    return (
        <Card className='bg-white w-100 br-xs' style={{height:'388px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <Card.Body style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <img style={{width:'131px',height:'131px'}} src={url}/>
                <h1 className='mt-sm' style={{textAlign:'center'}}>{msg}</h1>
                <span style={{textAlign:'center'}}>{info}</span>
            </Card.Body>
        </Card>
    )
}

export default ResponcePage
