url = 'https://perenual.com/api/species-list?key=sk-ipG06655d8ec042e35685'
            fetch(url, {
                method: 'GET',
                redirect:'follow',
                //mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
            })    
            .then(response => response.text())
            .then(result => mostrarData(result))
            .catch(error => console.log('error', error));

            const mostrarData = (result) => {
                let plantas = result
                sessionStorage.setItem("plantas", plantas)
            }

/*obtengo los datos desde el sessionStore para usarlos en esta página*/

let arrayPlantas = JSON.parse(sessionStorage.getItem("plantas")).data

let body = ''
for (let i = 1; i < arrayPlantas.length-2; i++) { 
    imagen=(arrayPlantas[i].default_image)
    body += `<div class="plant-section">
                <div class="row align-items-center">
                    <div class="col-md-3 ">
                        <div id="imagen">
                                <a href="${imagen.medium_url}" target="_blank">
                                    <img src="${imagen.thumbnail}" alt=""/>
                                </a>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <h5><b>Nombre común: </b><br> ${arrayPlantas[i].common_name}</h5>
                    </div>
                    <div class="col-md-3">
                        <div id="descripcion">
                            <h5><b>Nombre Científico:  </b><br>  ${arrayPlantas[i].scientific_name}</h5>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div id="datos_basicos">
                            <h5><b>Expocisión solar:  </b> <br> ${arrayPlantas[i].sunlight}</h5>
                        </div>
                    </div>                    
                </div>
            </div>`
   
}
document.getElementById("listaPlantas").innerHTML = body