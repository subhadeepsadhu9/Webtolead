function beforesubmit(event){
    if(captchacheck){
        console.log('in beforesubmit');
    let outputdate = document.querySelector('.outputDate');
    let inputdate = document.querySelector('.inputDate');
    console.log(inputdate);
    let formatteddate = new Date(inputdate.value).toLocaleDateString('en-IN');
    outputdate.value = formatteddate;
    }
    else{
        alert('check the captcha');
        event.preventDefault();
    }
    
}

let captchacheck = false;

function captchasuccess(){
    captchacheck = true;
}