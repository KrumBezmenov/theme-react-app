# theme-react-app information

# Travel forum app

## Introduction to idea

The idea behind the project is to enable a place where people can share
their recommendations for travelling and adventures they know about with others. They share their preferences by filling out fields with the country and city of the destination, the type of a trip they are going to experience(family, fun, adventure, relaxation, etc.), visual representation (image) and writing a description so other users can have a clue what it is about.

### Requirements

    - Three different dynamic pages that fetch data from the back-end, allowing their content to change with the application state
    - Specific pages for listing records and record details. Such as catalog page, search page and details page
    - Communicate to a remote service via REST.
    - Implemented all CRUD operations (create, read, update, delete).
    - Implemented 8 routers (error page not included into the count).
    - Implemented error handling and data validation to avoid crashes.
    - Implemented public and private access to different features. Private features can only be accessed by authenticated users.
    - Use React.js for the client-side

# Installation guide

#### First step

```sh
git clone git@github.com/KrumBezmenov/theme-react-app
```

#### Second step

```sh
cd theme-react-app
```

### Rest API Server intizialization guide

#### Third step

Open a terminal and run

```sh
cd theme-rest-server
```

```sh
npm install
```

```sh
npm run start
```

With this we initialize the server. After successful initialization of the server, it will run on port 5173 and it will apply creation of a database named "themes-app-db". It's going to store 2 collections, themes and users.

### React intizialization guide

#### Fourth step

Open another terminal and run

```sh
cd theme-app-client
```

```sh
npm install
```

```sh
npm run dev
```

### Navigation with browser to access

```sh
http://localhost:5173/
```

As link:
http://localhost:5173
