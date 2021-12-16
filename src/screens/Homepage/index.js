import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../../components/Card';
import Spacing from '../../components/Spacing';
import Typography from '../../components/Typography';
import Icon from '../../components/VectorIcon';
import { ASSESSMENTS_DATA, CHALLENGE_DATA } from '../../constants';
import { colors } from '../../constants/styles';
import { clearStorage } from '../../helpers';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg,
    flex: 1,
  },
  itemChallenge: {
    width: 200,
    height: 470,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemChallengeImage: {
    width: 160,
    height: 160,
  },
  itemChallengeContent: {
    height: 230,
  },
  itemAssessment: {
    width: 300,
    height: 160,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  itemAssessmentImage: {
    width: 100,
    height: 136,
  },
  rowContainer: {
    flexDirection: 'row',
  },

  title1: {
    fontWeight: 'bold',
    fontSize: 32,
    color: colors.primary,
  },
  textDisable: {
    color: colors.textDisabled,
  },
});

const renderChallengeItem = ({ item }) => {
  const { title, point, deadLine, image } = item;
  return (
    <Card style={styles.itemChallenge}>
      <Image
        style={styles.itemChallengeImage}
        source={{ uri: image }}
        resizeMode="cover"
      />
      <View style={styles.itemChallengeContent}>
        <Typography label={title} size={17} bold />
        {deadLine && (
          <Typography color={colors.textDisabled}>
            {`${deadLine} days left`}
          </Typography>
        )}
      </View>
      <View style={styles.rowContainer}>
        <View style={{ width: '80%' }}>
          <Typography label={'Earn up to'} />
          <Typography color={colors.textPoints} bold>
            {point}{' '}
            <Typography color={colors.textDisabled} normal>
              pts{' '}
            </Typography>
          </Typography>
        </View>
        <View style={{ alignSelf: 'flex-end' }}>
          <Icon Feather name="arrow-right" size={30} color={colors.tertiary} />
        </View>
      </View>
    </Card>
  );
};

const renderAssessmentItem = ({ item }) => {
  const { title, point, image } = item;
  return (
    <Card style={styles.itemAssessment}>
      <View>
        <Image
          style={styles.itemAssessmentImage}
          source={{ uri: image }}
          resizeMode="cover"
        />
      </View>
      <View style={{ marginLeft: 10 }}>
        <View style={{ height: '60%', width: '80%' }}>
          <Typography label={title} size={17} bold />
        </View>
        <View style={[styles.rowContainer]}>
          <View style={{ width: '65%' }}>
            <Typography label={'Earn up to'} />
            <Typography color={colors.textPoints} bold>
              {point}{' '}
              <Typography color={colors.textDisabled} normal>
                pts{' '}
              </Typography>
            </Typography>
          </View>
          <View style={{ alignSelf: 'flex-end' }}>
            <Icon
              Feather
              name="arrow-right"
              size={30}
              color={colors.tertiary}
            />
          </View>
        </View>
      </View>
    </Card>
  );
};

const Homepage = ({ navigation }) => {
  const handleLogout = () => {
    clearStorage('token');
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Spacing height={20} />
        <Typography
          label="Assessments"
          bold
          color={colors.primary}
          size={28}
          style={{ marginLeft: 20 }}
        />
        <FlatList
          data={ASSESSMENTS_DATA}
          renderItem={renderAssessmentItem}
          keyExtractor={item => item.id}
          horizontal
        />
        <Spacing height={20} />
        <Typography
          label="Challenges"
          bold
          color={colors.primary}
          size={28}
          style={{ marginLeft: 20 }}
        />
        <FlatList
          data={CHALLENGE_DATA}
          renderItem={renderChallengeItem}
          keyExtractor={item => item.id}
          horizontal
        />
        {/* <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Button
            label="Sign out"
            style={{
              paddingVertical: 8,
              marginTop: 24,
              backgroundColor: 'grey',
              borderRadius: 24,
              height: 50,
              width: 150,
            }}
            onPress={handleLogout}
          />
        </View> */}
        <Spacing height={20} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homepage;
