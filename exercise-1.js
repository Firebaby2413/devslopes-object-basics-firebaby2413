/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //
const favRest = {
    name: 'Starlite Diner', 
    cuisines: ['American', 'Italian'], 
    numberOfStars: 4.3, 
    favorited: true,
};

console.log(favRest);

favRest.address = '1177 Carlisle Street';
favRest.zipcode = 17331;
favRest.acceptsReservations = true;

console.log(favRest);

favRest.numberOfStars = 5.3;
favRest.favorited = false;
favRest.cuisines[2] = 'Chinese';

console.log(favRest);

function retrieveProperty(key, obj) {
    if (favRest[key]) {
    return favRest[key];
  } else {
    return "The information you requested does not exist.";
  }
}

retrieveProperty();