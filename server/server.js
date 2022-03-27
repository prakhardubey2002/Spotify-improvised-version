const express = require("express");
const spotifyWebApi = require("spotify-web-api-node"); //to decrept the token

const app = express();
app.post("./login", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new spotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "da87daea0c734324b74a7d7a1048947b",
    clientSecret: "63e263f5215040caa1f88195500a09b1",
  });
  spotifyApi.authorizationCodeGrant(code).then(data => {
    res
      .json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expressIn: data.body.expires_in,
      })
      .catch(() => {
        res.sendStatus(400);
      });
  });
});
