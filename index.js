const aMIRULLAH = {
  name: "Amirullahy S. Kasang",
  phone: "082292013784",
  email: "amirullah@gmail.com",
  faculty: "faculty Biologi"
};
const sOMEONE = {
  name: "Adi Sutanto",
  phone: "082292011234",
  email: "adisutanto@gmail.com",
  faculty: "faculty Biologi"
};
const yOSUA = {
  name: "Atallabela Yosua",
  phone: "082292012345",
  email: "atallabelayosua@gmail.com",
  faculty: "faculty Biologi"
};
const rIZKIAN = {
  name: "Rizkian Akbar",
  phone: "082292013456",
  email: "rizkianakbar@gmail.com",
  faculty: "faculty Biologi"
};
const aKlA = {
  name: "Ahmad Akla",
  phone: "082292014567",
  email: "ahmadakla@gmail.com",
  faculty: "faculty Biologi"
};

window.localStorage.setItem("aMIRULLAH", JSON.stringify(aMIRULLAH));
window.localStorage.setItem("sOMEONE", JSON.stringify(sOMEONE));
window.localStorage.setItem("yOSUA", JSON.stringify(yOSUA));
window.localStorage.setItem("rIZKIAN", JSON.stringify(rIZKIAN));
window.localStorage.setItem("aKlA", JSON.stringify(aKlA));

let aMIR = JSON.parse(window.localStorage.getItem("aMIRULLAH"));
let sOME = JSON.parse(window.localStorage.getItem("sOMEONE"));
let yOSUAA = JSON.parse(window.localStorage.getItem("yOSUA"));
let rIZKIANN = JSON.parse(window.localStorage.getItem("rIZKIAN"));
let aKlAA = JSON.parse(window.localStorage.getItem("aKlA"));

document.getElementById("namestudent").innerHTML = aMIR.name;
document.getElementById("phone").innerHTML = aMIR.phone;
document.getElementById("email").innerHTML = aMIR.email;
document.getElementById("faculty").innerHTML = aMIR.faculty;

document.getElementById("namestudent1").innerHTML = sOME.name;
document.getElementById("phone1").innerHTML = sOME.phone;
document.getElementById("email1").innerHTML = sOME.email;

document.getElementById("namestudent2").innerHTML = yOSUAA.name;
document.getElementById("phone2").innerHTML = yOSUAA.phone;
document.getElementById("email2").innerHTML = yOSUAA.email;

document.getElementById("namestudent3").innerHTML = rIZKIANN.name;
document.getElementById("phone3").innerHTML = rIZKIANN.phone;
document.getElementById("email3").innerHTML = rIZKIANN.email;

document.getElementById("namestudent4").innerHTML = aKlAA.name;
document.getElementById("phone4").innerHTML = aKlAA.phone;
document.getElementById("email4").innerHTML = aKlAA.email;

function elementone() {
  var elem = document.getElementById("elementone");
  elem.parentNode.removeChild(elem);
  return false;
}
function elementtwo() {
  var elem = document.getElementById("elementtwo");
  elem.parentNode.removeChild(elem);
  return false;
}
function elementthree() {
  var elem = document.getElementById("elementthree");
  elem.parentNode.removeChild(elem);
  return false;
}
function elementfour() {
  var elem = document.getElementById("elementfour");
  elem.parentNode.removeChild(elem);
  return false;
}
function elementfive() {
  var elem = document.getElementById("elementfive");
  elem.parentNode.removeChild(elem);
  return false;
}

function newElement() {
  var li = document.createElement("p");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  showinput();
}

function showinput() {
  var x = document.getElementById("inputdata");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function newElement2() {
  var li = document.createElement("p");
  var inputValue = document.getElementById("myInput2").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL2").appendChild(li);
  }
  showinput2();
}

function showinput2() {
  var x = document.getElementById("inputdata2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function newElement3() {
  var li = document.createElement("p");
  var inputValue = document.getElementById("myInput3").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL3").appendChild(li);
  }
  showinput3();
}

function showinput3() {
  var x = document.getElementById("inputdata3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function newElement4() {
  var li = document.createElement("p");
  var inputValue = document.getElementById("myInput4").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL4").appendChild(li);
  }
  showinput4();
}

