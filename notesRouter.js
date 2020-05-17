var fs = require("fs")


module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        fs.readFile(__dirname + "/db/db.json", function (err, data) {
            if (err) throw err;
            // console.log(JSON.parse(data))
            res.json(JSON.parse(data));

        })
    })
    app.post("/api/notes", function (request, res) {
        let array = [];
       
        fs.readFile(__dirname + "/db/db.json", function (err, data) {
            
            if (err) throw err;
            // console.log(data)
            array = JSON.parse(data);
            array.push(request.body)
            for (let i = 0; i < array.length; i ++) {
                array[i].id = i;
                
            }
            writeFile(array, res)
        })
   
    })
    app.delete("/api/notes/:id", function (req,res){//id is variable 
       
       
        fs.readFile(__dirname + "/db/db.json", function (err, data) {
            let array = [];
            if (err) throw err;
            // console.log(data)
            array = JSON.parse(data);
            array = array.filter(note=>note.id !== parseInt(req.params.id));
            console.log(array)
            writeFile(array, res)

        })

    })

}

function writeFile(array, res) {
    fs.writeFile(__dirname + "/db/db.json", JSON.stringify(array), (err) => {
        if (err) throw err;
        res.end()
    })
}
