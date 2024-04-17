document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let firstName = document.getElementById('firstName').value;
    let middleName = document.getElementById('middleName').value;
    let lastName = document.getElementById('lastName').value;
    let country = document.getElementById('country').value;
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let repeatPassword = document.getElementById('repeatPassword').value;
    

    if (password !== repeatPassword) {
        alert("Passwords do not match!");
        return;
    }


    console.log('First Name:', firstName);
    console.log('Middle Name:', middleName);
    console.log('Last Name:', lastName);
    console.log('Country:', country);
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Repeat Password:', repeatPassword);
});
