const deleteMovieBtn = document.querySelectorAll('.deleteMovie');
const markMovieCompleted = document.querySelectorAll('.completeCircle');
const markMovieNotWatched = document.querySelectorAll('.checkedCompleteCircle');
const deleteGroceryBtn = document.querySelectorAll('.deleteGrocery');
const markGroceryCompleted = document.querySelectorAll('.completeCircle2');
const markGroceryIncomplete = document.querySelectorAll('.checkedCompleteCircle2');
const markRestCompleted = document.querySelectorAll('.completeCircle3');
const markRestIncomplete = document.querySelectorAll('.checkedCompleteCircle3');
const deleteRest = document.querySelectorAll('.deleteRestaurant');
const deleteChores = document.querySelectorAll('.deleteChore');
const choreCompleted = document.querySelectorAll('.completeCircle4');
const choreIncomplete = document.querySelectorAll('.checkedCompleteCircle4');

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

Array.from(markRestCompleted).forEach((item)=>{
    item.addEventListener('click', restaurantVisited);
})

Array.from(markRestIncomplete).forEach((item)=>{
    item.addEventListener('click', restaurantNotVisited);
})

Array.from(deleteRest).forEach((item)=>{
    item.addEventListener('click', removeRest);
})

Array.from(deleteChores).forEach((item)=>{
    item.addEventListener('click', deleteChore)
})

Array.from(choreCompleted).forEach((item)=>{
    item.addEventListener('click', choreDone);
})

Array.from(choreIncomplete).forEach((item)=>{
    item.addEventListener('click', choreNotDone)
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

async function restaurantVisited(){
    const restaurantId = this.parentNode.dataset.id
    try {
        const response = await fetch('restaurant/restaurantVisited', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'restaurantIdFromMongo': restaurantId
            })
        })
        const data = await response.json()
        console.log(data);
        location.reload();  
    } catch (error) {
        console.log(error);
    }
}

async function restaurantNotVisited(){
    const restaurantId = this.parentNode.dataset.id
    try {
        const response = await fetch('restaurant/restaurantNotVisited', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'restaurantIdFromMongo': restaurantId
            })
        })
        const data = await response.json()
        console.log(data);
        location.reload();  
    } catch (error) {
        console.log(error);
    }
}

async function removeRest(){
    const restaurantId = this.parentNode.dataset.id
    try {
        const response = await fetch('restaurant/removeRest', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'restaurantIdFromMongo': restaurantId
            })
        })
        const data = await response.json()
        console.log(data);
        location.reload();  
    } catch (error) {
        console.log(error);
    }
}

async function deleteChore() {
    const choreId = this.parentNode.dataset.id;
    try {
        const response = await fetch('chores/deleteChore', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'choreIdFromMongo': choreId
            })
        })
        const data = await response.json()
        console.log(data);
        location.reload();  
    } catch (error) {
        console.log(error);
    }
}

async function choreDone() {
    const choreId = this.parentNode.dataset.id;
    try {
        const response = await fetch('chores/choreDone', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'choreIdFromMongo': choreId
            })
        })
        const data = await response.json()
        console.log(data);
        location.reload();  
    } catch (error) {
        console.log(error);
    }
}

async function choreNotDone() {
    const choreId = this.parentNode.dataset.id;
    try {
        const response = await fetch('chores/choreNotDone', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'choreIdFromMongo': choreId
            })
        })
        const data = await response.json()
        console.log(data);
        location.reload();  
    } catch (error) {
        console.log(error);
    }
}