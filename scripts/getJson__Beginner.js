$(".beginner").click(function () {

    $.getJSON('json/jsonCICLIC.json', function (data) {

        document.getElementById('tableTbody').innerHTML = "";
        let column = "";
        data.forEach(function (objet, index) {
            if (objet.Clefs.indexOf(enSonTiklananTus) > -1) {    
                column += `
                    <tr>
                        <td>${objet.Name}</td>
                        <td class="domainess">${objet.Domaines}</td>
                        <td class="cibless">${objet.Cibles}</td>
                        <td>${objet.Node}</td>
                    </tr>
                `;
            }
        })
        document.getElementById('tableTbody').insertAdjacentHTML('afterbegin', column);

        data.forEach(function (objet, index) {
            var autor = objet.Cibles.indexOf("DEBUTANT") > -1;


            if (autor) {

                document.querySelectorAll('.cibless').forEach((cibles) => {
                    console.log(cibles)
                    if (!cibles.textContent.includes('DEBUTANT')) {
                        cibles.parentElement.remove();
                    }
                })

            }

            // var cibles = $('#liste .tab');
            // if(cibles.html!=autor){
            //     $("#liste").remove(); 
            // }




        });

    })

});