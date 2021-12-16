$(document).ready(function(){
    $("#example").DataTable({
        "ajax":'../TESTS/ajax/testciclic.json',
        "columns": [
            { "data": "Clefs" },
            { "data": "Name" },
            { "data": "Domaines" },
            { "data": "Cibles" },
            { "data": "Node" },
            { "data": "Pôles" }
        ]
        
    });
});