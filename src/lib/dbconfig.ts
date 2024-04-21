import mongoose from "mongoose";

type connectionobject={
    isConnected?:number
}

const connection:connectionobject={}

async function Dbconnect(){
    if(connection.isConnected){
        console.log("Database is already connected")
        return
    }
    try {
        const db=await mongoose.connect(process.env.MONGODB_URL || "")
        console.log(db)
        console.log(db.connections)
        console.log(db.connections[0])
        connection.isConnected=db.connections[0].readyState
    } catch (error) {
        console.log("database connection was unsuccesful")
        process.exit(1)
    }
}
export default Dbconnect