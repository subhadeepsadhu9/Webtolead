function beforesubmit(){
    console.log('in beforesubmit');
    let outputdate = document.querySelector('.outputDate');
    let inputdate = document.querySelector('.inputDate');
    console.log(inputdate);
    let formatteddate = new Date(inputdate.value).toLocaleDateString('en-IN');
    outputdate.value = formatteddate;
}