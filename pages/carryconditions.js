import React from 'react'
import Card from '../components/card/card'
import Page from '../components/page/page'
import Main from '../components/main/main'
import axios from 'axios';
import ReactHtmlParser from "react-html-parser";

export default function OrdersCondition(props) {
    return (
   
        <Page className='bg-bg pt-lg fh'>
            <Main style={{flexBasis:'100%'}}>
                <Card>
                    <Card.Header className='pt-sm ml-sm' text={`${props.data[2].condtion}`} />
                        
                    <Card.Body>
                        {ReactHtmlParser(props.data[2].text)}
                        </Card.Body>
                    </Card>
            </Main>
        </Page>

    )
}
export async function getStaticProps({locale}) {

        let responce = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}condition`);
        return {
          props: {
           data:responce.data
          },
        }
      
      }
