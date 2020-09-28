import React, { useState, useEffect } from 'react';
import Header from './Header';
import Button from './Button';
import Card from './Card';

import axios from 'axios';

import Logo from '../images/logo.png';

import { GlobalStyles, AppWrapper } from './Styles';

const App = () => {
  const [quote, setQuote] = useState([]);
  const [author, setAuthor] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    setLoading(true);
    setErrorMsg(null);
    axios.get('https://type.fit/api/quotes').then((res) => {
      setLoading(false);
      const random = Math.floor(Math.random() * res.data.length);
      setQuote(res.data[random].text);
      setAuthor(res.data[random].author);

      if (res.data[random].text === undefined) {
        setErrorMsg(true);
      }
    });
  };
  const cardText = loading
    ? 'Loading...'
    : errorMsg
    ? 'Oops! Check your internet connection and try again.'
    : `“${quote}”`;

  return (
    <React.Fragment>
      <AppWrapper>
        <Header Logo={Logo} />
        <Card
          cardText={cardText}
          author={author}
          errorMsg={errorMsg}
          loading={loading}
        >
          <Button
            loading={loading}
            errorMsg={errorMsg}
            fetchQuote={fetchQuote}
          />
        </Card>
      </AppWrapper>
      <GlobalStyles />
    </React.Fragment>
  );
};

export default App;
