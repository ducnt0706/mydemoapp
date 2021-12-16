import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
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
      setAppLoading(true);
      const token = await getStorage('token');
      if (token) {
        setIsLogin(true);
      }
      setAppLoading(false);
    } catch (error) {
      console.log('Error');
    }
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" translucent hidden={!isLogin} />
      {appLoading ? (
        <ActivityIndicator size="large" color={colors.loading} />
      ) : (
        <Navigation initialRouteName={isLogin ? 'Home' : 'Login'} />
      )}
    </SafeAreaProvider>

  );
};

export default App;
