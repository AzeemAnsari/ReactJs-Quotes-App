import React from 'react';

import {Loader, QuoteCard, QuoteText, Author } from './Styles';
import LoaderImg from '../images/loader.svg';

const Card = ({ children, cardText, author, errorMsg, loading }) => {
  return (
    <QuoteCard>
      {loading && <Loader><img src={LoaderImg} alt="Azeem Ansari" /></Loader>}
      <QuoteText className={cardText.length > 115 ? 'sm' : cardText.length > 130 ? 'xs' : ''}>{cardText}</QuoteText>
      {errorMsg ? "" : !author ? (
        <Author>- Unknow</Author>
      ) : (
        <Author> - {author}</Author>
      )}
      {children}
    </QuoteCard>
  );
};

export default Card;
