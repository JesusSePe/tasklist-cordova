
// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

const taques = "tasques";

function refresca_view(tasques) {
    console.log(tasques);

    //buidar tasklist view
    $("li").remove();

    // omplir les dades view
    var cont = 0;
    for(const tasca of tasques) {
        $('ul').append("<li pos='"+cont+"'class='ui-li-has-alt ui-last-child'><a class='ui-btn' href='#'>"+tasca+"</a><a class='ui-icon ui-icon-delete ui-icon-shadow ui-btn ui-btn-icon-notext ui-icon-carat-r' title></a></li>");
        cont++;
    }
    // ELIMINAR TASCA
    $(".ui-icon-delete").click(function() {
        del = $(this).parent().attr('pos');
        console.log(del);
        db = JSON.parse(localStorage.getItem("tasques"));
        db.splice(del, 1);
        localStorage.setItem("tasques", JSON.stringify(db));
        refresca_view(db);
    });
}


function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');


    // inicialitzar array tasques al localStorage si no existeix
    if( !localStorage.getItem("tasques") ) {
        localStorage.setItem("tasques", JSON.stringify([]) );
    }


    // inicialitzem tasklist amb les dades existents
    var dades = JSON.parse(localStorage.getItem("tasques"));
    refresca_view(dades);
    $("#taskbutton").click(function() {
        //capturem text
        var text = $('#taskinput').val();

        // afegr task a localStorage
        var tasques = JSON.parse(localStorage.getItem("tasques"));
        tasques.push(text);
        localStorage.setItem("tasques", JSON.stringify(tasques));

        // refrescar view
        refresca_view(tasques);
    });

}