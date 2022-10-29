import { Platform,StyleSheet } from "react-native";

export const loginStyle= StyleSheet.create({

  container: {
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 100,
    top: 0,
    flex:1
  },
  contain: {
    paddingTop: 20,
    fontFamily: 'Lucida sans',
  },
  input: {
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    marginBottom: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#EF757B',
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderRadius: 5
  },
  inputPassword:{
    fontWeight: 'bold',
    marginBottom: 15,
    paddingHorizontal: 20,
    ...Platform.select({
        ios: {paddingVertical: 10},
        android: {paddingVertical: 0},
         }),
    borderColor: '#EF757B',
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderRadius: 5
  },
  errors:{
    color:'#f00',
    marginBottom: 10,
   // alignSelf: 'center',
    fontSize: 12,
    marginLeft:20,
   
  },

  inputLabel: {
    fontFamily: 'Ubuntu',
    fontSize: 15,
    color: '#231F20',
    paddingBottom: 8,
    letterSpacing: 0.4,
   
  },
  title: {
    fontFamily: "Open Sans",
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
  
    letterSpacing: 0.4,
  },
  subPageTitle: {
    flex: 1,
    color: '#2d3947',
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 0.4,
  },
  selectWrap: {
    borderBottomWidth: 1,
    borderBottomColor: '#d0d9e6'
  },
  formLabel: {
    fontSize: 15,
    color: '#000000',
    paddingBottom: 20,
    letterSpacing: 0.4,
    lineHeight: 22
  },
  selectField: {
    flex: 1,
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  select: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textAreaContainer: {
    padding: 5,
    borderColor: '#d8dcdd',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
  },
  textArea: {
    textAlignVertical: "top",
    height: 30,
    // justifyContent: 'flex-start',
  },
  btnWrap: {
    textAlign: 'center',
    paddingVertical: 15
  }
  ,
  btnsign: {
    textAlign: 'center',
    //paddingVertical: 15,
    flexDirection:"row",
    marginTop:10
  },
  snapWrap: {
    alignItems: 'center'
  },
  snapBtn: {
    width: 40,
    height: 40,
    borderRadius: 40,
    borderColor: '#00ccff',
    borderWidth: 1,
  },
  snapIcon: {
    color: '#00ccff',
    position: 'relative',
    top: 7,
    left: 4,
  },
  saveButton: {
    marginTop: 15,
    borderColor: '#00beed',
    borderRadius: 40,
    borderWidth: 1,
    backgroundColor: '#00ccff',
    paddingVertical: 15
  },
  saveText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center'
  },
  cancelButton: {
    marginTop: 20,
    borderColor: '#00beed',
    borderRadius: 0,
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 15,
  },
  signButton: {
    marginTop: 20,
    flex:1,
    //borderColor: '#00beed',
    borderRadius: 5,
   // borderWidth: 1,
    backgroundColor: '#fe6e00',
    paddingVertical: 15,
    

    
  },
  signInButton: {
    marginTop: 20,
    flex:1,
    //borderColor: '#00beed',
    borderRadius: 5,
   // borderWidth: 1,
    backgroundColor: '#58a758',
    paddingVertical: 15,
    

    
  },
  cancelText: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center'
  },

  homeBtn: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#0a0000',
    borderWidth: 1,
    position: 'absolute',
    right: 20,
    top: 20,
  },
  subContainer: {
    paddingHorizontal: 20,
    paddingVertical: 60,
  },
  homeIcon: {
    color: '#ffffff',
    position: 'relative',
    top: 4,
    left: 5,
  },
  titleWrap: {
    flexDirection: 'row'
  },
  createLink: {
    fontSize: 12,
    color: '#00beed',
    paddingTop: 12,
  },
  tabWrap: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tab: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  tabItem: {
    color: '#3c3c3c',
    textAlign: 'left'
  },
  tabItemStall: {
    color: '#3c3c3c',
    textAlign: 'left',
    paddingLeft: 18,
  },
  tabItemActive: {
    color: '#000000',
  },
  listItem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: '#c9cacc',
  },
  listDateWrap: {
    flexDirection: 'row',
  },
  stallWrap: {
    flex: 1,
    flexDirection: 'row',
  },
  highlightCircle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#00ccff',
    marginRight: 2,
    position: 'relative',
    top: 4,
  },
  stallText: {
    fontSize: 11, color: '#545454', lineHeight: 18,
  },
  date: {
    flex: 1,
    textAlign: 'right',
    fontSize: 11,
    color: '#545454',
    lineHeight: 18,
  },
  listPara: {
    fontSize: 11,
    color: '#545454',
    paddingTop: 6,
    lineHeight: 16,
  },
  author: {
    fontSize: 12,
    color: '#b9bfc1',
    lineHeight: 18,
  },
  bold: {
    fontWeight: 'bold',
  },
  noteBg: {
    alignSelf: 'flex-start',
    lineHeight: 24,
    paddingTop: 3,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#f2f7fb',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 20,
  },
  note: {
    fontSize: 10,
    textAlign: 'center',
    position: 'relative',
    top: -2,
    color: '#3c3c3c',
  },
  button: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20
  },
  checkedButton: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#04549b'
  },
  noteFormWrap: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,

  },
  fieldWrap: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 3,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginRight: 10,
  },
  calendarIcon: {
    color: '#c9cacc',
  },
  closeIcon: {
    color: '#00ccff',
  },
  noteInput: {
    height: 36,
    borderColor: 'white',
    borderWidth: 1
  },
  calendarIconWrap: {
    position: 'absolute',
    top: 12,
    right: 10,
  },
  closeIconWrap: {
    position: 'absolute',
    top: 14,
    right: -20,
  },
  icon: {
    alignSelf:"center",
    position: 'absolute', 
    right: 10
},
buttons: {
  justifyContent: 'center',

  marginTop: 20,
  marginBottom: 30,
},
forgotBotton:{
  marginTop:10,
  justifyContent:"center",
  
},
forgortText:{
  fontFamily:"Roboto",
  textAlign:"center",
  textDecorationLine: 'underline',
  color:"#EF757B"
}
});


