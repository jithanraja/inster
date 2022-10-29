import { Platform,StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  navItemStyle: {
    padding: 10
  },
  
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey'
  },
    menuIcon:{
  marginRight:10,
    alignSelf:"center"
    
  },
  menuContainer:{
    flexDirection:"row", 
     justifyContent:"center"
  },
  sideMenuView:{
    height: 50,
     width: "80%",
  justifyContent:"center"
  },
  sideMenuText:{
    marginLeft:10,
    fontSize:16,
    fontWeight:"bold"
  },
  navSectionStyle:{
    borderBottomWidth:1,
    flex:1,
  }


  
});
