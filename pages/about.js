import React from 'react'
import Card from '../components/card/card'
import Page from '../components/page/page'

function about() {
 return (
  <Page>
   <div className='about-page'>
    <Card>
      <Card.Body style={{width:'100%'}}>
      
      <div style={{display:'flex',justifyContent:"center", flexDirection:'column'}}>
      <img src='/assets/images/about.svg'/>
        <h1>Haqqımızda</h1>
         <h6>Arzu olunan - yanınızdadır</h6>
      </div>
         <div className='about-info'>
           <p>İstədiyiniz məhsulların əldə edilməsi yolunda maneələri qıraraq, alış-veriş prosesini daha sürətli və hər  biriniz üçün rahat edirik.</p>
           <p>166 Cargo, alıcıları, sifarişlərini çatdıra biləcək təchizatçılarla bağlayaraq, insanlara istədiklərini əldə etməyə  kömək etmək üçün qurulmuş bir şirkətdir. 2020-ci ildən etibarən 166 Cargo,
Azərbaycan Respublikasının qanunvericiliyinə uyğun olaraq alınmış lisenziyası ilə beynəlxalq hava daşımalarını həyata keçirərək alış-veriş prosesini asanlaşdırır.</p>
           <p>
           Brendimizin fəlsəfəsi hər bir müştərinin rahatlığını təmin etməyə yönəlib. Müxtəlif işçi heyəti və geniş bir 
təchizat bazası ilə yüksək standartlara doğru irəliləyirik və qlobal bazarda rəqabət aparırıq.
           </p>
         </div>
       </Card.Body> 
    </Card>
    </div>
  </Page>
 )
}

export default about
