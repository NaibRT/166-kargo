import Link from 'next/link';
import React, { memo } from 'react';
import { connect } from "react-redux";
import Page from '../page/page';




const data = [
  {name:'Haqqımızda',link:'/about'},
  {name:'Mağazalar',link:'/example-shop'},
  {name:'Tez-tez verilən suallar',link:'/faq'},
  {name:'İstifadə şərtləri',link:'/orderscondition'},
  {name:'Daşıma şərtləri',link:'currycondition'}
];



const links = (data = []) => (
  <div className={'link_container'}>
    <div className={'link_item_head'}>Keçidlər</div>
    <ul>
      {
        data.map((item, index) => (<li key={index}><Link href={item.link}><a>{item.name}</a></Link></li>))
      }
    </ul>
  </div>
);

const contact = (data) => (
  <address className={'address_container'}>
    <div className={'link_item_head'}>Əlaqə</div>
    <div><img src='/assets/icons/45060.svg' /><span>{data?.address}</span></div>
    <div><img src='/assets/icons/129932.svg' /><a href='tel:*0166'>{data?.phone}</a></div>
    <div><img src='/assets/icons/121923.svg' /><a href='mailto:info@166kargo.az'>{data?.email}</a></div>
    <div><img src='/assets/icons/time-work_318-10641.svg' /><span>{data?.work_hours_from} - {data?.work_hours_till}</span></div>
  </address>
)
const contactmob = (datamob) => (
  <div className={'address_container'}>
    <div> <span>{datamob?.work_hours_from} - {datamob?.work_hours_till}</span></div>
  </div>
)

function Footer(props) {
  return (

    <footer className={'footer mt-lg'}>
      <Page>
        <div className={'footer_container container-fluid'}>
          <div className={'footer_container_head'}>
            <img className={'footer_logo'} src='/assets/icons/166ye.svg' />
            <p className={'footer_about'}>
              dolor sit amet dolor sit amet
              dolor sit amet dolor sit amet
              dolor sit amet dolor sit amet
              dolor sit amet dolor sit amet
        </p>
            <div className={'fch_sosial_link'}>
              <a href={props.Data.instagram} target='blank' aria-modal><img src='/assets/icons/instagram.svg' /></a>
              <a href={props.Data.facebook} target='blank'><img src='/assets/icons/facebook.svg' /></a>
              <a href={props.Data.youtube} target='blank'><img src='/assets/icons/youtube.svg' /></a>
            </div>
          </div>
          {links(data)}
        
          {contact(props.Data)}
        </div>
      </Page>
      <div className='footer-bottom-mob'>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <div style={{marginTop:'7px'}}>
            <div style={{ display: 'flex' }}>
              <span style={{ fontSize: '10px' }}> İş saatlari: Həftə içi </span>
              <span>&nbsp;</span>
              <span style={{ fontSize: '10px' }}> {contactmob(props.Data)}</span>
            </div>
            <div style={{ fontSize: '10px' }}>
              Şənbə günü 11:00-16:00
            </div>
          </div>
          <figure style={{ display: 'flex' }}>
           
            
            <img src={'/assets/icons/call-wh.svg'} />
             <a href='tel:*0166'> *0166 </a>
           
          </figure>

        </div>
      </div>
      <div className='footer-bottom'>
        <div className='copy'>
         
      <span>
      &#169; 2021&nbsp; 166 Karqo | Bütün hüquqlar qorunur
      </span>
      <div className={'fch_sosial_link'}>
      <a href={props.Data.instagram} target='blank' aria-modal><img src='/assets/icons/l1.svg' /></a>
      <a href={props.Data.facebook} target='blank' className='mr-r'><img src='/assets/icons/l2.svg' /></a>
      <a href={props.Data.youtube} target='blank' className='mr-r'><img src='/assets/icons/l3.svg' /></a>
    </div>
        </div>
      </div>
    </footer>


  )
}



const mapStateToProps = state => ({
  Data: state.settings.data
})

export default connect(mapStateToProps)(memo(Footer))


