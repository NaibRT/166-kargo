import React from 'react'
import Page from '../components/page/page'
import Summary from '../components/summary/summary'

function Faq() {
    return (
        <Page className='bg-bg'>
            <main className='bg-white faq-page p-lg mt-md'>
               <div className='faq-head'>
                 <img className='faq-head-img' src='./assets/images/img1.jpg'/>
                 <div className='faq-head-title'>
                     <h3>Tez-tez verilen suallar</h3>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                 </div>
               </div>
               <div className='faq-body mt-md'>
                 <Summary/>
                 <Summary/>
                 <Summary/>
                 <Summary/>
                 <Summary/>

               </div>
            </main>
        </Page>
    )
}

export default Faq
