const fs=require('fs');
const path=require('path');


// Create a folder
const dataFolder=path.join(__dirname,"data");

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("data folder created");
}


// console.log(dataFolder);
// C:\Users\Admin\Desktop\test\5.file-system\data


// Create a File
const filepath = path.join(dataFolder,"data.txt");
fs.writeFileSync(filepath,"Hello From Node.js");
console.log("File created sucessfully");

// console.log(filepath);
// C:\Users\Admin\Desktop\test\5.file-system\data\data.txt

// Read from file 
const readcontentfromfile=fs.readFileSync(filepath,"utf-8");
console.log("File Content: ",readcontentfromfile);

// Add another line (Append)

fs.appendFileSync(filepath,"\nThis is another line of information");
const updatedContent = fs.readFileSync(filepath,"utf-8");
console.log("File Content: ",updatedContent);



 






// Asynchronous way of creating file
// const asyncfilepath = path.join(__dirname, "data", "async-data.txt");

// console.log(asyncfilepath);

const asyncfilepath = path.join(dataFolder, "async-example.txt");

fs.writeFile(asyncfilepath, "Hello async node.js", (err) => {

    if(err){
        throw err;
    }

    console.log("Async File created Successfully");

    fs.readFile(asyncfilepath,"utf-8",(err,data)=>{
        if(err) throw err;

        console.log("Async Content: ",data);

    })
});

