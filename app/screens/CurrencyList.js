import React, { useState } from 'react';
import {
FlatList, StatusBar, View, Text, TextInput,
} from 'react-native';
import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';

const CurrencyList = ({ SelectedCurrency, onCurrencySelected }) => {
const [searchTerm, setSearchTerm] = useState('');
const [data, setData] = useState(currencies);

const handleCurrencyPress = (currency) => {
onCurrencySelected(currency);
};

const handleSearch = (text) => {
setSearchTerm(text);
const filteredData = currencies.filter((item) => item.includes(text));
setData(filteredData);
};

return (
<View>
<StatusBar translucent={false} barStyle="light-content" />
<Text style={{ fontSize: 20, margin: 10 }}>List of Currency</Text>
<TextInput
style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
onChangeText={(text) => handleSearch(text.toUpperCase())}
value={searchTerm}
placeholder="Search for currency"
/>
<FlatList
data={data}
renderItem={({ item }) => (
<ListItem
text={item}
selected={item === SelectedCurrency}
onPress={() => handleCurrencyPress(item)}
/>
)}
keyExtractor={(item) => item}
ItemSeparatorComponent={Separator}
/>
</View>
);
};

export default CurrencyList;