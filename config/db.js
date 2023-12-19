import mongoose from 'mongoose';

const connectDB =async () =>{
    try {
        const conn =await mongoose.connect(process.env.MONGO_URL)
        console.log(`coonected to dtabase ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

export default connectDB