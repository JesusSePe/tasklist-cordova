
// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');

    // Add a call to the delete function to all delete buttons.
    $('.ui-icon-delete').click(deleteItem);

    // Afegir la localStorage.
    var permanentStorage = localStorage;

    // Afegir les tasques inicials a localStorage.
    if localStorage.getItem("tasques").length == 0;

    }



    // AFEGIR TASCA
    $("#taskbutton").click(function() {
        var text = $("#taskinput").val();
        // alert("insert task: " + text);

        $('ul').append("<li id='list-"+text+"' class='ui-li-has-alt ui-last-child'><a class='ui-btn' href='#'>"+text+"</a><a class='ui-icon ui-icon-delete ui-icon-shadow ui-btn ui-btn-icon-notext ui-icon-carat-r' title></a></li>");
        $('.ui-icon-delete').click(deleteItem);

        // Afegir la tasca a localStorage
        var position = window.localStorage.length;
        localStorage.setItem("tasca"+position, text);
    });

}

function addToLS(id, value){
    var newItem = {id: value};
    var localDic = JSON.parse(localStorage.getItem("tasques"));
    localStorage.setItem("tasques", JSON.stringify(localDic+newItem));
}



function deleteItem(event){
    var elem = event.target;
    $(elem).parent().remove();
}