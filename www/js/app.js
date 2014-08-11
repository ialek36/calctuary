// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var adapter = new MemoryAdapter();
    adapter.initialize().done(function () {
        console.log("Data adapter initialized");
    });

    /* --------------------------------- Event Registration -------------------------------- */
    $('.search-key').on('keyup', findByName);
    $('.help-btn').on('click', function() {
        alert("Some help here...")
    });

    $('#calcKey1').on('click', function() {
                      //alert("clicked one");
       //  $("#searchKey").val($("#searchKey").val() + "1");
        keyPressHandle("1");
    });
    
    $('#calcKey2').on('click', function() {
        keyPressHandle("2");
    });
    $('#calcKey3').on('click', function() {
        keyPressHandle("3");
    });
    $('#calcKey4').on('click', function() {keyPressHandle("4");});
    $('#calcKey5').on('click', function() {keyPressHandle("5");});
    $('#calcKey6').on('click', function() {keyPressHandle("6");});
    $('#calcKey7').on('click', function() {keyPressHandle("7");});
    $('#calcKey8').on('click', function() {keyPressHandle("8");});
    $('#calcKey9').on('click', function() {keyPressHandle("9");});
    $('#calcKey0').on('click', function() {keyPressHandle("0");});
    
    $('#delKey').on('click', function() {
       c = $("#searchKey").val();
       s = c.substr(0, c.length -1);
       $("#searchKey").val(s);
    });
    document.addEventListener('deviceready', function () {
    if (navigator.notification) { // Override default HTML alert with native dialog
        window.alert = function (message) {
            navigator.notification.alert(
                message,    // message
                null,       // callback
                "Workshop", // title
                'OK'        // buttonName
            );
        };
    }
    FastClick.attach(document.body);
    }, false);

    /* ---------------------------------- Local Functions ---------------------------------- */
    function findByName() {
        adapter.findByName($('.search-key').val()).done(function (employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i = 0; i < l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            }
        });
    }

     function keyPressHandle(key) {
//         if (key) 
            $("#searchKey").val($("#searchKey").val() + key);
    }
}());