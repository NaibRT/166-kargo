import React, { memo } from 'react';
import { useForm } from "react-hook-form";
import { useIntl } from 'react-intl';
import ButtonComponent from '../button/index';
import Card from '../card/card';
import Input from '../input/input';

function CardBalance({balance,submit}) {
    const { formatMessage: f } = useIntl();
    const {register,handleSubmit,errors} = useForm();
    
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
                     <form className='max-width' onSubmit={handleSubmit(submit)}>
                   <Input name='price' Ref={register({required:true})} placeholder={f({id:"enter-money"})} className='card_input' />
                   <input name='sourcetype' ref={register()} type='hidden' defaultValue={1}/>
                    <ButtonComponent type='submit' label={f({id:"increases-balance"})} className='btn-green' endElement={<img className='ml-xs' src={'/assets/icons/ra.svg'}/>} />
                    </form>
                    
                </Card>
                
            </div>
            
        
        </React.Fragment>
    )
}


export default memo(CardBalance)
