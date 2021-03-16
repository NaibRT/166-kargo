import React from 'react';
import Checkbox from "../components/checkbox/checkbox";
import FromGroup from '../components/form-group/form-group';
import Input from '../components/input/input';
import Page from '../components/page/page';
import RadioButton from '../components/radio-button/radio-button';
import Selectbox from '../components/selectbox/selectbox';
import Switch from '../components/switch/switch';


const selecData = [
 'Az',
 'En',
 'Ru'
]

const telData = [
  '+994',
  '+992',
  '+995'
 ]

function Test() {
 return (
  <Page style={{height:'100vh'}}>
    <FromGroup label='Cinsi' 
               labelStartIcon={<span className='color-icon'>&#9432;</span>} 
               bodyClass='bg-bg border-black' 
               error='error'
               >
      <RadioButton text='Kisi' id='male' value='male' name='gender'/>
      <RadioButton text='Qadin' id='female' value='female' name='gender'/>
      <Switch/>
    </FromGroup>
    <FromGroup bodyClass='bg-bg'>
     <Selectbox name='lang' data={selecData}/>
    </FromGroup>
    <FromGroup bodyClass='bg-bg' >
    <Selectbox name='number' className='bg-white  p-xs' data={telData}/><Input type='tel' name='number' placeholder='ener phone'/>
    </FromGroup>
    <FromGroup bodyClass='' >
      <Checkbox />
    </FromGroup>
  </Page>
 )
}

export default Test
