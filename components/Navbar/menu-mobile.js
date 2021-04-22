import Link from 'next/link';
import { useRouter } from 'next/router';
import React,{useRef, memo} from "react";
import { useIntl } from 'react-intl';
import styled from "styled-components";
import Divider from '../divider/divider';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  height: 80vh;
    text-align: left;
    padding: 15px;
    z-index: 1000;
    position: absolute;
    width:82%;
    top: 60px;
    opacity:1;
  left: 0;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-600%)")};
  transition: transform 0.3s ease-in-out ;
  @media (max-width: 576px) {
    width: 85%;
  }

 
`;
const Overlay = styled.div`
      transition: transform 0.3s ease-in-out ;
       position:absolute;
       top:60px;
       right:0;
       left:0;
       display: ${({ open }) => (open ? "block" : "none")};
       background: rgba(24, 22, 22, 0.5);  
       width: 100%;
       z-index:90;
       height:100%
`

const MenuMobile = ({ open,setOpen }) => {

  const { locale, locales,asPath } = useRouter();
  const router = useRouter();
  const { formatMessage: f } = useIntl();
  const navMobilItemRefs = useRef([]);

  const handleLocaleChange = (e) => {
        let locale = e.currentTarget.getAttribute('data-value');
        router.push(`${asPath}`, `${asPath}`, { locale });
        setOpen(false);
    }

    const addNavItems = (ref) => {
     if(ref && !navMobilItemRefs.current.includes(ref)){
       navMobilItemRefs.current.push(ref)
     }
   }
    const navItemHandler = (e) => {
        navMobilItemRefs.current.forEach(x => x.children[0].classList.remove('nav-item-active'));
        e.target.classList.add('nav-item-active');
        setOpen(!open);
    }

  return (
    <>
    <Overlay open={open}
     onClick={() => {
      setOpen(!open)
     }}
    ></Overlay>
      <StyledMenu  open={open}>
        <ul className='top__header-menu'>
          <li onClick={navItemHandler} ref={addNavItems}>
            <Link href='/search'><a>
            {f({ id: 'search' })}
      </a></Link>
          </li>
          <Divider/>
          <li onClick={navItemHandler} ref={addNavItems} >
            <Link href='/faq'><a>{f({ id: 'faq' })}</a></Link>
          </li>
          <Divider/>
          <li onClick={navItemHandler} ref={addNavItems}>
            <Link href='/about'><a>{f({ id: 'about' })}</a></Link>
          </li>
          <Divider/>
          <li onClick={navItemHandler} ref={addNavItems}>
            <Link href='/tarif'><a>{f({ id: 'tariff' })}</a></Link>
          </li>
          <Divider/>
          <li onClick={navItemHandler} ref={addNavItems}>
            <Link href='/example-shop'><a>{f({ id: 'examples' })}</a></Link>
          </li>
          <Divider/>
          <li onClick={navItemHandler} ref={addNavItems}>
            <Link href='/blog'><a>{f({ id: 'blog' })}</a></Link>
          </li>
          <Divider/>
          <li onClick={navItemHandler} ref={addNavItems}>
            <Link href='/contact'><a>{f({ id: 'contact' })}</a></Link>
          </li>
          <Divider/>
          <li>
            <Link href='' style={{marginBottom:'15px'}}><a> {f({ id: 'clang' })}</a></Link>
            <div className='lang'>
              <figure onClick={handleLocaleChange} data-value='az' >
                <img src={'assets/icons/az.svg'} />
                <figcaption>AZ</figcaption>
              </figure>
              <figure onClick={handleLocaleChange} data-value='en'>
                <img src={'assets/icons/eng.svg'} />
                <figcaption>ENG</figcaption>
              </figure>
              <figure onClick={handleLocaleChange} data-value='ru'>
                <img src={'assets/icons/rus.svg'} />
                <figcaption>RU</figcaption>
              </figure>
              <figure>
                <img src={'assets/icons/18.svg'} />
                <figcaption>UA</figcaption>
              </figure>
            </div>
          </li>
        </ul>
      </StyledMenu>
    </>
  );
};

export default memo(MenuMobile);
