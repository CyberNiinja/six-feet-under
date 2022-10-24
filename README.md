# six-feet-under

A tourism and attraction proposition website developed during the PA2555 agile and lean course at BTH.

## Installation Instructions

Before installing the repository, you will need Node (lts release) and a package manager (npm, pnpm, yarn etc.). Additionally you will need to setup a docker container running mysql:latest image and forward its 3306 port to the hosts 3306 port.

To do this You will need Docker installed on your machine. Once installed, open a command prompt and execute the following commands.

`docker run --name six-feet-under -e MYSQL_ROOT_PASSWORD=password -d mysql:latest -p 3306:3306`
once this is executed, open the CLI of the container that is now running and login with following command

`mysql -u root -p`
which will ask you for the root password defined earlier (password).

once logged in create a DATABASE called "auth" using this command:
`CREATE DATABASE auth;`

The database should now be set up.

In order to run the website you need to complete following steps:

- download the code with git (any git interface should work, we used Github Desktop)
- Open the directory (`cd path/to/directory`)
- run `cd backend`
- run `npm install`
- run `node index.js` which will start the backend api
- run `cd ..`
- run `npm install`
- run `npm start` which start the dev server and will open a browser window
