
function bookingViaWhatsapp(){
    let Bname = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let pickLocation = document.getElementById("pickLocation").value;
    let dropLocation = document.getElementById("dropLocation").value;
    let towReason = document.getElementById("towReason").value;
    let time = document.getElementById("bookingTime").value;  
    let date = document.getElementById("bookingDate").value;

    var url = "https://wa.me/13464955050?text= Hello I want to book for your service %0a"
        +"*Name :* "+Bname+"%0a"
        +"*Pickup Location :* "+pickLocation+"%0a"
        +"*Drop off Location :* "+dropLocation+"%0a"
        +"*Vehicle Tow Reason :* "+towReason+"%0a"
        +"*Phone :* "+phone+"%0a"
        +"*Date :* "+date+"%0a"
        +"*Time :* "+time+"%0a";

        window.open(url,'_blank').focus();
}

// form button validation
function enableSubmit(){
    let inputs = document.getElementsByClassName('requierd-field'); 
    let btn = document.getElementById('bookBtn');
    let isValid = true;
    for (var i = 0; i < inputs.length; i++){
    let changedInput = inputs[i];
    if (changedInput.value.trim() === "" || changedInput.value === null){
    isValid = false;
    break;
    }
    }
    btn.disabled = !isValid;
    }
    
