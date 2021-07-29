let usernameInput, usernamePass, accountUserName, password, accountFirstName, accountLastName, accountJoinedDate, accountGoal, accountWeightHistory;
const monthByYear = ['Janurary', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

async function getAccountData(){
    const accountsResponse = await fetch('__accounts.json');
    const data = await accountsResponse.json();
    var indexLength = data.accountInformation.length;

    for(var i = 0; i < indexLength; i++){
        if(usernameInput == data.accountInformation[i].accountUsername && usernamePass == data.accountInformation[i].accountPassword){
            accountUserName = data.accountInformation[i].accountUsername;
            password = data.accountInformation[i].accountPassword;
            accountFirstName = data.accountInformation[i].firstName;
            accountLastName = data.accountInformation[i].lastName;
            accountJoinedDate = data.accountInformation[i].joinDate;
            accountGoal = data.accountInformation[i].goal;
            accountWeightHistory = data.accountInformation[i].weighthistory;
            return true;
        }
        else if((i == indexLength - 1) && (usernameInput != data.accountInformation[i].accountUsername) && (usernamePass != data.accountInformation[i].accountPassword)){
            return false;
        }
    }
    

}

async function loginInfo(){
    usernameInput = await document.getElementById("userName").value;
    usernamePass = await document.getElementById("PassWord").value; 
  
    let login = await getAccountData(usernameInput, usernamePass);
    console.log(login);
    if(login == true){
        sessionStorage.setItem('loginUserNameFound', accountUserName);
        sessionStorage.setItem('loginUserPasswordFound', password);
        window.location.assign('/mainPage.html');
    }
    else{
        alert('Data not found. Please try again.');
    }

}


async function userAccountLoginInfo(){
    usernameInput = await sessionStorage.getItem('loginUserNameFound');
    usernamePass = await sessionStorage.getItem('loginUserPasswordFound'); 

}

function startingDate(){
    let month = accountJoinedDate.split('/');
    if(month[0] == 1){
        month = 'Janurary';
    }
    else if(month[0] == 2){
        month = 'Feburary';
    }
    else if(month[0] == 3){
        month = 'March';
    }
    else if(month[0] == 4){
        month = 'April';
    }
    else if(month[0] == 5){
        month = 'May';
    }
    else if(month[0] == 6){
        month = 'June';
    }
    else if(month[0] == 7){
        month = 'July';
    }
    else if(month[0] == 8){
        month = 'August';
    }
    else if(month[0] == 9){
        month = 'September';
    }
    else if(month[0] == 10){
        month = 'October';
    }
    else if(month[0] == 11){
        month = 'November';
    }
    else if(month[0] == 12){
        month = 'December';
    }
    
    const newStartingMonth = [];

    for(var i = 0; i < monthByYear.length; i++){
        if(month == monthByYear[i]){
            var index = i;
            for(var j = 0; j < monthByYear.length; j++){
                if(index < monthByYear.length){
                    newStartingMonth[j] = monthByYear[index]; 
                }
                if(index >= 12){
                    newStartingMonth[j] = monthByYear[index - 12];
                    }
                index++;
            }
        }
    }

    return newStartingMonth;
}

function lowestNumber(){
    var lowNum = [];
    for(var i = 0; i < accountWeightHistory.length; i++){
        lowNum[i] = parseInt(accountWeightHistory[i]);
    }
    return Math.min(...lowNum);
}

function highestNumber(){
    var highNum = [];
    for(var i = 0; i < accountWeightHistory.length; i++){
        highNum[i] = parseInt(accountWeightHistory[i]);
    }
    return Math.max(...highNum);
}

async function accountCharts(){
    let login = await getAccountData(usernameInput, usernamePass);
    function startingDate(){
        let month = accountJoinedDate.split('/');
        if(month[0] == 1){
            month = 'Janurary';
        }
        else if(month[0] == 2){
            month = 'Feburary';
        }
        else if(month[0] == 3){
            month = 'March';
        }
        else if(month[0] == 4){
            month = 'April';
        }
        else if(month[0] == 5){
            month = 'May';
        }
        else if(month[0] == 6){
            month = 'June';
        }
        else if(month[0] == 7){
            month = 'July';
        }
        else if(month[0] == 8){
            month = 'August';
        }
        else if(month[0] == 9){
            month = 'September';
        }
        else if(month[0] == 10){
            month = 'October';
        }
        else if(month[0] == 11){
            month = 'November';
        }
        else if(month[0] == 12){
            month = 'December';
        }
        const newStartingMonth = [];
    
        for(var i = 0; i < monthByYear.length; i++){
            if(month == monthByYear[i]){
                var index = i;
                for(var j = 0; j < monthByYear.length; j++){
                    if(index < monthByYear.length){
                        newStartingMonth[j] = monthByYear[index]; 
                    }
                    if(index >= 12){
                        newStartingMonth[j] = monthByYear[index - 12];
                        }
                    index++;
                }
            }
        }
        return newStartingMonth;
    }
    
    function lowestNumber(){
        var lowNum = [];
        for(var i = 0; i < accountWeightHistory.length; i++){
            lowNum[i] = parseInt(accountWeightHistory[i]);
        }
        return Math.min(...lowNum);
    }
    
    function highestNumber(){
        var highNum = [];
        for(var i = 0; i < accountWeightHistory.length; i++){
            highNum[i] = parseInt(accountWeightHistory[i]);
        }
        return Math.max(...highNum);
    }
    
    var progressChart = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(progressChart, {
        type: 'line',
        data: {
            labels: startingDate(),
            datasets: [{
                label: 'Your 1 year progress starting ' + accountJoinedDate,
                data: accountWeightHistory,

                borderColor: [
                    'rgba(205, 5, 255)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    suggestedMin: lowestNumber() - 3,
                    suggestedMax: highestNumber() + 3
                }
            }
        }
    });

}

async function planUpdater(){
    console.log('hi');
}
