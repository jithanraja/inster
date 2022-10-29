import { Platform,StyleSheet,Dimensions } from "react-native";
let CIRCLE_RADIUS = 36;
let Window = Dimensions.get('window');
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';







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
    //  backgroundColor: "#FFF",
     // justifyContent: 'center',
      // borderColor: 'black',
      // borderWidth: 1,
      // height: Dimensions.get('screen').height - 20,
      // width: Dimensions.get('screen').width
      // flex:1,
      // width:'100%'
      width:"100%", 
      height:"90%",
      backgroundColor:'#000'
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


  
//Member Styles.....
export const MemberStyles =StyleSheet.create({
  title:{
    fontWeight:'bold',
    alignSelf:"center",
    fontSize:18,
    marginBottom:5
  },
  container:{
    margin:20,
    width:"90%",
    borderRadius:10,
    elevation:2
  },
  tabHeaderContain:{
    alignSelf:"center",
      margin:10,
      width:"100%",
      borderRadius:10,
     // elevation:2,
     // backgroundColor:"#f1eaea"
    },
  tabWrapContain:{
    alignSelf:"center",
    margin:0,

    width:"90%",
    borderRadius:10,
    elevation:1 ,
    
  // borderWidth:1
   // backgroundColor:"#f1eaea"
  },
  tabsContain:{
    //margin:10,
    width:"100%",
 //   borderRadius:10,
    //elevation:2,
    borderBottomWidth:1
  },
  leftContent:{
    backgroundColor:"#ffe1e6",
    width:"35%",
    paddingBottom:30,
    
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10
  },
  leftContentText:{
    fontSize:17,
    fontWeight:"bold",
    margin:10
  },
  rightContent:{
    width:"65%",
    paddingBottom:30
  },
  rightContentText:{
    fontSize:16,
    margin:10
  },
  listWrap:{
    flexDirection:"row"
  },
  listLeftContent:{
    justifyContent:"center",
    backgroundColor:"#000",
    width:'20%',
    borderRadius:10
  },
  listDayText:{
    textAlign:"center",
   // margin:5,
    marginBottom:0,
    fontWeight:'bold',
    fontSize:18
  },
  listDateText:{
    textAlign:"center",
    marginTop:5,
    fontWeight:'bold',
    fontSize:18
  },
  listRightTitleText:{
   
    marginLeft:10,
  
    fontWeight:'bold',
    color:"#FFF",
    fontSize:17
  },
  listRightContentText:{
    margin:8,
    marginLeft:20,
  fontWeight:'bold'
  },
  listRightProcessText:{
    margin:10,
    marginLeft:20,
    marginTop:0,
 
  },
  contain: {
    //  paddingTop: 20,
    margin:20,
    marginLeft:30,

    marginRight:30,
      fontFamily: 'Lucida sans',
    },

    inputLabel: {
      fontFamily: 'Ubuntu',
      fontSize: 15,
      color: '#231F20',
      paddingBottom: 0,
      //letterSpacing: 0.4,
      fontWeight:'bold',
      marginTop:10
    },
    input: {
      // fontWeight: 'bold',
       marginBottom: 10,
       //paddingHorizontal: 20,
    //  paddingVertical: 10,
       height:50,
       fontSize: 18,
       paddingLeft:20,
       marginTop:10,
   
     //  borderColor: '#EF757B',
       backgroundColor: "#FFF",
       borderWidth: 1,
       borderRadius: 30,
       borderTopEndRadius: 30,
       borderTopStartRadius: 30,
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
      borderRadius:10,
      marginTop:10
    },
    textarea: {
      textAlignVertical: 'top',  // hack android
      height: 170,
      fontSize: 14,
      color: '#333',
    },
    signButton: {
      margin: 20,
      flex:1,
      //borderColor: '#00beed',
      borderRadius: 5,
     // borderWidth: 1,
      backgroundColor: '#EF757B',
      paddingVertical: 15,
      
  
      
    },
    postMenu:{
      height:50,
      width:50,
      borderWidth:1,
      borderRadius:10,
      margin:5,
      marginRight:0,
      marginLeft:0
     
    },
    postImage:{
      width: "100%",
      height: "100%",
      borderWidth:1,
      borderColor:'#e1ad01',  
      borderRadius: 50, 
    },
    icons:{
      alignSelf:'center'
    }
});


