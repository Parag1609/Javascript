/* const rows=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t'];

let html="";
let counter=1;

rows.forEach(function(row){
    html+=`<div class="label">${row}</div>`;

    for(let i=0;i<3;i++){
        html+=`<div id="${row+counter}">${counter}</div>`;
        counter++;
    }
    counter=counter+12;
});

document.getElementById('left').innerHTML=html;
html="";
counter=1;
rows.forEach(function(row){
    counter=counter+3;
    for(let i=0;i<9;i++){
        html+=`<div id="${row+counter}">${counter}</div>`;
        counter++;
    }
    counter=counter+3;
});
document.getElementById('middle').innerHTML=html;

html="";
counter=1;
rows.forEach(function(row){
    counter=counter+12;
    for(let i=0;i<3;i++){
        html+=`<div id="${row+counter}">${counter}</div>`;
        counter++;
    }
    html+=`<div class="label">${row}</div>`;
    
});
document.getElementById('right').innerHTML=html; */
var reservedSeats = {
    record1: {
        seat: "b19",
        owner: {
            fname: "Joe",
            lname: "Smith"
        }
    },
    record2: {
        seat: "b20",
        owner: {
            fname: "Joe",
            lname: "Smith"
        }
    },
    record3: {
        seat: "b21",
        owner: {
            fname: "Joe",
            lname: "Smith"
        }
    },
    record4: {
        seat: "b22",
        owner: {
            fname: "Joe",
            lname: "Smith"
        }
    }
};

function makerows(sectionlength, rowlength, placement) {
    const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'];

    let html = "";
    let counter = 1;

    rows.forEach(row => {

        switch (placement) {
            case "left"://make label
                html += `<div class="label">${row}</div>`;
                break;
            case "right":// add 12 to the counter
                counter = counter + (rowlength - sectionlength);
                break;
            default://add 3 to counter
                counter = counter + ((rowlength - sectionlength) / 2);
                break;
        }
        //loop through the seats
        for (let i = 0; i < sectionlength; i++) {
            html += `<div class="a" id="${row + counter}">${counter}</div>`;
            counter++;
        }

        switch (placement) {
            case "left"://add 12 to counter
                counter = counter + (rowlength - sectionlength);
                break;
            case "right":// make label
                html += `<div class="label">${row}</div>`;
                break;
            default://add 3 to counter
                counter = counter + ((rowlength - sectionlength) / 2);
                break;
        }
    });
    document.getElementById(placement).innerHTML = html;
}

makerows(3, 15, 'left');
makerows(3, 15, 'right');
makerows(9, 15, 'middle');

(function () {

    'use strict';
    for (let x in reservedSeats) {
        if (reservedSeats.hasOwnProperty(x)) {
            const reserve = reservedSeats[x].seat;
            const rseat = document.getElementById(reserve);
            rseat.innerHTML = 'R';
            rseat.className = 'r';
        }
    }

    let selected = [];
    const available = document.querySelectorAll('.a');
    available.forEach(function(seat){
        seat.addEventListener('click', () => {

            var id = seat.id;
            seatselectionprocess(id);
        });
    });

    function seatselectionprocess(thisseat) {
        if (!document.getElementById(thisseat).classList.contains('r')) {
            if (selected.includes(thisseat)) {
                var index = selected.indexOf(thisseat);
                selected.splice(index, 1);
                document.getElementById(thisseat).className = 'a';

            }
            else {
                selected.push(thisseat);
                document.getElementById(thisseat).className = 's';

            }
            manageconfirmform();
            console.log(selected);
        }
    }

    document.getElementById('reserve').addEventListener('click', event => {
        document.getElementById('resform').style.display = 'block';
        event.preventDefault();
    });
    document.getElementById('cancel').addEventListener('click', event => {
        document.getElementById('resform').style.display = 'none';
        event.preventDefault();
    });

    function manageconfirmform() {
        if (selected.length > 0) {
            document.getElementById('confirmres').style.display = 'block';
            if (selected.lenth === 1) {
                document.getElementById('selectedseats').innerHTML = `you have selected seat ${selected[0]} `;
            }
            else {
                let seats = selected.toString();
                seats = seats.replace(/,/g, ", ");
                seats = seats.replace(/,(?=[^,]*$)/, " and");
                document.getElementById('selectedseats').innerHTML = `you have selected ${seats} seats`;
            }
        }
        else {
            document.getElementById('confirmres').style.display = 'none';
            document.getElementById('selectedseats').innerHTML = 'You need to select some seats to reserve.<br><a href="#" id="error">Close</a> this dialog box and pick at least one seat,';
            document.getElementById('error').addEventListener('click', () => {
                document.getElementById('resform').style.display = 'none';

            });
        }
    }
    manageconfirmform();

    document.getElementById('confirmres').addEventListener('submit', function (event) {
        processreservation();
        event.preventDefault();
    });

    function processreservation() {
        const hardcoderecords = Object.keys(reservedSeats).length;
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        let counter = 1;
        let nextrecord = '';
        selected.forEach(function (thisseat) {
            document.getElementById(thisseat).className = 'r';
            document.getElementById(thisseat).innerHTML = 'R';
            nextrecord = `record${hardcoderecords + counter}`;
            reservedSeats[nextrecord] = {
                seat: thisseat,
                owner: {
                    fname: fname,
                    lname: lname
                }
            }
            counter++;
        });

        document.getElementById('resform').style.display = "none";
        selected = [];
        manageconfirmform();
        console.log(reservedSeats);
    }
}());
