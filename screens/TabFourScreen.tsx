import React, { useContext, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { WebSocketContext,WebSocketProvider } from '../components/WebSocketProvider';

export default function OptionsScreen() {
  const { messages } = useContext(WebSocketContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{messages.length ? messages[messages.length - 1] : 'No messages yet'}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/OptionsScreen.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the Options */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});