import { Platform,StyleSheet } from "react-native";

export const listStyles= StyleSheet.create({
 
  title:{
    fontWeight:'bold',
    alignSelf:"center",
    fontSize:18,
    marginBottom:5
  },
  ListContent:{
   // flexDirection:"row",
    alignSelf:"center",
    width:"80%",
    justifyContent:"center",
   //flex:1
   margin:10,
   marginLeft:10,
   marginRight:30
  },
  
 
  viewContent: {
  //  height:"100%",
    marginTop: 20,
    flex:1,
  
 
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
    fontWeight:'bold'
  },
  titleOfRow:{
    alignItems:"center",
    flexDirection:"row",
    marginLeft:20,
   
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    borderWidth:1,
    borderRadius:50
   // color: 'white',
  },
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
  TouchOpacityStyle:{
      borderWidth:2,
    //  borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:55,
      position: 'absolute',                                          
     // bottom: 10,     
      top:20,                                               
      right: 20,
      height:55,
      backgroundColor:'#FFF',
      borderRadius:100,
  },
  listItem:{
    height:70,
    borderBottomWidth:1,
    borderBottomColor:"#d3d3d3",
    marginLeft:10,
    marginRight:10,
    flexDirection:'row'
  },
  listText:{
    alignSelf:"center",
    fontWeight:"bold",
    marginLeft:10,
    flex:1,
    fontSize:16
  },
  listDate:{
    alignSelf:'center',
    fontWeight:'bold',
    marginRight:10
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
  titlePost:{
    marginLeft:20,
    justifyContent:'center'
  },
  titleText:{
    color:"#FFFF",
    fontSize:16
  },
  kmText:{
    color:"#FFFF",
    fontSize:14,
    marginLeft:4,
    color:'green'
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
});


export const detailsStyles=StyleSheet.create({
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
  }
});
