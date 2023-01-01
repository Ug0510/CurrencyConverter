import axios from 'axios';

async function getConvertedCurrency(have, want, amount) {
  const options = {
    method: 'GET',
    url: 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency',
    params: { have, want, amount },
    headers: {
      'X-RapidAPI-Key': 'aa6d6c492cmshbd3b8428fe19a1dp1ef501jsn66fa7e80cf01',
      'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data.new_amount;
  } catch (error) {
    console.error(error);
    return error;
  }
}

module.exports = { getConvertedCurrency };
