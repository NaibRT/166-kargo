import { router } from "next/router";
import React, { memo } from 'react';
import { connect } from "react-redux";
import AsideMenu from "../components/aside-menu/index";
import Aside from '../components/aside/aside';
import ButtonComponent from "../components/button/index";
import Card from "../components/card/card";
import FromGroup from "../components/form-group/form-group";
import Input from "../components/input/input";
import Main from '../components/main/main';
import Page from "../components/page/page";


function UserInfo(props) {

  if(!props.entry.isLoged){
    router.push('/register');
    return (
        <div style={{height:'100vh'}}></div>
    )
  }


    return (
        <Page className='user-profile-page bg-bg pt-lg'>
            <Aside>
              <AsideMenu/>
            </Aside>
         <Main>
         <Card className='bg-white p-sm br-lg'>
          <Card.Header text='Sexsi melumatlar'/>
          <Card.Body className='bg-bg'>
            <form style={{display:'flex',flexWrap:'wrap'}}>
                <FromGroup label='Ad' bodyClass='bg-white' className='w-50 pr-xs'>
                  <Input type='text' name='name'/>
                </FromGroup>
                <FromGroup label='Soyad' bodyClass='bg-white' className='w-50 pr-xs'>
                  <Input type='text' name='surname'/>
                </FromGroup>
                <FromGroup label='E-mail' bodyClass='bg-white' className='w-50 pr-xs'>
                  <Input type='email' name='email'/>
                </FromGroup>
                <FromGroup label='Telefon' bodyClass='bg-white' className='w-50 pr-xs'>
                  <Input type='tel' name='phone'/>
                </FromGroup>
                <FromGroup label='Sexsiyyet vesiqesinin seriya nomresi' bodyClass='bg-white' className='w-50 pr-xs'>
                  <Input type='text' name='idNumber'/>
                </FromGroup>
                <FromGroup label='FIN' bodyClass='bg-white' className='w-50 pr-xs'>
                  <Input type='text' name='fin'/>
                </FromGroup>
                <FromGroup label='Ad' bodyClass='bg-white' className='w-50 pr-xs'>
                  <Input type='date' name='birthday'/>
                </FromGroup>
                <FromGroup label='Unvan' bodyClass='bg-white' className='w-50 pr-xs'>
                  <Input type='text' name='address'/>
                </FromGroup>
            </form>
          </Card.Body>
          <Card.Footer className='mt-sm' style={{justifyContent:'flex-end'}}>
              <ButtonComponent className='w-25'  label='Melumati yenile'/>
            </Card.Footer>
         </Card>

         <Card className='bg-white p-sm'>
          <Card.Header text='Sifreni yenile'/>
          <Card.Body className='bg-bg'>
            <form style={{display:'flex',flexWrap:'wrap'}}>
                <FromGroup label='Kohne sifre' bodyClass='bg-white' className='w-50 pr-xs'>
                  <Input type='password' name='oldPassword'/>
                </FromGroup>
                <FromGroup label='Yeni sifre' bodyClass='bg-white' className='w-50 pr-xs'>
                  <Input type='password' name='newPassword'/>
                </FromGroup>
                <FromGroup label='Yeni sifreni terkrar' bodyClass='bg-white' className='w-50 pr-xs'>
                  <Input type='password' name='newPasswordAgain'/>
                </FromGroup>
            </form>
          </Card.Body>
          <Card.Footer className='mt-sm' style={{justifyContent:'flex-end'}}>
              <ButtonComponent className='w-25' label='Sifreni deyis'/>
            </Card.Footer>
         </Card>
            </Main>
        </Page>
    )
}

const mapStateToProps = state => ({
  entry: state.entry
})
export default connect(mapStateToProps)(memo(UserInfo))
