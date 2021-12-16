import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from './constants/styles';
import { getStorage } from './helpers';
import Navigation from './navigations';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const token = await getStorage('token');
      if (token) {
        setIsLogin(true);
      }
      setAppLoading(false);
    } catch (error) {
      console.log('Error');
    }
  };

  if (appLoading) {
    return <SafeAreaView style={{ flex: 1, justifyContent: 'center' }} >
      <ActivityIndicator size="large" color={colors.loading} />
    </SafeAreaView>
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" translucent hidden={!isLogin} />
      <Navigation initialRouteName={isLogin ? 'Home' : 'Login'} />
    </SafeAreaView>
  );
};

export default App;
