import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, ActivityIndicator} from 'react-native';
import {getStorage} from './helpers';
import Homepage from './screens/Homepage';
import Login from './screens/Login';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from './constants/styles';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  const [openPopup, setOpenPopup] = useState(false);
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
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar barStyle="dark-content" translucent hidden={!isLogin} />
      {appLoading ? (
        <ActivityIndicator size="large" color={colors.loading} />
      ) : isLogin ? (
        <Homepage onLogin={setIsLogin} />
      ) : (
        <Login
          openPopup={openPopup}
          onPressOpenPopup={setOpenPopup}
          onLogin={setIsLogin}
        />
      )}
    </SafeAreaView>
  );
};

export default App;
