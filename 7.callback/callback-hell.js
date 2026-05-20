const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {

    if(err){
        console.error("Getting an error", err);
        return;
    }

    console.log("Original data:", data);

    const modifieddata = data.toUpperCase();

    fs.writeFile("output.txt", modifieddata, (err) => {

        if(err){
            console.error(err);
            return;
        }

        console.log("New file created and data updated from input.txt");

        fs.readFile("output.txt", "utf-8", (err, data) => {

            if(err){
                console.error(err);
                return;
            }

            console.log("Output.txt Content:", data);

            fs.writeFile(
                "output.txt",
                "Hello, Everything has changed",
                (err) => {

                    if(err){
                        console.error(err);
                        return;
                    }

                    console.log("Data changed in output.txt");

                    fs.readFile("output.txt", "utf-8", (err, data) => {

                        if(err){
                            console.error(err);
                            return;
                        }

                        console.log("Final data:", data);

                    });

                }
            );

        });

    });

});