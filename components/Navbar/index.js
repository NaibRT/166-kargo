import Link from 'next/Link';
import {useIntl} from 'react-intl';
import Image from 'next/image';
import {useRouter} from 'next/router';
import Button from '../button'

 const Navbar = ()=>{
      
    // const {locale, locales} = useRouter();
     
    const {locale, locales} = useRouter();
    const router = useRouter();
    const {formatMessage: f} = useIntl();
 
    const handleLocaleChange=(e)=>{
     const locale =  e.target.value;
     router.push('/','/', {locale})
    }
     return(
         <div>
            <div className='bg'>
                <div className='container-fluid'>
 {/*Top menu starts*/}
        <nav className='top__header'>
        <ul className='top__header-left'>
            <li>
                <Link href='/'><a>{f({id:'faq'})}</a></Link>
            </li>
            <li>
                <Link href='/'><a>{f({id:'calculator'})}</a></Link>
            </li>
            <li>
                <Link href='/'><a>{f({id:'converter'})}</a></Link>
            </li>
            <li>
                <Link href='/'><a>{f({id:'contact'})}</a></Link>
            </li>
            <li>
                 <Link href='/'><a>{f({id:'whereis'})}</a></Link>
            </li>
        </ul>
        <ul className='top__header-right'>
            <li>
                <Link href='/'><a>{f({id:'signup'})}</a></Link>
            </li>
            <li>
                <Link href='/'><a className='text__decoration'><Button style={{marginTop:'-10px'}} label={f({id:'signin'})} startElement={<Image src={'/user.svg'} width={18} height={16}/>} /></a></Link>
            </li>
        </ul>
        
        
    </nav>
{/*Top menu ends*/}
                </div>
            </div>
         
        
            <div className='container-fluid'>
   
    <nav className='flex'>
        <ul className='navbar'>
            <li className='navbar__item'>
              <Link href='/'><a><Image src={'/166ye.svg'}  width={149} height={55}/></a></Link>
            </li>

            <li className='navbar__item'>
                <Link href='/'><a>{f({id:'about'})}</a></Link>
            </li>

            <li className='navbar__item'>
            <Link href='/'><a>{f({id:'addresses'})}</a></Link>
            </li>

            <li className='navbar__item'>
            <Link href='/'><a>{f({id:'examples'})}</a></Link>
            </li>

            <li className='navbar__item'>
            <Link href='/'><a>{f({id:'prices'})}</a></Link>
            </li>

            <li className='navbar__item'>
            <Link href='/'><a>{f({id:'blog'})}</a></Link>
            </li>

            <li className = 'navbar__item dies'>
            <select className='navbar__item_lang' value={locale} onChange={handleLocaleChange}>
            {locales.map(locale => (
              <option key={locale} value={locale}>
                {locale}
              </option>
            ))}
          </select>
         {/* <span><Image src={'/arr.svg'} width={11} height={6} className='img'/></span>*/}
            </li>

        </ul>

          <span>
              <Image src={'/call.svg'} width={28} height={28}/>
              <span className='call'>*0166</span>
          </span>
    </nav>
 </div> 
    
                
         </div>
 )
  
}

export default Navbar;