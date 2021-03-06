import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  Linking,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SettingItem from '../components/SettingItem';
import menus from '../constants/menus';
import mainStyles from '../styles/components/_Main';
import styles from '../styles/containers/_About';
import colors from '../styles/common/_colors';
import * as configs from '../config';

export default class About extends Component {
  static navigationOptions = {
    title: menus.about.title
  }

  render() {
    let { navigation } = this.props;

    return (
      <ScrollView style={[mainStyles.container, styles.container]}>
        <View style={styles.top}>
          <Image
            style={styles.logo}
            source={require('../images/new_logo.png')} />
        </View>
        <Text style={[styles.information, styles.text]}>
          清水河畔 {configs.VERSION}
        </Text>
        <Text style={[styles.information, styles.text]}>
          Powered by React Native with Redux
        </Text>
        <View style={styles.group}>
          <SettingItem
            text='去商店评分'
            onPress={() => Linking.openURL(configs.APP_STORE)} />
          <SettingItem
            style={styles.lastItem}
            text='BUG 上报或意见反馈'
            onPress={() => navigation.navigate('PrivateMessage', {
              userId: configs.AUTHOR_ID
            })} />
        </View>
        <View style={styles.group}>
          <SettingItem
            text='关于作者'
            onPress={() => Linking.openURL(configs.AUTHOR_URL)} />
          <SettingItem
            text='关注源码'
            onPress={() => Linking.openURL(configs.SOURCE_URL)} />
          <SettingItem
            text='常见问题'
            onPress={() => Linking.openURL(configs.FAQ_URL)} />
        </View>
      </ScrollView>
    );
  }
}
