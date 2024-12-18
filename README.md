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
- **Frontend:** React, Typescript
- **Backend:** Node.js, Express.js
- **Database:** SQLite3, Knex.js
- **Styling:** Tailwind CSS


## Getting Started/Installation
- Clone repository:
  ```bash
  https://github.com/henry-tran-1/family-mapper.git
  ```
- Navigate into repository:
  ```bash
  cd family-mapper
  ```
- Install dependencies/packages:
  ```bash
  npm install
  ```
- Run the development server:
  ```bash
  npm run dev
  ```
- Access the app in your browser:
  http://localhost:5173

## How It Works
The **relationships** table records direct relationships of three types:
- Parent-Child
- Child-Parent
- Spouse-Spouse
From these direct relationships alone, all other relationships can be determined using a **recursive query**.

### The Process:
1. The recursive query is performed by the 'findRelationshipPath' function, located in '/server/db/index.ts'.
  - It takes two people as inputs: 'source_person' and 'target_person'.
  - It returns the relationship path between them, e.g. 'child, child, parent' ('source_person' is the child of someone, who is a child of someone, who is the parent of the 'target_person'.

2. How the query works:
  - First, it checks the direct relationships of the 'source_person'.
  - If the 'target_person' is found, it returns the direct relationship.
  - If not, the query recursively checks the direct relationships of people who are directly related to the 'source_person'.
  - This process repeats recursively until the 'target_person' is found.

3. Interpreting the relationship path:
   - The relationship path returned by the query is passed to a large switch statement in '/server/interpret.ts'.
   - This path is translated into a meaningful relationship, e.g. 'child, child, parent' returns 'uncle' or 'auntie'.

By combining recursive querying and relationship interpretation, the app dynamically calculates and displays family member relationships.

## Future Improvements
- Render the family members in the correct order:
  - Position spouses next to each other
  - Place children directly beneath their parents
- Add visual connections
  - Render vector/lines between direct family members
- Enhance personalisation
  - Allow users to upload and display family member photos
