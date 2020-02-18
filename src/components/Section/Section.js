import React from 'react';
import Notification from '../Notification';

function Section({title, children}) {
    return (
        <section>
            <h2>{title}</h2>
            <Notification message = 'No feedback given' />
            {children ? children : 'fdfdfdf'}
        </section>
    )
}

export default Section;