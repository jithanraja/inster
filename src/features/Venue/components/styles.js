import {  Platform,StyleSheet,Dimensions } from "react-native";
import { color } from "react-native-reanimated";
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// Kol Styles......
export const KolStyles = StyleSheet.create({
  container:{
   // flex:1
    height:"100%",
    justifyContent:"center",
  },
  topmenu:{
    //height:"10%",
    flexDirection: 'row-reverse'
  },
  topIcon:{
   margin:10,
   marginBottom:0
  },

  header:{
  //  height:"10%",
    justifyContent:"flex-end"  
  },
  headerstyle:{
   fontSize:25,
    marginLeft:20,
    fontWeight:"bold"
    
  },
  headerContainer:{
    height:"20%"
  },
  subContainer:{
    height:"80%"
  },
  homeContainer:{
    justifyContent:"center",
    alignSelf:"center",
    width:"90%",
    margin:"3%",
    marginBottom:"0%",
   // height:"80%"
    
  },
  
  homeMenuContent:{
   // flexDirection:"row",
    alignSelf:"center",
    width:"100%",

  //  justifyContent:"center",
 //  flex:1
    height:'90%'
  },
  homeMenu:{
    alignSelf:"center",
    height:"18%",
    width:"80%",
    //borderWidth:1,
    borderRadius:10,
    margin:"2%",
   // justifyContent:"center"
  //  marginTop:0,
   // marginRight:"2%",
   // justifyContent:'center'
  },
  profileMenu:{
    alignSelf:"center",
    height:70,
    width:70,
    borderWidth:1,
    borderRadius:50,
    margin:5
   
  }
 
  ,
  homeMenuText:{
    fontWeight:"bold",
    fontSize:18,
    flex:1
    
  },
  viewContent: {
  //  height:"100%",
    marginTop: 20,
    flex:1,
    //borderColor: '#00beed',
    //borderRadius: 5,
   // borderWidth: 1,
 
    backgroundColor: '#EF757B',
    paddingVertical: 15,
    

    
  }
  ,
  viewText: {
    fontSize: 20,
    color: '#000',
    fontWeight:"bold",
    textAlign: 'center'
  },
  numberOfGroup:{
    margin:"30%",
    marginTop:5,
    marginBottom:0,
    fontSize:25,
    fontWeight:'bold',
   
  },
  titleOfRow:{
    alignItems:"center",
    flexDirection:"row",
    marginLeft:20,
   
  }
});

// Main Home Style..........

export const MainHomeStyles = StyleSheet.create({
  container: {
    width: '100%',
  },
  body: {
    backgroundColor: '#eee',
  },
  container: {
		flex: 1
	},
	icon: {
		paddingLeft: 0,

	},
	iconContainer: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		width: "100%"
	},
	headerRightIcon: {
		flexDirection:"row-reverse",
		paddingHorizontal: 16,
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		//marginRight:5

	},
	
  topIcon:{
   margin:8,
  marginRight:5
   
  }
});

// Member home styles.......

