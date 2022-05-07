import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import morgan from "morgan";

/*import router*/
import authRouter from './routes/auth'
import quizzRouter from './routes/quizz'

const app = express();

dotenv.config()
app.use(express.json())
app.use(morgan("common"))



const PORT = 3000

app.get('/', (req, res) => {
      res.send("hello world")
})

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true })
      .then(() => {
            console.log("database is already")
            app.listen(process.env.APP_PORT || PORT, (req, res) => {
                  console.log(`server is running in on PORT ${process.env.APP_PORT || PORT}`)
            })
      })

app.use('/api/auth', authRouter)
app.use('/api/quizz', quizzRouter)