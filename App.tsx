import React, { Component } from 'react';
import { Text, View } from 'react-native';

import MainStack from "@src/stack/mainStack";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainTab = createBottomTabNavigator();

function HomeScreen()
{
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}
function MainTabs()
{
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="농사박사2" component={HomeScreen} />
    </MainTab.Navigator>
  );
}
function MyStack()
{
  return (
    <Stack.Navigator>
      <Stack.Screen name="농사박사" component={MainStack} />
    </Stack.Navigator>
  );
}

export default class App extends React.Component<any, any>
{
  timer: any;

  constructor(props: any)
  {
    super(props);
  }

  componentDidMount()
  {
    /**
     * 1. 로그인정보를 찾는다 -> this.
     */

    /**
     * 2. 로그인정보가 없으면 -> ~/src/scenes/login.tsx
     *    로그인정보가 있으면 -> this.fetchSigninTokenCheck()
     */
    // this.timer = setTimeout(() => { }, 2000);

  }

  fetchSigninTokenCheck()
  {

  }

  render(): React.ReactNode
  {
    return (
      <NavigationContainer>
        <MyStack />
        <MainTabs />
      </NavigationContainer>);
  }
}