const { selectDBLite, syncDBLocal } = require('../config/db')

const getSiteTenants = async (companyKey) => {
  try {
    let users = await selectDBLite("SELECT * FROM Users WHERE Company_Key='" + companyKey + "'");

    return users;

  } catch(e) {
    throw new Error(e.message)
  }
}

const getSiteStalls = async (licenceKey) => {
  try {
    let stalls = await selectDBLite("SELECT * FROM Stall_List WHERE Licensee_Id_Key='" + licenceKey + "'");

    return stalls;

  } catch(e) {
    throw new Error(e.message)
  }
}

const getSiteStallPath = async (licenceKey) => {
  try {
    let verification_path = await selectDBLite("SELECT * FROM Verification_Paths WHERE Licensee_Id_Key='" + licenceKey + "'");

    let path_order = await selectDBLite("SELECT * FROM Verification_Path_Stall_Order WHERE Verification_Path_Key='" + verification_path[0]["Verification_Path_Key"] + "'");

    return {"path_details": verification_path, "path": path_order};

  } catch(e) {
    throw new Error(e.message)
  }
}

const getStallVerification = async (stallKey) => {
  try {
    let verification = await selectDBLite("SELECT * FROM Stall_Verifications WHERE Stall_Key='" + stallKey + "' ORDER BY Key DESC LIMIT 1");

    return verification;

  } catch(e) {
    throw new Error(e.message)
  }
}

const getTenantAssets = async (tenantid) => {
  try {
    let stalls = await selectDBLite("SELECT * FROM Tenant_Assets WHERE Id_Key='" + tenantid + "'");

    return stalls;

  } catch(e) {
    throw new Error(e.message)
  }
}

const getSiteAssets = async (tenantid) => {
  try {
    let stalls = await selectDBLite("SELECT * FROM Tenant_Assets WHERE Licensee_Id_Key='" + tenantid + "'");

    return stalls;

  } catch(e) {
    throw new Error(e.message)
  }
}

const getMakeAndModels = async () => {
  try {
    let models = await selectDBLite("SELECT * FROM Asset_Models");
    let makes = await selectDBLite("SELECT * FROM Asset_Make");

    return {"models": models, "makes": makes};

  } catch(e) {
    throw new Error(e.message)
  }
}

 							
const getSiteNotes = async (id) => {
  try {
    let notes = await selectDBLite("SELECT * FROM Notes WHERE Licensee_Id_Key='" + id + "'");

    return notes;

  } catch(e) {
    throw new Error(e.message)
  }
}

const getstallbyId = async(stallname) => {
  try {
     
    let stallkey = await selectDBLite("SELECT Stall_List.Stall_Key FROM Stall_List,Stall_Types WHERE Stall_List.Stall_Type_Key = Stall_Types.Stall_Type_Key and Stall_Types.User_Defined_Name = '" + stallname + "'" );
    return stallkey;

  } catch(e) {
    throw new Error(e.message)
  }
}


const getAllTenantDetails = async() => {
  try {
     
    let tenantdetails = await selectDBLite("SELECT Tenant_Assets.Asset_Make,Tenant_Assets.Asset_Model,Tenant_Assets.License_Plate_Number,Asset_Photos.Media_File,Tenant_Assets.Tenant_Asset_Key FROM Tenant_Assets,Asset_Photos WHERE Tenant_Assets.Tenant_Asset_Key  = Asset_Photos.Tenant_Asset_Key  " );
    return tenantdetails;

				  

  } catch(e) {
    throw new Error(e.message)
  }
}



const insertUsers = async(emailid) => {
  try {
   
    let users = await selectDBLite("INSERT INTO Users (Email_Main) values ('" + emailid + "')" );
    console.log("inserted");
    return "Inserted users Successfully";

  } catch(e) {
    throw new Error(e.message)
  }
}
const sync = async () => {
  try {
    let create = await syncDBLocal();

    return create;

  } catch(e) {
    throw new Error(e.message)
  }
}

