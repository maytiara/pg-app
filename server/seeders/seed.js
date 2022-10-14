const db = require('../config/connection');
const { User, Reservation } = require('../models');
const userSeeds = require('./userSeeds.json');
const reservationSeeds = require('./reservationSeeds.json');

function randomArrayElement(array){
  return array[Math.floor(Math.random() * array.length)];
}

db.once('open', async () => {
  try {
    await Reservation.deleteMany({});
    await User.deleteMany({});


    // seed the user table
    const users = await User.insertMany(userSeeds);


    // grab the chefs
    const chefs = await User.find({isChef: true});


    // seed the reservation table
    for (let i = 0; i < reservationSeeds.length; i++) {
      const { _id, reservation } = await Reservation.create({
        ...reservationSeeds[i],
        chefId: randomArrayElement(chefs)._id
      });
      


      // randomly assign the reservation to customers
      const customers = users.filter(user => !user.isChef);
      const randomCustomer = randomArrayElement(customers);
      console.log(randomCustomer);

      // assigning to customers | target the username (specific)
      await User.findOneAndUpdate( { username: randomCustomer.username }, // to populate the reservations field in users = but it only populated one user id
      {
        $addToSet: {
          reservations: _id,
        },
      }, {new: true});

    
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Well Done! You planted some seeds 🌱');
  process.exit(0);
});