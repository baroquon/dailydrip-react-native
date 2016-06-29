import React, { Component, } from 'react'
import { View, Text, StyleSheet, AsyncStorage, } from 'react-native'
import { Actions as RouterActions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import Actions from '../../actions'
import API from '../../api/DailyDripApi'


class MainScreen extends Component {
  static propTypes = {}
  static defaultProps = {
    fetchTopics: function(){}
  }

  componentDidMount(){
    this.props.fetchTopics()
    AsyncStorage.getItem("auth_token")
    .then( (value) =>
          {
            if(!value){
              RouterActions.loginScreen({ type: 'reset' });
            }
        }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to DailyDrip Main Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

let mapStateToProps = function mapStateToProps(state){
  return {}
}

let mapDispatchToProps = function mapDispatchToProps(dispatch){
  return {
    fetchTopics: () => {
        API.getTopics().then((data) => {
          dispatch(Actions.setTopics(data.data.topics))
        })
    }
  }
}

let ConnectedMainScreen = connect(mapStateToProps, mapDispatchToProps)(MainScreen)

//export MainScreen
export default ConnectedMainScreen
