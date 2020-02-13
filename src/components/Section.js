import React from 'react';

function Section({title, header, children}) {
    const { FeedbackOptions, Statistics } = children;
    return (
        <section>
            <h1>{header}</h1>
            {FeedbackOptions}
            <h2>{title}</h2>
            {Statistics}
        </section>
    )
}

export default Section;