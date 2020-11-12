    const fs = require('fs');
    const inquirer = require('inquirer');
    const { async } = require('rxjs');
    const util = require("util");
    const writeFileAsync = util.promisify(fs.writeFile);
    
    const promptUser = () =>
        inquirer
            .prompt(
                [
                    {
                        type: "input",
                        name: "Title",
                        message: "What is the title of your project?",
                    },
                    {
                        type: "input",
                        name: "description",
                        message: "What is the description of your project?",
                    },
                    {
                        type: "input",
                        name: "installation",
                        message: "What are the installation instruction for your project?",
                    },
                    {
                        type: "input",
                        name: "usage",
                        message: "What is this program used for?",
                    },
                    {
                        type: "input",
                        name: "contributions",
                        message: "Add the github username of the person that contributed?",
                    },
                    {
                        type: "input",
                        name: "Test",
                        message: "Put application test here?",
                    },
                    {
                        type: "input",
                        name: "License",
                        message: "What license is this application under?",
                    },
                    {
                        type: "input",
                        name: "Github",
                        message: "Add a link to your Github page here!",
                    },
                    {
                        type: "input",
                        name: "Email",
                        message: "Enter Email here?",
                    },
                ]
            )
    
    const generator = (data) => `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
    <h1>
       Tilte : ${data.Title}
    </h1>
    <p>
        Description : ${data.description}
    </p>
    <ul>
        class="list-group"
        <li> installation instructions : ${data.installation}</li>
        <li>
           Program usage: ${data.usage}
        </li>
        <li> Contributors: ${data.contributions}</li>
        <li>
            test : ${data.Test}
        </li>
        <li> License: ${data.License}</li>
        <li>
            Want to contact me : ${data.Github}, 
                                
                                ${data.Email}
        </li>
    </ul>
    
    </body>
    </html>`
        
        promptUser()
        .then((data) => writeFileAsync("index.html", generator(data))
        
        .then(() => console.log("You have successfully made a readme!"))
        .catch((error) => console.log("error")))
    