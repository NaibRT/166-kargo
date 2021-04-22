import React from 'react';
import ReactHtmlParser from 'react-html-parser';

function Summary({item}) {
    return (
        <div className='faq-item-contain'>
        <details className='faq-item'>
            <summary className='faq-title'>{item.question}</summary>
            <p className='faq-info'>{ReactHtmlParser(item.answer)}</p>
        </details>
        </div>

    )
}

export default Summary
