const { selectDBLite, syncDBLocal } = require('../config/db')

const sync = async () => {
  try {
    let create = await syncDBLocal();

    return create;

  } catch (e) {
    throw new Error(e.message)
  }
}

const Allcountfromalltables = async() =>
{
  try{
   let allcounts = await selectDBLite("select count(a.*) as storycount from  ") 
  }
  catch(e)
  {
    throw new Error(e.message)
  }
}

const insertStory = async (Media_File, caption,userid) => {
  try {
    let story = await selectDBLite("INSERT INTO UserStory (Media_File, Caption,UserKey) values ('" + Media_File + "','" + caption + "',"+userid+" )");
    //console.log(story);
    return story;

  } catch (e) {
    throw new Error(e.message)
  }
}

const insertVenue = async (data) => {
  try {
    ////console.log("data",data)    
    if(data.id === null) return;
    let selstory = await selectDBLite("SELECT * from Venue where id="+data.id);
    ////console.log("storyies",data.id);
    ////console.log("length",selstory.rows.length);
    if(selstory.rows.length === 0){
      ////console.log("hiihihiihhhi")
    let story = await selectDBLite("INSERT OR REPLACE INTO Venue (approved, closing_time,date,description,distance,duration,image,lattitude,likes_count,location,longitude,opening_time,title,type,userid,id) values ('" + data.approved + "','" + data.closing_time + "','"+data.date+"','" + data.description + "','"+data.distance+"','" + data.duration + "','" + data.image + "','"+data.lattitude+"','" + data.likes_count + "','"+data.location+"','"+data.longitude+"','" + data.opening_time + "','"+data.title+"','" + data.type + "','"+data.userid+"','"+data.id+"' )");
    ////console.log(story);
    ////console.log("inserted ..................................................",story)
    return story;
    }
     
  } catch (e) {
    //console.log("errt",e)
    throw new Error(e.message)
  }


}
const venuescounts = async() =>
{
  try {
    let getvenue = await selectDBLite("SELECT * FROM Venue a ");
    ////console.log("get venue",getvenue)
    return getvenue.rows.length;


  } catch (e) {
    throw new Error(e.message)

  }
}
const getVenue = async () => {

  try {
    let getvenue = await selectDBLite("SELECT * FROM Venue a where status=1");
    ////console.log("get venues",getvenue.rows.item(0))
    return getvenue;


  } catch (e) {
    throw new Error(e.message)

  }

}

const deleteVenue = async (id) => {
  try {
    //getVenue();
    let values = await selectDBLite("UPDATE Venue SET status=0 where id="+id);
    getVenue();
    console.log("values ==",values);
    return values;

  } catch (e) {
    throw new Error(e.message)
  }
}


const getStory = async (userid) => {

  try {
    let getstory = await selectDBLite("SELECT a.Media_File,a.Caption FROM UserStory a WHERE a.UserKey =" + userid);
    return getstory;


  } catch (e) {
    throw new Error(e.message)

  }

}



const insertFollowerStory = async (Media_File, caption,id,userid) => {
  try {
    let story = await selectDBLite("INSERT or Replace INTO FollowingStory (Media_File, Caption,UserKey,FollowerKey) values ('" + Media_File + "','" + caption + "',"+id+" ,"+userid+")");
    //console.log(story);
    return story;

  } catch (e) {
    throw new Error(e.message)
  }
}

const deleteFollowerStory = async () => {
  try {
    let story = await selectDBLite("DELETE From FollowingStory");
    //console.log(story);
    return story;

  } catch (e) {
    throw new Error(e.message)
  }
}


const getFollowerStory = async (userid) => {

  try {
    let getstory = await selectDBLite("SELECT * FROM FollowingStory a WHERE a.UserKey =" + userid);
    return getstory;

    
  } catch (e) {
    throw new Error(e.message)

  }

}

module.exports = {
  insertVenue,
  insertStory,
  getVenue,
  getStory,
  insertFollowerStory,
  venuescounts,
  getFollowerStory,
  deleteFollowerStory,
  deleteVenue,
  sync
};
