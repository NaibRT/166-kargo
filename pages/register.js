import React, { useState } from 'react'
import Button from '../components/button'
import Card from '../components/card/card'
import FromGroup from '../components/form-group/form-group'
import Input from '../components/input/input'
import Page from '../components/page/page'
import RadioButton from '../components/radio-button/radio-button'
import Selectbox from '../components/selectbox/selectbox'
import Switch from "../components/switch/switch"


const telData = [
  '+994',
  '+992',
  '+995'
 ]

function Register() {
 const [isKorporative, setisKorporative] = useState(false)
 console.log(isKorporative)
 
 return (
  <Page className='bg-bg register-page'>
    <main className='mt-lg'>
      <Card className='bg-white br-sm mr-sm p-sm w-50'>
       <Card.Header text='Qeydiyyat' endElelment={
       <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
         <h3 className='cardHeaderText pr-xs'>Korporativ</h3>
         <Switch value={isKorporative} onClick={(e)=>{
          setisKorporative(e.target.checked)
       }}/></div>}/>
       <Card.Body className='p-none'>
        <form style={{display:'flex',flexWrap:'wrap'}} autoComplete=''>
         <FromGroup label='Adiniz' bodyClass='bg-bg p-xs' className='w-50 pr-xs mb-xs'>
          <Input type='text' name='name' />
         </FromGroup>
         <FromGroup label='Soyadiniz' bodyClass='bg-bg p-xs' className='w-50 pr-xs mb-xs'>
          <Input type='text' name='surname'/>
         </FromGroup>
         <FromGroup label='E-mail' bodyClass='bg-bg p-xs' className='w-50 pr-xs' >
          <Input type='email' />
         </FromGroup>
         <FromGroup label='Telefon' bodyClass='bg-bg' className='w-50 pr-xs mb-xs' >
           <Selectbox className='bg-white' data={telData}/>
          <Input type='tel' />
         </FromGroup>
         <FromGroup label='Cins' bodyClass=''  className='w-50 pr-xs mb-xs'>
           <RadioButton text='Kisi' name='gender' id='male' value='male' />
           <RadioButton text='Qadin' name='gender' id='female' value='female' />
         </FromGroup>
         <FromGroup label='Dogum tarixi' bodyClass='bg-bg' className='w-50 pr-xs mb-xs' >
           <Input className='' name='date' type='date' format='dd/mm/yyyy'/>
         </FromGroup>
         <FromGroup label='S/v seriya nomresi' bodyClass='bg-bg' className='w-50 pr-xs mb-xs' >
           <Selectbox className='bg-white' data={telData}/>
          <Input type='tel' />
         </FromGroup>
         <FromGroup label='S/V Fin kodu' bodyClass='bg-bg' className='w-50 pr-xs mb-xs' >
           <Selectbox className='bg-white' data={telData}/>
          <Input type='tel' />
         </FromGroup>
         <FromGroup label='Milliyet' bodyClass='bg-bg' className='w-50 pr-xs mb-xs' >
           <Selectbox className='w-100 m-none' data={telData}/>
         </FromGroup>
         <FromGroup label='Unvan' className='w-50 pr-xs mb-xs'>
           <Input name='address' type='text' placeholder=' hvhgv'/>
         </FromGroup>
         {
          isKorporative && 
         <FromGroup label='Voen' bodyClass='bg-bg' className='w-100 mb-xs'>
           <Input type='text' />
         </FromGroup>
         }
         <FromGroup label='Sifre' bodyClass='bg-bg' className='w-50 pr-xs'>
           <Input name='password' type='password' />
         </FromGroup>
         <FromGroup label='Sifrenin tekrari' bodyClass='bg-bg' className='w-50 pr-xs mb-xs'>
           <Input name='repeat-password' type='password'/>
         </FromGroup>
        </form>
        <Card.Footer className='mt-sm'>
          <Button label='Qeydiyyati tamamla' endElement={<span className='ml-xs'>&rarr;</span>} className='w-100' onClick={()=>{ console.log('clicked')}}/>
        </Card.Footer>
       </Card.Body>
      </Card>
      <Card className='w-50'>
       <Card.Body className='w-100 h-100 p-none'>
         <p className='pb-sm'>Qeydiyyatda kecmekde centinlik cekirsizse videonu izleyin</p>
         {/* <video  poster='./assets/images/img1.png'>
            </video> */}
         <img className='w-100' src='./assets/images/img1.png'/>
       </Card.Body>
      </Card>
    </main>
  </Page>
 )
}

export default Register
