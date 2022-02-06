const express = require ('express');

const {initializeApp, getApps, cert} = require("firebase-admin/app");
const {getFireStore} = require("firebase-admin/firestore");
const credentials = require("./credentials.json");
const app = express();
//all posts need to be in json format
app.use(express.json())
//express needs a listen option for API
const PORT = process.env.PORT || 3002;


function connectToFirestore(){
if (!getApps().length){
    initializeApp({
        credential:cert(credentials),
    });
}
return getFireStore();

}

app.get("/", (request, response) => {
response.send ('we are listening')
})


 // http://localhost:3002










app.listen(PORT, () => console.log(`Listening to port ${PORT}`))