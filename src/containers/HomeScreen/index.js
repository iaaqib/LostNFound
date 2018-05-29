import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'

import CustomButton from '../../components/CustomButton'

/**
 * Just a centered logout button.
 */
export default class HomeScreen extends Component {
  static propTypes = {
    logout: PropTypes.func
  }

  render () {
    return (
      <View style={styles.container}>
        <CustomButton
          text={'Logout'}
          onPress={this.props.logout}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#4DB6AC',
    margin: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
})
