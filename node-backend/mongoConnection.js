import {MongoClient} from 'mongodb'

const connection = ()=>{
    let dbCon = null
    async function getConnection(){
        try{
            let _dbCon = await MongoClient.connect(process.env.MONGODB)
            let db = _dbCon.db("empdb")
            return db
        }catch(err){
            console.log(err)
            return err;
        }
    }
    const getDbCon = async ()=>{
        if(dbCon != null){
            return dbCon;
        }
        try{
            let collection = await getConnection()
            return collection;
        }catch(err){
            console.log(err)
            return err;
        }
    }
    return {
        getDbCon : getDbCon
    }
}

export default connection();