# Currency Converter (react-native)


## How to run
- Install nodejs
- Install react-native globally (npm i -g react-native)
- Install XCode or Android Studio
- cd appFolder
- npm install
- npx react-native run-android or npx react-native run-ios



This project contains react-native application to convert currencies with following features:

## Screens:

### Home
Home screen contains an animated logo showing base currency and target currency and two currency fields.
Writing in one input and Press Convert Button then 2nd input shows converted value for target currency. User can switch base and target currencies by clicking the reverse currencies button present below convert button . Every input field has a Custom Button which shows selecetd currency. On clicking/toching that Button, Currencies List screen is shown.

<p align="center">
<img width="300px" src="https://user-images.githubusercontent.com/85778092/210179626-82cd74d5-a0ec-4963-b81a-4a01d60b79e0.png" alt="Home Screen"  />
</p>


### Currencies List
Currencies List screen contains all currencies supported by the currency api to fetch currencies exchange rates. 
One Search box is also present by using which you can search any currency.

Api url: https://api-ninjas.com/api/convertcurrency

<p align="center">
<img width="300px" src="https://user-images.githubusercontent.com/85778092/210179685-63f325c2-c83d-42da-9261-1eec00634a21.png" alt="Home Screen"  />
</p>

## Warning 
If Api is little slow so you may get the correct output by pressing the convert button 2-3 times.

## Testing & Code Coverage
This is a work in progress.