export const MainHomeStyles = StyleSheet.create({
  mainContainer: {
    flex    : 1
},
dropZone    : {
    height         : 100,
    backgroundColor:'#2c3e50'
},
text        : {
    marginTop   : 20,
    marginLeft  : 25,
    marginRight : 5,
  //  textAlign   : 'center',
    color       : '#FFF',
    fontSize    :20
},
draggableContainer: {
    position    : 'absolute',
    top         : Window.height/2 - CIRCLE_RADIUS,
    left        : Window.width/2 - CIRCLE_RADIUS,
},
// circle      : {
//     backgroundColor     : '#1abc9c',
//     width               : CIRCLE_RADIUS*2,
//     height              : CIRCLE_RADIUS*2,
//     borderRadius        : CIRCLE_RADIUS
// },


  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
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
   marginLeft:0,
  // marginTop:20,
  marginRight:5,
  backgroundColor:"#000",
  }
});


//Group styles......
export const groupStyles= StyleSheet.create({
  searchContainerStyle:{
    backgroundColor:"#000",
    margin:20,
    borderWidth:0,
    borderBottomWidth:0,
    borderTopWidth:0,
    marginTop:12
    //borderRadius:50
  },
  searchInputContainerStyle:{
   // borderRadius:50,
    backgroundColor:"#000",
    padding:0,
    borderWidth:1,
    height:30,
    borderRightWidth:1,
    borderBottomWidth:1,
    borderColor:"#FFF",
    elevation:5
  },
  searchInputStyle:{
    color:'#FFF'
  },
  leftIconSeachContainerStyle:{
    marginLeft:10
  },
  rightIconContainerStyle:{
    marginRight:10,
    borderWidth:1,
    borderRadius:100,
    height:"70%",
    color:"#FFF",
    borderColor:'#FFF'
  },
  contain:{
    marginTop:0,
    width:"100%",
   
  },
  rowContain:{
    marginLeft:"5%",
    marginRight:"5%",
    height:"100%",
    marginTop:0,
    flexDirection:"row",
   
  },
  CheckBoxContain:{
    height:"100%",
    justifyContent:'center',
    width:"10%"
  },
  groupNameContain:{
    justifyContent:'center',width:"60%"
  },
  groupNameText:{
    textAlign:"center",
    fontSize:18,
    fontWeight:'bold'
  },
  buttonContain:{
    justifyContent:'center',
    width:"30%"
  },
  buttonStyle:{
    backgroundColor:"#48b4e0",
    color:"#EF757B",
    width:"90%",
    alignSelf:'center'
  },
  listContainer:{
    borderRadius:10,
  //  elevation:2,
    borderWidth:0.5,
    width:"85%",
    alignSelf:'center',
    marginBottom:10,
    height:60
  }
  ,
  topVideoContainer:{
    margin:"2%",
    marginBottom:'0%',
    width:"94%",
    marginTop:'0%',
    backgroundColor:"black",
    height:220
  },
  profileMenu:{
    alignSelf:"center",
    height:"70%",
    width:150,
    borderWidth:1,
    borderRadius:10,
    margin:5,
    marginBottom:1,
    marginTop:0
    
  },
  viewContentImage:{
    width: "100%",
    height: "100%",  
    borderRadius: 10, 
    marginTop: 0,
    marginBottom: 0,
    alignSelf:"center"
  },
  imageText:{
    marginLeft:8,
    color:'#FFFF',
    fontSize:9
  },
  dateContainer:{
    flexDirection:'row',
    marginTop:5
  },
  time:{
    marginLeft:8,
    color:'#FFFF',
    fontSize:10,flex:1
  },
  date:{
    marginLeft:5,
    color:'#FFFF',
    fontSize:10
  },
  likeicon:{
    marginLeft:8,
    marginTop:2
  }
  });


  // MemberStyles


