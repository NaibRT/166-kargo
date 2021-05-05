import axios from 'axios';
import React from 'react';
import ReactHtmlParser from "react-html-parser";
import Card from '../components/card/card';
import Main from '../components/main/main';
import Page from '../components/page/page';

export default function OrdersCondition(props) {
    return (
   
        <Page className='bg-bg pt-lg fh'>
            <Main style={{flexBasis:'100%'}}>
                <Card>
                    <Card.Header className='pt-sm ml-sm'/>
                        
                    <Card.Body>
                        {ReactHtmlParser(props.data[3].text)}
                        </Card.Body>
                    </Card>
            </Main>
        </Page>

    )
}
export async function getServerSideProps({locale}) {

        let responce = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}condition?lan=${locale}`);
        return {
          props: {
           data:responce.data
          },
        }
      
      }
