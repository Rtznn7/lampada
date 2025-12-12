const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada.png' ) > -1
}

function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = 'ligada.png';
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = 'desligada.jpg';
    }
}

function lampBroken () {
    lamp.src = 'quebrada.png';
}

turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff );
lamp.addEventListener ( 'dblclick', lampBroken );
function isLampBroken() {
    return lamp.src.indexOf('quebrada.png') > -1;
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = 'ligada.png';
        document.body.style.background = "#ffffff";  
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = 'desligada.jpg';
        document.body.style.background = "#000000";  
    }
}

function lampBroken() {
    lamp.src = 'quebrada.png';

    
    document.body.style.background = "url('fogo.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
}

