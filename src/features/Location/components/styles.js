import { Platform,StyleSheet } from "react-native";

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
  marginBottom:'0.8%',
  width:"94%",
  marginTop:'0%',
  backgroundColor:"black",
  height:240
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
  marginTop:2
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




  export const mapstyles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
    }
  });


//KOL Styles.....
export const KolStyles = StyleSheet.create({
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
    margin:10,
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
    backgroundColor:"#EF757B",
    width:'30%',
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
    margin:10,
    marginLeft:20,
    marginBottom:0,
    fontWeight:'bold',
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
 
  }
});


 
//Member Styles.....
export const MemberStyles = StyleSheet.create({
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