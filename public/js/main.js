const deleteMovieBtn = document.querySelectorAll('.deleteMovie');
const markMovieCompleted = document.querySelectorAll('.completeCircle');
const markMovieNotWatched = document.querySelectorAll('.checkedCompleteCircle');

Array.from(deleteMovieBtn).forEach((item)=>{
    item.addEventListener('click', deleteMovie);
})

Array.from(markMovieCompleted).forEach((item)=>{
    item.addEventListener('click', movieWatched);
})

Array.from(markMovieNotWatched).forEach((item)=>{
    item.addEventListener('click', movieNotWatched)
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

async function movieNotWatched () {
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