function showinput5() {
  var x = document.getElementById("inputdata5");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function newElement5() {
  var li = document.createElement("p");
  var inputValue = document.getElementById("myInput5").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL5").appendChild(li);
  }
  showinput5();
}

function showinput4() {
  var x = document.getElementById("inputdata4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function sHOWNAME() {
  var x = document.getElementById("uPDATENAME");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function uPDATENAME() {
  var inputValue = document.getElementById("iNPUTNAME").value;
  document.getElementById("namestudent").innerHTML = inputValue;
  sHOWNAME();
}

function sHOWNAME1() {
  var x = document.getElementById("uPDATENAME1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function uPDATENAME1() {
  var inputValue = document.getElementById("iNPUTNAME1").value;
  document.getElementById("namestudent1").innerHTML = inputValue;
  sHOWNAME1();
}

function sHOWNAME2() {
  var x = document.getElementById("uPDATENAME2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function uPDATENAME2() {
  var inputValue = document.getElementById("iNPUTNAME2").value;
  document.getElementById("namestudent2").innerHTML = inputValue;
  sHOWNAME2();
}

function sHOWNAME3() {
  var x = document.getElementById("uPDATENAME3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function uPDATENAME3() {
  var inputValue = document.getElementById("iNPUTNAME3").value;
  document.getElementById("namestudent3").innerHTML = inputValue;
  sHOWNAME3();
}

function sHOWNAME4() {
  var x = document.getElementById("uPDATENAME4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function uPDATENAME4() {
  var inputValue = document.getElementById("iNPUTNAME4").value;
  document.getElementById("namestudent4").innerHTML = inputValue;
  sHOWNAME4();
}

function sHOWEMAIL() {
  var x = document.getElementById("uPDATEEMAIL");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function uPDATEEMAIL() {
  var inputValue = document.getElementById("iNPUTEMAIL").value;
  document.getElementById("email").innerHTML = inputValue;
  sHOWEMAIL();
}

function sHOWEMAIL1() {
  var x = document.getElementById("uPDATEEMAIL1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function uPDATEEMAIL1() {
  var inputValue = document.getElementById("iNPUTEMAIL1").value;
  document.getElementById("email1").innerHTML = inputValue;
  sHOWEMAIL1();
}

function sHOWEMAIL2() {
  var x = document.getElementById("uPDATEEMAIL2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function uPDATEEMAIL2() {
  var inputValue = document.getElementById("iNPUTEMAIL2").value;
  document.getElementById("email2").innerHTML = inputValue;
  sHOWEMAIL2();
}

function sHOWEMAIL3() {
  var x = document.getElementById("uPDATEEMAIL3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function uPDATEEMAIL3() {
  var inputValue = document.getElementById("iNPUTEMAIL3").value;
  document.getElementById("email3").innerHTML = inputValue;
  sHOWEMAIL3();
}

function sHOWEMAIL3() {
  var x = document.getElementById("uPDATEEMAIL3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function uPDATEEMAIL3() {
  var inputValue = document.getElementById("iNPUTEMAIL3").value;
  document.getElementById("email3").innerHTML = inputValue;
  sHOWEMAIL3();
}

function sHOWPHONE() {
  var x = document.getElementById("uPDATEPHONE");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function uPDATEPHONE() {
  var inputValue = document.getElementById("iNPUTPHONE").value;

  document.getElementById("phone").innerHTML = inputValue;
  sHOWPHONE();
}

function sHOWPHONE1() {
  var x = document.getElementById("uPDATEPHONE1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function uPDATEPHONE1() {
  var inputValue = document.getElementById("iNPUTPHONE1").value;

  document.getElementById("phone1").innerHTML = inputValue;
  sHOWPHONE1();
}

function sHOWPHONE2() {
  var x = document.getElementById("uPDATEPHONE2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function uPDATEPHONE2() {
  var inputValue = document.getElementById("iNPUTPHONE2").value;

  document.getElementById("phone2").innerHTML = inputValue;
  sHOWPHONE2();
}

function sHOWFACULTY() {
  var x = document.getElementById("uPDATEFACULTY");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function uPDATEFACULTY() {
  var inputValue = document.getElementById("iNPUTFACULTY").value;

  document.getElementById("faculty").innerHTML = inputValue;
  sHOWFACULTY();
}
