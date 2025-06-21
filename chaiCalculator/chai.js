function calculateChaiIngredients(numberOfCups) {
  numberOfCups = Number(numberOfCups);

  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.log("Please enter a valid number of cups greater than 0.");
    return;
  }
  const waterPerCup = 200; // ml
  const milkPerCup = 50;   // ml
  const teaLeavesPerCup = 1; // tablespoon
  const sugarPerCup = 2;   // teaspoons

  const totalWater = waterPerCup * numberOfCups;
  const totalMilk = milkPerCup * numberOfCups;
  const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
  const totalSugar = sugarPerCup * numberOfCups;

  console.log(`To make ${numberOfCups} cup(s) of Kenyan chai, you need:`);
  console.log(`- Water: ${totalWater} ml`);
  console.log(`- Milk: ${totalMilk} ml`);
  console.log(`- Tea Leaves (Majani): ${totalTeaLeaves} tablespoon(s)`);
  console.log(`- Sugar (Sukari): ${totalSugar} teaspoon(s)`);
}
const cups = prompt("Enter the number of cups of chai you want to make:");
calculateChaiIngredients(cups);

