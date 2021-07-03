let play = true;
while (play === true) {
  let secret = "secret";
	while (typeof(secret) !== "number" || isNaN(secret) || secret > 9 || secret < 0) {
		secret = Number(prompt("Enter secret number! (0-9)"));
	};
	let number = "number";
	while (typeof(number) !== "number" || isNaN(number) || secret !== number) {
		number = Number(prompt("Guess secret number! (0-9)"));
	};
	alert("Congratulations");
  play = confirm("Are you wan't to play again?");
}
