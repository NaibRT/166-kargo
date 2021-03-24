import React from 'react'
import Card from '../card/card'
import ButtonComponent from '../button/index'
import Input from '../input/input'

function CardBalance() {
    return (
        <React.Fragment>
            <div class="card__flex">
                <Card className="bg-yellow p-md">
                    <Card.Header style={{ marginBottom: '32px' }} text='Balans'></Card.Header>

                    <p style={{ marginBottom: '10px' }}>Mövcud balansınız</p>
                    <h3>33.60 AZN</h3>

                </Card>
                <Card className="bg-white p-md"  >
                   <p style={{marginBottom:'8px'}}>Balansin artirilmasi</p>
                     <div className='max-width'>
                   <Input placeholder='Məbləği daxil edin(AZN)' className='card_input' />
                    <ButtonComponent label='Balansi artir' className='btn-green' endElement={<img className='ml-xs' src={'/assets/icons/ra.svg'}/>} />

                    </div>
                    
                </Card>
                
            </div>
            
        
        </React.Fragment>
    )
}

export default CardBalance
