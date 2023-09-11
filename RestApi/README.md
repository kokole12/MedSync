# MedSync Rest API
> MedSync is a comprehensive web application designed to revolutionise the way medical records are stored and accessed. The application aims to provide doctors and healthcare professionals with a seamless platform to securely store and retrieve patient medical records. With MedSync, patients can experience enhanced medical care and convenience by allowing their medical information to be easily accessible across different healthcare institutions.

## Key functionalities
> Centralised Medical Records.
> Universal Accessibility.
> Data Security.
> User-Friendly Interface.
> Real-Time Updates
> Customizable Permissions.
> Integration with Existing Systems.
# Routes

## Authentication and Authorization
** /api/v1/auth **
This is the route to handle authentication in the application. it has the following routes
** /api/v1/auth/register ***
This route handles the user registration in the application. the Users are either a doctor or a nurse and also Admins.

** /api/v1/auth/login **
This route handles the login to the application and also handles the issuing of jwt tokens to users signed in with correct credentials to handled the authorization in the routes that require authority

** /api/v1/logout **
This route handles the logout for the users and also disqualification of the json web token.

## User routes
** /api/v1/users **
This will handle the users that are registered within the system with verified documents and also handles the creation of users.
** /api/v1/users/id **
This route handles the deletion, updating and getting a single user by Id

## Patient routes
