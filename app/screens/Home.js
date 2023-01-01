import React, { useState} from 'react';
import { StatusBar, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import { Container }  from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { ConvertButton } from '../components/ConvertButton';
import  CurrencyList  from './CurrencyList';
import { getConvertedCurrency } from '../Api';

function Home () {
    const [ BASE_CURRENCY, setBASE_CURRENCY] = useState("USD");
    const [ QUOTE_CURRENCY, setQUOTE_CURRENCY] = useState("EUR");
    const [ BASE_PRICE, setBASE_PRICE] = useState(" ");
    const [ QUOTE_PRICE, setQUOTE_PRICE] = useState("0"); 
    const [ LAST_BASE, setLAST_BASE] = useState(BASE_CURRENCY);
    const [ LAST_PRICE, setLAST_PRICE]= useState("0");
    const [ LAST_QUOTE, setLAST_Quote] = useState("0");
    const [ LAST_PRICEQ, setLAST_PRICEQ] = useState(QUOTE_CURRENCY);
    const [showCurrencyList, setShowCurrencyList] = useState(false);
    const [ value , setValue ] = useState("0");

    const handleCurrencySelected = (currency) => {
      if (showCurrencyList === 'base') {
        setBASE_CURRENCY(currency);
      } else {
        setQUOTE_CURRENCY(currency);
      }
      setShowCurrencyList(false);
    }
    

    async function handleConvertCurrency() {
      try {
      const newAmount = await getConvertedCurrency(BASE_CURRENCY, QUOTE_CURRENCY, BASE_PRICE);
      setValue(newAmount);
      } catch (error) {
      console.error(error);
      }
      }

    const handleOptionsPress = () => {
      ToastAndroid.show('Under Construction!!', ToastAndroid.SHORT);
    }
    
    const handleSwapCurrency = () => {
        setBASE_CURRENCY(QUOTE_CURRENCY);
        setQUOTE_CURRENCY(BASE_CURRENCY);
        setQUOTE_PRICE("0");
        setBASE_PRICE(QUOTE_PRICE);
      };
      


    return  (
      <>
        {showCurrencyList ? (
          <CurrencyList
          SelectedCurrency={showCurrencyList === 'base'? BASE_CURRENCY : QUOTE_CURRENCY}
          onCurrencySelected={handleCurrencySelected}
        />
        ) : (
        <Container>
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <Header onPress={handleOptionsPress} />
          <KeyboardAvoidingView behavior="padding">
            <Logo />
            <InputWithButton
              buttonText={ BASE_CURRENCY}
              onPress={() => {
                setShowCurrencyList('base');
              }}
              keyboardType="numeric"
              value={BASE_PRICE}
              onChangeText={text => setBASE_PRICE(text)}
            />
            <InputWithButton
              editable={false}
              buttonText={ QUOTE_CURRENCY}
              onPress={() => { 
                setShowCurrencyList('quote');
              }}
              value={QUOTE_PRICE}
            />
            <LastConverted
              base={ LAST_BASE}
              quote={ LAST_QUOTE}
              basep={LAST_PRICE}
              quotep={ LAST_PRICEQ}
            />
            <ConvertButton
              title="Convert"
              onPress={() => {
                handleConvertCurrency();
                setQUOTE_PRICE(value.toString()); 
                setLAST_BASE(BASE_CURRENCY);
                setLAST_PRICE(BASE_PRICE); 
                setLAST_PRICEQ(QUOTE_PRICE);
                setLAST_Quote(QUOTE_CURRENCY);
              }}
              style={{ backgroundColor: '#e74c3c', marginTop: 20 }}
  />
            <ClearButton onPress={handleSwapCurrency} text="Reverse Currencies" />
          </KeyboardAvoidingView>
        </Container>
      )}
      </>
    );
    }
export default Home;