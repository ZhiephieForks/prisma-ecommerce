import React from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, Platform, StyleSheet, ScrollView } from 'react-native';

import Colors from '../../statics/colors';
import Title from '../title/Title';
import NavigationButton from '../navigation-button/NavigationButton';


const Container = (props) => {
  const topBar = (
    <View style={styles.containerTitle}>
      <View>
        {props.navigation && (
          <NavigationButton onPress={() => props.navigation.goBack()} back dark />
        )}
        {props.title && (
          <Title size={22} color={Colors.text}>
            {props.title}
          </Title>
        )}
      </View>
      {props.leftButton}
    </View>
  );

  if (props.asScroll) {
    return (
      <View style={[styles.container, props.containerStyle]}>
        {topBar}
        <ScrollView contentContainerStyle={[styles.subContainer, props.innerStyle]}>
          {props.children}
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={[styles.container, props.containerStyle]}>
      {topBar}
      <View style={[styles.subContainer, props.innerStyle]}>
        {props.children}
      </View>
    </View>
  );
};

Container.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  leftButton: PropTypes.node,
  asScroll: PropTypes.bool,
  innerStyle: PropTypes.object,
  containerStyle: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: Platform.select({
      ios: 20,
      android: StatusBar.currentHeight,
    }),
  },
  subContainer: {
    padding: 15,
  },
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default Container;
