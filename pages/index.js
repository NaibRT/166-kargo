import Link from 'next/link';
import { useIntl } from 'react-intl';
import ButtonComponent from '../components/button';
import Card from '../components/card/card';
import FromGroup from '../components/form-group/form-group';
import Input from '../components/input/input';
import MainSlider from "../components/main-slider/main-slider";
import NewsItem from '../components/news_item/news-item';
import Page from '../components/page/page';
import Rate from '../components/rate/rate';
import Selectbox from "../components/selectbox/selectbox";
import Switch from '../components/switch/switch';

const data = [
  {min:0,max:0.25,amount:1.66},
  {min:0.25,max:0.50,amount:3.00},
  {min:0.50,max:0.70,amount:4.00},
  {min:0.70,max:1.00,amount:4.50},
 ]

export default function Home() {
  const { formatMessage: f } = useIntl();
  return (
       
         <main className='home-page'>
           <section className='main-section bg-bg mb-sm' >
           <div className=' container-fluid pt-sm pb-sm' style={{display:'flex'}}>
           <div className='slider-container mr-sm'>
          <MainSlider/>
           </div>
           <Card className='login-card bg-white p-sm'>
             <Card.Header text='Istifadecei girisi'/>
             <Card.Body className='p-none'>
             <form className='login-form'>
               <FromGroup label='E-mail' bodyClass='bg-bg w-100' >
                 <Input type='email' name='mail'/>
               </FromGroup>
               <FromGroup label='Sifre' bodyClass='bg-bg w-100' >
                 <Input type='password' name='password'/>
               </FromGroup>
             </form>
             <ButtonComponent className='w-100 mt-xs' label='Daxil ol'/>
             </Card.Body>
           </Card>
         </div>
           </section>
           <Page>
        <section className='tariff-section'>
          <Card className='mr-sm'>
            <Card.Header text='Tarifler' />
            <Card.Body className='bg-bg p-sm br-sm'>
              <div className='bg-bg ' style={{ display: 'flex',justifyContent:'space-between'}}>
                <Rate data={data} icon={'/assets/icons/turkish.svg'} headerText='Türkiyə' />
                <Rate data={data} icon={'/assets/icons/turkish.svg'} headerText='Türkiyə (Maye)' />
                <Rate data={data} icon={'/assets/icons/usa.svg'} headerText='ABŞ' style={{marginRight:0}} />
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header text='Kalkulyator'/>
            <Card.Body className='bg-bg p-sm br-sm'>
              <form className='calculator-form' style={{display:'flex',flexWrap:'wrap'}}>
              <FromGroup className='w-50 pr-xs' bodyClass='bg-white h-50' label='Olke sec'>
                  <Selectbox className='w-100' data={[]}/>
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
                </FromGroup>
              </form>
              <Card.Footer className='mt-xs'>
                <>
                <div className='w-50 pr-xs' style={{display:'flex',justifyContent:'space-between'}}>
                  <span className='w-25' style={{fontSize:'12px'}}>Catdirilma qiymeti</span>
                  <strong style={{textAlign:'center',fontSize:'large'}}>10 $</strong>
                </div>
                <ButtonComponent className='w-50' label='Hesabla'/>
                </>
              </Card.Footer>
            </Card.Body>   
          </Card>
        </section>


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


        <section className='fluid_bottom' >
          <Card>
            <Card.Header text='Son Xəbərlər' endElelment={<Link href=''>Hamsını gör &rsaquo;</Link>} />
            <Card.Body style={{ padding: 0, display: 'flex'}}>
              <NewsItem />
              <NewsItem />
              <NewsItem style={{marginRight:0}} />
            </Card.Body>
          </Card>
        </section>

        <section className='fluid_bottom'>
          <div >
            <div className='flex__item'>
              <p className='title mg__bottom2'>{f({ id: 'shops' })}</p>
              <p className='title__sm mg__bottom2'>Hamısını gör &rsaquo;</p>
            </div>
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
          </div>
        </section>
        </Page>
        </main>
  )
}
