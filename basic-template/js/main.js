
let presave1 = [];
let presave2 = [];
var presave3 = [];
let presave4 = [];
let presave5 = [];


function saveClick(){
    var setAPPs = document.getElementById("settingAPPS");
    var S = document.getElementById("saveUsers");
    var oldBack = document.getElementById("backButton2");
    oldBack.style.display = "none";
    setAPPs.style.display = "none";
    S.style.display = "block"; 
}



function saveClose(){
    var setAPPs = document.getElementById("settingAPPS");
    var P = document.getElementById("saveUsers");
    var oldBack = document.getElementById("backButton2");
    setAPPs.style.display = "block";
    P.style.display = "none";  
    oldBack.style.display = "block";

    document.getElementById("u1").innerHTML = 'User 1';
    var temp = document.getElementById("u1");
    temp.style.backgroundColor = "lightgrey";
    
    document.getElementById("u2").innerHTML = 'User 2';
    var temp = document.getElementById("usr2");
    temp.style.backgroundColor = "lightgrey";
    
    document.getElementById("u3").innerHTML = 'User 3';
    var temp = document.getElementById("u3");
    temp.style.backgroundColor = "lightgrey";
    
    document.getElementById("u4").innerHTML = 'User 4';
    var temp = document.getElementById("u4");
    temp.style.backgroundColor = "lightgrey";
    
    document.getElementById("u5").innerHTML = 'User 5';
    var temp = document.getElementById("u5");
    temp.style.backgroundColor = "lightgrey";
}

function loadClick(){
    var setAPPs = document.getElementById("settingAPPS");
    var L = document.getElementById("loadUsers");
    var oldBack = document.getElementById("backButton2");
    oldBack.style.display = "none";
    setAPPs.style.display = "none";
    L.style.display = "block"; 
}




function loadClose(){
    var setAPPs = document.getElementById("settingAPPS");
    var L = document.getElementById("loadUsers");
    var oldBack = document.getElementById("backButton2");
    setAPPs.style.display = "block";
    L.style.display = "none";  
    oldBack.style.display = "block";
}

function load1(){
    let showerstate = presave1[0];
    let showertemp = presave1[1];
    document.getElementById("showerStatus").innerHTML = showerstate;
    document.getElementById("displayValue").innerHTML = showertemp;
    document.getElementById("l1").innerHTML = 'Loaded';
    var temp = document.getElementById("load1");
    temp.style.backgroundColor = "lightgreen";

}

function load2(){
    let showerstate = presave2[0];
    let showertemp = presave2[1];
    document.getElementById("showerStatus").innerHTML = showerstate;
    document.getElementById("displayValue").innerHTML = showertemp;
    document.getElementById("l2").innerHTML = 'Loaded';
    var temp = document.getElementById("load2");
    temp.style.backgroundColor = "lightgreen";
}

function load3(){
    let showerstate = presave3[0];
    let showertemp = presave3[1];
    document.getElementById("showerStatus").innerHTML = showerstate;
    document.getElementById("displayValue").innerHTML = showertemp;
    document.getElementById("l3").innerHTML = 'Loaded';
    var temp = document.getElementById("load3");
    temp.style.backgroundColor = "lightgreen";


}
function load4(){
    let showerstate = presave4[0];
    let showertemp = presave341];
    document.getElementById("showerStatus").innerHTML = showerstate;
    document.getElementById("displayValue").innerHTML = showertemp;
    document.getElementById("l4").innerHTML = 'Loaded';
    var temp = document.getElementById("load4");
    temp.style.backgroundColor = "lightgreen";

}

function load5(){
    let showerstate = presave5[0];
    let showertemp = presave5[1];
    document.getElementById("showerStatus").innerHTML = showerstate;
    document.getElementById("displayValue").innerHTML = showertemp;
    document.getElementById("l5").innerHTML = 'Loaded';
    var temp = document.getElementById("load5");
    temp.style.backgroundColor = "lightgreen";

}

function usr1(){
    const showerstat = document.getElementById("showerStatus");
    const showerTemp = document.getElementById("displayValue");
    var status = showerstat.textContent.trim();
    var temper = showerTemp.textContent.trim();
    presave1 = [status, temper];
    document.getElementById("u1").innerHTML = 'Updated';
    var temp = document.getElementById("usr1");
    temp.style.backgroundColor = "lightgreen";

}

