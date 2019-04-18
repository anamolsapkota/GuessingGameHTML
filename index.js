function submitGuess(){
	
	var ans = randomNumber();
	var guess = document.getElementById("initGuess").value;
	alert(ans);

	checkAns(ans, guess);

}

function randomNumber(){
	var num = Math.floor(Math.random()*1000);
	return num;
}

function checkAns(num, guess){
	var attempt = 1;
	while(guess!=num){
		var guess1 = 0;
		
		if (guess<num){
	 		guess = prompt("Guess higher : ", "your guess here");
	 		
	 		
	 	}
	 	if (guess>num){
	 		guess = prompt("Guess lower : ", "your guess here");
	 	}
	 	attempt ++
 	}
	alert("You Did it, CONGRATS!!!!");
	document.write("Congratulations!!!, You had sucessfully did it in " + attempt + " steps");
	var choice = confirm("Do you want to play again??");
	if(choice == true){
		window.location = "index.html";
	}
	else{
		quit();
	}


}
