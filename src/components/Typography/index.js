import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, sizes} from '../../constants/styles';

const styles = StyleSheet.create({
  normal: {
    fontWeight: 'normal',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  underline: {
    textDecorationLine: 'underline',
  },
});

const Typography = props => {
  const {
    label = '',
    style = {},
    color = colors.primary,
    size = sizes.textDefault,
    children,
    bold = false,
    italic = false,
    normal = false,
    underline = false,
    ...rest
  } = props;

  return (
    <Text
      {...rest}
      style={[
        style,
        bold && styles.bold,
        italic && styles.italic,
        normal && styles.normal,
        underline && styles.underline,
        {color: color, fontSize: size},
      ]}>
      {children || label}
    </Text>
  );
};

export default Typography;
