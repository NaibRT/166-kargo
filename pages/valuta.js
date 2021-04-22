import React from 'react';
import Card from '../components/card/card'
import Page from '../components/page/page'
import Main from '../components/main/main'
import Input from '../components/input/input';
import { useIntl } from 'react-intl';


let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

export default function Valuta() {
    const { formatMessage: f } = useIntl();
    return (
        <Main className='bg-bg rm-rf'>
            <Page className='p-lg'>
                <Card className="bg-white br-lg mt-md p-md w-100">
                    <p className='valuta__text'>{f({ id: 'converter' })}</p>
                    <Card.Body className='bg-bg br-sm'>
                        <div className='d-flexible'>

                            <div className='bg-white br-lg p-mb val p-lg w-100'>
                                <div>
                                    <Input type='text' className='input__size' />
                                    <div className='today_text'>{today}</div>
                                </div>
                                <select className='select__text'>
                                    <option>USD</option>
                                    <option>TRY</option>
                                </select>

                            </div>

                            <div className='bg-white br-lg valu p-mb m-lf p-lg w-100'>
                                <div>
                                    <Input type='text' className='input__size' />
                                    <div className='today_text'>{today}</div>
                                </div>
                                <select className='select__text'>
                                    <option>TRY</option>
                                    <option>USD</option>
                                </select>

                            </div>

                        </div>
                    </Card.Body>
                </Card>
            </Page>
        </Main>
    )
}
