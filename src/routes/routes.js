import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import RD1 from './RD1';
import Splash from '../pages/Splash';

const Stack = createStackNavigator();

export default function Routes(){
  return(
    
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
  <Stack.Screen
        name="Splash"
        component={Splash}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
      />
       <Stack.Screen
        name="RD1"
        component={RD1}
        
      />
    </Stack.Navigator>

  )
}