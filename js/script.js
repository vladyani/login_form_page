const calculateStrength = function (password) {
    let strength = 0;

    const regExp = [
    /[A-Z]/,
    /[a-z]/,
    /[0-9]/,
    /.{8}/,
    /.{14}/,
    /[!-//:-@[-`{-ÿ]/
  ];

    regExp.forEach(function (regexp) {
        if (regexp.test(password)) {
            strength++;
        }
    });

    return {
        value: strength,
        max: regExp.length
    };
};

const checkPasswordStregth = function (password) {
    let progress = document.querySelector('#passwordStrength'),
        strength = calculateStrength(this.value);

    progress.value = strength.value;
    progress.max = strength.max;


};

const showProgressBar = function(){
    let progressBar = document.querySelector('progress');
    
    progressBar.style.visibility = 'visible';
    
   
}

const hideProgressBar = function(){
    let progressBar = document.querySelector('progress');
    
    progressBar.style.visibility = 'hidden';
}

let input = document.querySelector('#passwordField');
input.addEventListener('keyup', checkPasswordStregth);
input.addEventListener('click', showProgressBar);
input.addEventListener('blur', hideProgressBar);



    