export const iconStyles = {
	borderRadius: 5,
	iconStyle: {
		paddingVertical: 9,
		marginLeft: 90
	},


};
export const iconStylesGoogle = {
	borderRadius: 5,
	iconStyle: { paddingVertical: 9, marginLeft: 90 },


};



export const verifiCodeStyle= StyleSheet.create({

  container: {
    paddingHorizontal: 45,
    paddingTop: 40,
    paddingBottom: 100,
    top: 0
  },
  contain: {
    paddingTop: 20
  },
  inputWrapStyle: {
    marginTop: 30,
  },
  inputbox: {
    fontWeight: 'bold',
    marginBottom: 15,
    backgroundColor: "#FFF",
    color: '#000',
    height: 50
  },
  input: {
    fontWeight: 'bold',
    marginBottom: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#FFF',
    backgroundColor: "#FFF",
    borderWidth: 3,
    borderRadius: 50
  },
  inputLabel: {
    fontSize: 15,
    color: '#8fa1b3',
    paddingBottom: 8,
    letterSpacing: 0.4
  },
  title: {
    color: '#2d3947',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 0.4,
    alignSelf:'center'
  },
  subPageTitle: {
    flex: 1,
    color: '#2d3947',
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 0.4,
  },
  selectWrap: {
    borderBottomWidth: 1,
    borderBottomColor: '#d0d9e6'
  },
  formLabel: {
    fontSize: 15,
    color: '#000000',
    paddingBottom: 20,
    letterSpacing: 0.4,
    lineHeight: 22
  },
  selectField: {
    flex: 1,
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  select: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textAreaContainer: {
    padding: 5,
    borderColor: '#d8dcdd',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
  },
  textArea: {
    textAlignVertical: "top",
    height: 30,
    // justifyContent: 'flex-start',
  },
  btnWrap: {
    textAlign: 'center',
    paddingVertical: 15
  },
  snapWrap: {
    alignItems: 'center'
  },
  snapBtn: {
    width: 40,
    height: 40,
    borderRadius: 40,
    borderColor: '#00ccff',
    borderWidth: 1,
  },
  snapIcon: {
    color: '#00ccff',
    position: 'relative',
    top: 7,
    left: 4,
  },
  saveButton: {
    marginTop: 15,
  //  borderColor: '#00beed',
    borderRadius: 5,
   // borderWidth: 1,
    backgroundColor: '#EF757B',
    paddingVertical: 15
  },
  saveText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center'
  },
  cancelButton: {
    marginTop: 20,
    borderColor: '#00beed',
    borderRadius: 40,
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 15,
  },
  cancelText: {
    fontSize: 16,
    color: '#00ccff',
    textAlign: 'center'
  },

  homeBtn: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#0a0000',
    borderWidth: 1,
    position: 'absolute',
    right: 20,
    top: 20,
  },
  subContainer: {
    paddingHorizontal: 20,
    paddingVertical: 60,
  },
  homeIcon: {
    color: '#ffffff',
    position: 'relative',
    top: 4,
    left: 5,
  },
  titleWrap: {
    flexDirection: 'row'
  },
  createLink: {
    fontSize: 12,
    color: '#00beed',
    paddingTop: 12,
  },
  tabWrap: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tab: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  tabItem: {
    color: '#3c3c3c',
    textAlign: 'left'
  },
  tabItemStall: {
    color: '#3c3c3c',
    textAlign: 'left',
    paddingLeft: 18,
  },
  tabItemActive: {
    color: '#000000',
  },
  listItem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: '#c9cacc',
  },
  listDateWrap: {
    flexDirection: 'row',
  },
  stallWrap: {
    flex: 1,
    flexDirection: 'row',
  },
  highlightCircle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#00ccff',
    marginRight: 2,
    position: 'relative',
    top: 4,
  },
  stallText: {
    fontSize: 11, color: '#545454', lineHeight: 18,
  },
  date: {
    flex: 1,
    textAlign: 'right',
    fontSize: 11,
    color: '#545454',
    lineHeight: 18,
  },
  listPara: {
    fontSize: 11,
    color: '#545454',
    paddingTop: 6,
    lineHeight: 16,
  },
  author: {
    fontSize: 12,
    color: '#b9bfc1',
    lineHeight: 18,
  },
  bold: {
    fontWeight: 'bold',
  },
  noteBg: {
    alignSelf: 'flex-start',
    lineHeight: 24,
    paddingTop: 3,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#f2f7fb',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 20,
  },
  note: {
    fontSize: 10,
    textAlign: 'center',
    position: 'relative',
    top: -2,
    color: '#3c3c3c',
  },
  button: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20
  },
  checkedButton: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#04549b'
  },
  noteFormWrap: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,

  },
  fieldWrap: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 3,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginRight: 10,
  },
  calendarIcon: {
    color: '#c9cacc',
  },
  closeIcon: {
    color: '#00ccff',
  },
  noteInput: {
    height: 36,
    borderColor: 'white',
    borderWidth: 1
  },
  calendarIconWrap: {
    position: 'absolute',
    top: 12,
    right: 10,
  },
  closeIconWrap: {
    position: 'absolute',
    top: 14,
    right: -20,
  },
  errors:{
    color:'red',
    fontSize:12,
    alignSelf:"center"
  }
});




