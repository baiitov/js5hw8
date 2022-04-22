import React from 'react';
import CommentWrapper from '../UI/CommentWrapper';
import CommentDate from './CommentDate';
import './ComponentText.css'
const ComponentText = ({text, date}) => {
    return (
        <CommentWrapper className='text'>
            <h3>{text}</h3>
            <CommentDate date={date}/>
        </CommentWrapper>
    );
};

export default ComponentText;