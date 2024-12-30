import * as dotenv from "dotenv";
import mongoose from "mongoose";
import{readFile} from "fs/promises"
import User from './Model/Usermodel.js';
import Job from "./Model/Jobmodel.js"
dotenv.config()

try {
    await mongoose.connect(process.env.MONGO_URL);
    const user = await User.findOne({email:"manikandan222@gmail.com"})
    const jsonJobs = JSON.parse(
        await readFile(new URL('./utils/sample.json',import.meta.url))
    )
    const jobs = jsonJobs.map((job)=>{
        return({...job,createdBy:user._id})
    })
    await Job.deleteMany({createdBy:user._id})
    await Job.create(jobs)
    console.log('successs!');
    process.exit(0)
} catch (error) {
    console.log(error);
    
}