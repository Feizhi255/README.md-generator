function generateMarkdown(data, githubInfo) {
  return `
# **${data.title}**
${data.badge}
## Description 
${data.description}
## Table of contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributors](#Contributors)
- [Test](#Test)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub) 
## Installation
  Run:

        ${data.installation}
        
## Usage
  This command-line application dynamically generates a README.md from a user's input. The application will be invoked with the following command:

        ${data.usage}

  The user will be prompted for their GitHub username and other information pertaining to the project the README is for.
## Licence
${data.licence}
## Contributors
${data.contributing}
## Test
${data.test}
## Repository
- [${data.repoName}](${data.repo})
## GitHub
![Image of me](${githubInfo.githubImage})
- ${githubInfo.name}
- [${data.username}](${githubInfo.profile})
- <${githubInfo.email}>
`;
}

module.exports = generateMarkdown;
