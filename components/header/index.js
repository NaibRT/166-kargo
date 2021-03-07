import React from 'react';
import ButtonComponent from '../button';
import {useRouter} from 'next/router';
import {useIntl} from 'react-intl';

const Header =()=>{

   const {locale, locales} = useRouter();
   const router = useRouter();
   const {formatMessage: f} = useIntl();

   const handleLocaleChange=(e)=>{
    const locale =  e.target.value;
    router.push('/','/', {locale})
   }
    return(
    <div className = 'container'>
        <div>  
          <select value={locale} onChange={handleLocaleChange}>
            {locales.map(locale => (
              <option key={locale} value={locale}>
                {locale}
              </option>
            ))}
          </select>
        </div>
         <ul>{f({id:'faq'})}</ul>
            <ButtonComponent label='Daxil ol'/>
        </div>
    )
}

export default Header