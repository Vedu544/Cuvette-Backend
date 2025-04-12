import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import jobRoutes from "./routes/jobRoutes.js"


const app = express()

app.use(cors({
    origin:"https://cuvette-backend-rs5z.vercel.app/",
    credentials: true
}))


app.use(express.json({ limit: '50kb'  }))
app.use(express.urlencoded({extended:true, limit: '50kb'  }))

app.use(express.static('public'))
app.use(cookieParser())

app.use("/api/jobs/", jobRoutes)

export {app}
