import SQLite from 'react-native-sqlite-storage';
import {AsyncStorage} from 'react-native';
let localDb;
let Inserted = 0;
localDb = SQLite.openDatabase({name : "test.db"}
)

const initialisedb = () => {
  //console.log("initialising db")
	AsyncStorage.multiGet(['dbInserted']).then((data) => {
    Inserted = data[0][1];
  });

localDb.transaction((txn) => {
    txn.executeSql("DROP table Venue", [], (tx, res) =>{
      //console.log("dropped");
    },(tx,error) =>{//console.log("error",tx)});
  });

localDb.transaction((txn) => {
  txn.executeSql("CREATE TABLE IF NOT EXISTS UserStory (Photo_Key  INTEGER  PRIMARY KEY AUTOINCREMENT , Media_File varchar(200)  NULL, Caption varchar(200), UserKey int NULL, Entered_By_User int  NULL, Entry_Date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, Last_Edited_Date TIMESTAMP DEFAULT CURRENT_TIMESTAMP)", [], (tx, res) => { //console.log("success") }, (tx, error) => {//console.log(tx)});
});

localDb.transaction((txn) => {
  txn.executeSql("CREATE TABLE IF NOT EXISTS FollowingStory (Photo_Key  INTEGER  PRIMARY KEY AUTOINCREMENT , Media_File varchar(200)  NULL, Caption varchar(200), FollowerKey int NULL,UserKey int NULL, Entered_By_User int  NULL, Entry_Date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, Last_Edited_Date TIMESTAMP DEFAULT CURRENT_TIMESTAMP)", [], (tx, res) => { //console.log("success") }, (tx, error) => {//console.log(tx)});
});

localDb.transaction((txn) => {
  txn.executeSql("CREATE TABLE IF NOT EXISTS Venue (id  INTEGER  PRIMARY KEY , approved varchar(20), closing_time varchar(200), date varchar(200), description varchar(200), distance varchar(20), duration varchar(20),image vachar(200),image_id varchar(20),lattitude varchar(200),likes_count varchar(20),location varchar(200),longitude varchar(200),opening_time varchar(20),title varchar(20),userid varchar(20),type varchar(20),status int DEFAULT 1 )", [], (tx, res) => { //console.log("venue created success") }, (tx, error) => {//console.log(tx)});
});



}

const selectDBLite = async (sqlStr) => {
  return new Promise((resolve, reject) => {
    localDb.transaction((txn) => {
      txn.executeSql(sqlStr, [], (tx, res) =>{
        resolve(res);
        
      }, (tx, error) => {
        //console.log(tx);
        reject(error);
      });
    });
  });
}


  
  
module.exports = {
  initialisedb,
  selectDBLite,
  
}
  