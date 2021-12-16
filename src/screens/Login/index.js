import React, { useState } from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Spacing from '../../components/Spacing';
import Typography from '../../components/Typography';
import VectorIcon from '../../components/VectorIcon';
import { colors, sizes } from '../../constants/styles';
import { checkSession, saveStorage } from '../../helpers';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  inputContainer: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
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
});

const Login = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const handleSignIn = () => {
    const { isLogin, msg } = checkSession(userName, password);
    if (isLogin) {
      saveStorage('token', 'fkajhfjhaefjheh4727fj');
      navigation.navigate('Home');
      setMsg('');
      setOpenModal(false);
    } else {
      setMsg(msg);
    }
  };

  return (
      <View style={styles.rootContainer}>
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
          onPress={() => setOpenModal(!openModal)}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={openModal}
          onRequestClose={() => {
            setOpenModal(!openModal);
          }}>
          <View style={styles.modalStyle}>
            <View style={[styles.popupContainer]}>
              <TouchableOpacity
                style={styles.closePopup}
                onPress={() => setOpenModal(!openModal)}>
                <VectorIcon
                  FontAwesome
                  name="close"
                  size={30}
                  color={colors.secondary}
                />
              </TouchableOpacity>
              <View style={styles.alignContainer}>
                <View>
                  <Typography label="Welcome to Demo App" bold />
                </View>
                <View>
                  <Spacing height={10} />
                  <TextInput
                    value={userName}
                    onChangeText={setUserName}
                    placeholder="user name..."
                    style={styles.inputContainer}
                  />
                  <Spacing height={5} />
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="password..."
                    style={styles.inputContainer}
                  />
                </View>
                <View>
                  <Text style={{ color: 'red' }}>{msg}</Text>
                </View>
                <Button
                  label="G0!"
                  style={{
                    paddingVertical: 8,
                    marginTop: 7,
                    backgroundColor: colors.loginBtn,
                    borderRadius: 24,
                    height: 50,
                    width: 150,
                  }}
                  onPress={handleSignIn}
                  labelStyle={{
                    color: colors.white,
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
  );
};

export default Login;
