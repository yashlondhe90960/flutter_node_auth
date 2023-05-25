const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(authRouter);

try{
    app.listen(PORT,"0.0.0.0", () => {
      console.log(`connected at port ${PORT}`);
    });
  } catch (err) {
    console.error(`Error starting the server: ${err}`);
}

const DB = "mongodb+srv://yashlondhe9151:yash_123@cluster0.uhewynp.mongodb.net/?retryWrites=true&w=majority";

mongoose
    .connect(DB)
    .then(() => {
        console.log("Connection successful");

    })
    .catch((e) => {
        console.log(e);
    });
