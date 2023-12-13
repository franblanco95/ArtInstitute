# Artworks App

This application showcases artworks fetched from the Art Institute of Chicago API.

## Overview

The application utilizes the Art Institute of Chicago API to fetch artworks. It displays information about the artworks and allows users to add their favorite pieces to their collection.

## Features

- Displays a list of artworks fetched from the Art Institute of Chicago API.
- Allows users to view detailed information about each artwork.
- Enables users to add artworks to their favorites.
- Toast notifications are displayed when an artwork is added to favorites.

## Technologies Used

- React Native
- Art Institute of Chicago API
- AsyncStorage for local storage
- React Navigation for navigation within the app
- `react-native-toast-message` for toast notifications
- Other standard React Native libraries and utilities

### Push Notifications

In this project, toast notifications were implemented to provide instant feedback to users when they add an artwork to their favorites. However, due to the lack of implementation of push notification certificates and Apple Developer configuration, push notifications were not included in the iOS application. To send push notifications to an iOS application, it's necessary to set up push notification certificates in the Apple Developer portal and then integrate them into the Xcode project.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd artworks-app`
3. Install dependencies: `npm install` or `yarn install`
4. Run the application: `npm start` or `yarn start`

## Notes

This project does not implement push notifications. However, toast notifications are displayed to notify users when an artwork has been added to their favorites.
