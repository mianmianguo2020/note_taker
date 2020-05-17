var fs = require("fs")


module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        fs.readFile(__dirname + "/db/db.json", function (err, data) {
            if (err) throw err;
            // console.log(JSON.parse(data))
            res.json(JSON.parse(data));

        })
    })
    app.post("/api/notes", function(request,res) {
        const data = request.body;
        console.log(request.body)
        console.log(request.query)
        console.log(request.params)
        // response.json(JSON.stringify(request));
        // console.log(response)
        // fs.writeFile(__dirname + "/db/db.json", JSON.stringify(request.body), (err)=> {
        //     if (err) throw err;
        //     console.log(data)
        //     res.json(JSON.parse(data));

        // })
    })
    //  app.post("/api/notes", function (req,res) {



    //  })data




}