export const MemberStyles = StyleSheet.create({
  container:{
    flex:1,
    //height:"100%",
    marginTop:20,
  },
  topmenu:{
    //height:"10%",
    flexDirection: 'row-reverse'
  },
  topIcon:{
   margin:10,
   marginBottom:0
  },

  header:{
  //  height:"10%",
    justifyContent:"flex-end"  
  },
  headerstyle:{
   fontSize:25,
    marginLeft:20,
    fontWeight:"bold"
    
  },
  headerContainer:{
    height:"20%"
  },
  subContainer:{
    height:"80%"
  },
  homeContainer:{
    justifyContent:"center",
    alignSelf:"center",
    width:"90%",
    margin:"3%",
    marginBottom:"3%",
   // height:"80%"
   flex:1
    
  },
  
  homeMenuContent:{
    flexDirection:"row",
    alignSelf:"center",
    width:"100%",
    justifyContent:"center"
  },
  homeMenu:{
    alignSelf:"center",
    height:100,
    width:"31%",
    borderWidth:1,
    borderRadius:10,
    margin:"2%",
  //  marginTop:0,
   // marginRight:"2%",
   // justifyContent:'center'
  },
  profileMenu:{
    alignSelf:"center",
    height:70,
    width:70,
    borderWidth:1,
    borderRadius:50,
    margin:5,
    //margin:"2%",
    marginTop:20,
   // marginRight:"2%",
   // justifyContent:'center'
  }
  // ,
  // homeRightMenu:{
  //   alignSelf:"center",
  //   height:100,
  //   width:"30%",
  //   borderWidth:1,
  //   borderRadius:10,
  //   margin:"3%",
  
  // //  marginLeft:"2%",
  //  // justifyContent:'center'
  // }
  // ,
  // homeCenterMenu:{
  //   alignSelf:"center",
  //   height:100,
  //   width:"30%",
  //   borderWidth:1,
  //   borderRadius:10,
  //   margin:"3%",
  
  //  // marginLeft:"2%",

  //  // justifyContent:'center'
  // }
  ,
  homeMenuText:{
    fontWeight:"bold",
    marginLeft:5,
    marginRight:5
  },
  viewContent: {
  //  height:"100%",
    marginTop: 20,
    flex:1,
    //borderColor: '#00beed',
    //borderRadius: 5,
   // borderWidth: 1,
 
    backgroundColor: '#EF757B',
    paddingVertical: 15,  
  }

  ,
  viewText: {
    fontSize: 20,
    color: '#000',
    fontWeight:"bold",
    textAlign: 'center'
  },
  viewContentImage:{
    width: "100%",
    height: "100%",  
    borderRadius: 100, 
    marginTop: 0,
    marginBottom: 0,
    alignSelf:"center"
  }
});



export const registerStyle= StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 100,
    right: 0,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100,
    top: 0
  },
  contain: {
    //padding:10,
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
  formWrap:{
    width:"100%"
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
   // fontWeight:'bold',
    textAlign:'center'

  }
});


export const styles = StyleSheet.create({

  fullScreen: {flex: 1, backgroundColor: "black"},
  controller: {
      height: 100,
      justifyContent: "center",
      alignItems: "center"
  },
  controllerButton: {height: 20, width: 20},
  videoView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  },
  progressBar: {
      alignSelf: "stretch",
      margin: 20
  },
  videoContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
  },
  videoIcon: {
      position: "relative",
      alignSelf: "center",
      width: 79,
      height: 78,
      bottom: 0,
      left: 0,
      right: 0,
      top: 0
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 0,
    padding: 0,
    paddingHorizontal: 0,
    alignSelf: 'center',
    margin: 2,
  },

  scrollView: {
    backgroundColor: Colors.ighter,
  },

  body: {
    backgroundColor: Colors.white,
   // justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    height: Dimensions.get('screen').height - 20,
    width: Dimensions.get('screen').width
  },
  ImageSections: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center'
  },
  images: {
    width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3
  },
  btnParentSection: {
    alignItems: 'center',
    marginTop:10
  },
  btnSection: {
    width: 225,
    height: 50,
    //backgroundColor: ,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom:10,
    color:'#FFF'
  },
  btnText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    fontWeight:'bold'
  },

  linearGradient:
{
  flex: 1
},


subPageTitle: {
  flex: 1,
  color: '#2d3947',
  fontSize: 30,
  fontWeight: 'bold',
  paddingHorizontal: 10,
  letterSpacing: 0.4,
},
subTitle: {
  flex: 1,
  color: '#2d3947',
  fontSize: 16,

  paddingHorizontal: 10,
  letterSpacing: 0.4,
},
homeBtn: {
  width: 30,
  height: 30,
  borderRadius: 30,
  backgroundColor: '#0a0000',
  borderWidth: 1,
  position: 'absolute',
  right: 20,
  ...Platform.select({
    ios: { top: 60,},
    android: { top: 20,},
     }),
 


},
subContainer: {
  height: "19%",
  paddingHorizontal: 20,
  ...Platform.select({
    ios: {paddingVertical: 80},
    android: {paddingVertical: 40},
     }),
  
  paddingBottom: 10,

},
homeIcon: {
  color: '#ffffff',
  position: 'relative',
  top: 4,
  left: 5,
},
titleWrap: {
  flexDirection: 'row',

},
createLink: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#00beed',
  // paddingTop:4,
  paddingRight: 12,
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






