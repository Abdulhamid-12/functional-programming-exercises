const weaponsWithNoises = [
  { name: "Phaser", noise: "bssszzsssss", universe: "Star Trek" },
  { name: "Blaster", noise: "Pew Pew", universe: "Star Wars" },
  { name: "Sonic Screwdriver", noise: "Pew Pew", universe: "Dr. Who" },
  { name: "Lightsaber", noise: "Pew Pew", universe: "Star Wars" },
  { name: "Noisy Cricket", noise: "Pew Pew", universe: "Men in Black" },
];

// weaponsWithNoises.forEach((x) => console.log(x.name));

function weaponsFromUniverse(universe) {
  // ...Your code here!
  return (weaponName) => {
    weaponsWithNoises.forEach((weaponObj) => {
      if (weaponName == weaponObj.name && weaponObj.universe == universe) {
        return console.log(`used ${weaponObj.name}: ${weaponObj.noise}`);
      } else if (
        weaponName == weaponObj.name &&
        weaponObj.universe != universe
      ) {
        return console.log(
          `${weaponName} is not a part of the ${universe} universe`
        );
      }
    });
  };
}

// // USAGE
const useStarWarsWeapon = weaponsFromUniverse("Men in Black");

useStarWarsWeapon("Blaster"); // console logs 'used Blaster: Pew Pew'
useStarWarsWeapon("Noisy Cricket"); // console logs 'Noisy Cricket is not a part of the Star Wars universe'
