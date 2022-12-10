var nearEarthObjects = require("./nasa_near_earth_object_API.json");

// The object in the nasa_near_earth_object_API.json is a copy of real API response from the NASA Near-Earth Object API.
// Find the following from the API:

// Total Count ---------------------------------------------
// 1. How many near-earth objects did NASA register for the date of the search? Return the asteroid count.
const total = nearEarthObjects.element_count;
// console.log(total);

// Averages ------------------------------------------------
// 2. What was the average absolute magnitude of all the near earth objects in this data set? Return the average absolute_magnitude_h.
const astroids = Object.values(nearEarthObjects.near_earth_objects).flat();
const avg = astroids.reduce((acc, current, index, arr) => {
  if (index == arr.length - 1) {
    // console.log(index);
    return acc / arr.length;
  }
  return (acc += current.absolute_magnitude_h);
}, 0);
// console.log(avg);
// Hint - you can achieve this multiple ways, but the reduce method can be a little-known but cool way to find averages.
// To do it though, you'll need to use the initial_value argument
// For some extra challenge try using reduce with the initial setting argument.
// To learn more about it, take a look at this page: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// Hazardous -----------------------------------------------
// 3. A list of all objects (their id, name, max size in miles, and closest approach in miles) that are labeled potentially hazardous
const hazardous = nearEarthObjects.near_earth_objects["2019-12-01"].filter(
  (astroids) => astroids["is_potentially_hazardous_asteroid"] == true
);
const list1 = hazardous.map((asteroid) => {
  const closestApproach = asteroid["close_approach_data"];
  return {
    id: asteroid["id"],
    name: asteroid["name"],
    "max size": asteroid.estimated_diameter.miles["estimated_diameter_max"],
    "closest approach": closestApproach[0].miss_distance["miles"],
  };
});
// console.log(list1);
// console.log(astroids);

// Too Close for Comfort -----------------------------------
// 4. A list of all objects (their id, name, max size in miles, and closest approach in miles) that have a miss_distance of less than 900,000 miles
const lessThan900 = nearEarthObjects.near_earth_objects["2019-12-01"].filter(
  (asteroid) => asteroid.close_approach_data[0].miss_distance["miles"] < 900_000
);

const list2 = lessThan900.map((asteroid) => {
  const closestApproach = asteroid["close_approach_data"];
  return {
    id: asteroid["id"],
    name: asteroid["name"],
    "max size": asteroid.estimated_diameter.miles["estimated_diameter_max"],
    "closest approach": closestApproach[0].miss_distance["miles"],
  };
});
// console.log(list2);

// Alert ---------------------------------------------------
// 5. Of all the near-earth objects for this date, find the time that the asteroid with the nearest miss will be closest to earth.
const closest = nearEarthObjects.near_earth_objects["2019-12-01"].reduce(
  (closest, curr) => {
    const closestDist = parseFloat(
      closest.close_approach_data[0].miss_distance["miles"]
    );
    const currDist = parseFloat(
      curr.close_approach_data[0].miss_distance["miles"]
    );

    if (currDist > closestDist) {
      return closest;
    }
    return curr;
  }
);

console.log(closest);
