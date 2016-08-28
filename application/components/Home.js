import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const route = {
  type: 'push',
  route: {
    key: 'about',
    title: 'About'
  }
}

const Home = ({_handleNavigate}) => (
  <View style={styles.container}>
  </View>
)

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 22,
    textAlign: 'center'
  },
  container: {
    paddingTop: 60
  }
})

export default Home;
