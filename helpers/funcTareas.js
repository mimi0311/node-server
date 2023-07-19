require('colors');

const listaTareas = [
    {
        id: 1,
        description: 'Tarea 1',
        complete: false,
    },
    {
        id: 2,
        description: 'Tarea 3',
        complete: false,
    },
    {
        id: 3,
        description: 'Tarea 3',
        complete: false,
    },
    {
        id: 4,
        description: 'Tarea 4',
        complete: false,
    },
    {
        id: 5,
        description: 'Tarea 5',
        complete: false,
    },
];

const crearTarea = (description) => {

    return new Promise((resolve, reject) => {
        const tarea = {
            id: listaTareas.length + 1,
            description,
            complete: false,
        }
    
        listaTareas.push(tarea);
        resolve(tarea);
    })
}

const eliminarTarea = (id) => {

    return new Promise((resolve, reject) => {
        const index = parseInt(id);
        if(index >= 1 && index <= listaTareas.length){
            resolve(listaTareas.splice(index - 1, 1)[0]);
        }else{
            reject(new Error('No existe la tarea'))
        }
    })
}

const completarTarea = (id) => {
    return new Promise((resolve, reject) => {
        const index = parseInt(id);
        if(index >= 1 && index <= listaTareas.length){
            resolve(listaTareas[index-1].complete = true);
        }else{
            reject(new Error('No existe la tarea'))
        }

    })
}

const mostrarTareas = () => {
    listaTareas.forEach(tarea => {
        console.log(`${'ID:'.cyan} ${tarea.id}, ${'Descripcion:'.cyan} ${tarea.description}, ${'Completada:'.cyan} ${tarea.complete}`);
      });
}

module.exports = {
    crearTarea,
    eliminarTarea,
    completarTarea,
    mostrarTareas,
    listaTareas
}