/* ------ Stall Notes --- */
const insertSiteNotes = async(descp,notetype,stallname) => {
  try {
    let stallkey  = 0;
    if(stallname != "")
       stallkey= getstallbyId(stallname);
    let notes = await selectDBLite("INSERT INTO Notes (Notes, Is_General,Stall_Key) values ('" + descp + "'," + notetype + ","+ stallkey +")" );
    //console.log(notes);
    return notes;

  } catch(e) {
    throw new Error(e.message)
  }
}
const getAllSiteNotes = async (types) => {
  try {
    let sql=""
    if(types == 'general')
      sql = "SELECT * FROM Notes WHERE Is_General = 1"
    else if(types == 'stall')
      sql = "SELECT * FROM Notes WHERE Is_General = 0"
    else if(types == 'unresolved' || types =="all" )
        sql = "SELECT * FROM Notes "
    console.log("sql")
    console.log(sql)
    let notes = await selectDBLite(sql);
    //notes.then((data) => {console.log("responsess from ....")
    //console.log(notes)
    return notes;

  } catch(e) {
    throw new Error(e.message)
  }
}
const getNotebyStallNoandDate = async (stallnumber,date) => {
  try {
    let notes = await selectDBLite("SELECT a.* FROM Notes a,Stall_List b WHERE a.Stall_Key=b.Stall_Key and Stall_Number = "+stallnumber+ " and a.Entry_Date='"+date+"'");
    //notes.then((data) => {console.log("responsess from ....")
    //console.log(notes)
    return notes;

  } catch(e) {
    throw new Error(e.message)
  }
}
const getNotebyStallNo = async (stallnumber) => {
  try {
    let notes = await selectDBLite("SELECT a.* FROM Notes a,Stall_List b WHERE a.Stall_Key=b.Stall_Key and Stall_Number = "+stallnumber);
    //notes.then((data) => {console.log("responsess from ....")
    //console.log(notes)
    return notes;

  } catch(e) {
    throw new Error(e.message)
  }
}

const UpdateTenantAssets = async(AssetMake,AssetModel,LicensePlateNumber,TenantAssetKey) => {
											
  try {
     
    let updatetenantassets = await selectDBLite("update Tenant_Assets set Asset_Make = '"+AssetMake+"',Asset_Model= '"+AssetModel+"',License_Plate_Number ='"+LicensePlateNumber+"' where Tenant_Asset_Key ="+ TenantAssetKey);
    return updatetenantassets;
										
															   
						
				 

  } catch(e) {
    throw new Error(e.message)
  }
}

const UpdateAssetPhoto = async(MediaFile,TenantAssetKey) => {
  try {
     
    let updateassetphoto = await selectDBLite("update Asset_Photos set MediaFile = '"+MediaFile+"' where Tenant_Asset_Key ="+TenantAssetKey);
    return updateassetphoto;
						
				 

  } catch(e) {

    throw new Error(e.message)

  }
}

 
const getNotebyDate = async (entrydate) => {
  try {
    console.log(entrydate)
    let sql = "SELECT a.* FROM Notes a WHERE DATETIME(a.Entry_Date) >= '"+entrydate+" 00:00:00'"
    console.log(sql)
    let notes = await selectDBLite(sql);
    //notes.then((data) => {console.log("responsess from ....")
    //console.log(notes)
    return notes;

  } catch(e) {
    throw new Error(e.message)
  }
}
const InsertAssetPhoto = async(MediaFile,TenantAssetKey) => {
  try {
     
    let assetphoto = await selectDBLite("INSERT INTO Asset_Photos (Media_File,Tenant_Asset_Key) values ('"+MediaFile+"',"+TenantAssetKey+")");
															   
						
    return assetphoto;

  } catch(e) {
    throw new Error(e.message)
			   
  }
}
const getStallNotes = async (notekey) => {
  try {
    //console.log("notekey ===="+notekey)
    let notes = await selectDBLite("SELECT * FROM Notes where Note_Key="+notekey);
    //notes.then((data) => {console.log("responsess from ....")
    //console.log(notes)
    return notes;

  } catch(e) {
    throw new Error(e.message)
  }
}
 
const InsertAssetsMake = async(AssetMake) => {
  try {
     
    let assetsmake = await selectDBLite("INSERT INTO Asset_Make (Asset_Make) values ('"+AssetMake+"')");
    return assetsmake;

  } catch(e) {
    throw new Error(e.message)
  }
}

const InsertAssetsModel = async(AssetModel) => {
  try {
     
    let assetsmodel = await selectDBLite("INSERT INTO Asset_Models (Asset_Model) values ('"+AssetModel+"')");
    return assetsmodel;

  } catch(e) {
    throw new Error(e.message)
  }
}

