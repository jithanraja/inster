import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const RadioButton = (props: any) => {

  const select = (value: any) => {
    props.onSelecting(value);
  }

  const { buttonContainer, circle, checkedCircle,selectButtonContainer } = styles;

  return (
    <View style={props.selected === props.value?selectButtonContainer:buttonContainer}>
      <TouchableOpacity
        style={circle}
        onPress={() => select(props.value)}
      >
        { props.selected === props.value && (<View style={checkedCircle} />) }
      </TouchableOpacity>
	  <TouchableOpacity
        onPress={() => select(props.value)}
      >
      <Text style={{fontSize:14, color: '#2a3845', textAlign: 'left' }}>{props.label}</Text>
	  </TouchableOpacity>
    </View>
  )
}

export default RadioButton;
