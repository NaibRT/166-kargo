import React from 'react'
import Page from '../components/page/page'
import Card from '../components/card/card'
import FromGroup from '../components/form-group/form-group'
import Input from '../components/input/input'
import Selectbox from '../components/selectbox/selectbox'

const telData = [
  '+994',
  '+992',
  '+995'
 ]

function Register() {
 return (
  <Page className='bg-bg'>
    <main className='' style={{display:'flex'}}>
      <Card className='bg-white br-sm' style={{width:'100%'}}>
       <Card.Header/>
       <Card.Body>
        <form style={{display:'flex',flexWrap:'wrap'}}>
         <FromGroup label='Adiniz' bodyClass='bg-bg p-xs' className='w-50 pr-xs'>
          <Input type='text' />
         </FromGroup>
         <FromGroup label='Soyadiniz' bodyClass='bg-bg p-xs' className='w-50 pr-xs'>
          <Input type='text' />
         </FromGroup>
         <FromGroup label='E-mail' bodyClass='bg-bg p-xs' className='w-50 pr-xs' >
          <Input type='email' />
         </FromGroup>
         <FromGroup label='Telefon' bodyClass='bg-bg' className='w-50 pr-xs' >
           <Selectbox className='bg-white' data={telData}/>
          <Input type='tel' />
         </FromGroup>
        </form>
       </Card.Body>
      </Card>
      <Card style={{width:'100%'}}>
       <Card.Body>
       </Card.Body>
      </Card>
    </main>
  </Page>
 )
}

export default Register
