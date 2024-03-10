

document.querySelector('#calcButton').addEventListener('click', () => {
    event.preventDefault(); // Скасовує стандартну дію кнопки, щоб сторінка одразу не перезавантажувалась, і консоль не очищувалася.
    // let operation = parseInt(document.querySelector('#operationSelect').value);
    let workpiece = parseInt(document.querySelector('#workpieceSelect').value);
    let toolmaterial = parseInt(document.querySelector('#toolmaterialSelect').value);
    let tooldiameter = parseFloat(document.querySelector('#tooldiameter').value);
    // let teethnumber = parseInt(document.querySelector('#teethnumber').value);

    // 1.Spindle speed:
    let vC;
    switch (workpiece) {
        // steel
        case 5:
            if (toolmaterial == 9) {
                vC = 20;
            } else {
                vC = 120;
            };
            break;
        // cast iron
        case 6:
            if (toolmaterial == 9) {
                vC = 15;
            } else {
                vC = 80;
            };
            break;
        // aluminium
        case 7:
            if (toolmaterial == 9) {
                vC = 34;
            } else {
                vC = 160;
            };
            break;
        // brass
        case 8:
            if (toolmaterial == 9) {
                vC = 25;
            } else {
                vC = 140;
            };
    }

    let calcSpeed = 318 * vC / tooldiameter;
    calcSpeed = Number(calcSpeed.toFixed(0));

    // 2.Feed

    // add to if/else feed per rev according to tool diameter
    let fpr;

    if (tooldiameter <= 2) {
        fpr = 0.05;
    } else if (tooldiameter > 2 && tooldiameter <= 5) {
        fpr = 0.08;
    } else if (tooldiameter > 5 && tooldiameter <= 8) {
        fpr = 0.1;
    } else if (tooldiameter > 8 && tooldiameter <= 12) {
        fpr = 0.16;
    } else if (tooldiameter > 12 && tooldiameter <= 16) {
        fpr = 0.20;
    } else if (tooldiameter > 16 && tooldiameter <= 25) {
        fpr = 0.25;
    } else if (tooldiameter > 25 && tooldiameter <= 40) {
        fpr = 0.32;
    } else if (tooldiameter > 40 && tooldiameter <= 63) {
        fpr = 0.40;
    } else if (tooldiameter > 63 && tooldiameter <= 75) {
        fpr = 0.5;
    } else {
        fpr = 0.6;
    }

    let calcFeed;

    // Drilling
    calcFeed = calcSpeed * fpr;

    calcFeed = Number(calcFeed.toFixed(2));

    document.getElementById("calcSpeed").innerHTML = calcSpeed;
    document.getElementById("calcFeed").innerHTML = calcFeed;

})

