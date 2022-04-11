let countries = {
    "India":{
        "MP": ["Bhopal", "Indore", "Jabalpur"],
        "UP": ["Jhansi", "Agra", "Luckhnow"],
        "CG": ["Bhilai", "Durg", "Raipur"]
    },
    "USA":{
        "California": ["LA", "San Diego", "San Jose"],
        "Texas": ["Houston", "Dallas", "Austin"],
        "Florida": ["Miami", "Jacksonville", "Tampa"]
    },
    "Australia":{
        "Tasmania":["Hobart", "Burnie", "Dolost"],
        "Victoria":["Melbourne", "Bendigo", "Sale"],
        "Queensland":["Cairns", "Ipswich", "Brisbane"]
    }
}

    window.onload = function (){

    let countrySelect = document.getElementById('countrySel');
    let stateSelect = document.getElementById('stateSel');
    let citySelect = document.getElementById('citySel');

        // load countries
        for(country in countries){
            countrySelect.options[countrySelect.options.length] = new Option(country, country)
        }

        countrySelect.onchange = function () {
            stateSelect.length = 1;
            citySelect.length = 1;

            if(this.selectedIndex < 1)
            return;

        for(state in countries[this.value]){
            stateSelect.options[stateSelect.options.length] = new Option(state, state)
        }        
    }  
        
        stateSelect.onchange = function () {
            citySelect.length = 1;
            if(this.selectedIndex < 1)
            return;
            let city = countries[countrySelect.value][stateSelect.value];
            for (let i=0; i<city.length;i++){
                citySelect.options[citySelect.options.length]= new Option(city[i], city[i]); 
            
            }           
        }     
}
// chnges to check stash

const validateForm = (event) =>{   
    event.preventDefault()
    const userName = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cPassword = document.getElementById('cPassword').value;
    const passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if(userName == ''){
        // alert('usernaem')
        document.getElementById('userNameError').innerText="username is required";
    }else{
        document.getElementById('userNameError').innerText="";
    }    
    if(email==''){
        document.getElementById('emailError').innerText="email is required";
    } else if(!emailRegex.test(email)) {
        document.getElementById('emailError').innerText="email is not valid";
    }
    else{
        document.getElementById('emailError').innerText="";
    }
    if(password==''){
        document.getElementById('passwordError').innerText="password is required";
    }else if(!passRegex.test(password)){
        document.getElementById('passwordError').innerText="password should have a capital, a small, a symbol, a number and must be 8 character long";
    }
    else{
        document.getElementById('passwordError').innerText="";
    }
    if(cPassword!==password){
        document.getElementById('cpasswordError').innerText="password not matched";
    }
    else{
        document.getElementById('cpasswordError').innerText="";
    }
    if(userName&&email&&password&&cPassword !== ''){
        console.log(`Username is: ${userName}, email is: ${email} `)
    }
}

