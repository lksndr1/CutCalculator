const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

// заголовки
let hd = 'Optimizing Drilling Performance: The Crucial Role of Spindle Speed and Feed';
let hl = 'Understanding Spindle Speed and Feed in Lathe Operations';
let hm = 'Mastering Efficiency: The Significance of Spindle Speed and Feed in Milling';
let hb = 'Precision in Boring: The Crucial Role of Spindle Speed and Feed';
// опис
let drillBriefDescription = "Drilling is a fundamental process in various industries, from oil and gas exploration to metalworking and construction. Achieving optimal drilling performance requires careful consideration of several parameters, with spindle speed and feed being two of the most critical factors. Let's delve into the significance of these parameters and their impact on drilling operations.";

let latheBriefDescription = "In the world of machining, precision and efficiency are paramount, and two crucial factors that significantly impact these aspects in lathe operations are spindle speed and feed. The careful manipulation of these parameters is essential for achieving optimal results in turning and shaping materials on a lathe."

let millBriefDescription = "Milling operations form the backbone of precision machining, and the success of these endeavors hinges on the careful control of spindle speed and feed. In the dynamic world of milling, understanding and optimizing these two critical parameters can make the difference between a mediocre outcome and a precisely crafted workpiece."

let boreBriefDescription = "Boring operations are a fundamental aspect of machining, often employed to achieve precise internal diameters in workpieces. Within this realm, the synergy between spindle speed and feed plays a pivotal role in determining the success of the operation. Understanding and optimizing these parameters are essential for achieving accuracy, efficiency, and superior surface finishes in boring."

// назва  парам 1
let pn1Drill = 'Spindle Speed: Precision in Rotation';
let pn1Lathe = 'Spindle Speed:';
let pn1Mill = 'Spindle Speed:';
let pn1Bore = 'Spindle Speed:';
// опис парам 1
let pd1Drill = 'Spindle speed, measured in revolutions per minute (RPM), refers to the rate at which the drill bit rotates. The choice of spindle speed is pivotal as it directly influences the efficiency of cutting, tool life, and overall drilling performance.';
let pd1Lathe = "Spindle speed refers to the rotational speed of the lathe's spindle, typically measured in revolutions per minute (RPM). Selecting the appropriate spindle speed is critical as it directly influences the cutting speed, tool life, and surface finish of the machined part. Different materials and cutting tools require varying spindle speeds for optimal performance.";
let pd1Mill = "Spindle speed, denoted in revolutions per minute (RPM), represents the rotational speed of the milling cutter. The selection of an appropriate spindle speed is vital, directly impacting cutting speed, tool longevity, and the quality of the machined surface. Different materials and cutter types demand distinct spindle speeds for optimal performance.";
let pd1Bore = 'Spindle speed in boring operations refers to the rotational speed of the boring tool and is typically measured in revolutions per minute (RPM). The selection of the right spindle speed is critical, directly influencing the cutting speed and the overall efficiency of material removal. The material being bored and the type of cutting tool employed are crucial factors in determining the optimal spindle speed.';
// назва парам 2
let pn2Drill = 'Feed Rate: Controlling the Descent';
let pn2Lathe = 'Feed:';
let pn2Mill = 'Feed:';
let pn2Bore = 'Feed:';
// опис парам 2
let pd2Drill = 'Feed rate, often expressed in inches per revolution or millimeters per minute, represents the speed at which the drill bit moves into the material being drilled. It plays a crucial role in determining the depth and quality of the borehole.';
let pd2Lathe = 'Feed in lathe operations refers to the rate at which the cutting tool advances along the workpiece. It is typically measured in inches or millimeters per revolution (IPR or mm/rev). The feed rate directly impacts the efficiency of material removal, tool life, and the overall machining time.';
let pd2Mill = 'Feed in milling refers to the rate at which the milling cutter advances along or through the workpiece. It is measured in inches or millimeters per minute (IPM or mm/min). The feed rate directly influences material removal rates, surface finish, and the overall efficiency of the milling process.';
let pd2Bore = 'Feed in boring operations refers to the rate at which the boring tool advances into the workpiece. It is measured in inches or millimeters per revolution (IPR or mm/rev). The feed rate directly impacts the efficiency of material removal, tool life, and the quality of the machined surface.';

