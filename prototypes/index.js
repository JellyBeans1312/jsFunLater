const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');




// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const orangeKitties = kitties.filter(kitty => kitty.color === 'orange');
    const orangeKittyName = orangeKitties.map(kitty => kitty.name);
    const result = orangeKittyName;
    return result
    
    // Annotation:
    // Write your annotation here as a comment
  },

  sortByAge() {
    // Sort the kitties by their age
    const sortedKitties = kitties.sort((kittenA, kittenB) => {
      return kittenB.age - kittenA.age
    })
    return sortedKitties


    // Annotation:
    // Write your annotation here as a comment
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const grownKitties = kitties.map(kitty => {
      kitty.age+=2
      return kitty
    })
    return grownKitties
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g. 
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }
    const clubMembers = clubs.reduce((acc, currVal) => {


      // return {[instructor]: [clubs]}
    }, {})
    const result = clubMembers;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]


    return mods.map(mod => {
      return { mod: mod.mod, studentsPerInstructor: mod.students / mod.instructors}
    })
    // const result = 'REPLACE WITH YOUR RESULT HERE';
    // return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};
// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [ 
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]



    const result = 'something';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]



    const result = 
    'something';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  
  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = 
    'something';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    
    
    const result = 'something';

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // { 
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2, 
    //    ...etc
    // }

    const result = 
    'something';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






module.exports = {
  kittyPrompts,
  clubPrompts,
  modPrompts
}