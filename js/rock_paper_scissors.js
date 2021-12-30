const userChoice = userInput => {
    if (userInput === 'Rock') {
        return userInput;
    }
    else if (userInput === 'Paper') {
        return userInput;
    }
    else if (userInput === 'Scissors'){
        return userInput;
    }
    else
        console.log("Input the correct answer");
}

const computerChoice = () => {
    random_num = Math.floor(Math.random() * 3); 
    switch (random_num){
        case 0: 
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors'
    }
    
    
}

const pickWinner = (user,comp) => {
    user_Choice = user
    comp_Choice = comp
    if (user_Choice === 'Rock' && comp_Choice === 'Paper'){
        return 'Computer picked Paper, Paper covers Rock, you lose!'
    } else if (user_Choice === 'Paper' && comp_Choice === 'Scissors') {
        return 'Computer picked Scissors, Scissors cuts Paper, you lose!'
    } else if (user_Choice === 'Scissors' && comp_Choice === 'Rock') {
        return 'Computer picked Rock, Rock breaks Scissors, you lose!'
    }
    else if (user_Choice === comp_Choice)
        return `You tied, you both picked ${user_Choice}`
    else {
        return `You won!! ${user_Choice} beats ${comp_Choice}!` 
    }
}

function updateLabel() {
    var ele = document.getElementsByName('rps');
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
                document.getElementById("result").innerHTML = pickWinner(userChoice(ele[i].value),computerChoice());
        }
}
