import { Platform,StyleSheet } from "react-native";
import { color } from "react-native-reanimated";


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

    justifyContent:"center",
 //  flex:1
    height:'90%'
  },
  homeMenu:{
    alignSelf:"center",
    height:"23%",
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
  share:{
    alignSelf:'center',
    color:'#FFF',
    fontWeight:'bold',
    fontSize:24
  },
  container:{
    flex:1,
   // height:"100%",
    marginTop:0,
  },
  topmenu:{
    //height:"10%",
    flexDirection: 'row-reverse'
  },
  topIcon:{
   margin:10
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
    width:"97%",
    margin:"0%",
  //  marginBottom:"3%",
   // height:"80%"
  
    
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
    height:"70%",
    width:90,
    borderWidth:1,
    borderRadius:10,
    margin:5,
    marginBottom:1,
    borderColor:'#FFF'
    //margin:"2%",
  //  marginTop:20,
   // marginRight:"2%",
   // justifyContent:'center'
  }
  ,
  postMenu:{
    height:50,
    width:50,
    borderWidth:1,
    borderRadius:10,
    margin:5,
    marginRight:0,
   
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
    fontWeight:"bold"
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
    borderRadius: 10, 
    marginTop: 0,
    marginBottom: 0,
    alignSelf:"center"
  },
  postImage:{
    width: "100%",
    height: "100%",
    borderWidth:1,
    borderColor:'#e1ad01',  
    borderRadius: 50, 
  },
  postImages:{
  width:"100%",
  height:"100%",
  justifyContent:'center'
 
  },
  imageContainer:{
    width:"100%",
   height:300
  },
  titlePost:{
    margin:5,
    justifyContent:'center'
  },
  titleText:{
    color:"#FFFF",
    fontSize:16
  },
  kmText:{
    color:"#FFFF",
    fontSize:10,
    marginLeft:4
  },
  likeVenue:{
    color:"#FFFF",
    fontSize:12,
    marginLeft:4
  },
  likeContainer:{
    flexDirection:'row-reverse',
   // alignSelf:'flex-start',
    marginTop:10,
    width:"50%"
  },
  likeText:{
    color:"#FFFF",
    fontSize:14,
    marginRight:10
  }
  ,
  topVideoContainer:{
    margin:"2%",
    marginBottom:'0%',
    width:"94%",
    backgroundColor:"black",
    height:140
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
    height:"40%",
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
    width:140,
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









export const followingStyles =StyleSheet.create({
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