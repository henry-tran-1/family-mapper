# Family Mapper
Welcome to my family-mapper's README.  Here you'll find everything you need to get started!

## Overview
I worked on this project during my time at the Dev Academy Aotearoa bootcamp.  I wanted to create an interactive app where I could map out my family tree, and display details of each person and their relationship with any other selected member of the family.  I especially wanted to create this app for my niece and nephew who know even less about our distant family than I do!  

## Features
- Displays all family members (currently displays them in the correct generation, but not correct position, or any lines between direct members)
- Shows details of each person when clicked
- Allows user to select any family member, and the family tree will dynamically display all other member's relationships to them
- Allows user to add additional family members to the database

## Tech Stack
**Frontend:** React, Typescript
**Backend:** Node.js, Express.js
**Database:** SQLite3, Knex.js
**Styling:** Tailwind CSS


## Getting Started/Installation
- Clone repository
- Navigate into repository
- npm install
- npm run dev
- Nuns on browser: http://localhost:3000

## How It Works
The database consists of two tables, persons and relationships
