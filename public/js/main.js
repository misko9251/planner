const deleteMovieBtn = document.querySelectorAll('.deleteMovie');
const markMovieCompleted = document.querySelectorAll('.completeCircle');
const markMovieNotWatched = document.querySelectorAll('.checkedCompleteCircle');
const deleteGroceryBtn = document.querySelectorAll('.deleteGrocery');
const markGroceryCompleted = document.querySelectorAll('.completeCircle2');
const markGroceryIncomplete = document.querySelectorAll('.checkedCompleteCircle2');

Array.from(deleteMovieBtn).forEach((item)=>{
    item.addEventListener('click', deleteMovie);
})

Array.from(markMovieCompleted).forEach((item)=>{
    item.addEventListener('click', movieWatched);
})

Array.from(markMovieNotWatched).forEach((item)=>{
    item.addEventListener('click', movieNotWatched);
})

Array.from(deleteGroceryBtn).forEach((item)=>{
    item.addEventListener('click', deleteGrocery);
})

Array.from(markGroceryCompleted).forEach((item)=>{
    item.addEventListener('click', groceryAcquired);
})

Array.from(markGroceryIncomplete).forEach((item)=>{
    item.addEventListener('click', groceryStillNeeded);
})

async function deleteMovie() {
    const movieId = this.parentNode.dataset.id
    try {
        const response = await fetch('planner/deleteMovie', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'movieIdFromMongo': movieId
            })
        })
        const data = await response.json()
        console.log(data);
        location.reload();  
    } catch (error) {
        console.log(error);
    }
}

async function movieWatched(){
    const movieId = this.parentNode.dataset.id
    try {
        const response = await fetch('planner/movieWatched', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'movieIdFromMongo': movieId
            })
        })
        const data = await response.json()
        console.log(data);
        location.reload();  
    } catch (error) {
        console.log(error);
    }
}

async function movieNotWatched() {
    const movieId = this.parentNode.dataset.id
    try {
        const response = await fetch('planner/movieNotWatched', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'movieIdFromMongo': movieId
            })
        })
        const data = await response.json()
        console.log(data);
        location.reload();  
    } catch (error) {
        console.log(error);
    }
}

async function deleteGrocery() {
    const groceryId = this.parentNode.dataset.id
    try {
        const response = await fetch('groceries/deleteGrocery', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'groceryIdFromMongo': groceryId
            })
        })
        const data = await response.json()
        console.log(data);
        location.reload();  
    } catch (error) {
        console.log(error);
    }
}

async function groceryAcquired() {
    const groceryId = this.parentNode.dataset.id
    try {
        const response = await fetch('groceries/groceryAcquired', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'groceryIdFromMongo': groceryId
            })
        })
        const data = await response.json()
        console.log(data);
        location.reload();  
    } catch (error) {
        console.log(error);
    }
}

async function groceryStillNeeded(){
    const groceryId = this.parentNode.dataset.id
    try {
        const response = await fetch('groceries/groceryStillNeeded', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'groceryIdFromMongo': groceryId
            })
        })
        const data = await response.json()
        console.log(data);
        location.reload();  
    } catch (error) {
        console.log(error);
    }
}