import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Avatar from './Avatar';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/components/_RewardList';

export default class RewardList extends Component {
  render() {
    let {
      reward: {
        score,
        userNumber,
        userList,
        showAllUrl
      },
      currentUserId,
      navigation
    } = this.props;

    return (
      <View style={styles.reward}>
        <View style={styles.rewardHeader}>
          <Text style={styles.rewardHeaderText}>
            {`共 ${userNumber} 人评分${score.map(({ info, value }) => {
              if (value >= 0) {
                value = `+${value}`;
              }

              return `， ${info} ${value}`;
            })}`}
          </Text>
        </View>
        <View style={styles.rewardUserList}>
          {userList.map((user, index) => {
            return (
              <Avatar
                key={index}
                style={styles.rewardUser}
                url={user.userIcon}
                userId={user.uid}
                currentUserId={currentUserId}
                userName={user.userName}
                navigation={navigation} />
            );
          })}
          <Icon
            style={[styles.rewardUser, styles.more]}
            name='ellipsis-h'
            size={14}
            onPress={() => navigation.navigate('WebPage', {
              url: showAllUrl,
              title: '全部评分'
            })} />
        </View>
      </View>
    );
  }
}
