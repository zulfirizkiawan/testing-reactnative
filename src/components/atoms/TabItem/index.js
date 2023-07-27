import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  ICakunActive,
  ICakunNonActive,
  IChomeActive,
  IChomeNonActive,
  ICpesananActive,
  ICpesananNonActive,
} from '../../../assets';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Beranda') {
      return active ? <IChomeActive /> : <IChomeNonActive />;
    }
    if (title === 'Pesanan') {
      return active ? <ICpesananActive /> : <ICpesananNonActive />;
    }
    if (title === '  Akun   ') {
      return active ? <ICakunActive /> : <ICakunNonActive />;
    }
    return <IChomeActive />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontSize: 12,
    color: active ? '#3c71c7' : '##d2d4d6',
    marginTop: 3,
  }),
});
