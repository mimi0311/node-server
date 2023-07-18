require('colors')
const readline = require('readline');
const { crearTarea, eliminarTarea, completarTarea, mostrarTareas } = require('./funcTareas');
const { threadId } = require('worker_threads');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu = () => {
  console.log('======================='.blue)
  console.log('    Lista de Tareas    '.blue)
  console.log('======================='.blue)
  
  rl.question(`${'Seleccione una opción:'.underline.cyan} \n ${'1.'.cyan} Crear tarea \n ${'2.'.cyan} Mostrar tareas \n ${'3.'.cyan} Completar tarea \n ${'4.'.cyan} Eliminar tarea \n ${'5.'.cyan} Salir \n`, async nro =>{
    switch(nro.toString()){
      case '1':
        console.clear()
          rl.question('Añade la tarea que desea realizar: ', async description => {
            try {
              crearTarea(description);
              console.log('\n Tarea creada existosamente!'.green)
              
            } catch (error) {
              throw error
            }
            menu()
          })
          break;
      
      case '2':
          console.clear()
          mostrarTareas();
          menu();
          break;
      
      case '3':
          console.clear()
          mostrarTareas();
          rl.question('¿Qué tarea desea marcar como completa? ', async complete => {
            try {
              completarTarea(complete)
              console.log('\n Tarea completada existosamente'.green)
              
            } catch (error) {
              throw error
            }
            menu()
          })
          break;

      case '4':
          console.clear()
          mostrarTareas();
          rl.question('¿Qué tarea desea eliminar? ', async eliminar => {
            try {
              eliminarTarea(eliminar)
              console.log('\n Tarea eliminada existosamente'.green)
              
            } catch (error) {
              throw error
            }
            menu()
          })
          break;
      
      case '5':
          rl.close();
          break;

      default:
          console.clear()
          console.log('\n Ingrese una opción válida, por favor.'.red);
          menu();
          break;
    }
  } )
}

module.exports = {
  menu
}