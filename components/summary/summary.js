import React from 'react';
import ReactHtmlParser from 'react-html-parser';

function Summary({item}) {
    return (
        <details className='faq-item'>
            <summary className='faq-title'>{item.question}</summary>
            <p className='faq-info'>{ReactHtmlParser(item.answer)}</p>
        </details>
    )
}

export default Summary
