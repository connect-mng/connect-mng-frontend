import React from 'react';
import "./ImpactDetailBox.css"

type DetailBoxProps = {
    heading: string;
    content: string;
    backgroundcolor: string;
};

export function DetailBox({heading, content, backgroundcolor} : DetailBoxProps) {
    return(
        <div className='impactDetailBox'>
            <div className='statTitle'>{heading}</div>
            <div className='statLabel'>{content}</div>
        </div>
    )
};
