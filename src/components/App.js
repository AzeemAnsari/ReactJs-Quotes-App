import React, { useState, useEffect } from 'react';
import Header from './Header';
import Button from './Button';
import Card from './Card';

import axios from 'axios';

import Logo from '../images/logo.png';

import { GlobalStyles, AppWrapper, Footer } from './Styles';

const App = () => {
  const [quote, setQuote] = useState([]);
  const [author, setAuthor] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    let category = ['inspirational','intelligence','knowledge','success'];
    
    setBtnLoading(true);
    setErrorMsg(null);
    axios.get(`https://api.api-ninjas.com/v1/quotes?category=${category[Math.floor(Math.random() * category.length)]}`, {
      method: 'GET',
      headers: { 'X-Api-Key': process.env.REACT_APP_API_KEY},
      contentType: 'application/json',
    }).then((res) => {
      setBtnLoading(false);
      setLoading(false);
      // const random = Math.floor(Math.random() * res.data.length);
      setQuote(res.data[0].quote);
      setAuthor(res.data[0].author);

      if (!res.data) {
        setErrorMsg(true);
      }
    }).catch((err) => {
      console.log(err?.message);
      
    });
  };
  const cardText = errorMsg
    ? 'Oops! Check your internet connection and try again.'
    : loading
    ? 'Loading...'
    : `“${quote}”`;

  return (
    <React.Fragment>
      <AppWrapper>
        <Header Logo={Logo} />
        <Card cardText={cardText} author={author} errorMsg={errorMsg} loading={loading}>
          <Button
            loading={btnLoading}
            setBtnLoading={setBtnLoading}
            errorMsg={errorMsg}
            fetchQuote={fetchQuote}
          />
        </Card>
      </AppWrapper>
      <Footer>&copy; {new Date().getFullYear()} - Azeem Ansari</Footer>
      <GlobalStyles />
    </React.Fragment>
  );
};

export default App;
