import * as React from 'react';

import { ReactNode, ReactPropTypes } from 'react';

import MainStack from "@src/stack/mainStack";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function MyStack()
{
  return (
    <Stack.Navigator>
      <Stack.Screen name="농사박사" component={MainStack} />
    </Stack.Navigator>
  );
}