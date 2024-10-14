const waqts = {
    fajr:'Fajr',
    duhr: 'duhr',
    asr: 'Asr',
    magrib: 'Magrib',
    isha: 'Isha'
};

const displaySalat = (waqts) => {
    const container = document.getElementById('salat-container');
    
    for(const salat in waqts){    
        const list = document.createElement('li');
        list.id = salat;
        list.innerHTML = `
        ${salat}<input onclick='completed('${salat}')' type="checkbox">
        `;
        container.append(list);
        //console.log(salat);
    }
}

const displayTask = () => {
    const container = document.getElementById('todo-list-container');
    const task = document.getElementById('addTask').value;  
    const list = document.createElement('li');  
    list.id = task;
    list.innerHTML = `
    ${task}<input onclick='completed('${task}')' type="checkbox">
    `;
    container.append(list);
    //console.log(list, task);
  }
  

const completed = (task) => {
    const container = document.getElementById('completed-container');
    const list = document.createElement('li');
    list.id = 'completed';
    list.innerText = task;
   // container.append(list);
    console.log(container,list);
}


  displaySalat(waqts);