function usr2(){
    const showerstat = document.getElementById("showerStatus");
    const showerTemp = document.getElementById("displayValue");
    var status = showerstat.textContent.trim();
    var temper = showerTemp.textContent.trim();
    presave2 = [status, temper];
    document.getElementById("u2").innerHTML = 'Updated';
    var temp = document.getElementById("usr2");
    temp.style.backgroundColor = "lightgreen";
    
}

function usr3(){
    const showerstat = document.getElementById("showerStatus");
    const showerTemp = document.getElementById("displayValue");
    var status = showerstat.textContent.trim();
    var temper = showerTemp.textContent.trim();
    presave3 = [status, temper];
    document.getElementById("u3").innerHTML = 'Updated';
    var temp = document.getElementById("usr3");
    temp.style.backgroundColor = "lightgreen";


}
function usr4(){
    const showerstat = document.getElementById("showerStatus");
    const showerTemp = document.getElementById("displayValue");
    var status = showerstat.textContent.trim();
    var temper = showerTemp.textContent.trim();
    presave4 = [status, temper];
    document.getElementById("u4").innerHTML = 'Updated';
    var temp = document.getElementById("usr4");
    temp.style.backgroundColor = "lightgreen";

}

function usr5(){
    const showerstat = document.getElementById("showerStatus");
    const showerTemp = document.getElementById("displayValue");
    var status = showerstat.textContent.trim();
    var temper = showerTemp.textContent.trim();
    presave5 = [status, temper];
    document.getElementById("u5").innerHTML = 'Updated';
    var temp = document.getElementById("usr5");
    temp.style.backgroundColor = "lightgreen";


}

function showerP(){
    var temp = document.getElementById("showerStatus")
    temp.style.left = "45%";
    document.getElementById("showerStatus").innerHTML = 'Shower';
}
function mistP(){
    var temp = document.getElementById("showerStatus")
    temp.style.left = "47%";
    document.getElementById("showerStatus").innerHTML = 'Mist';

}

function jetP(){
    var temp = document.getElementById("showerStatus")
    temp.style.left = "47%";
    document.getElementById("showerStatus").innerHTML = 'Jet';

}
function rainP(){
    var temp = document.getElementById("showerStatus")
    temp.style.left = "47%";
    document.getElementById("showerStatus").innerHTML = 'Rain';

}
function fullbodyP(){
    var temp = document.getElementById("showerStatus")
    temp.style.left = "44%";
    document.getElementById("showerStatus").innerHTML = 'Full Body';

}




function appClick(){
    var appBack = document.getElementById("appBack");
    var backButton = document.getElementById("backButton");
    backButton.style.display = "block";
    appBack.style.display = "block"; 
    var weatherApp = document.getElementById("weather");
    weatherApp.style.display = "block";
    var weatherApp = document.getElementById("spotify");
    weatherApp.style.display = "block";
    var weatherApp = document.getElementById("youtube");
    weatherApp.style.display = "block";
    }

function appClose(){
    var background = document.getElementById("appBack");
    background.style.display = "none"; 
    var appBack = document.getElementById("backButton");
    appBack.style.display = "none";
    var weatherApp = document.getElementById("weather");
    weatherApp.style.display = "none";
    var weatherApp = document.getElementById("spotify");
    weatherApp.style.display = "none";
    var weatherApp = document.getElementById("youtube");
    weatherApp.style.display = "none";
}


function settingClose(){
    var background = document.getElementById("appBack");
    background.style.display = "none"; 
    var appBack = document.getElementById("backButton2");
    appBack.style.display = "none";
    var setApps = document.getElementById("settingAPPS");
    setApps.style.display = "none";
    
}
    

function settingClick(){
    var appBack = document.getElementById("appBack");
    var backButton = document.getElementById("backButton2");
    backButton.style.display = "block";
    appBack.style.display = "block"; 
    var setApps = document.getElementById("settingAPPS");
    setApps.style.display = "block";

    }


function preClick(){
    var setAPPs = document.getElementById("settingAPPS");
    var P = document.getElementById("showerP");
    var oldBack = document.getElementById("backButton2");
    oldBack.style.display = "none";
    setAPPs.style.display = "none";
    P.style.display = "block"; 
    
}

function preClose(){
    var setAPPs = document.getElementById("settingAPPS");
    var P = document.getElementById("showerP");
    var oldBack = document.getElementById("backButton2");
    setAPPs.style.display = "block";
    P.style.display = "none";  
    oldBack.style.display = "block";
}
