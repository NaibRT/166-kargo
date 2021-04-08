import axios from 'axios';
import { useRouter } from 'next/router';
import React, { memo, useLayoutEffect, useRef, useState } from 'react';
import { connect } from "react-redux";
import AsideMenu from "../components/aside-menu/index";
import Aside from "../components/aside/aside";
import ButtonComponent from '../components/button';
import Card from '../components/card/card';
import Checkbox from "../components/checkbox/checkbox";
import FromGroup from "../components/form-group/form-group";
import Input from "../components/input/input";
import Main from "../components/main/main";
import PackageItem from '../components/package_item/package-item';
import Page from "../components/page/page";
import Redirect from "../components/redirect/redirect";
import Tabel from "../components/tabel/tabel";

function Packages(props) {

  if(!props.entry.isLoged){
   return <Redirect/>
  }

const [packages,setPackages] = useState([]);
const [filteredPacks,setFilteredPacks] = useState([]);

const [selectedPackages,setSelectedPackages] = useState({
  packages:[],
  total: 0,
  code:'',
  isAccepted:false
})
const {locale} = useRouter();
const mainCheckRef = useRef();
const checkRefs = useRef([]);
checkRefs.current = [];
const tabRefs = useRef([]);
tabRefs.current = [];


useLayoutEffect(()=> {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}batches?lan=${locale}`,{
    headers: {
      'authorization': `Bearer ${props.entry.user.accessToken}`
    }
  }).then(res => {
    setPackages(res.data)
    setFilteredPacks(res.data)
  }).catch(err => console.log(err))
},[])

const addTabRefs = (ref) => {
  if(ref && !tabRefs.current.includes(ref)){
    tabRefs.current.push(ref)
  }
}
const tabButtonClick = (ev) => {
  tabRefs.current.forEach(x => x.classList.remove('pack-active'));
  ev.target.classList.add('pack-active');
  let id = ev.target.getAttribute('data-id');
  console.log(id)
  if(id!=0){
    let newPackages = packages.filter(x => x.status.id == id);
    setFilteredPacks([...newPackages])
  }else{
    setFilteredPacks([...packages])
  }
  
  
}
const addCheckRefs = (ref) => {
  if(ref && !checkRefs.current.includes(ref)){
    checkRefs.current.push(ref)
  }
}

const checkHandler = (ev) => {
  let {value, checked} = ev.target;
  let price = ev.target.getAttribute('data-price');
  if(checked){
    selectedPackages.packages.push(value);
    setSelectedPackages({
      ...selectedPackages,
      total: selectedPackages.total + (+price),
      packages: [...selectedPackages.packages]
    })
  }else{
     let newPackages = selectedPackages.packages.filter(x => x!==value);
    setSelectedPackages({
      ...selectedPackages,
      total: selectedPackages.total - price,
      packages: [...newPackages] 
    })
  }
  !selectedPackages.packages.some(x => x) ? mainCheckRef.current.checked = false : null

}

    return (
        <Page className='bg-bg pt-lg pb-lg'>
           <Aside className='mr-sm'>
             <AsideMenu/>
           </Aside> 
           <Main className='bg-c'>
             <Card className='bg-bg pb-sm mgm_ss'>
                 <Card.Header text='Aktiv bağlamalarım' endElelment={
                 <Checkbox 
                    Ref={ref => mainCheckRef.current = ref }
                    onClick={(e) => {
                    let total=0;
                    let packages = [];
                    checkRefs.current.forEach(x => {
                      x.checked = e.target.checked;
                      if(e.target.checked && !packages.includes(x.value)){
                        packages.push(x.value)
                        total+= (+x.getAttribute('data-price'))
                      }else{
                        packages = packages.filter(p => p !== x.value);
                        total-= total!==0 && (+x.getAttribute('data-price'))
                      }
                    })

                    setSelectedPackages({
                      ...selectedPackages,
                      total: total,
                      packages: packages
                    })
                 }} className='bg-white border-subtitle'/>}/>
                 <div className=' pl-none' style={{display:'flex',marginBottom:'20px'}}>
                   <ButtonComponent label={`Hamsı (${packages.length})`} className='mr-xs p-sm bg-bg pack-active'
                    data-id={0}
                    Ref={addTabRefs}
                    onClick={tabButtonClick}/>
                   <ButtonComponent label={`Xarici anbarda (${packages.filter(x => x.status.id == 3).length})`} className=' mr-xs p-sm bg-bg '
                   data-id={3}
                   Ref={addTabRefs}
                   onClick={tabButtonClick}
                   />
                   <ButtonComponent label={`Bakı ofisində (${packages.filter(x => x.status.id == 5).length})`} className='mr-xs p-sm bg-bg '
                   data-id={5}
                   Ref={addTabRefs}
                   onClick={tabButtonClick}
                   />
                   <ButtonComponent label={`Gömrükdə (${packages.filter(x => x.status.id == 7).length})`} className='p-sm bg-bg'
                   data-id={7}
                   Ref={addTabRefs}
                   onClick={tabButtonClick}
                   />
                 </div>

                 <Card.Body className='p-none'>
                     <div className='packages__fr'>
                       {
                         filteredPacks.filter(x => x.status.id !== 6).map(p => (
                            <PackageItem 
                              key={p.id} 
                              checkRef={addCheckRefs} 
                              item={p}
                              onCheck = {checkHandler}
                              />
                          ))
                       }
                     </div>
                 </Card.Body>
                 <div className='footer__pck'>
                   <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                       <smal>{selectedPackages.packages.length} bağlama seçilib</smal>
                       <div style={{display:'flex',justifyContent:'space-between'}}>
                           <b>Cəmi:</b>
                           <div style={{display:'flex',flexDirection:'column'}}>
                           <del style={{textDecorationColor:'red'}} >15.30 AZN</del>
                           <b>{selectedPackages.total} AZN</b>
                           </div>
                       </div>
                   </div>
                   <div className='package__btns'>
                        <FromGroup bodyClass='bg-white pl-xs' bodyStyle={{height:'44px',width:'200px'}} className='mr-xs chng__bodystyle'>
                            <Input placeholder='kodu əlavə et'
                              onChange={(e) => setSelectedPackages({
                                ...selectedPackages,
                                code:e.target.value,
                              }) }
                            />
                            {
                              selectedPackages.isAccepted
                              ? <ButtonComponent 
                                 className='bg-white w-50'
                                 style={{textDecorationLine:'underline',color:'darkblue',padding:'0px 10px'}} 
                                 label='Ləğv et' 
                                 onClick={() => {
                                   setSelectedPackages({
                                     ...selectedPackages,
                                     isAccepted:false,
                                   })
                                 }}
                                />
                              : <ButtonComponent 
                                 disabled={!selectedPackages.code ? true : false} 
                                 style={{padding: '0 10px'}} 
                                 className='color-white bg-success' 
                                 label='Təsdiqlə'
                                 onClick={() =>{
                                   setSelectedPackages({
                                     ...selectedPackages,
                                     isAccepted:true
                                   })
                                 } }
                                 />
                            }
                        </FromGroup>
                         
                       <ButtonComponent style={{padding: '0 20px'}} className='color-white bg-success mr-xs desk' label='Kartla ödə' endElement={<span className='color-white pl-sm'>&#8594;</span>}/>
                       <ButtonComponent style={{padding: '0 10px'}} className='desk' label='Balansla ödə' endElement={<span className='color-black mr-xs pl-sm '>&#8594;</span>}/>
                       
                        <div className='btn__fkl'>
                       <ButtonComponent style={{padding: '0 10px'}} className='color-white bg-success mr-xs' label='Kartla ödə' endElement={<span className='color-white pl-sm'>&#8594;</span>}/>
                       <ButtonComponent style={{padding: '0 10px'}} label='Balansla ödə' endElement={<span className='color-black mr-xs pl-sm'>&#8594;</span>}/>
                       </div>
                   </div>
                 </div>
             </Card>

             <Card className='p-sm bg-white'>
                 <Card.Header text='Sifariş tarixçəsi'/>
                 <Card.Body className='p-none overflow__package '>
                   <Tabel
                    th={[
                      'Tracking',
                      'Mağaza',
                      'Kateqoriya',
                      'Malın dəyəri',
                      'Çəki',
                      'Çatdırılma',
                      'Status'
                    ]}
                    data={packages.map(x => { 
                      if(x.status.id == 6){
                        return {
                          track_number: x.track_number,
                          shop: x.shop,
                          category: x.category,
                          price: `${x.price} ${x.currency}`,
                          weight: `${x.weight || 0} kq`,
                          delivery_price: x.delivery_price || 0,
                          status:`${x.status.name}\n ${new Date(x.date).toDateString()}`,
                        }
                      } 
                    }) || []}
                    renderBody={(x,i) => {
                          return   <td key={i++}>{x}</td>  
                    }}
                   />
                 </Card.Body>
             </Card>
           </Main>
        </Page>
    )
}

const mapStateToProps = (state) => ({
  entry: state.entry
});

export default connect(mapStateToProps)(memo(Packages))
