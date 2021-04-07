import axios from 'axios';
import Link from 'next/link';
import { memo, useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { connect } from 'react-redux';
import Swal from "sweetalert2";
import ButtonComponent from '../components/button';
import Card from '../components/card/card';
import FromGroup from '../components/form-group/form-group';
import Input from '../components/input/input';
import MainSlider from "../components/main-slider/main-slider";
import NewsItem from '../components/news_item/news-item';
import Page from '../components/page/page';
import MobileRate from '../components/rate/m-rate';
import Rate from '../components/rate/rate';
import Selectbox from "../components/selectbox/selectbox";
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
  const [calculator,setCalculator] = useState({
    weight:'',
    height:'',
    length:'',
    width:'',
    isliquid:false,
    country:'TÜRKİYƏ',
    total: 0.00
  });

  const calculatorInputHandler = (ev) => {
    let {name,value} = ev.target;
    setCalculator({
      ...calculator,
      [name]: value
    })

  }

  const calculatePrize = () => {
     let total;
      let datas =  props.tariffs.filter(x =>
                                     (x.country.toUpperCase()) == (calculator.country.toUpperCase())
                                        && x.is_liquid ==  calculator.isliquid
                                        && (x.weight_min <= parseFloat(calculator.weight) && x.weight_max >= parseFloat(calculator.weight))
                                      );
      if(datas.length > 0){
        if(calculator.height>=80 || calculator.length>=80 || calculator.width>=80 && calculator.weight < 1){
        
          total = (((calculator.width * calculator.height) * calculator.length) / 6000) * datas[0].price;
  
        }else{
          total = calculator.weight * datas[0].price;
        }

            
      setCalculator({
        ...calculator,
        total:total
      })

      }else{
        Swal.fire({
          text: 'Secilen deyerlere uygun tarif tapilmadi'
        })
      }

  }


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
           <div className=' container-fluid pt-sm pb-sm' style={{display:'flex'}}>
           <div className={`slider-container pr-sm ${props.Entry.isLoged && 'w-100'}`}>
             <MainSlider/>
           </div>
           {
             !props.Entry.isLoged &&
             <Card className='login-card bg-white p-sm'>
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
                { Object.keys(props.Entry.errorMessages).length>0 && 
                <div><span className='color-err'>{props.Entry.errorMessages.message}</span></div>
                }
             <ButtonComponent type='submit' className='w-100 mt-xs' label='Daxil ol'/>
             </form>
             <div className='mt-xs'><span>Hesabınız yoxdur?</span><Link href='/register'><span className='color-yellow' style={{cursor:'pointer'}}>Qeydiyyatdan keçin</span></Link></div>
             </Card.Body>
           </Card>
           }
         </div>
           </section>
           <Page>
        <section className='tariff-section'>
          <Card className='mr-sm sm-mob'>
            <Card.Header text={f({ id: 'tariff' })} />
            <Card.Body className='bg-bg p-sm br-sm d-n'>
              <div className='bg-bg rate-container' style={{ display: 'flex',justifyContent:'space-between'}}>
                {
                  <Rate data={props?.tariffs.filter(x => x.country === 'TÜRKİYƏ' && x.is_liquid===0).splice(0,4)} icon={'/assets/icons/turkish.svg'} headerText='TÜRKİYƏ' /> 
                }
                {
                  <Rate data={props?.tariffs.filter(x => x.country === 'TÜRKİYƏ' && x.is_liquid===1).splice(0,4)} icon={'/assets/icons/turkish.svg'} headerText='Türkiyə (Maye)' />
                }
                {
                  <Rate data={props?.tariffs.filter(x => x.country === 'ABŞ' && x.is_liquid===0).splice(0,4)} icon={'/assets/icons/usa.svg'} headerText='ABŞ' style={{marginRight:0}} />
                } 
              </div>
            </Card.Body>
            <Card.Body className='bg-bg p-xs br-sm for-mobile'>
                  <Card.Header></Card.Header>
                 <MobileRate data={data} text='Çəki' />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header text={f({ id: 'calculator' })}/>
            <Card.Body className='bg-bg p-sm br-sm'>
              <form className='calculator-form' style={{display:'flex',flexWrap:'wrap'}}>
              <FromGroup className='w-50 pr-xs' bodyClass='bg-white h-50' label='Olke sec'>
                  <Selectbox className='w-100 m-none' data={[
                    {id:'TÜRKİYƏ',name:'TÜRKİYƏ'},
                    {id:'ABŞ',name:'ABŞ'},
                    {id:'Ukrayna',name:'Ukrayna'}
                  ]}
                     name='country'
                     value={calculator?.country}
                     onChange={calculatorInputHandler}
                  />
                </FromGroup>
              <FromGroup className='w-50 pr-xs' bodyClass=' h-50' label='Maye'>

                  <Switch 
                  name='isliquid'
                  onClick={(e) => {
                    e.target.checked?
                    setCalculator({
                      ...calculator,
                      [e.target.name]:true
                    })
                    :
                    setCalculator({
                      ...calculator,
                      [e.target.name]:false
                    })
                  }}
                  value={calculator?.isliquid}
                  />
              </FromGroup>
                <FromGroup className='w-50 pr-xs' bodyClass='bg-white h-50' label='Ceki (kq)'>
                  <Input type='text'
                     name='weight'
                     value={calculator?.weight}
                     onChange={calculatorInputHandler}
                  />
                </FromGroup>
                <FromGroup className='w-50 pr-xs' bodyClass='bg-white h-50' label='Uzunluq (sm)'>
                  <Input type='text'
                    name='length'
                    value={calculator?.length}
                    onChange={calculatorInputHandler}
                  />
                </FromGroup>
                <FromGroup className='w-50 pr-xs' bodyClass='bg-white h-50' label='EN (sm)'>
                  <Input type='text'
                    name='width'
                    value={calculator?.width}
                    onChange={calculatorInputHandler}
                  />
                </FromGroup>
                <FromGroup className='w-50 pr-xs' bodyClass='bg-white h-50' label='Hundurluk (sm)'>
                  
                  <Input type='text'
                     name='height'
                     value={calculator?.height}
                     onChange={calculatorInputHandler}
                   />
                   
                </FromGroup>
              </form>
              <Card.Footer className='mt-xs'>
                <>
                <div className='w-50 pr-xs' style={{display:'flex',flexDirection:'column'}}>
                  <span className='w-100' style={{fontSize:'11px'}}>Catdirilma qiymeti</span>
                  <strong style={{textAlign:'center',fontSize:'14px'}}>{calculator.total.toFixed(2)}$</strong>
                </div>
                <ButtonComponent 
                  className='w-50' 
                  label='Hesabla' 
                  onClick={calculatePrize}
                />
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
            <Card.Header text={f({ id: 'lastnews' })} endElelment={<Link href='/blog'>Hamsını gör &rsaquo;</Link>} />
            <Card.Body style={{ padding: 0, display: 'flex', flexWrap:'wrap'}}>
              {
                props.news.slice(0,3).map((x,i,arr) =>{
                  return <NewsItem key={x.id} item={x} style={i==(arr.length-1)?{margin:0}:{}}/>
                })
              }
            </Card.Body>
          </Card>
        </section>

        <section className='fluid_bottom w-100'>
          <Card>
            <Card.Header text={f({ id: 'shops' })} endElelment={<Link href=''>Hamsını gör &rsaquo;</Link>} />
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

export async function getStaticProps({locale}) {
  let news = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}news/main?lan=${locale}`);
  let tariffs = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}tariffs?lan=${locale}`);

  return {
    props: {
     news:news.data,
     tariffs:tariffs.data
    },
  }

}

export default connect(mapStateToProp, mapDispatchToProp)(memo(Home))

