/*function cargarDatosPersona(){

    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(jsonData => {
        let tablePersona = document.getElementById('table-persona');

        let tablePersonaTbody  = tablePersona.getElementsByTagName('tbody')[0];
        
        for (const itemPersona of jsonData) {
            
            tablePersonaTbody.innerHTML += `<tr>
            <td>${itemPersona.id}</td>
            <td>${itemPersona.title}</td>
            </tr>`
        }

        
        
      })
}
*/


function cargarDatosPersonaV2(){
  fetch('http://127.0.0.1:8000/api/1.0/personas')
      .then(response => response.json())
      .then(jsonData => {
        
        let tablePersona = document.getElementById('table-persona');

        let tablePersonaTbody  = tablePersona.getElementsByTagName('tbody')[0];

        console.log(jsonData);
        console.log(Object.values(jsonData));
        
        for (const itemPersona of jsonData) {
            //console.log(itemPersona);
            
            tablePersonaTbody.innerHTML += `<tr>
              <td>${ itemPersona.nombre }</td>
              <td>${ itemPersona.correo }</td>
              </tr>`  
              
          }
        
       

       
        

        
        
      })
}

cargarDatosPersonaV2();
