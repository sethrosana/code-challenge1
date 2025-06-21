function calculateBodaFare(distanceInKm) {
  distanceInKm = Number(distanceInKm);
  if (isNaN(distanceInKm) || distanceInKm <= 0) {
    console.log("Please enter a valid distance greater than 0.");
    return;
  }
  const baseFare = 50;       // KES
  const chargePerKm = 15;    // KES per km

  const totalFare = baseFare + (distanceInKm * chargePerKm);

  
  console.log(`Estimated Fare for a ${distanceInKm} km Boda Boda ride: KES ${totalFare.toFixed(2)}`);
}
const userDistance = prompt("Enter the distance of your trip in kilometers:");
calculateBodaFare(userDistance);

