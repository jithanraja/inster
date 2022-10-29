import { Platform,StyleSheet , Dimensions} from "react-native";

export default StyleSheet.create({
  
  // contain: {
      

  //   margin:30,
  //   marginTop:20,
  //     fontFamily: 'Lucida sans',
  //   },
  //   inputLabel: {
  //       fontFamily: 'Ubuntu',
  //       fontSize: 15,
  //       color: '#231F20',
  //      // paddingBottom: 8,
  //       //letterSpacing: 0.4,
  //       fontWeight:'bold',
  //       marginTop:10
  //     },
  //     textareaContainer: {
  //     //  height: "100%",
  //       padding: 5,
  //       backgroundColor: '#FFF',
  //       borderWidth:1,
  //       borderRadius:5
  //     },
  //     textarea: {
  //       textAlignVertical: 'top',  // hack android
  //       height: 170,
  //       fontSize: 14,
  //       color: '#333',
  //     },
  //     uploadButton: {

  //     //  flex:1,
  //       //borderColor: '#00beed',
  //       borderRadius: 5,
  //      // borderWidth: 1,
  //       backgroundColor: '#48b4e0',
  //       height:50,
  //       justifyContent:'center',
  //       width:'50%',
  //       alignSelf:'center'
    
        
  //     },
  //     uploadText: {
  //       fontSize: 16,
  //       color: '#000',
  //       textAlign: 'center',
  //       fontWeight:'bold'
  //     },
  //     buttoncontainer:{
  //       margin:30,
  //       marginTop:20,
  //       width:"100%",
  //       alignSelf:'center',
        
  //     }



  cardContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  coverBio: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '600',
  },
  coverContainer: {
    marginBottom: 55,
    position: 'relative',
  },
  coverImage: {
    height: Dimensions.get('window').width * (3.5 / 4),
    width: Dimensions.get('window').width,
  },
  coverMetaContainer: {
    backgroundColor: 'transparent',
    paddingBottom: 10,
    paddingLeft: 135,
  },
  coverName: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
    paddingBottom: 2,
  },
  coverTitle: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  coverTitleContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 45,
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#000',
  },
  indicatorTab: {
    backgroundColor: 'transparent',
  },
  mansonryContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginLeft: 0,
    marginRight: 0,
  },
  profileImage: {
    borderColor: '#FFF',
    borderRadius: 55,
    borderWidth: 3,
    height: 110,
    width: 110,
  },
  profileImageContainer: {
    bottom: 0,
    left: 10,
    position: 'absolute',
 
  },
  sceneContainer: {
    marginTop: 10,
  },
  scroll: {
    backgroundColor: '#000',
  },
  tabBar: {
    backgroundColor: 'transparent',
    marginBottom: -10,
    marginLeft: 130,
    marginRight: 15,
  },
  tabContainer: {
    flex: 1,
    marginBottom: 12,
    marginTop: -55,
    position: 'relative',
    zIndex: 10,
  },
  tabRow: {
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
  },
  tabLabelNumber: {
    color: 'black',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 2,
  },
  tabLabelText: {
    color: 'black',
    fontSize: 14,
    textAlign: 'left',
  },


  
  ListContent:{
    // flexDirection:"row",
     alignSelf:"center",
     width:"90%",
     justifyContent:"center",
    //flex:1
    margin:10
   },
   listItem:{
    height:40,
  flexDirection:'row',
    justifyContent:"center"
  },
  listText:{
    //fontWeight:"bold",
    marginLeft:20,
    color:'#FFF',
    flex:1,
    fontSize:18
  }
});
