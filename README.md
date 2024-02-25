# Exchange Program Services Website

## Description of the project:
 This repository showcases a website that employs Formik forms for validation during user account creation and for an item intake form. It features a basic login functionality using Formik libraries. I've implemented validation where the email must adhere to a standard structure, but please note that email existence validation is not included and is left for future improvements. Additionally, users are required to fill out both the username and password fields before submitting the form. Upon successful validation, users will receive an alert confirming their login.

This website represents a preliminary version for a potential exchange program services company. Sections of the website are styled by using React Bootstrap libraries, other libraries used in this repo are axios libraries for fetching, formik libraries for creating a form section from the website and images are integrated from the Pexels API. There are numerous areas for enhancement in both functionality and design (Read more in Roadmap of future improvements section).

## How to Run:
This project was initialized using the Create React App toolchain. If you're interested in learning how to start your own app from a toolchain, follow the steps from the section "Mastering React: A Step-by-Step Guide to Creating Your App with Toolchain Assistance" . Otherwise, simply fork this project and then clone it to your local machine. To visualize this app in the browser, navigate to your terminal, stand in the cloned file directory, Also, please ensure you're in the repository directory before executing the following commands in the Git Bash terminal to add the following libraries.
-- Axios
npm install axios
-- Formik 
npm install formik --save
-- React Bootstrap
npm install react-bootstrap bootstrap

After that you should be able type 'npm start.' This will take you to your browser, allowing you to enjoy this cool application.


## Roadmap of future improvements:
There are numerous improvements and additions that can be implemented in this code. My goal is to introduce extra features to enhance interactivity, including the integration of Bootstrap React for styling. Additionally, I plan to implement more specific validations, such as verifying the existence of the email. I also aim to add handling for touch or blur, where validation will only be triggered if the user interacts with or moves through the input fields for username and password. I'll achieve this by continuing to use Formik libraries.

Also, There are other numerous areas for enhancement in both functionality and design. For example, I plan to improve navigation between pages by utilizing modules and refine the code for better clarity. I aim to utilize more useState, useReducer, and useEffect hooks to enhance code organization. Furthermore, I'm currently addressing challenges related to implementing pagination for pictures displayed on the website through the Pexels API.

## License information:
MIT license.

## Support
If you have any questions, please don't hesitate to contact me julieth. Also I'm open to your ideas and suggestions, and I'm confident that our combined talents could lead to exciting and innovative results. If you're interested in discussing potential projects or exchanging ideas, please let me know.

Let's start a conversation and see where our collaboration might take us.


### Mastering React: A Step-by-Step Guide to Creating Your App with Toolchain Assistance:

Use the VS Code terminal with Git Bash after creating the directory and files for your React application (using toolchains), follow these steps. Ensure that, after creating the folder, you upload the Formik library and use NPM start to initialize your React app (note: you must be located in the directory of your new app). Also, there's no need to concern yourself with the multitude of folders and files that the React app creation process will download into your app directory. If you're a beginner, like myself, the only files you'll need to use are the `index.html` from the public folder and the `app.js` from the src folder—that's it. 


#### 1.Step into the directory where you want your app to be located:
cd name-of-app

#### 2. Create a React app:
npx create-react-app name-of-app

#### 3. Install Formik:
npm install formik --save

#### 4.Start the React app:
npm start

Make sure to follow these steps in sequence, and remember to be in the directory of your new app when performing these actions. For more info go to the:[React Webpage](https://create-react-app.dev/docs/getting-started/)
