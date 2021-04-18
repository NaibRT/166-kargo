import Link from 'next/link';
import React from 'react';
import { useIntl } from 'react-intl';
import Card from '../components/card/card';
import Main from '../components/main/main';
import Page from '../components/page/page';

export default function Shop() {

    const { formatMessage: f } = useIntl();

    return (
        <div className='h-100'>
            <Main className='bg-bg'>
                <Page>
                    <Card className="bg-white br-lg mt-md p-md" style={{width:'100%'}}>
                        <div >
                        <h3 className='mb-md'>{f({id:'example-shop'})}</h3>
                            <Card.Body className='bg-bg mb-md br-sm'>
                            <h3 style={{textAlign:'center'}} className='mb-md'><span className='color-yellow mr-xs'>{f({id:'from-turkey'})}</span>{f({id:'example-shop'}).toLowerCase()}</h3>
                          
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
                                </div>
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
                                </div>
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
                                </div>

                            </Card.Body>
                            <Card.Body className='bg-bg mb-md br-sm'>
                                <div >
                                    <h3 style={{textAlign:'center'}} className='mb-md'><span className='color-yellow mr-xs'>{f({id:'from-USA'})}</span>{f({id:'example-shop'}).toLowerCase()}</h3>
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
                                    </div>
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
                                </div>
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
                                </div>
                                </div>
                            </Card.Body>
                        </div>

                    </Card>
                </Page></Main>

        </div>
    )
}
