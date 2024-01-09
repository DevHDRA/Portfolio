# **Portfolio website**

Created with **Angular** and using a **Python AWS Lambda** that connects with the GitHub API, This portfolio shows all the data that I consider important about me. A brief introduction of myself, professional experience, my GitHub projects, tech stacks and contact data.

If you want to use this Portfolio, you are free to do it!

Exec **npm run start** for run the project locally (don't forget to add your environment variables)

# Environment variables:

 - **APIURL** ApiGateway URL that connects with Python lambda and get the GitHub data
 - **GITHUB** My GitHub profile page
 - **LINKEDIN** My LinkedIn profile page
 - **CV** My CV file

## GitHub API usage
The portfolio don't fetch data from GitHub directly, instead it calls an AWS apigateway that connects with a lambda that do the work, This is the [Lambda repo](https://github.com/DevHDRA/Portfolio_API