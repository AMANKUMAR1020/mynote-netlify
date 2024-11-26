# Mynote Frontend
### In this, we are used many npm modules ans library of javascript and react.js
## Overview
>  In this Web-app, you can create new notes , assignment and users. You can assign this notes your manager and
employee.
> 
> There is three role in this for Employee can only write the notes or assignment , for Manager can create new employee
and also give assignment to its employee and last Admin which have access to write,delete , create new employee account
Id and delete any account Id.
> 
> In this ,i have used react.js , html, css, for frontend part and mongoDb, express,js, node.js for backend part.
> 
> I have also used ’Trust this device’ checkbox and JWT Web-token for encreption and decription purpose and lastly
redux-tookit for state-manegment purpose.

 *Let discuss the features and working structure of Mynote Frontend*

# Woking
---

## UserBasedRole :- 
### Admin :-
- **Create New Note** They have right to create new Note and ==assign to anyone==.
- **Terminate User** :- They have full right to terminate the user by ==making inactive or active==.
- **Update User** :- Have right to update user and their password.
- **View Notes** :- Admin can easily ==see notes== of all users.
- **View Users** :- Admin can also see total number of users in the applications.
        
### Manager :-
- **View Users** :- Admin can also see total number of users in the applications.
- **Update User** :- He can only update his username and their password.
- **Create New Note** Everyone right to create new Note and assign to anyone even the admin.
- **View Notes** :- Admin can easily see notes of all users.
    
### Employee
- **Create New Note** Everyone right to create new Note..
- **View Notes** :- Admin can easily see notes of only created by employees.
---




# Modules used
- **fortawesome** : to create icons and svg ,
- **@reduxjs/toolkit** : To handle a predictable state management library that allows developers to manage and share application state across different components,
- **jwt-decode** : to decrypt th token coming from server,
- **dotenv** : Keep safe important uri, passwords, etc,
- **react-router-dom** : routing path on react components and pages,
- **express-async-handler** : handling async routing,
- **react-spinners**: smoother animation during loading time,
---
## Installation

Dillinger requires [React.js](https://react.dev/) v10+ to run.
Install the dependencies and devDependencies and start the application.

```sh
cd mynote-netlify
npm i
npm start
```

For production environments...

```sh
npm install --production
npm run build
```
---
## Helps and links

Instructions on how to use them in your own application are linked below.

| Name | LINKS |
| ------ | ------ |
| mongoDb | [https://www.mongodb.com/][PlDb] |
| GitHub | [plugins/github/README.md][PlGh] |
| render .com | [https://dashboard.render.com/static/srv-cjm24o8cfp5c73e23l10][PlGa] | chatgpt .com | [https://chatgpt.com][PlGa] |
| Grave Dave | [https://www.youtube.com/@DaveGrayTeachesCode/playlists][PlGd] |
| digitalocean | [https://www.digitalocean.com/][PlOd] |
| freecodecamp | [https://www.freecodecamp.org/][PlMe] |

