import axios from "axios";
import Link from "next/link";
import router, { useRouter } from "next/router";
import React, { memo, useState } from 'react';
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import AsideMenu from "../components/aside-menu";
import Aside from "../components/aside/aside";
import Button from "../components/button";
import Card from "../components/card/card";
import Checkbox from '../components/checkbox/checkbox';
import FromGroup from '../components/form-group/form-group';
import Input from '../components/input/input';
import Main from "../components/main/main";
import Page from "../components/page/page";


function NewOrder(props) {

  if(!props.entry.isLoged){
    router.push('/register');
    return (
        <div style={{height:'100vh'}}></div>
    )
  }
  
  const {locale} = useRouter()
 const {register,handleSubmit,errors} = useForm();
 const [cards, setCards] = useState([{
   url:'',
   price:'',
   notes:'',
   color:'',
   size:'',
   count:'',
 }]);
 const [cardData, setCardData] = useState({
   country:'15',
   is_fast:0,
   ruleAccepted:false
 });


 const addCard = (ev) => {
   ev.preventDefault();
  cards.push({
    url:'',
    price:'',
    notes:'',
    color:'',
    size:'',
    count:'',
  });
   setCards([...cards])
 }

 const removeCard = (ev) => {
  let id = ev.target.getAttribute('data-id');
  cards.splice(id,1)

  setCards([...cards])
}


 const handleInput = (ev) => {
   ev.stopPropagation();
   let id = ev.target.getAttribute('data-id');
   let {name, value} = ev.target;

   cards[id]={
    ...cards[id],
    [name]:value
   }

   if(cards[id].count && cards[id].price){
    cards[id]={
      ...cards[id],
      total:(cards[id].count*cards[id].price)
     }
   }else{
    cards[id]={
      ...cards[id],
      total:''
     }
   }
   setCards([...cards])
 }


 const submit = () => {

   if(cardData.ruleAccepted){
     let data = {
       ...cardData,
       items:[...cards]
     };

     axios.post(`${process.env.NEXT_PUBLIC_API_URL}orders?lan=${locale}`,data,{
       headers: {
                  'Content-Type': 'application/json',
                  'Accepts':'application/json',
                  'Authorization':`Bearer ${props.entry.user.accessToken}`
                }
     }).then(res => {
       res.console.log(res.data)
       Swal.fire({
         success:'success',
         text: 'emeliyyat ugurlu oldu',
         icon:'success'
       })
     }).catch((err) => console.log(err))
   }
 }


    return (
        <Page className='bg-bg pt-lg'>
          <Aside className='mr-sm'>
            <AsideMenu/>
          </Aside>
         <Main className='br-sm bg-white br-lg'>
           <Card className='p-sm'>
             <Card.Header text="Yeni sifaris"/>
             <form onSubmit={handleSubmit(submit)}>
               {
                 cards.map((x,i) => {
                   return(
                    <Card.Body key={i} className='bg-yellow p-sm br-lg mb-xs p-r'>
                      {
                        i>0 ?
                        <span onClick={removeCard} data-id={i} style={{color:'red',position:'absolute',top:'10px',right:'10px',cursor:'pointer'}}>&#10006;</span>
                        :<></>
                      }
                    <div className='' style={{display:'flex'}}>
                     <div className='w-50 mr-sm' style={{}}>
                        <FromGroup label='Link' className='w-100' bodyClass='bg-white'>
                        <Input type='text' name='url' data-id={i} value={x.link}
                          Ref={register({required:true})}
                          onChange={handleInput}
                        />
                      </FromGroup>
                      <div style={{display:'flex'}}>
                      <FromGroup label='Rengi' className='w-50 mr-sm' bodyClass='bg-white'>
                        <Input type='text' name='color' data-id={i}
                          value={x.color}
                          Ref={register({required:true})}
                          onChange={handleInput}
                        />
                      </FromGroup>
                      <FromGroup label='Olcusu' className='w-50' bodyClass='bg-white'>
                        <Input type='text' name='size' data-id={i}
                        value={x.size}
                        Ref={register({required:true})}
                        onChange={handleInput}
                        />
                      </FromGroup>
                      </div>
                     </div>
                      <div className='w-50'>
                          <div className='w-100' style={{display:'flex',justifyContent:'space-between'}}>
                           <FromGroup label='Mehsul sayi' className='mr-xs' bodyClass='bg-white'>
                              <Input type='number' name='count' data-id={i}
                                value={x.count}
                                Ref={register({required:true})}
                                onChange={handleInput}
                              />
                            </FromGroup>
                            <FromGroup label='Qiymet' className='mr-xs' bodyClass='bg-white'>
                              <Input type='number' name='price' data-id={i}
                                value={x.price}
                                Ref={register({required:true})}
                                onChange={handleInput}
                              />
                            </FromGroup>
                            <FromGroup label='Cemi' className='mr-xs' bodyClass='bg-white'>
                              <Input type='number' name='total' data-id={i}
                                value={x.total}
                                Ref={register({required:true})}
                                disabled
                              />
                            </FromGroup>
                          </div>
                          <FromGroup label='Elave Qeyd' className='w-100' bodyClass='bg-white'>
                              <Input type='text' name='notes' data-id={i}
                                value={x.note}
                                Ref={register({required:true})}
                                onChange={handleInput}
                              />
                            </FromGroup>
                        </div>
                    </div>
                  </Card.Body>
                   )
                 })
               }
             <Card.Footer className='mt-sm' style={{justifyContent:'space-between'}}>
                <div>
                    <Button onClick={addCard} className='w-100 p-sm bg-white border-success color-success' startElement={<span className='mr-xs color-success'>+</span>}  label='Yeni mehsul artir'/>
                </div>
                    <div style={{display:'flex',alignItems:'center'}}>
                    <Checkbox text='Tecili' name='is_fast' value={cardData.is_fast} 
                    onClick={(ev)=>{ 
                          setCardData({
                            ...cardData,
                            is_fast:+ev.target.checked,
                          })
                    }} 
                    />
                    <Checkbox
                      onClick={(ev)=>{
                        setCardData({
                          ...cardData,
                          ruleAccepted:ev.target.checked,
                        })
                      }}
                    >
                      <Link href='/'><><a className='mr-xs' style={{width:'-webkit-max-content'}}>Qaydalarla</a>Raziyam</></Link>
                      </Checkbox>
                    <Button 
                      label='Sifaris et ve ode' 
                      endElement={<span className='ml-xs'>&#8250;</span>} 
                      className='p-sm w-100'
                      disabled={!cardData.ruleAccepted}
                      />
                    </div>
             </Card.Footer>
             </form>
           </Card>
         </Main>
        </Page>
    )
}

const mapStateToProps  = state => ({
  entry: state.entry
});
export default connect(mapStateToProps)(memo(NewOrder)) 
