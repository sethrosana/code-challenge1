function estimateTransactionFee(amountToSend) {
  amountToSend = Number(amountToSend);
  if (isNaN(amountToSend) || amountToSend <= 0) {
    console.log("Please enter a valid amount greater than 0.");
    return;
  }
  const feeRate = 0.015;
  const minFee = 10;
  const maxFee = 70;

  
  let fee = amountToSend * feeRate;
  if (fee < minFee) {
    fee = minFee;
  } else if (fee > maxFee) {
    fee = maxFee;
  }

  const totalDebited = amountToSend + fee;

  console.log(`Transaction Amount: KES ${amountToSend.toFixed(2)}`);
  console.log(`Transaction Fee (1.5%): KES ${fee.toFixed(2)}`);
  console.log(`Total Amount Debited: KES ${totalDebited.toFixed(2)}`);
}
const userInput = prompt("Enter the amount of money you wish to send:");
estimateTransactionFee(userInput);

