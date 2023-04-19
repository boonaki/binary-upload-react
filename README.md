## Binary-Upload-React

# MERN Stack MVC Monorepo Template
A full-stack web-application, converted from the 100Dev's [binary-upload-boom](https://github.com/100devs/binary-upload-boom) template to use React.js instead of EJS. It is designed so that the client and server are being ran on 2 different ports. The application features all the operations of CRUD ([Create, Read, Update, Delete](https://www.sumologic.com/glossary/crud/)), happening in the server side, with React functions fetching the necessary data to then be displayed on the frontend. 

## Tools Used
<strong>MongoDB/Mongoose, Express.js, React.js, Node.js, Cloudinary, Multer, Passport, Bootstrap</strong>

## Optimizations
This is my first project using React. I have kept the project faithful to the original, but the frontend has a bit more flexibility added to it with the inclusion of `useEffect` and `useState`. There are many optimizations that could be made to improve both ends of this application, but this is a great starting point if you need React in your fullstack web-application.

This project can get a bit complicated especially when running locally or even with a service provider, which can be seen with the scripts inside the `package.json` file at the root, but I have attempted to make it as simple as possible. Though, you might also prefer the application setup where the server and client are further separated out into 2 different repos. If you wish to see an MVC project using react that separates the client and server into 2 repos, you can check out an MVP for a Sudoku web-application below, developed by [Raymond Guo](https://github.com/RayGuo357/):
- [server repo](https://github.com/RayGuo357/Sudoku-API)
- [client repo](https://github.com/RayGuo357/Sudoku-React)

A bit about React that interested me were [Reducers](https://beta.reactjs.org/learn/extracting-state-logic-into-a-reducer). Reducers essentially offer a way to further abstract logic into files for better organization and reducing complexity. They were not implemented into this project, but it is something I will look into adding as I delve further into react.

## Pull Requests
Pull requests are welcome! If you see that there is a way that this template can be improved for the 100Devs community, feel free to pitch in!

1. Create an Issue describing the change
2. Make your pull request


## Setup
 
1. Clone the repo into your folder using the command
```
git clone https://github.com/boonaki/binary-upload-react.git
```

2. CD into the project folder
```
cd binary-upload-react
```

3. Run the npm command to install dependencies for the server.
```
npm install
```

4. CD into the client folder
```
cd client
```

5. Run the npm command to ensure installation of dependencies for the client side
```
npm install
```

6. Return back to the root of the project
```
cd ..
```

### Things to add
- Create a `.env` file in `/server/config` folder and add the following as `key = value`
- PORT = `8000` (can be any port EXCEPT `3000`)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

### Tailwind
To keep things faithful to original, I decided not to implement tailwind into the project. But I really like tailwind, so if you wish to do so:

1. cd into the client folder.
```
cd client
```

2. From there, you can follow the instructions on their [website](https://tailwindcss.com/docs/installation) normally
3. Once Finished, be sure to return back to the root
```
cd ..
```

## Running Locally

### Prerequisites

Must have Node.js installed to run. If you need to install Node.js, please refer to their website [here](https://nodejs.org/en/).

Must have the `.env` file in your `server/config` folder with your defined set of key/value pairs

### Running

1. Ensure you are at the root of the folder by running the ls command and checking if the directory ends with '/binary-upload-react'
```
ls
```

2. Run npm run start to start the application
```
npm run start
```

- At this point both the server and the client should be running. They will be shown in the terminal with a `[0]` or `[1]` next to the current status
  - `[0]` - Responses from the server
  - `[1]` - Responses from the client

4. React should automatically open a link in your primary browser, but if not, you can go to https://localhost:3000 to view the application
```
https://localhost:3000
```

If you encounter any errors when starting locally, ensure that you are in the root of the project and that you have your enviroment variables setup correctly.
