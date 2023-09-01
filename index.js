const { log } = require('console');
const csvtojson = require('csvtojson');
const fs = require('fs');


const csvfilepath = "./inputCSV/simple.csv"

csvtojson()
.fromFile(csvfilepath)
.then((json) => {
    console.log(json);
    fs.writeFileSync("./outputJson/output.json",JSON.stringify(json),"utf-8", (err) =>{
        if(err) console.log(err);
    })
})
