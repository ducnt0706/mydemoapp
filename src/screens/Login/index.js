import React, {useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../components/Button';
import VectorIcon from '../../components/VectorIcon';
import {colors, sizes} from '../../constants/styles';
import {checkSession, saveStorage} from '../../helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: sizes.screenWidth - 150,
    backgroundColor: colors.whiteSmoke,
    borderRadius: 16,
    borderColor: colors.transparent,
  },
  alignContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  popupContainer: {
    backgroundColor: colors.white,
    marginHorizontal: 50,
    marginVertical: 30,
    borderRadius: 10,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closePopup: {
    alignSelf: 'flex-end',
  },
  // logo:{
  //   width: 50,
  //   height: 50
  // }
});

const Login = ({openPopup, onPressOpenPopup, onLogin}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleSignIn = () => {
    const {isLogin, msg} = checkSession(userName, password);
    if (isLogin) {
      saveStorage('token', 'fkajhfjhaefjheh4727fj');
      onLogin(true);
      onPressOpenPopup(false);
      setMsg('');
    } else {
      setMsg(msg);
    }
  };

  return (
    <View>
      <Image
        style={styles.logo}
        width={190}
        height={190}
        source={require('../../assets/img/gitlab.png')}
      />
      <Button
        label={'Login'}
        style={{
          paddingVertical: 8,
          marginTop: 24,
          backgroundColor: 'coral',
          borderRadius: 24,
          height: 50,
          width: 190,
        }}
        labelStyle={{
          color: 'white',
        }}
        onPress={() => onPressOpenPopup(true)}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={openPopup}
        onRequestClose={() => {
          onPressOpenPopup(!openPopup);
        }}>
        <View style={styles.modalStyle}>
          <View style={[styles.popupContainer]}>
            <TouchableOpacity
              style={styles.closePopup}
              onPress={() => onPressOpenPopup(!openPopup)}>
              <VectorIcon
                FontAwesome
                name="close"
                size={30}
                color={colors.secondary}
              />
            </TouchableOpacity>
            <View style={styles.alignContainer}>
              <View>
                <Text>Welcome to Demo App</Text>
              </View>
              <View>
                <TextInput
                  value={userName}
                  onChangeText={setUserName}
                  placeholder="user name..."
                  style={styles.inputContainer}
                />
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="password..."
                  style={styles.inputContainer}
                />
              </View>
              <View>
                <Text style={{color: 'red'}}>{msg}</Text>
              </View>
              <Button
                label="G0!"
                style={{
                  paddingVertical: 8,
                  marginTop: 24,
                  backgroundColor: colors.loginBtn,
                  borderRadius: 24,
                  height: 50,
                  width: 150,
                }}
                onPress={handleSignIn}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Login;
