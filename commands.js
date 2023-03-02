// JASKIS
// paste the MongoDB commands you use underneath each prompt

// GETTING STARTED
// 1. Create a database called jaskis
use jaskis

// 2. Create a collection called bounties
db.createCollection('bounties')

// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object

{
    name: "Thanoceros",
    species: "Rhinoceros",
    location: "Grasslands",
    wantedFor: "Eating too much grass",
    client: "Songbird",
    reward: 10000,
    captured: false
  }

// 2. Query for all bounties in the bounties collection

db.bounties.find()

and if you're talking about Query for all rewards(?) then it would be





// 3. Insert many bounties at once using the given objects

db.bounties.insertMany([

    {
        city: "Lima",
        country: "Peru",
        continent: "South America",
        primary_language: "Spanish",
        timezone: "GMT-5",
        currency: "Nuevo Sol",
        tickets_available: 23
      },{
        city: "New York",
        country: "United States",
        continent: "North America",
        primary_language: "English",
        timezone: "GMT-5",
        currency: "US Dollars",
        tickets_available: 15
      },{
        city: "Seoul",
        country: "South Korea",
        continent: "Asia",
        primary_language: "Korean",
        timezone: "GMT+9",
        currency: "Korean Won",
        tickets_available: 7
      },{
        city: "Rome",
        country: "Italy",
        continent: "Europe",
        primary_language: "Italian",
        timezone: "GMT+1",
        currency: "Euro",
        tickets_available: 38
      },{
        city: "Cairo",
        country: "Egypt",
        continent: "Africa",
        primary_language: "Arabic",
        timezone: "GMT+2",
        currency: "Egyptian Pounds",
        tickets_available: 29
      },{
        city: "Sydney",
        country: "Australia",
        continent: "Australia",
        primary_language: "Arabic",
        timezone: "GMT+11",
        currency: "Australian Dollars",
        tickets_available: 3
      }
])




// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands

db.bounties.find({ location: "Grasslands" })

// 3. Query for all bounties, but exclude the client attribute from being shown




// 4. Query for a Groundhog in the Woodlands

db.bounties.find({ species: 'Groundhog' }, { location: 'Woodlands' })

// Update and Delete
// 1. Update the reward for Polarwind to 10000

db.bounties.updateOne(
    { reward: 4000 },
    { $set: { reward: 10000 } }
    )

// 2. Remove Lokinkajou

db.bounties.deleteOne({ name: 'Lokinkajou' })

// 3. Delete all bounties sent by Songbird

db.bounties.deleteMany({ "client" : "Songbird" })

// 4. Update all captured statuses to true

db.bounties.updateMany(
    { captured: false },
    { $set: { captured: true } }
    )