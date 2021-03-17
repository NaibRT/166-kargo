import Link from "next/link";
import React from 'react';
import Button from "../components/button";
import Card from "../components/card/card";
import Checkbox from '../components/checkbox/checkbox';
import FromGroup from '../components/form-group/form-group';
import Input from '../components/input/input';
import Page from "../components/page/page";


function NewOrder() {
    return (
        <Page className='bg-bg pt-lg'>
            <aside className='bg-white'>

            </aside>
         <main className='br-sm bg-white br-lg'>
           <Card className='p-sm'>
             <Card.Header text="Yeni sifaris"/>
             <form>
             <Card.Body className='bg-yellow p-sm br-lg'>
               <div className='' style={{display:'flex'}}>
                <div className='w-50 mr-sm' style={{}}>
                   <FromGroup label='Link' className='w-100' bodyClass='bg-white'>
                   <Input type='text'/>
                 </FromGroup>
                 <div style={{display:'flex'}}>
                 <FromGroup label='Rengi' className='w-50 mr-sm' bodyClass='bg-white'>
                   <Input type='text'/>
                 </FromGroup>
                 <FromGroup label='Olcusu' className='w-50' bodyClass='bg-white'>
                   <Input type='text'/>
                 </FromGroup>
                 </div>
                </div>

                   <div className='w-50'>
                     <div className='w-100' style={{display:'flex',justifyContent:'space-between'}}>
                      <FromGroup label='Mehsul sayi' className='mr-xs' bodyClass='bg-white'>
                         <Input type='number'/>
                       </FromGroup>
                       <FromGroup label='Qiymet' className='mr-xs' bodyClass='bg-white'>
                         <Input type='number'/>
                       </FromGroup>
                       <FromGroup label='Cemi' className='mr-xs' bodyClass='bg-white'>
                         <Input type='number'/>
                       </FromGroup>
                     </div>
                     <FromGroup label='Elave Qeyd' className='w-100' bodyClass='bg-white'>
                         <Input type='text'/>
                       </FromGroup>
                   </div>
               </div>
             </Card.Body>
             <Card.Footer className='mt-sm' style={{justifyContent:'space-between'}}>
                <div>
                    <Button className='w-100 p-sm bg-white border-success color-success' startElement={<span className='mr-xs color-success'>+</span>}  label='Yeni mehsul artir'/>
                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                  <Checkbox text='Tecili'/>
                  <Checkbox><Link href='/'><><a className='mr-xs' style={{width:'-webkit-max-content'}}>Qaydalarla</a>Raziyam</></Link></Checkbox>
                  <Button label='Sifaris et ve ode' endElement={<span className='ml-xs'>&#8250;</span>} className='p-sm w-100'/>
                </div>
             </Card.Footer>
             </form>
           </Card>
         </main>
        </Page>
    )
}

export default NewOrder
