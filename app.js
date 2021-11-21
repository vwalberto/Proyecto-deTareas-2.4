


let {listarTareas,agregarTarea, borrarTarea,tareasEstado} = require('./funcionesTareas');

let arreglo_objs_literal = require('./tareas_original.json');


let tarea_nueva =

{
  "codigo":10,
  "titulo":"Informe registro automotor 10 ",
  "estado":"Pendiente"

}

console.log(tarea_nueva);

console.log(JSON.stringify(tarea_nueva,null,''))

agregarTarea(arreglo_objs_literal, tarea_nueva )

/* Listamos todas las tareas*/

console.log("Listado de todas las tareas\n")

listarTareas(arreglo_objs_literal);

/* Listamos las tareas en estado pendiente */

console.log ("\n\n\n Listado de las tareas en estado pendiente \n")

let tareas_pendientes = tareasEstado(arreglo_objs_literal,"Pendiente");

console.log(tareas_pendientes);


/* Borramos la tarea 4*/

console.log ("\n\n\n Borramos la tarea 4 \n")

borrarTarea(arreglo_objs_literal , 4)


let arreglo_objs_literal_tarea_borrada = require('./tareas.json');

listarTareas(arreglo_objs_literal_tarea_borrada);
