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
        ${data.installation}
## Usage
        ${data.usage}
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
`;
}

module.exports = generateMarkdown;
