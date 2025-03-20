const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', () => {
    
    if (input.value !== '') {
        
        const li = document.createElement('li');

        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');

        
        li.textContent = input.value;

        
        li.append(deleteButton);

       
        list.append(li);

        
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        
        input.value = '';
        input.focus();
    } else {
        
        input.focus();
    }
});