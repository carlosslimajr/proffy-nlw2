/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import AppStack from './src/routes/AppStack'

export default function App(){

  return(
    <>
      <AppStack/>
      <StatusBar style="light" backgroundColor="#8257E5"/>
    </>
  )
}