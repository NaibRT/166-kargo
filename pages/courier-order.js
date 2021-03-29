import Link from 'next/link'
import React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import AsideMenu from '../components/aside-menu'
import Aside from '../components/aside/aside'
import ButtonComponent from '../components/button'
import Card from '../components/card/card'
import FromGroup from '../components/form-group/form-group'
import Input from '../components/input/input'
import Main from '../components/main/main'
import Page from '../components/page/page'
import Tabel from '../components/tabel/tabel'




const dataHead = [
    'Tracking',
    'Mağaza',
    'Kateqoriya',
    'Malın dəyəri',
    'Çəki',
    'Çatdırılma'
];
const data = [
   {
       Tracking:'OSS-182328, 89264824182328',
       shop:'kolaygelsin',
       category:'Geyim,blazer',
       amount:'239.99 TRY',
       weight:'1.200 kq',
       delivery:'4.78$ (8.12m)'
     },
     {
         Tracking:'OSS-182328, 89264824182328',
         shop:'kolaygelsin',
         category:'Geyim,blazer',
         amount:'239.99 TRY',
         weight:'1.200 kq',
         delivery:'4.78$ (8.12m)'
       },
       {
         Tracking:'OSS-182328, 89264824182328',
         shop:'kolaygelsin',
         category:'Geyim,blazer',
         amount:'239.99 TRY',
         weight:'1.200 kq',
         delivery:'4.78$ (8.12m)'
       }
]

function CourierOrder() {
    return (
        <Page className='bg-bg pt-sm'>
            <Aside className='mr-sm'>
              <AsideMenu/>
            </Aside >
            <Main className='bg-bg'>
              <Card className='p-sm bg-white'>
                  <Card.Header text='Kuryer sifarişi'/>
                  <Card.Body className='p-none'>
                      <p className='mb-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      <form style={{display:'flex',flexWrap:'wrap'}}>
                          <FromGroup label='Rayon seçin' className='w-50 pr-lg mb-sm' bodyClass='bg-bg'>
                             <Input type='text'/>
                          </FromGroup>
                          <FromGroup label='Vaxt seçin' className='w-50 pr-lg mb-sm' bodyClass='bg-bg'>
                          <DayPickerInput
                              classNames='w-100'
                              name='date'
                              ref={register({
                                required:{value:true, message:'date is required'},
                              })} 
                            format='dd-MM-YYYY'
                            placeholder='dd-MM-YYYY'
                            />
                          </FromGroup>
                          <FromGroup label='Dəqiq ünvan əlavə edin' className='w-50 pr-lg mb-sm' bodyClass='bg-bg'>
                             <Input type='text'/>
                          </FromGroup>
                          <FromGroup label='Əlaqə nömrəsi daxil edin' className='w-50 pr-lg mb-sm' bodyClass='bg-bg'>
                             <Input type='tel'/>
                          </FromGroup>
                      </form>
                      <Link href='/'><a style={{color:'darkblue',textDecoration:'underline'}}>Xəritədən təyin et</a></Link>
                  </Card.Body>
                   <Card className='p-none'>
                       <Card.Header text={<small style={{fontSize:'small'}}>Ödənilmiş bağlamalar</small>}/>
                       <Card.Body className='p-none'>
                         <Tabel
                           th={dataHead}
                           data={data}
                           renderBody={(x,i) => {
                            if(i===0){
                              return  <td key={i++}>
                                         <span className='color-err'>{x.split(',')[0]}</span>
                                         <span>{x.split(',')[1]}</span>
                                      </td>  
                            }
                            return  <td key={i++}>{x}</td>
                        }}
                         />
                       </Card.Body>
                   </Card>
                  <Card.Footer style={{justifyContent:'flex-end'}}>
                      <ButtonComponent className='w-25' label='Sifariş ver'/>
                  </Card.Footer>
              </Card>
              <Card className='p-sm bg-white mt-sm'>
                  <Card.Header text='Sifariş tarixçəsi'/>
                  <Card.Body>
                      
                  </Card.Body>
              </Card>
            </Main>
        </Page>
    )
}

export default CourierOrder
