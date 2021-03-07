import Head from 'next/head'
import Link from 'next/link';
import {useIntl} from 'react-intl';
import Header from '../components/header';
import Navbar from '../components/Navbar';

export default function Home() {
  const {formatMessage: f} = useIntl();
  return (
 
    <div>
    <style jsx global>{`
    a {
      cursor:pointer;
    }
  `}</style>
       <Navbar />
      <main>
        <div className='container-fluid'>
        <p className='title mg__bottom'>{f({id:'howitworks'})}</p>
        <div className='work__flex--container'>
    <div className='work__flex'>
        <figure className='background__radius'>
        <img src={'/Frame 1 (5).svg'} width={116} height={116}/>
        </figure>
        <div className='work__main'>
          <p className='work__title'>{f({id:'gotoregister'})}</p>
          <p className='work__text'>{f({id:'alttext1'})}</p>
        </div>
    </div>
    <div className='work__flex'>
        <figure className='background__radius'>
        <img src={'/Frame 1 (2).svg'} width={116} height={116}/>
        </figure>
        <div className='work__main'>
          <p className='work__title'>{f({id:'makeorder'})}</p>
          <p className='work__text'>{f({id:'alttext2'})}</p>
        </div>
    </div>
    <div className='work__flex'>
        <figure className='background__radius'>
        <img src={'/Frame 1 (6).svg'} width={116} height={116}/>
        </figure>
        <div className='work__main'>
          <p className='work__title'>{f({id:'getpackage'})}</p>
          <p className='work__text'>{f({id:'alttext3'})}</p>
        </div>
    </div>
    </div>    
    </div>  
      
    <section className='mg__size'>
        <div className='container-fluid'>
        <div className='flex__item'>
        <p className='title mg__bottom2'>{f({id:'shops'})}</p>
        <p className='title__sm mg__bottom2'>Hamısını gör &rsaquo;</p>
        </div>
        <div className='flex__item'>
          <Link href='https://www.trendyol.com/'>
           <a target="_blank"> <img src={'/a00.svg'}/></a>
          </Link>
          <Link href='https://www.defacto.com.tr/'>
          <a target="_blank"> <img src={'/a01.svg'}/></a>
        </Link>
        <Link href='https://www.koton.com/en/'>
        <a target="_blank"> <img src={'/a02.svg'}/></a>
        </Link>
        <Link href='https://www.zara.com/'>
        <a target="_blank"> <img src={'/a03.svg'}/></a>
        </Link>
        <Link href='https://www.gittigidiyor.com'>
        <a target="_blank"> <img src={'/a04.svg'}/></a>
        </Link> 
        <Link href='https://www.hm.com/entrance.ahtml?orguri=%2F'>
        <a target="_blank"> <img src={'/a05.svg'}/></a>
        </Link>
        </div>
        </div>
    </section>
        </main>
    </div>
  )
}
