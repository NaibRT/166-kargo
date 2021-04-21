import React, { memo } from 'react';
import ButtonComponent from '../button/index';
import Card from '../card/card';
import Input from '../input/input';
import { useIntl } from 'react-intl';

function CardBalance({balance}) {
    const { formatMessage: f } = useIntl();
    return (
        <React.Fragment>
            <div className="card__flex">
                <Card className="bg-yellow p-md">
                    <Card.Header style={{ marginBottom: '32px' }} text={f({id:"balance"})}></Card.Header>

                    <p style={{ marginBottom: '10px' }}>{f({id:"balance"})}</p>
                    <h3>{balance || 0.00} AZN</h3>

                </Card>
                <Card className="bg-white p-md"  >
                   <p style={{marginBottom:'8px'}}>{f({id:"increases-balance"})}</p>
                     <div className='max-width'>
                   <Input placeholder={f({id:"enter-money"})} className='card_input' />
                    <ButtonComponent label={f({id:"increases-balance"})} className='btn-green' endElement={<img className='ml-xs' src={'/assets/icons/ra.svg'}/>} />

                    </div>
                    
                </Card>
                
            </div>
            
        
        </React.Fragment>
    )
}


export default memo(CardBalance)
