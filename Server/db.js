import { connect } from 'mongoose'

const db = "mongodb+srv://obaid:Babar123@cluster0.qlk78va.mongodb.net/?retryWrites=true&w=majority"

connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(data => {
    console.log("Database is connected successfully.")
}).catch(e => {
    console.error("Error connecting: " + e.message)
})
