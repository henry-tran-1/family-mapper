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
- Install packages:
  ```bash
  npm install
  ```
- Run server:
  ```bash
  npm run dev
  ```
- Access the app in your browser:
  http://localhost:5173

## How It Works
The relationships table records every relationship of type: parent-child, child-parent, and spouse-spouse.  Through just these connections, every relationship can be connected by a recursive query.

This recursive query is performed by the function: findRelationshipPath on /server/db/index.ts, which looks at two people (source_person and target_person) and returns their relationship path e.g. 'child,child,parent'.

The query looks at the direct relationships of the **source_person**, and if the **target_person** is one of them, it is successful and returns this direct relationship.  If the **target person** is not one of them, it will then query all the direct relationships of the directly related people to **source_person**, and if the **target_person** is still not one of them, it will continue this recursive querying until success.

This relationship path is then interpreted into a relationship by a switch statement on /server/interpret.ts, e.g. 'child,child,parent' would return 'uncle'.

## Future Improvements
- Render the family members in the correct order:
  - Position spouses next to each other
  - Place children directly beneath their parents
- Add visual connections
  - Render vector/lines between direct family members
- Enhance personalisation
  - Allow users to upload and display family member photos
