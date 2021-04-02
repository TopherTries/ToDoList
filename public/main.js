const update = document.querySelector('#update-button')

update.addEventListener('click', _ => {
    fetch('/tasks', {
        method: 'put', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            number: '1',
            task: 'Finish this Zell article!!!'
        })
    })
})