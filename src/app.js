import express from "express"
import cors from 'cors'

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))

//data comes in a server in json format form FORM, URL
app.use(express.json({
    limit : "16kb"

}))
//handle data form URL
app.use(express.urlencoded({extended : true, limit : "16kb"}))

//for storing files and folder on server
app.use(express.static("public"))

//for handling cookies  : access cookies from user browser
//  and perform crud on them
export default app ;