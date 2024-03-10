

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

    let calcFeed = calcSpeed * 0.1;

    calcFeed = Number(calcFeed.toFixed(2));

    document.getElementById("calcSpeed").innerHTML = calcSpeed;
    document.getElementById("calcFeed").innerHTML = calcFeed;

})

