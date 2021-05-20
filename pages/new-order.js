import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { memo, useState } from 'react';
import { useForm } from "react-hook-form";
import { useIntl } from 'react-intl';
import { connect } from "react-redux";
import AsideMenu from "../components/aside-menu";
import Aside from "../components/aside/aside";
import Button from "../components/button";
import Card from "../components/card/card";
import Checkbox from '../components/checkbox/checkbox';
import FromGroup from '../components/form-group/form-group';
import Input from '../components/input/input';
import Main from "../components/main/main";
import Page from "../components/page/page";
import Redirect from "../components/redirect/redirect";


function NewOrder(props) {

  if(!props.entry.isLoged){
    return <Redirect/>
  }
  const { formatMessage: f } = useIntl(); 
  const { locale } = useRouter();

  const { register, handleSubmit, errors, setError, clearErrors } = useForm();

  const [cards, setCards] = useState([{
    url: { value: '', error: '' },
    price: { value: '', error: '' },
    notes: { value: '', error: '' },
    color: { value: '', error: '' },
    size: { value: '', error: '' },
    count: { value: '', error: '' },
  }]);

  const [cardData, setCardData] = useState({
    country: '15',
    is_fast: 0,
    ruleAccepted: false
  });

  const addCard = (ev) => {
    ev.preventDefault();
    cards.push({
      url: { value: '', error: '' },
      price: { value: '', error: '' },
      notes: { value: '', error: '' },
      color: { value: '', error: '' },
      size: { value: '', error: '' },
      count: { value: '', error: '' },

    });
    setCards([...cards])
  }

  const removeCard = (ev) => {
    let id = ev.target.getAttribute('data-id');
    cards.splice(id, 1)

    setCards([...cards])
  }


  const handleInput = (ev) => {
    ev.stopPropagation();
    let id = ev.target.getAttribute('data-id');
    let { name, value } = ev.target;

    cards[id] = {
      ...cards[id],
      [name]: {
        ...cards[id][name],
        value: value
      }
    }

    if (cards[id].count && cards[id].price) {
      cards[id] = {
        ...cards[id],
        total: cardData.is_fast ? (cards[id].count.value * cards[id].price.value) + props.fastOrderPrice + ((cards[id].count.value * cards[id].price.value * props.serviceFeePersentage) / 100 ) 
          : (cards[id].count.value * cards[id].price.value) + ((cards[id].count.value * cards[id].price.value * props.serviceFeePersentage) / 100 )
      }
    } else {
      cards[id] = {
        ...cards[id],
        total: ''
      }
    }

    setCards([...cards])
  }

  const addFastPrize = (isfast, price) => {
    let newCards = cards;
    newCards.forEach(x => isfast ? x.total += price : x.total -= price);
    // setCards([...newCards])
  }

  const submit = (data) => {
   console.log(data)
    if (cardData.ruleAccepted) {

      let data = {
        ...cardData,
        items: cards.map(x => {
          let newObj = {};
          for (let key in x) {
            newObj[key] = x[key].value
          }

          return newObj;
        })
      };

      axios.post(`${process.env.NEXT_PUBLIC_API_URL}orders?lan=${locale}`, data, {
        headers: {
          'Content-Type': 'application/json',
          'Accepts': 'application/json',
          'Authorization': `Bearer ${props.entry.user.accessToken}`
        }
      }).then(res => {
        setCards([{
           url: { value: '', error: '' },
           price: { value: '', error: '' },
           notes: { value: '', error: '' },
           color: { value: '', error: '' },
           size: { value: '', error: '' },
           count: { value: '', error: '' },
         }])
        // Swal.fire({
        //   success: 'success',
        //   text: 'emeliyyat ugurlu oldu',
        //   icon: 'success'
        // })

          window.location.href = res.data.url
      }).catch((err) => {
        let items = err.response.data.errors.items;
        items.forEach((x, i) => {
          for (let key in x) {
            cards[i] = {
              ...cards[i],
              [key]: {
                ...cards[i][key],
                error: x[key]
              }
            };
          }

        });
        setCards([...cards])
      })
    }
  }

  console.log(errors)
  return (
    <Page className='bg-bg pt-lg'>
      <Aside className='mr-sm'>
        <AsideMenu />
      </Aside>
      <Main className='br-sm bg-white br-lg'>
        <Card className='p-sm desktop__order'>
          <Card.Header text={f({id:'new-order'})} />
          <form >
            {
              cards.map((x, i) => {
                return (
                  <Card.Body key={i} className='bg-yellow p-sm br-lg mb-xs p-r'>
                    {
                      i > 0 ?
                        <span onClick={removeCard} data-id={i} style={{ color: 'red', position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }}>&#10006;</span>
                        : <></>
                    }
                    <div className='from-container' style={{ display: 'flex' }}>
                      <div className='w-50 mr-sm fc-col' style={{}}>
                        <FromGroup label={f({id:"link"})} className='w-100' bodyClass='bg-white'
                          error={errors.url?.message}
                        >
                          <Input type='text' name='url' data-id={i} value={x.url.value}
                            Ref={register({required:{value:true,message:'url mməcburidir'}})}
                            onChange={handleInput}
                          />
                        </FromGroup>
                        <div style={{ display: 'flex' }}>
                          <FromGroup label={f({id:"color"})} className='w-50 mr-sm' bodyClass='bg-white'
                            error={errors.color?.message || x.color.error}
                          >
                            <Input type='text' name='color' data-id={i}
                              value={x.color.value}
                              Ref={register({ required:{value:true,message:'color mməcburidir'} })}
                              onChange={handleInput}
                            />
                          </FromGroup>
                          <FromGroup label={f({id:'size'})} className='w-50' bodyClass='bg-white'
                            error={errors.size?.message ||x.size.error}
                          >
                            <Input 
                               min={0}
                              type='text' 
                              name='size' 
                              data-id={i}
                              value={x.size.value}
                              Ref={register({required:{value:true,message:'size mməcburidir'}})}
                              onChange={handleInput}
                            />
                          </FromGroup>
                        </div>
                      </div>
                      <div className='w-50 fc-col'>
                        <div className='w-100' style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <FromGroup label={f({id:'count-pro'})} className='mr-xs' bodyClass='bg-white'
                            error={errors.count?.message || x.count.error}
                          >
                            <Input 
                              min={0}
                              type='number' 
                              name='count' 
                              data-id={i}
                              value={x.count.value}
                              Ref={register({ required:{value:true,message:'say mməcburidir'}})}
                              onChange={handleInput}
                            />
                          </FromGroup>
                          <FromGroup label={f({id:'price'})} className='mr-xs' bodyClass='bg-white'
                            error={errors.price?.message || x.price.error}
                          >
                            <Input type='number' name='price' data-id={i}
                              min={0}
                              value={x.price.value}
                              Ref={register({ required:{value:true,message:'qiymət mməcburidir'} })}
                              onChange={handleInput}
                            />
                          </FromGroup>
                          <FromGroup label={f({id:"total"})} className='mr-xs' bodyClass='bg-white'
                          >
                            <Input 
                              min={0}
                              type='number' 
                              name='total' 
                              data-id={i}
                              value={x.total}
                              Ref={register()}
                              disabled
                            />
                          </FromGroup>
                        </div>
                        <FromGroup label={f({id:"note"})} className='w-100' bodyClass='bg-white'
                          error={x.notes.error}
                        >
                          <Input type='text' name='notes' data-id={i}
                            value={x.notes.value}
                            Ref={register()}
                            onChange={handleInput}
                          />
                        </FromGroup>
                      </div>
                    </div>
                  </Card.Body>
                )
              })
            }
            <Card.Footer className='mt-sm' style={{ justifyContent: 'space-between' }}>
              <div>
                <Button onClick={addCard} className='w-100 p-sm bg-white border-success color-success' startElement={<span className='mr-xs color-success'>+</span>} label={f({id:'addnewproduct'})} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox text={f({id:"isfast"})} name='is_fast' value={cardData.is_fast}
                  onClick={(ev) => {
                    setCardData({
                      ...cardData,
                      is_fast: +ev.target.checked,
                    })

                    addFastPrize(ev.target.checked, props.fastOrderPrice)

                  }}
                />
                <Checkbox
                  onClick={(ev) => {
                    setCardData({
                      ...cardData,
                      ruleAccepted: ev.target.checked,
                    })
                  }}
                >
                  <Link href='/'><><a className='mr-xs' style={{ width: '-webkit-max-content' }}></a>{f({id:"agreement"})}</></Link>
                </Checkbox>
                <Button
                  style={{ padding: '0 5px' }}
                  label={f({id:"ord-pay"})}
                  endElement={<span className='ml-xs'>&#8250;</span>}
                  className=' w-100'
                  disabled={!cardData.ruleAccepted}
                  onClick={handleSubmit(submit)}
                />
              </div>
            </Card.Footer>
          </form>
        </Card>


        {/*Mobile section */}
        <Card className='p-sm mobile__order'>
          <Card.Header text={f({id:'new-order'})} />
          <form onSubmit={handleSubmit(submit)}>
            {
              cards.map((x, i) => {
                return (
                  <Card.Body key={i} className='bg-yellow p-sm br-lg mb-xs p-r'>
                    {
                      i > 0 ?
                        <span onClick={removeCard} data-id={i} style={{ color: 'red', position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }}>&#10006;</span>
                        : <></>
                    }
                    <div className=''  >
                      <div>
                        <FromGroup label={f({id:"link"})} className='w-100' bodyClass='bg-white'
                          error={x.url.error}
                        >
                          <Input type='text' name='url' data-id={i} value={x.url.value}
                            Ref={register({ required: true })}
                            onChange={handleInput}
                          />
                        </FromGroup>
                        <FromGroup label={f({id:'count-pro'})}   bodyClass='bg-white'
                          error={x.count.error}
                        >
                          <Input 
                             min={0}
                            type='number' 
                            name='count' 
                            data-id={i}
                            value={x.count.value}
                            Ref={register({ required: true })}
                            onChange={handleInput}
                          />
                        </FromGroup>

                        <div className='w-100' style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <FromGroup 
                            
                            label={f({id:'price'})} 
                            className=' w-50 mr-xs' 
                            bodyClass='bg-white'
                            error={x.price.error}
                          >
                            <Input 
                              type='number' 
                              name='price' 
                              data-id={i}
                              min={0}
                              value={x.price.value}
                              Ref={register({ required: true })}
                              onChange={handleInput}
                            />
                          </FromGroup>
                          <FromGroup label={`${f({id:"total"})}${"(+5%)"}`} className=' w-50' bodyClass='bg-white'
                          >
                            <Input type='number' name='total' data-id={i}
                              value={x.total}
                              Ref={register({ required: true })}
                              disabled
                            />
                          </FromGroup>
                        </div>
                        <div style={{ display: 'flex' }}>
                          <FromGroup label={f({id:"color"})} className='w-50 mr-xs'  bodyClass='bg-white'
                            error={x.color.error}
                          >
                            <Input type='text' name='color' data-id={i}
                              value={x.color.value}
                              Ref={register({ required: true })}
                              onChange={handleInput}
                            />
                          </FromGroup>
                          <FromGroup 
                             
                            label={f({id:'size'})} 
                            className='w-50' 
                            bodyClass='bg-white'
                            error={x.size.error}
                          >
                            <Input 
                              min={0}
                              type='text' 
                              name='size' 
                              data-id={i}
                              value={x.size.value}
                              Ref={register({ required: true })}
                              onChange={handleInput}
                            />
                          </FromGroup>
                        </div>
                      </div>
                      <div >

                        <FromGroup label={f({id:"note"})} className='w-100' bodyClass='bg-white'
                          error={x.notes.error}
                        >
                          <Input type='text' name='notes' data-id={i}
                            value={x.notes.value}
                            Ref={register({ required: true })}
                            onChange={handleInput}
                          />
                        </FromGroup>
                      </div>
                    </div>
                  </Card.Body>
                )
              })
            }
            <div className='mt-sm' >
              <div>
                <Button onClick={addCard} className='w-100 p-sm bg-white border-success color-success' startElement={<span className='mr-xs color-success'>+</span>} label={f({id:'addnewproduct'})} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                {/* <Checkbox text={f({id:"isfast"})} name='is_fast' value={cardData.is_fast}
                  onClick={(ev) => {
                    setCardData({
                      ...cardData,
                      is_fast: +ev.target.checked,
                    })

                    addFastPrize(ev.target.checked, props.fastOrderPrice)

                  }}
                /> */}
                <Checkbox
                  onClick={(ev) => {
                    setCardData({
                      ...cardData,
                      ruleAccepted: ev.target.checked,
                    })
                  }}
                >
                  <Link href='/'><><a className='mr-xs' style={{ width: '-webkit-max-content' }}></a>{f({id:"agreement"})}</></Link>
                </Checkbox>
                </div> 
                <Button
                  style={{ padding: '0 5px' }}
                  label={f({id:"ord-pay"})}
                  endElement={<span className='ml-xs'>&#8250;</span>}
                  className=' w-100'
                  disabled={!cardData.ruleAccepted}
                />
              
            </div>
          </form>
        </Card>

      </Main>


    </Page>
  )
}

const mapStateToProps = state => ({
  entry: state.entry,
  fastOrderPrice: state.settings.data.fast_order_fixed_price,
  serviceFeePersentage: state.settings.data.service_fee_percent
});
export default connect(mapStateToProps)(memo(NewOrder))