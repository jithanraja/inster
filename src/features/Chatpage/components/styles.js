import { Platform,StyleSheet } from "react-native";

export default StyleSheet.create({
  
  contain: {
  //  paddingTop: 20,
  margin:20,
    fontFamily: 'Lucida sans',
  },

  inputLabel: {
    fontFamily: 'Ubuntu',
    fontSize: 15,
    color: '#231F20',
   // paddingBottom: 8,
    //letterSpacing: 0.4,
    fontWeight:'bold',
    marginTop:10
  },
 
 
  signButton: {
    margin: 20,
    flex:1,
    //borderColor: '#00beed',
    borderRadius: 5,
   // borderWidth: 1,
    backgroundColor: '#EF757B',
    paddingVertical: 15,
    

    
  }
  ,
  cancelText: {
    fontSize: 16,
    fontWeight:'bold',
   // color: '#FFF',
    textAlign: 'center'
  },
  textareaContainer: {
    height: 150,
    padding: 5,
    backgroundColor: '#FFF',
    borderWidth:1,
    borderRadius:10
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
  },

  container:{
    flex:1
  },
  list:{
    paddingHorizontal: 17,
  },
  footer:{
    flexDirection: 'row',
    height:60,
    backgroundColor: '#eeeeee',
    paddingHorizontal:10,
    padding:5,
  },
  btnSend:{
    backgroundColor:"#00BFFF",
    width:40,
    height:40,
    borderRadius:360,
    alignItems:'center',
    justifyContent:'center',
  },
  iconSend:{
    width:30,
    height:30,
    alignSelf:'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    height:40,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    marginRight:10,
  },
  inputs:{
    height:40,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  itemIn: {
    alignSelf: 'flex-start'
  },
  itemOut: {
    alignSelf: 'flex-end'
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
    fontSize:12,
    color:"#808080",
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
    backgroundColor:"#eeeeee",
    borderRadius:300,
    padding:5,
  },
});
