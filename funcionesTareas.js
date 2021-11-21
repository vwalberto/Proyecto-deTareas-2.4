let fs = require('fs')

function listarTareas(arregloTareas){

  arregloTareas.forEach(elemento =>{
    console.log(elemento.titulo)
  });
}

function agregarTarea(tareas,nuevaTarea){
    tareas.push(nuevaTarea);
    fs.writeFileSync('./tareas.json',JSON.stringify(tareas,null,''));
}

function borrarTarea(tareas,cod){
    let tareas_filtradas = tareas.filter(function(elemento){
      return elemento.codigo != cod;
    });
    fs.writeFileSync('./tareas.json',JSON.stringify(tareas_filtradas,null,''));
}

function tareasEstado(tareas,est){
    let tareas2 = tareas.filter(function(elemento){
      return elemento.estado == est;
  });
    return tareas2;
}


module.exports = {listarTareas,agregarTarea, borrarTarea,tareasEstado};
