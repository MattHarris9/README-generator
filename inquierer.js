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
                        name: "Liscense",
                        message: "What liscense is this application under?",
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
            (hi my name is: ${data.name})
        </h1>
        <p>
            (I am from; ${data.location})
        </p>
        <ul>
            class="list-group"
            <li> (My github URL is: ${data.github})</li>
            <li>
               (My linkedin URL is: ${data.linkedin})
            </li>
        </ul>
        
        </body>
        </html>`
        
        promptUser()
        .then((data) => writeFileAsync("index.html", generator(data))
        
        .then(() => console.log("successful!"))
        .catch((error) => console.log("error")))
    