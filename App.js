import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Bike from './Bike';
import Detail from './Detail';
import Cart from './Cart'; 

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Bike" component={Bike} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Cart" component={Cart} /> 
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
