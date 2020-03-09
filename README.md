# node_oauth
#### ***Node.js OAuth Authentication using ExpressJS, PassportJS &amp; MongoDB***



To use this repository-

- **Clone** the repository
- Create a file called **keys.js** under **config** folder
```
- config
    - keys.js
```
- Edit **keys.js** file with below required information
```
module.exports = {
  MongoURI: 'MongoDB Path',
  googleClientID: 'Google Client ID',
  googleClientSecret: 'Google Client Secret'
};

```
- At last run following commands inside '**node_oauth**' directory to run the project
```
$ npm install
$ npm start

```
