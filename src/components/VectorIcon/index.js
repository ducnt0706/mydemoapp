import React from 'react';
import {View, Text} from 'react-native';
import MIonicons from "react-native-vector-icons/dist/Ionicons";
import MEntypo from "react-native-vector-icons/dist/Entypo";
import MAntDesign from "react-native-vector-icons/dist/AntDesign";
import MEvilIcons from "react-native-vector-icons/dist/EvilIcons";
import MFontAwesome from "react-native-vector-icons/FontAwesome";
import MFeather from "react-native-vector-icons/dist/Feather";
import MMaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons";
import MMaterialIcons from "react-native-vector-icons/dist/MaterialIcons";
import MFontAwesome5 from "react-native-vector-icons/dist/FontAwesome5";
import MFoundation from "react-native-vector-icons/dist/Foundation";

const VectorIcon = props => {
  const {
    Ionicons,
    Entypo,
    AntDesign,
    EvilIcons,
    FontAwesome,
    Feather,
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome5,
    Foundation,
    ...rest
  } = props;
  switch (true) {
    case Ionicons: {
      return <MIonicons {...rest} />;
    }
    case FontAwesome: {
      return <MFontAwesome {...rest} />;
    }
    case Feather: {
      return <MFeather {...rest} />
    }
  }
  return null;
};

export default VectorIcon;
