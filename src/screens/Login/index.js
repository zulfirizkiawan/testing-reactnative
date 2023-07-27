import {
  Animated,
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../../components/molecules/Card';
import {useDispatch, useSelector} from 'react-redux';
import {getProductData} from '../../redux/action/beranda';

const Login = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const {product} = useSelector(state => state.berandaReducer);

  const animatedValues = product.map(() => new Animated.Value(0));

  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getProductData());
    setRefreshing(false);
  };

  useEffect(() => {
    animateCards();
  }, [product]);

  const animateCards = () => {
    Animated.stagger(
      100,
      animatedValues.map(value =>
        Animated.timing(value, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ),
    ).start();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Text>Coba refresh</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {product.map((item, index) => {
          const translateY = animatedValues[index].interpolate({
            inputRange: [0, 1],
            outputRange: [100, 0],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View key={item.id} style={{transform: [{translateY}]}}>
              <Card
                userId={item.userId}
                title={item.title}
                onPress={() => navigation.navigate('Detail', {item})}
              />
            </Animated.View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 17,
    backgroundColor: '#f0f0f0',
  },
});

export default Login;
