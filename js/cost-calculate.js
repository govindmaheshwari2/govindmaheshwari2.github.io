function calculate(){
    var build_up = document.getElementById("area").value;
    var balcony = document.getElementById("areaOfBalconyAndUtility").value;
    var noOfCarParking = $('#noOfCarParking :selected').text();
    if(build_up=="" || balcony==""){  
            $('.wrong_input').removeClass('hidden');
        return;
    }
    $('.wrong_input').addClass('hidden');

    findCost(build_up,balcony,noOfCarParking);
    
}

function findCost(build_up,balcony,noOfCarParking){
    document.getElementById("car_parking").innerHTML = parseInt(noOfCarParking);
    document.getElementById("balcony_cost").innerHTML = balcony;
    build_up = parseInt(build_up);
    balcony = parseInt(balcony);
    noOfCarParking = parseInt(noOfCarParking);
    build_up = build_up - (balcony) - (noOfCarParking*130);
    document.getElementById("build_up").innerHTML = build_up;
    
        $('.cost_estimator').removeClass('hidden');
    
    budgetPackage(build_up,balcony,noOfCarParking);
    basicPackage(build_up,balcony,noOfCarParking);
    classicPackage(build_up,balcony,noOfCarParking);
    premiumPackage(build_up,balcony,noOfCarParking);
    royalPackage(build_up,balcony,noOfCarParking);
    imperiaPackage(build_up,balcony,noOfCarParking);
}

function converter(val){
     var temp = new Intl.NumberFormat('en-IN', { 
        style: 'currency', 
        currency: 'INR' 
    }).format(val);
    return temp;
}

function budgetPackage(build_up,balcony,noOfCarParking){
    build_up = build_up*1535;
    balcony = balcony*921;
    noOfCarParking = noOfCarParking*130*921;
    var Total = build_up+balcony+noOfCarParking;
     
    document.getElementById("Budget_Build_up").innerHTML = converter(build_up).slice(0, -3);
    document.getElementById("Budget_Car").innerHTML = converter(noOfCarParking).slice(0, -3);
    document.getElementById("Budget_Balcony").innerHTML = converter(balcony).slice(0, -3);
    document.getElementById("Budget_total").innerHTML = converter(Total).slice(0, -3);
    if(Total<0 || build_up<0){
        $('.wrong_input').removeClass('hidden');
        $('.cost_estimator').addClass('hidden');
    }
}

function basicPackage(build_up,balcony,noOfCarParking){
    build_up = build_up*1650;
    balcony = balcony*990;
    noOfCarParking = noOfCarParking*130*990;
    var Total = build_up+balcony+noOfCarParking;
     
     document.getElementById("Basic_Build_up").innerHTML = converter(build_up).slice(0, -3);
    document.getElementById("Basic_Car").innerHTML = converter(noOfCarParking).slice(0, -3);
    document.getElementById("Basic_Balcony").innerHTML = converter(balcony).slice(0, -3);
    document.getElementById("Basic_total").innerHTML = converter(Total).slice(0, -3);
    if(Total<0 || build_up<0){
        $('.wrong_input').removeClass('hidden');
        $('.cost_estimator').addClass('hidden');
    }
}

function classicPackage(build_up,balcony,noOfCarParking){
    build_up = build_up*1765;
    balcony = balcony*1059;
    noOfCarParking = noOfCarParking*130*1059;
    var Total = build_up+balcony+noOfCarParking;
     
     document.getElementById("Classic_Build_up").innerHTML = converter(build_up).slice(0, -3);
    document.getElementById("Classic_Car").innerHTML = converter(noOfCarParking).slice(0, -3);
    document.getElementById("Classic_Balcony").innerHTML = converter(balcony).slice(0, -3);
    document.getElementById("Classic_total").innerHTML = converter(Total).slice(0, -3);
    if(Total<0 || build_up<0){
        $('.wrong_input').removeClass('hidden');
        $('.cost_estimator').addClass('hidden');
    }
}

function premiumPackage(build_up,balcony,noOfCarParking){
    build_up = build_up*1865;
    balcony = balcony*1119;
    noOfCarParking = noOfCarParking*130*1119;
    var Total = build_up+balcony+noOfCarParking;
     
     document.getElementById("Premium_Build_up").innerHTML = converter(build_up).slice(0, -3);
    document.getElementById("Premium_Car").innerHTML = converter(noOfCarParking).slice(0, -3);
    document.getElementById("Premium_Balcony").innerHTML = converter(balcony).slice(0, -3);
    document.getElementById("Premium_total").innerHTML = converter(Total).slice(0, -3);
    if(Total<0 || build_up<0){
        $('.wrong_input').removeClass('hidden');
        $('.cost_estimator').addClass('hidden');
    }
}

function royalPackage(build_up,balcony,noOfCarParking){
    build_up = build_up*1990;
    balcony = balcony*1194;
    noOfCarParking = noOfCarParking*130*1194;
    var Total = build_up+balcony+noOfCarParking;
     
     document.getElementById("Royal_Build_up").innerHTML = converter(build_up).slice(0, -3);
    document.getElementById("Royal_Car").innerHTML = converter(noOfCarParking).slice(0, -3);
    document.getElementById("Royal_Balcony").innerHTML = converter(balcony).slice(0, -3);
    document.getElementById("Royal_total").innerHTML = converter(Total).slice(0, -3);
    if(Total<0 || build_up<0){
        $('.wrong_input').removeClass('hidden');
        $('.cost_estimator').addClass('hidden');
    }
}

function imperiaPackage(build_up,balcony,noOfCarParking){
    build_up = build_up*2150;
    balcony = balcony*1290;
    noOfCarParking = noOfCarParking*130*1290;
    var Total = build_up+balcony+noOfCarParking;
     
     document.getElementById("Imperia_Build_up").innerHTML = converter(build_up).slice(0, -3);
    document.getElementById("Imperia_Car").innerHTML = converter(noOfCarParking).slice(0, -3);
    document.getElementById("Imperia_Balcony").innerHTML = converter(balcony).slice(0, -3);
    document.getElementById("Imperia_total").innerHTML = converter(Total).slice(0, -3);
    if(Total<0 || build_up<0){
        $('.wrong_input').removeClass('hidden');
        $('.cost_estimator').addClass('hidden');
    }
}
