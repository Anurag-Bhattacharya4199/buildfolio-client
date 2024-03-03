## My BuildPortfolio Web Application:

In the Buildfolio Web Application, a student, new graduate or new professional can automate the creation of their Portfolio Website through a series of forms. Users will input basic information about themselves and then will add specific details from a dashboard like education history, work history, projects, skills and references. Using all this information, a template Portfolio Web Page with multiple informative tabs will be available for users to view and share.

## App Walkthrough:

https://github.com/Anurag-Bhattacharya4199/buildfolio-client/assets/134398219/c0816af9-220d-4c17-bb32-abdfa2b7e23f

## Features:

- **Home Page:** This Home Page features a brief description of the overall project and a CTA button to allow the User to start the portfolio-building process by creating a User.
- **User Form:** Here, the User inputs basic information about themselves from the name, email address, phone number, profile summary, LinkedIn & GitHub Links and their Primary & Secondary colours
- **User Dashboard"** Here, the User can see all the basic information about themselves + CTA Images to add specific information about themselves such as education history, notable projects, work experiences, skill set & list of references. Upon receiving all the information needed, the CTA Button allows the User to build their Portfolio Web Page.
- **Specific Information Forms:** In these individual-specific information forms, User input their education history, notable projects, work experiences, skill set & list of reference information.
- **PORTFOLIO Home Page:** This page features a Hero Image of the User, The Profile Summary, a List of Notable Projects, Contact Information & Professional Social Accounts (LinkedIn and GitHub).
- **PORTFOLIO About Page:** This page features the Education, Work & Skill Set information along with a Profile Summary. There is also a CTA Button to go back to the User Dashboard to add any new information.
- **PORTFOLIO Reviews Page:** This page features a List of Reviews from the reference information inputted by the User.

## Technologies & Packages
Main Ones:
- **React & React DOM** (`react`, `react-dom`): A JS library for building UI. This project uses React for its component-based architecture.
- **React Router DOM** (`react-router-dom`): Used for handling routing in a single-page application (SPA), enabling navigation between different sections of the app without reloading the application
- **Sass** (`sass`): A preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS), allowing for more advanced styling options.
- **Axios** (`axios`): A promise-based HTTP client for making requests to back-end services.
- **Validator** (`validator`): A library used for string validations. Here, used for the validation of email address input.

To install these dependencies, ensure you have Node.js and npm installed, then run `npm install` in the project directory after cloning the repository.

These packages facilitate the development of a modern, efficient, and user-friendly client-side application by providing essential utilities, components, and development tools.

## Setup:

To run the project application, follow these steps:

Pre-requisite:
Follow the Server Application instructions to set up the server and database needed for the application: https://github.com/Anurag-Bhattacharya4199/buildfolio-server

STEP 1: Clone the Repository
```bash
git clone https://github.com/Anurag-Bhattacharya4199/buildfolio-client
```

STEP 2: Navigate to the Project Directory
```
cd buildfolio-client
```

STEP 3: Install dependencies
```
npm install
```
or
```
npm i
```

STEP 4: Start the Application
```
npm start
```

The application should now be running on http://localhost:3000.

## Usage
- **Build a User:** User can create their user profile, by inputting basic information about themselves
- **Add Specific Details:** Users can add specific information about themselves like education history, notable projects, work experience, skills set & list of references
- **Explore Portfolio Web Page:** User can explore the Portfolio Web Page from the Home Page to the About Page to the Reviews Page

## Future Implementation Work:
Planned future implementation for the next phases of work:

### Enhanced Styling
Improve the overall styling of the application for a more user-friendly and production-ready web application

### Data Security & Encryption
As the information provided by the user is personal, plans to secure the data the user inputs and encrypt the data when passing the information to the back-end & database

### User Authorization & Authentication
Allow Users to sign-up and log in with a User Profile, to view and edit their Portfolio Web Page information

### Profile Picture + Project Images
Allow Users to upload Images for Profile Picture and Project Images for each notable project










