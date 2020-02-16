var express = require('express');
var path = require('path')

var multer = require('multer');
var upload = multer({dest:'uploads/'});

const app = express();

var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './uploads');
     },
    filename: function (req, file, callback) {
        callback(null , "test"+path.extname(file.originalname));
    }
});

var upload = multer({ storage: storage })

app.post('/single', upload.single('myFile'), (req, res) => {
    res.send("ok")
  });

app.listen(3000, () => {
    console.log('listening to the port 3000');
});

