# Loirebnb

Loirebnb is a Loire Valley wine-focused airbnb clone. Users can find wineries, book tastings, leave reviews, and save wineries for later. Users can also create and list their own wineries. The seeder data consists of real wineries and winemakers that exist in the Loire.

Loirebnb was built with PostgreSQL, Sequelize, Express and Javascript in the backend, and React, Redux and Javascript in the frontend with plain CSS.

live link: https://loirebnb.herokuapp.com

## Features

### 1. Wineries(Spots)

- Wineries is a full CRUD feature. Users can create a winery, checkout pages for each winery on the platform, update details of their winery, and delete wineries that they are the owner of. The CREATE functionality is enhanced with `Google Places API` autocomplete functionality, to speed up the form process, and there is also drag and drop image-upload ability, thanks to the `Cloudinary Upload API`. The READ functionality is enhanced with `Google Maps Javascript API`, with the `/wineries` component rendering all wineries on the platform on a google map. Users can also save wineries to their saved wineries list to keep track of wineries they might like to visit.

### 2. Tastings(Bookings)

- Tastings is a full CRUD feature. Users can book tastings with any winery on any date in the future, choosing a time from a list of available appointment times. The time list is programatically filtered to only show available times that have yet to be booked. Users can manage their tastings at `/mytastings` which can be found in the menu in the top right corner. Users can see a list of all their tastings as well as reschedule or delete scheduled tastings.

### 3. Reviews

- Reviews is a full CRUD feature. Users can create, read, update, and delete reviews for each winery on that specific winery's page.

## How to use this App

1. Clone This repo.

- `git clone https://github.com/breencf/loire-bnb.git`

2. Install dependencies from the root directory.

- `npm install`

3. Create a POSTGRESQL user with CREATEDB and PASSWORD in PSQL

- `CREATE USER <name> WITH CREATEDB PASSWORD <'password'>`

4. Create a .env file in the backend directory based on the .env.example found within the respective directory.
5. Enter your username and password information into your .env file along with your desired database name, a secured combination of characters for your `JWT_SECRET`, and your desired `PORT`, (preferably 5000).
6. Add the following proxy to your package.json file within your frontend directory, replacing or keeping the `5000` port to match your `PORT` configuration found in the .env file.

- `"proxy": "http://localhost:5000"`

7. Create the Database, then Migrate and Seed models.

- `npx dotenv sequelize db:create`
- `npx dotenv sequelize db:migrate`
- `npx dotenv sequelize db:seed:all`

8. Start the services in the backend directory.

- `npm start`

9. Start the services in the frontend directory, which should open the project in your default browser. IF not, navigate to http://localhost:3000

- `npm start`

10. You can create an account or login as the demo user (demo user login available via Login Modal) to begin using LoireBnB.
