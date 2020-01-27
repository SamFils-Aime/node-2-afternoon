const express = require('express')
const mc = require('./controller/messages_controller')
const PORT= 3001

const app = express()
app.use(express.static(__dirname + '/../public/build'));
app.use(express.json());



const messagesBaseURL = "/api/messages"

app.post(messagesBaseURL,mc.create) 
app.get(messagesBaseURL, mc.read)
app.put(`${messagesBaseURL}/:id`, mc.update)
app.delete(`${messagesBaseURL}/:id`, mc.delete)

app.listen(PORT, ()=>{console.log(`server is listening`)}
)


