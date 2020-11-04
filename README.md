# Universo

This is a portal website that I plan to use with the local [Pathfinder](https://youth.adventist.org/Ministries/Pathfinders) club I volunteer at.

## Goal

To create a platform that will serve as both an online presence to the club and also a learning/management platform to digitize tasks making information more accessible and organized.

## Features

### Un-protected Components

This will host the main website to be displayed to the general public. It will be made up of a main, media, about us, and contact components.

* The main page will be a simple landing page with a photo carrosel and a brief welcome message.

* The media page will hold photos and videos hosted on a cloud platform (AWS or Google Cloud).

* The about us page will have a history and description of the club, its mission, etc...

* The contact page will have a form that will be sent to the club with the message the user decides to leave.

### Protected Components

The protect components will be devided into three main categories that will be displayed to the corresponding account types.  There will be 3 account types: pathfinder, parent, staff.

#### Pathfinder

This account type will mainly just display useful links and materials instructors add for their students, eventually it will have a chat system where pathfinders and instructors can use to communicate, along with a message board and a calendar to display deadlines.

#### Parent

This account type will display information pertnent to the parents such as club dues, information regarding their child(messages, calendar, etc...), eventually documents to be digitally signed.

#### Staff

This account type will be a pseudo-admin having access to parents and pathfinders, being able to post specific content to those accounts, being able to add events/deadlines, take attendance, etc...

## Technologies Used

* Node.js
* MongoDB
* Express.js
* Mongoose
* React
* Redux
* AWS or Google Cloud