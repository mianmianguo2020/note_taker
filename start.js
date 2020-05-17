var path = require("path");
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080 ; 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
require("./notesRouter")(app);
require("./indexRouter")(app);



// app.use(express.static(path.join(__dirname,"public")));

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  