// fukcional slideru

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        // item.style.width = 700 + 'px'; !!!!!!!!!!!!!!!!!!!!!!!!!!
        item.style.height = 'auto';
    });
    rollSlider();
}

window.addEventListener('resize', init);
init();

// listanie nazad
document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
    // console.log(count)
    switch (count) {
        case 0:
            document.querySelector('#article-name').innerText = hd;
            document.querySelector('#brief-description').innerText = drillBriefDescription;
            document.querySelector('#parameter_name1').innerText = pn1Drill;
            document.querySelector('#parameter_deskr1').innerText = pd1Drill;
            document.querySelector('#parameter_name2').innerText = pn2Drill;
            document.querySelector('#parameter_deskr2').innerText = pd2Drill;
            break;
        case 1:
            document.querySelector('#article-name').innerText = hl;
            document.querySelector('#brief-description').innerText = latheBriefDescription;
            document.querySelector('#parameter_name1').innerText = pn1Lathe;
            document.querySelector('#parameter_deskr1').innerText = pd1Lathe;
            document.querySelector('#parameter_name2').innerText = pn2Lathe;
            document.querySelector('#parameter_deskr2').innerText = pd2Lathe;
            break;
        case 2:
            document.querySelector('#article-name').innerText = hm;
            document.querySelector('#brief-description').innerText = millBriefDescription;
            document.querySelector('#parameter_name1').innerText = pn1Mill;
            document.querySelector('#parameter_deskr1').innerText = pd1Mill;
            document.querySelector('#parameter_name2').innerText = pn2Mill;
            document.querySelector('#parameter_deskr2').innerText = pd2Mill;
            break;
        case 3:
            document.querySelector('#article-name').innerText = hb;
            document.querySelector('#brief-description').innerText = boreBriefDescription;
            document.querySelector('#parameter_name1').innerText = pn1Bore;
            document.querySelector('#parameter_deskr1').innerText = pd1Bore;
            document.querySelector('#parameter_name2').innerText = pn2Bore;
            document.querySelector('#parameter_deskr2').innerText = pd2Bore;
            break;
    }
})


// listanie vpered
document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
    // console.log(count)
    switch (count) {
        case 0:
            document.querySelector('#article-name').innerText = hd;
            document.querySelector('#brief-description').innerText = drillBriefDescription;
            document.querySelector('#parameter_name1').innerText = pn1Drill;
            document.querySelector('#parameter_deskr1').innerText = pd1Drill;
            document.querySelector('#parameter_name2').innerText = pn2Drill;
            document.querySelector('#parameter_deskr2').innerText = pd2Drill;
            break;
        case 1:
            document.querySelector('#article-name').innerText = hl;
            document.querySelector('#brief-description').innerText = latheBriefDescription;
            document.querySelector('#parameter_name1').innerText = pn1Lathe;
            document.querySelector('#parameter_deskr1').innerText = pd1Lathe;
            document.querySelector('#parameter_name2').innerText = pn2Lathe;
            document.querySelector('#parameter_deskr2').innerText = pd2Lathe;
            break;
        case 2:
            document.querySelector('#article-name').innerText = hm;
            document.querySelector('#brief-description').innerText = millBriefDescription;
            document.querySelector('#parameter_name1').innerText = pn1Mill;
            document.querySelector('#parameter_deskr1').innerText = pd1Mill;
            document.querySelector('#parameter_name2').innerText = pn2Mill;
            document.querySelector('#parameter_deskr2').innerText = pd2Mill;
            break;
        case 3:
            document.querySelector('#article-name').innerText = hb;
            document.querySelector('#brief-description').innerText = boreBriefDescription;
            document.querySelector('#parameter_name1').innerText = pn1Bore;
            document.querySelector('#parameter_deskr1').innerText = pd1Bore;
            document.querySelector('#parameter_name2').innerText = pn2Bore;
            document.querySelector('#parameter_deskr2').innerText = pd2Bore;
            break;
    }

})

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}


// scroll na nastupnu storinku

document.addEventListener("DOMContentLoaded", function () {
    let scrollImage = document.getElementById("scrollImage");
    if (scrollImage) {
        scrollImage.addEventListener("click", function () {
            window.scrollTo(0, document.documentElement.scrollHeight || document.body.scrollHeight);
        });
    }
});

