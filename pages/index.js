import Link from 'next/link';
import { memo, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { connect } from 'react-redux';
import ButtonComponent from '../components/button';
import Card from '../components/card/card';
import FromGroup from '../components/form-group/form-group';
import Input from '../components/input/input';
import MainSlider from "../components/main-slider/main-slider";
import NewsItem from '../components/news_item/news-item';
import Page from '../components/page/page';
import Rate from '../components/rate/rate';
import MobileRate from '../components/rate/m-rate';
import Selectbox from "../components/selectbox/selectbox";
import NewsSlider from '../components/main-slider/slider-news'
import Switch from '../components/switch/switch';
import { Login } from '../redux/entry/entryActions';
import { GetSettings } from '../redux/settings/settingsActions';





const data = [
  {min:0,max:0.25,amount:1.66},
  {min:0.25,max:0.50,amount:3.00},
  {min:0.50,max:0.70,amount:4.00},
  {min:0.70,max:1.00,amount:4.50},
 ]


 function Home(props) {
  const { formatMessage: f } = useIntl();
  
  const { register,handleSubmit,errors } = useForm();


  useEffect(() => {
     props.GetSettings('settings');
  },[])

  const submit = (data) => {
    console.log(data)
    props.Login('auth/login',JSON.stringify(data),{'content-type':'application/json'})
  }
  
  return (
       
         <main className='home-page'>
           <section className='main-section bg-bg mb-sm' >
           <div className=' container-fluid pt-sm pb-sm flex' >
           <div className='slider-container pr-sm'>
          <MainSlider/>
           </div>
           <Card className='login-card bg-white p-sm br-lg'>
             <Card.Header text={f({ id: 'signin' })}/>
             <Card.Body className='p-none'>
             <form className='login-form' onSubmit={handleSubmit(submit)}>
               <FromGroup 
                  label={f({ id: 'email' })}
                  bodyClass='bg-bg w-100' 
                  error={errors.email?.message}
                  >
                 <Input Ref={register({
                   required:{value:true,message:f({ id: 'emailerror' })},
                  //  pattern:/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
                 })} type='email' name='email'/>
               </FromGroup>
               <FromGroup 
                 label='Sifre' 
                 bodyClass='bg-bg w-100'
                 error={errors.password?.message}
               >
                 <Input
                 Ref={register({
                  required:{value:true,message:'password is not valid'},
                  // pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
                })}
                  type='password' name='password'/>
               </FromGroup>
             <ButtonComponent type='submit' className='w-100 mt-xs' label='Daxil ol'/>
             </form>
             </Card.Body>
           </Card>
         </div>
           </section>
           <Page>
        <section className='tariff-section'>
          <Card className='mr-sm sm-mob'>
            <Card.Header text='Tarifler' />
            <Card.Body className='bg-bg p-sm br-sm desktop'>
              <div className='bg-bg ' style={{ display: 'flex',justifyContent:'space-between'}}>
                <Rate data={data} icon={'/assets/icons/turkish.svg'} headerText='Türkiyə' />
                <Rate data={data} icon={'/assets/icons/turkish.svg'} headerText='Türkiyə (Maye)' />
                <Rate data={data} icon={'/assets/icons/usa.svg'} headerText='ABŞ' style={{marginRight:0}} />
              </div>
            </Card.Body>
            <Card.Body className='bg-bg p-xs br-sm for-mobile'>
                  <Card.Header></Card.Header>
                 <MobileRate data={data} text='Çəki' />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header text='Kalkulyator'/>
            <Card.Body className='bg-bg  br-sm' style={{padding:'14px'}}>
              <form   className='calculator-form' style={{display:'flex',flexWrap:'wrap'}}>
              <FromGroup className='w-50 pr-xs' bodyClass='bg-white h-50' label='Ölkə seç'>
                  <Selectbox className='w-100' data={['Türkiye','Amerika']}/>
                </FromGroup>
              <FromGroup className='w-50 pr-xs' bodyClass=' h-50' label='Maye'>
                  <Switch/>
              </FromGroup>
                <FromGroup className='w-50 pr-xs' bodyClass='bg-white h-50' label='Ceki (kq)'>
                  <Input type='text'/>
                </FromGroup>
                <FromGroup className='w-50 pr-xs' bodyClass='bg-white h-50' label='Uzunluq (sm)'>
                  <Input type='text'/>
                </FromGroup>
                <FromGroup className='w-50 pr-xs' bodyClass='bg-white h-50' label='EN (sm)'>
                  <Input type='text'/>
                </FromGroup>
                <FromGroup className='w-50 pr-xs' bodyClass='bg-white h-50' label='Hundurluk (sm)'>
                  <Input type='text'/>
                  <ButtonComponent type='submit'/>
                </FromGroup>
              </form>
              <Card.Footer className='mt-xs'>
                <>
                <div className='w-50 pr-xs' style={{display:'flex',justifyContent:'space-between'}}>
                  <span className='w-25' style={{fontSize:'12px'}}>Catdirilma qiymeti</span>
                  <strong style={{textAlign:'center',fontSize:'large'}}>10 $</strong>
                </div>
                 </>
              </Card.Footer>
            </Card.Body>   
          </Card>
        </section>

        <section className='howworks'>
        <div className='fluid_bottom'>
          <p className='title mg__bottom'>{f({ id: 'howitworks' })}</p>
          <div className='work__flex--container'>
            <div className='work__flex'>
              <figure className='background__radius'>
                <img src={'/assets/icons/Frame 1 (5).svg'} width={116} height={116} />
              </figure>
              <div className='work__main'>
                <p className='work__title'>{f({ id: 'gotoregister' })}</p>
                <p className='work__text'>{f({ id: 'alttext1' })}</p>
              </div>
            </div>
            <div className='work__flex'>
              <figure className='background__radius'>
                <img src={'/assets/icons/Frame 1 (2).svg'} width={116} height={116} />
              </figure>
              <div className='work__main'>
                <p className='work__title'>{f({ id: 'makeorder' })}</p>
                <p className='work__text'>{f({ id: 'alttext2' })}</p>
              </div>
            </div>
            <div className='work__flex'>
              <figure className='background__radius'>
                <img src={'/assets/icons/Frame 1 (6).svg'} width={116} height={116} />
              </figure>
              <div className='work__main'>
                <p className='work__title'>{f({ id: 'getpackage' })}</p>
                <p className='work__text'>{f({ id: 'alttext3' })}</p>
              </div>
            </div>
          </div>
        </div>
        </section>

        <section className='fluid_bottom' >
          <Card>
            <Card.Header text='Son Xəbərlər' endElelment={<Link href=''>Hamsını gör &rsaquo;</Link>} />
            <Card.Body className='flex__news'>
              <NewsItem />
              <NewsItem />
              <NewsItem style={{marginRight:0}} />
            </Card.Body>
          </Card>
        </section>

        <section className='fluid_bottom w-100'>
          <Card>
            <Card.Header text='Bəzi mağazalar' endElelment={<Link href=''>Hamsını gör &rsaquo;</Link>} />
            <Card.Body>
            <div className='flex__item'>
              <Link href='https://www.trendyol.com/'>
                <a target="_blank"> <img src={'/assets/images/a00.svg'} /></a>
              </Link>
              <Link href='https://www.defacto.com.tr/'>
                <a target="_blank"> <img src={'/assets/images/a01.svg'} /></a>
              </Link>
              <Link href='https://www.koton.com/en/'>
                <a target="_blank"> <img src={'/assets/images/a02.svg'} /></a>
              </Link>
              <Link href='https://www.zara.com/'>
                <a target="_blank"> <img src={'/assets/images/a03.svg'} /></a>
              </Link>
              <Link href='https://www.gittigidiyor.com'>
                <a target="_blank"> <img src={'/assets/images/a04.svg'} /></a>
              </Link>
              <Link href='https://www.hm.com/entrance.ahtml?orguri=%2F'>
                <a target="_blank"> <img src={'/assets/images/a05.svg'} /></a>
              </Link>
            </div>
            </Card.Body>
          </Card>

          {/* <div >
            <div className='flex__item'>
              <p className='title mg__bottom2'>{f({ id: 'shops' })}</p>
              <p className='title__sm mg__bottom2'>Hamısını gör &rsaquo;</p>
            </div>

          </div> */}
        </section>
        </Page>
        </main>
  )
}

const mapStateToProp = state => ({
  Entry: state.entry
});

const mapDispatchToProp = { 
  Login ,
  GetSettings
}


export default connect(mapStateToProp, mapDispatchToProp)(memo(Home))
