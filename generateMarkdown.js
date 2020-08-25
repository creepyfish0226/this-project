// function to generate markdown for README
function generateMarkdown(data) {
    console.log(data)
    return `# ${data.title}

![${data.license} badge](${encodeURI(`https://img.shields.io/badge/License-${data.license}-blueviolet`)})  


## Table of Contents
[Description](#Description)  
[Installation](#Installation)  
[Usage](#Usage)  
[License](#License)  
[Contributing](#Contributing)  
[Tests](#Tests)  
[Questions](#Questions)  


## Description

${data.description}

### Installation

${data.dependencies}

### Usage

${data.usage}

### License

${data.license}

### Contributing

${data.contributions}

### Tests

${data.test}

### Questions


If you still have question contact me directly at ${data.email}. You can find out more at [${data.userName}](https://github.com/${data.userName}/).
  `;
  }
  
  module.exports = generateMarkdown;