sliderTittle: {
  //flex:0.5,
  height: "5%",
  backgroundColor: '#00264D',
  justifyContent: "center"
},
sliderText: {

  textAlignVertical: 'center',
  textAlign: 'left',
  marginLeft: 40,
  color: '#FFFF'
},
slidercontainer: {
  //flex:5,
  height: "60%",
  //height:"70%"
},
buttonContainer: {
  // flex:2,
  height: "25%",
  //paddingTop:20,
  // height:"30%",
  // backgroundColor:'#4ca973',
},
subSlider: {
  height: "82%"
},
bottomTitle: {
  fontSize: 20,
  textAlignVertical: 'center',
  textAlign: 'center',
  color: '#FFFF',
  height: "18%",
  margin: "2%"
},
input: {
  flex: 1,
  textAlign: "center",
  margin: 15,
  marginTop: 10,
  width: 100,
  marginBottom: 10,
  height: 40,
  alignItems: "center",
  borderColor: '#FFF',
  borderWidth: 2,
  borderRadius: 40,
},
textcontain: {
  flexDirection: "row",
  alignSelf: "center",
  justifyContent: "center",
  margin: 10,
  height: "60%",
  margin: 5,
  width: "100%"
},
inputsecond: {
  borderColor: '#FFF',
  borderWidth: 2,
  height: "100%",
  margin: 5,
  alignSelf: "center",
  width: "30%",
  justifyContent: "center",

  borderRadius: 30,
},
roundTittle: {
  //marginTop:0,
  // paddingTop:10,
  alignSelf: "center",
  textAlignVertical: 'center',
  textAlign: 'center',
  //justifyContent:'center',
  color: '#FFFF',

  // paddingVertical:0,
},
noteBg: {

  alignSelf: 'flex-start',
  lineHeight: 24,
  paddingTop: 3,
  paddingHorizontal: 12,
  borderRadius: 20,
  //backgroundColor: '#34744f',
  marginTop: 10,

  marginBottom: 0,
},
note: {
  fontSize: 10,
  textAlign: 'center',
  position: 'relative',
  top: -2,
  color: '#FFFF',
},
contain: {
  alignSelf: 'center',
  //  paddingTop:10,
  height: "20%"
},
bottomtextcontain: {
  flexDirection: "row",
  //flex:1
  height: "7%",
  //height:"8%"
  //colors:['#d9e2eb', 'white'],
  justifyContent:"center"
},
bottomtext: {
  marginTop: 8,
  marginLeft: 15,
  fontWeight: 'bold',
  textAlignVertical: 'center',
  textAlign: 'center',
  color: '#00beed',
  fontSize: 16
},
bottomtextprev: {
  marginTop: 8,
  marginLeft: 10,

  textAlignVertical: 'center',
  textAlign: 'center',
  color: '#999999'
},
slider: {
  overflow: 'visible' // for custom animations
},
sliderContentContainer: {
  paddingVertical:0,  // for custom animation
  //height:270,
},
paginationContainer: {
  flex:1,
  marginTop:0,
  paddingVertical: 0,
  //paddingHorizontal:50
},
paginationDot: {
  width: 10,
  height: 10,
  borderRadius: 5,
  marginHorizontal: 8,
  backgroundColor: 'rgba(255, 255, 255, 0.92)'
},
inputbottom: {
  textAlign: "center",
  marginTop: 10,
  width: 40,
  height: 40,
  alignSelf: "center",
  borderColor: '#d8dcdd',
  borderWidth: 1,
  borderRadius: 100,
},
bottomnexttext: {
  marginTop: 8,
  textAlignVertical: 'center',
  textAlign: 'right',

  color: '#00beed',
  position: 'relative',
  fontWeight: 'bold',
  fontSize: 16

},
bottomnextarrow: {
  marginTop: 8,
  textAlignVertical: 'center',
  textAlign: 'right',
  marginRight: 10,
  color: '#999999',
  position: 'relative',
  marginLeft: 15,

},
roundBottomTittle: {
  marginTop: 8,
  fontWeight: 'bold',
  textAlignVertical: 'center',
  textAlign: 'center',
  color: '#00beed',
  fontSize: 16

},
nextprev: {
  flex: 1,
  flexDirection: "row",

  left: 10,
  alignItems:"center" 

},  
nextarrow: {
  flex: 1,
  flexDirection: "row",

  right: 15,
  alignItems:"center" 


},
centerBotton: {
  width:"60%",
  alignSelf: "center",
  justifyContent:'center'

},

