import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';




interface Props {
  children: React.ReactNode;
}

const DefaultPage: React.FC<Props> = ({ children }) => {
  return (
        <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.content}>{children}</View>
      
    </View>
  );
};

export default DefaultPage;