const InsertTenantAssets = async(AssetMake,AssetModel,LicensePlateNumber) => {
  try {
     
    let tenantassets = await selectDBLite("INSERT INTO Tenant_Assets (Asset_Make,Asset_Model,License_Plate_Number) values ('"+AssetMake+"','"+AssetModel+"','"+LicensePlateNumber+"')");
    return tenantassets;

  } catch(e) {
    throw new Error(e.message)
  }
}


const InsertStallList = async(StallTypeKey,stallnumber) => {
  try {
     
    let stalltypes = await selectDBLite("INSERT INTO Stall_List (Stall_Type_Key,Stall_Number) values ("+StallTypeKey+",'"+stallnumber+"')" );
    return stalltypes;

  } catch(e) {
    throw new Error(e.message)
  }
}

const InsertStallType = async(desc,undefindname) => {
  try {
     
    let stalltypes = await selectDBLite("INSERT INTO Stall_Types (Description,User_Defined_Name) values ('"+desc+"','"+undefindname+"')" );
    return stalltypes;

  } catch(e) {
    throw new Error(e.message)
  }
}

const getAllStallList = async() => {
  try {
     
    let stalltypes = await selectDBLite("SELECT Stall_Types.User_Defined_Name,Stall_Types.Description,Stall_Types.Entry_Date,Stall_List.Stall_Number FROM Stall_Types,Stall_List WHERE Stall_List.Stall_Type_Key  = Stall_Types.Stall_Type_Key order by Stall_Types.Entry_Date desc limit 2 " );
    return stalltypes;

  } catch(e) {
    throw new Error(e.message)
  }
}

const getSearchDetails = async(data) => {
  try {
     
    let stalltypes = await selectDBLite("SELECT * FROM Tenant_Assets WHERE Asset_Make LIKE '%"+data+"%' or Asset_Model LIKE '%"+data+"%' or License_Plate_Number LIKE '%"+data+"%'" );
    return stalltypes;

  } catch(e) {
    throw new Error(e.message)
  }
}

const getAllTenantAssets = async () => {
  try {
    let alltenant = await selectDBLite("SELECT * FROM Tenant_Assets");
   

    return alltenant;

  } catch(e) {
    throw new Error(e.message)
  }
}

const UpdateStallNotes = async (description,notekey) => {
  try {
    //console.log("notekey ===="+notekey)
    let notes = await selectDBLite("update Notes set Notes = '"+description +"' where Note_Key="+notekey);
    //notes.then((data) => {console.log("responsess from ....")
    //console.log(notes)
    return 1;
  } catch(e) {
      //throw new Error(e.message)
      return 0;
  }
}

  const getLastStaffVerificationList = async () => {
    try {
      
      let notes = await selectDBLite("SELECT a.Verification_Date,(d.First_Name || '' || d.Last_Name)  as 'Tenant Name',b.Stall_Number FROM Stall_Verifications a,Stall_List b,Tenant_Assets c,Tenant_Details d WHERE a.Stall_Key = b.Stall_Key and a.Tenant_Asset_Key = c.Tenant_Asset_Key and c.ID_Key = d.Key order by a.Verification_Date desc limit 2");
      //notes.then((data) => {console.log("responsess from ....")
      console.log(notes)
      return notes;
    } catch(e) {
        //throw new Error(e.message)
        return e.message;
    }
  
}
const getStallAvailablebyStallNo = async (stallno) => {
  try {
     
    let notes = await selectDBLite("SELECT count(*) as 'Available' from Stall_List WHERE Stall_Number = "+stallno );
    if(notes.rows.length > 0)
        return "Available";
    else    
         return "Not Available";
  } catch(e) {
      //throw new Error(e.message)
      return e.message;
  }

}

module.exports = {
  getStallAvailablebyStallNo,
  getLastStaffVerificationList,
  getSiteTenants,
  getSiteStalls,
  getSiteStallPath,
  getStallVerification,
  getTenantAssets,
  getSiteAssets,
  getMakeAndModels,
  getNotebyDate,
  getNotebyStallNoandDate,
  getNotebyStallNo,
  insertSiteNotes,
  UpdateStallNotes,
  insertUsers,
  getAllSiteNotes,
  getStallNotes,
  getSiteNotes,
  InsertStallList,
  InsertStallType,
  getAllTenantDetails,										
  InsertTenantAssets,
  
  InsertAssetPhoto,
  UpdateAssetPhoto,
  UpdateTenantAssets,  
  getAllTenantAssets,
  getSearchDetails,
  getAllStallList,
  InsertAssetsMake,
  InsertAssetsModel,
  sync
};