dialogefooter: {
  color: '#00beed',
  textAlign: "center",

  fontSize: 15,
  fontWeight: 'bold',

},
dialogecontent: {
  color: '#2d3947',
  marginTop: 15,
  fontSize: 16,
  textAlign: "center",
  fontWeight: 'bold',
  paddingHorizontal: 10,
  letterSpacing: 0.4,
},
dialogemiddlecontent: {
  color: '#00beed',
  textAlign: "center",
  marginTop: 20,

  fontSize: 15,
  fontWeight: 'bold',

},
dialogtopcontent: {
  color: '#00beed',
  textAlign: "center",
  marginTop: 10,
  marginLeft: 5,
  fontSize: 15,
  fontWeight: 'bold',

},

horizontalline: {
  borderBottomColor: '#a6a6a6',
  borderBottomWidth: 1,
  marginTop: 10,
  width: "75%",
  alignSelf: "center"
},

horizontallineSearch: {
  borderBottomColor: '#a6a6a6',
  borderBottomWidth: 1,
  marginTop: 10,
  width: "60%",
  alignSelf: "center"
},
horizontallineBottom: {
  borderBottomColor: '#a6a6a6',
  borderBottomWidth: 1,
  marginTop: 10,
  width: "80%",

},
dialogetextcontent: {
  marginTop: 20,
  alignSelf: "center",
  backgroundColor: "#FFF",
  borderRadius: 10, width: "100%"

},
dialogeSearchTitle: {
  marginTop: 20,
  alignSelf: "center",
  backgroundColor: "#FFF",
  width: "100%",
  borderTopRightRadius: 10,
  borderTopStartRadius: 10
},

dialogetextSearchcontent: {

  alignSelf: "center",
  backgroundColor: '#d9e2eb',
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  width: "100%"

},
listDateWrap: {
  flexDirection: 'row',


},
imageStyle: {
  width: "13%", height: "33%", borderRadius: 4, margin: 10, marginLeft: 0
},
rowcontainer: {
  margin: 5,
  marginLeft: 0,
  width: "80%",
  marginRight: 0
},
bold: {
  fontWeight: 'bold',
},
author: {
  fontSize: 15,
  marginTop: 10,
  color: '#a6a6a6',
  lineHeight: 18,

},

date: {
  flex: 1,
  textAlign: 'right',
  fontSize: 15,
  color: '#a6a6a6',
  marginTop: 10,
  lineHeight: 18,

},
highlightCircle: {
  width: 10,
  height: 10,
  borderRadius: 10,
  backgroundColor: '#00ccff',
  margin: 5,
  position: 'relative',
  top: 4,
},

highlightCircleInactive: {
  width: 10,
  height: 10,
  borderRadius: 10,
  backgroundColor: '#000',
  margin: 4,
  position: 'relative',
  top: 4,
},
dots: {
  flexDirection: "row",
  alignSelf: "center"
},
slidercontainerphoto: {
  //flex:5,
  height: "92%",
  //height:"70%"
  justifyContent: "center"
},

setimage:
{
  width: "25%",
  height: "24%",
  borderRadius: 4,
  marginRight: 10,
marginBottom: 10,			 
  alignSelf: 'center'
},

slide: {
  width: "100%",
  height: "100%"
},
sliderimage:
{
  width: "100%",
  height: "100%",
  borderRadius: 4,
  marginRight: 10,
  alignSelf: 'center'
},
photoview:{
  flex:1,

},
ww: {
  width: 10,
  height: 10,
  borderRadius: 5,
  marginHorizontal: 8, backgroundColor: 'rgba(255, 255, 255, 0.92)'
},
container: {
  flex: 1,
  paddingTop: 40
},
tabBar: {
  position: 'absolute',
  right: 0,
  bottom: 0,
  left: 0,
  borderTopWidth: 1,
  borderColor: '#ddd',
  backgroundColor: '#fff'
},
tabsContainer: {
  flexDirection: 'row',
  height: 50,
  paddingTop: 0,
  paddingBottom: 0
}

});
