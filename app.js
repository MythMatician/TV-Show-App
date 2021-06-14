const form = document.querySelector('#searchForm');
const div = document.querySelector('.show-list');
const item = document.createElement('DIV');

const makeData = (shows) => {
    for(let results of shows) {
        item.innerHTML = `
        <img src='${results.show.image.medium}'></img>
        <p><strong>Name: </strong>${results.show.name}</p>
        <p><strong>Rating: </strong>${results.show.rating.average}</p>
        <p><strong>Genres: </strong>${results.show.genres}
        `;
        
    }
    item.classList.add('style');
    div.append(item);
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let search = form.elements.query.value;
    const config = {params: {q: search}}
    const res =  await axios.get(`https://api.tvmaze.com/search/shows`, config);
    // const item = res.data;
    // for(let result of item) {
    //     console.log(result.show.id);
    // }
    // makeImages(res.data);
    makeData(res.data);
    console.log(res.data);
});
