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
    height:"60%",
    width:80,
    borderWidth:1,
    borderRadius:10,
    margin:5,
    marginBottom:1
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
  height:"100%"
 
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


export const KolDetailSyles = StyleSheet.create({
  
  contain: {
  //  paddingTop: 20,
  height:"25%",
  margin:20,
  marginTop:10,
    fontFamily: 'Lucida sans',
  },

  addContain: {
    //  paddingTop: 20,
    height:"18%",
    margin:20,
   // marginBottom:0,
   // marginTop:"2%",
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
    //margin: 20,
    flex:1,
    //borderColor: '#00beed',
    borderRadius: 5,
   // borderWidth: 1,
    backgroundColor: '#EF757B',
  //  paddingVertical: 15,
    

    
  }
  ,
  cancelText: {
    fontSize: 16,
    fontWeight:'bold',
   // color: '#FFF',
    alignSelf: 'center',
   // flex:1,
   
    justifyContent:'center'
  },
  textareaContainer: {
    height: "90%",
    padding: 5,
    backgroundColor: '#FFF',
    borderWidth:1,
    borderRadius:5
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
  },



  container:{
    height:"52%",
    margin:20,
   
    marginBottom:0
  },
  list:{
    marginTop:5,
    marginBottom:5,
    paddingHorizontal: 12,
    height:'60%'
  },
  footer:{
    height:'30%',
    flexDirection: 'row',
   // height:50,
    backgroundColor: '#FFF',
    //paddingHorizontal:10,
   //padding:5,
   borderRadius:10,
   justifyContent:'center'
  },
  btnSend:{
    backgroundColor:"#EF757B",
    width:"15%",
    height:50,
    borderRadius:360,
    alignSelf:'center',
    justifyContent:'center',
  },

  btnUpload:{
    // backgroundColor:"#EF757B",
     width:40,
     height:"100%",
     borderRadius:360,
     alignSelf:'center',
     justifyContent:'center',
   },
   iconUpload:{
    width:30,
    height:30,
    alignSelf:'center',
  },
  iconSend:{
    width:28,
    height:28,
   
    alignSelf:'center',
    paddingLeft:10
  },
  inputContainer: {
   // borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFF',
    borderRadius:10,
   // borderBottomWidth: 1,
    height:"100%",
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    marginRight:10,
  },
  inputs:{
    height:"100%",
   // marginLeft:16,
   // borderBottomColor: '#FFFFFF',
   backgroundColor:'#FFF',
    flex:1,
    borderWidth:1
  },
  balloon: {
    maxWidth: 250,
    padding: 5,
    borderRadius: 20,
    alignSelf:'center'
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
    marginVertical: 10,
  //  flex: 1,
     alignContent:'center',
    flexDirection: 'row',
    backgroundColor:"#eeeeee",
    height:30,
    borderRadius:10,
    
    padding:15,
  },
  formWrap:{
    height:'85%',
  marginHorizontal:5
  }
});



