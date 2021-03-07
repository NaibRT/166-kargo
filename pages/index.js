import Head from 'next/head'
import Link from 'next/link';
import { useIntl } from 'react-intl';
import Card from '../components/card/card';
import MainSlider from '../components/main-slider/main-slider';
import NewsItem from '../components/news_item/news-item';
import Page from '../components/page/page';
import Rate from '../components/rate/rate';

const data = [
  {min:0,max:0.25,amount:1.66},
  {min:0.25,max:0.50,amount:3.00},
  {min:0.50,max:0.70,amount:4.00},
  {min:0.70,max:1.00,amount:4.50},
 ]

export default function Home() {
  const { formatMessage: f } = useIntl();
  return (
       <Page>
         <section className='main-section'>
          {/* <MainSlider/> */}
         </section>
        <section className='tariff-section'>
          <Card style={{marginRight:10}}>
            <Card.Header text='Tarifler' />
            <Card.Body className='bg-bg sm p-sm'>
              <div className='bg-bg ' style={{ display: 'flex',justifyContent:'space-between'}}>
                <Rate data={data} icon={'/assets/icons/turkish.svg'} headerText='Türkiyə' />
                <Rate data={data} icon={'/assets/icons/turkish.svg'} headerText='Türkiyə (Maye)' />
                <Rate data={data} icon={'/assets/icons/usa.svg'} headerText='ABŞ' style={{marginRight:0}} />
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header text='Kalkulyator'/>
            <Card.Body className='bg-bg sm p-sm'>
            <Rate data={data} icon={'/assets/icons/turkish.svg'} headerText='Türkiyə' />
              
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
  )
}