export const registerStyle= StyleSheet.create({

  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100,
    top: 0
  },
  contain: {
    paddingTop: 20,
   // overflow: 'hidden',
  },
  input: {
    fontWeight: 'bold',
    marginBottom: 1,
  //  paddingHorizontal: 10,
   // paddingVertical: 0,
    //borderColor: '#EF757B',
    backgroundColor: "#000",
   // borderWidth: 2,
    borderRadius: 5,
    overflow: 'hidden',
 color:"#FFF"
  },
  inputPassword:{
    color:'#FFF',
    fontWeight: 'bold',
    marginBottom: 15,
    paddingHorizontal: 0,
    ...Platform.select({
        ios: {paddingVertical: 10},
        android: {paddingVertical: 0},
         }),
    //borderColor: '#000',
    backgroundColor: "#000",
    //borderWidth: 2,
   // borderRadius: 5
  },
  errors:{
    color:'#f00',
    marginBottom: 10,
   // alignSelf: 'center',
    fontSize: 12,
    marginLeft:20,
   
  },

  inputLabel: {
    fontSize: 15,
    color: '#231F20',
    paddingBottom: 8,
    letterSpacing: 0.4
  },
  title: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 0.4,
   
  },
  subPageTitle: {
    flex: 1,
    color: '#2d3947',
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 0.4,
  },
  selectWrap: {
    borderBottomWidth: 1,
    borderBottomColor: '#d0d9e6'
  },
  formLabel: {
    fontSize: 15,
    color: '#000000',
    paddingBottom: 20,
    letterSpacing: 0.4,
    lineHeight: 22
  },
  selectField: {
    flex: 1,
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  select: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textAreaContainer: {
    padding: 5,
    borderColor: '#d8dcdd',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
  },
  textArea: {
    textAlignVertical: "top",
    height: 30,
    // justifyContent: 'flex-start',
  },
  btnWrap: {
    textAlign: 'center',
    paddingVertical: 15
  }
  ,
  btnsign: {
    textAlign: 'center',
    //paddingVertical: 15,
    flexDirection:"row",
    marginTop:10
  },
  snapWrap: {
    alignItems: 'center'
  },
  snapBtn: {
    width: 40,
    height: 40,
    borderRadius: 40,
    borderColor: '#00ccff',
    borderWidth: 1,
  },
  snapIcon: {
    color: '#00ccff',
    position: 'relative',
    top: 7,
    left: 4,
  },
  saveButton: {
    marginTop: 15,
    borderColor: '#00beed',
    borderRadius: 40,
    borderWidth: 1,
    backgroundColor: '#00ccff',
    paddingVertical: 15
  },
  saveText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center'
  },
  cancelButton: {
    marginTop: 20,
    borderColor: '#00beed',
    borderRadius: 0,
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 15,
  },
  signButton: {
    //marginTop: 20,
    flex:1,
    //borderColor: '#00beed',
    borderRadius: 5,
   // borderWidth: 1,
    backgroundColor: '#EF757B',
    paddingVertical: 15,
    

    
  },
  cancelText: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center'
  },

  homeBtn: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#0a0000',
    borderWidth: 1,
    position: 'absolute',
    right: 20,
    top: 20,
  },
  subContainer: {
    paddingHorizontal: 20,
    paddingVertical: 60,
  },
  homeIcon: {
    color: '#ffffff',
    position: 'relative',
    top: 4,
    left: 5,
  },
  titleWrap: {
    flexDirection: 'row'
  },
  createLink: {
    fontSize: 12,
    color: '#00beed',
    paddingTop: 12,
  },
  tabWrap: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tab: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  tabItem: {
    color: '#3c3c3c',
    textAlign: 'left'
  },
  tabItemStall: {
    color: '#3c3c3c',
    textAlign: 'left',
    paddingLeft: 18,
  },
  tabItemActive: {
    color: '#000000',
  },
  listItem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: '#c9cacc',
  },
  listDateWrap: {
    flexDirection: 'row',
  },
  stallWrap: {
    flex: 1,
    flexDirection: 'row',
  },
  highlightCircle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#00ccff',
    marginRight: 2,
    position: 'relative',
    top: 4,
  },
  stallText: {
    fontSize: 11, color: '#545454', lineHeight: 18,
  },
  date: {
    flex: 1,
    textAlign: 'right',
    fontSize: 11,
    color: '#545454',
    lineHeight: 18,
  },
  listPara: {
    fontSize: 11,
    color: '#545454',
    paddingTop: 6,
    lineHeight: 16,
  },
  author: {
    fontSize: 12,
    color: '#b9bfc1',
    lineHeight: 18,
  },
  bold: {
    fontWeight: 'bold',
  },
  noteBg: {
    alignSelf: 'flex-start',
    lineHeight: 24,
    paddingTop: 3,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#f2f7fb',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 20,
  },
  note: {
    fontSize: 10,
    textAlign: 'center',
    position: 'relative',
    top: -2,
    color: '#3c3c3c',
  },
  button: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20
  },
  checkedButton: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#04549b'
  },
  noteFormWrap: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,

  },
  fieldWrap: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 3,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginRight: 10,
  },
  calendarIcon: {
    color: '#c9cacc',
  },
  closeIcon: {
    color: '#00ccff',
  },
  noteInput: {
    height: 36,
    borderColor: 'white',
    borderWidth: 1
  },
  calendarIconWrap: {
    position: 'absolute',
    top: 12,
    right: 10,
  },
  closeIconWrap: {
    position: 'absolute',
    top: 14,
    right: -20,
  },
  icon: {
    alignSelf:"center",
    position: 'absolute', 
    right: 10
},
buttons: {
  justifyContent: 'center',

  marginTop: 20,
  marginBottom: 30,
},

  signInButton: {
    //marginTop: 20,
    flex:1,
    //borderColor: '#00beed',
    borderRadius: 5,
   // borderWidth: 1,
    backgroundColor: '#fe6e00',
    paddingVertical: 15,
    

    
  },
  BottomText:{
    fontSize:14,
    color:'#FFF',
    fontWeight:'bold',
    textAlign:'center'

  }
});





