import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    flex:1,
    flexDirection: 'row',
    margin: 10,
    backgroundColor: 'white',
    borderRadius:20,
    borderColor:"#00f",
    padding: 10,
    paddingHorizontal:20,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#00ccff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20
  },
  checkedCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderColor: '#00ccff',
    backgroundColor:'#00ccff'
  }
  ,
  selectButtonContainer: {
    flex:1,
    flexDirection: 'row',
    margin: 10,
    backgroundColor: 'white',
    borderRadius:20,
    padding: 10,
    paddingHorizontal:20,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: '#00ccff',
    borderWidth:2
  },
});

export default styles;
