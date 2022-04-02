const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const spotifyWebApi = require("spotify-web-api-node"); //package to decrept the token

const app = express();
app.use(cors());
app.use(bodyParser.json()); //to parse data in json format
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post("/request",(req,res)=>{
  const refreshToken=req.body.refreshToken
  console.log(refreshToken)
  const spotifyApi = new spotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "da87daea0c734324b74a7d7a1048947b",
    clientSecret: "63e263f5215040caa1f88195500a09b1",
    refreshToken
  })

  spotifyApi.refreshAccessToken().then(
    (data)=> {
      res.json({
        accessToken:data.body.accessToken,
        expireIn:data.body.expiresIn,
      })
    }).catch((err)=>{
      console.log(err)
      res.sendStatus(400)
     })
})


app.post("./login", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new spotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "da87daea0c734324b74a7d7a1048947b",
    clientSecret: "63e263f5215040caa1f88195500a09b1",
  });
  spotifyApi.authorizationCodeGrant(code).then((data) => {
    res
      .json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  });
});
app.listen(3001);
