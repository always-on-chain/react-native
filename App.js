import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './src/Deck.js';
import DATA from './sample-data.js';

export default class App extends React.Component {
  renderCard(item) {
    return (
      <Card
        key={item.id}
        title={item.text}
        image={{uri: item.uri}}
      >
        <Text style={{marginBottom: 10}}>
          I can customize the card further
        </Text>
        <Button
          backgroundColor="#03A9F4"
          title="View Now!"
        />
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck 
          data={DATA}
          renderCard={this.renderCard}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

