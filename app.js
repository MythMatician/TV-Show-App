const form = document.querySelector('#searchForm');
const input = document.querySelector('input');
const div = document.querySelector('.show-list');

const makeData = (shows) => {
    for(let results of shows) {
        if(results.show.image) {
            const item = document.createElement('DIV');
            item.innerHTML = `
            <img src=${results.show.image.medium}>
            <p><strong>Name: </strong>${results.show.name}</p>
            <p><strong>Rating: </strong>${results.show.rating.average}</p>
            <p><strong>Genres: </strong>${results.show.genres}
            `;
            item.classList.add('style');
            div.append(item);
        }
    }
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let search = form.elements.query.value;
    const config = {params: {q: search}}
    const res =  await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeData(res.data);
    console.log(res.data);
});

input.addEventListener('change', () => {
    div.innerHTML = '';
});
