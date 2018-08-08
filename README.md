---

## Project setup

1. Download all the files by cloning the repository
2. run **yarn** or **npm install**
3. create a **.env** configuration file based on the **.env.example**
4. You are ready to go! 🚀🚀

---

## Tips and tricks
1. To disable corse errors in development: **add in package.json `"proxy": "api-url"`**

---

## Start, build and testing

1. ```yarn start || npm run start``` for lauching the project 🚀
2. ```yarn build || npm run build``` for building the project 🎊
3. ```yarn test || npm run test``` for running all the test files❗


---

## Set up eslint/prettier

Next, you'll setup eslint and prettier so your code will be formatted on autosave based on the settings in the **.eslintrc** file

1. Make sure **eslint** is installed correctly
2. Download the **prettier** plugin and **disable** it.
3. Add in your vscode setting.

4. ```
    "editor.formatOnSave": true,
    "[javascript]": {
        "editor.formatOnSave": false
    },
    "eslint.autoFixOnSave": true,
    "eslint.alwaysShowStatus": true,
```
5. Done 🚀

## Folder structure

1. All the redux actions and reducers are written under the modules folder
2. All the files are absoluted imported
3. Each action and reducer are in the same folder and named **nameAction.js** and **nameReducer.js**
4. Reusable components are written under the components folder
5. Page components are written under the pages folder
6. Each component has this folder structure for example (Home)

  ```
    components/
      Home.js
      HomeSidebar.js
    containers/
      HomeContainer.js
    styles/
      HomeStyle.js
    index.js
  ```
---