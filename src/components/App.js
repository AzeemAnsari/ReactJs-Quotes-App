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

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try{
      setLoading(true);
      const res = await axios.get(`https://johndturn-quotableapiproxy.web.val.run/random?maxLength=160`, {
        method: 'GET',
        redirect: 'follow',
      });
      if(!res.status === 200){
        setErrorMsg(true)
      }
      setQuote(`“${res.data[0]?.content}”`);
      setAuthor(res.data[0]?.author);
    }
    catch(err){
      console.log(err.message);
      setErrorMsg(true);
    }
    finally{
      setLoading(false);
  };
  }
  const cardText = errorMsg
    ? 'Oops! Something went wrong, please try again.'
    : quote;

  return (
    <React.Fragment>
      <AppWrapper>
        <Header Logo={Logo} />
        <Card cardText={cardText} author={author} errorMsg={errorMsg} loading={loading}>
          <Button
            loading={loading}
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
