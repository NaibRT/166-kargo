import React ,{memo} from 'react'
import Link from 'next/link'
import Page from '../page/page';
import {connect} from 'react-redux'


const data = [
  'Haqqımızda',
  'Mağazalar',
  'Tez-tez verilən suallar',
  'İstifadə şərtləri',
  'Sayt xəritəsi', 
];



 const links = (data = []) => (
  <div className={'link_container'}>
    <div className={'link_item_head'}>Keçidlər</div>
    <ul>
      {
        data.map((item, index) => (  <li key={index}><Link href={{}}>{item}</Link></li> ))
      }
   </ul>
  </div>
);

const contact = (data) => (
  <address className={'address_container'}>
    <div className={'link_item_head'}>Əlaqə</div>
    <div><img src='/assets/icons/45060.svg'/><span>{data?.address}</span></div>
    <div><img src='/assets/icons/129932.svg'/><a href='tel:*0166'>{data?.phone}</a></div>
    <div><img src='/assets/icons/121923.svg'/><a href='mailto:info@166kargo.az'>{data?.email}</a></div>
    <div><img src='/assets/icons/time-work_318-10641.svg'/><span>{data?.work_hours_from}-{data?.work_hours_till}</span></div>
  </address>
)

  function Footer() {
 return (
  <footer className={'footer'}>
    <Page>
    <div className={'footer_container container-fluid'}>
    <div className={'footer_container_head'}>
        <img className={'footer_logo'} src='/assets/icons/166ye.svg'/>
        <p className={'footer_about'}>
           dolor sit amet dolor sit amet
           dolor sit amet dolor sit amet
           dolor sit amet dolor sit amet
           dolor sit amet dolor sit amet
        </p>
        <div className={'fch_sosial_link'}>
          <a  href='https://instagram.com' aria-modal><img  src='/assets/icons/instagram.svg'/></a>
          <a href='https://facebook.com'><img src='/assets/icons/facebook.svg'/></a>
          <a href='https://youtube.com'><img src='/assets/icons/youtube.svg'/></a>
        </div>
      </div>
     
     
    </div> 
    </Page>
    <div className='footer-bottom'>
      <div>
      &#169;
      <span>
        166Karqo | Bütün hüquqlar qorunur
      </span>
      </div>
    </div>
  </footer>
 )
}
const mapStateToProps=state=>{
  data:state.settings.data
}

export default connect(mapStateToProps)(React.memo(Footer))
