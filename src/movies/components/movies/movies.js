export class Movies {
  constructor (data) {
    this.data = `
        <img class="movies-item__image" src="${data.image}">
        <h1 class="movies-item__name">${data.title}</h1>
        <div class="movies-item__info">
          <h2 class="movies-item__title" data-genre=${data.category.toLowerCase()}>${data.title}</h2>
          <p class="movies-item__director">  <b> Director: </b>  ${data.director}</p>
          <p class="movies-item__category"> <b> Category: </b> ${data.category}</p>
          <p class="movies-item__year"> <b> Year: </b> ${data.year}</p>
          <p class="movies-item__stars"> <b>Stars: </b>${data.starts}</p>
          <img class="movies-item__camera" src="https://image.flaticon.com/icons/svg/263/263068.svg">
        </div>
    `
  }
}
