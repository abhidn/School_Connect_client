import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/bookCard.css';

const BookCard = (props) => {
    const book = props.book;
    
    return (
        <div className="card-container">

            <a href={book.link} target="_blank"> <img src={book.imageLink} alt="image" width="200" /></a>

            <div className="desc">
                <a href={book.link} target="_blank" className='book_link'><h2>{book.title}</h2></a>

                <h3>{book.Std}</h3>
                <p>{book.Medium}</p>
            </div>
        </div>
    )
};

export default BookCard;