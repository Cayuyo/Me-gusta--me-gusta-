function meGusta(like) {
    const likeElement = document.querySelector(`.${like}`);
    const cantidadLikes = parseInt(likeElement.textContent);

    const newLikes = cantidadLikes + 1;
    likeElement.textContent = `${newLikes} Like(s)`;

    console.log(`Likes en ${like}: ${newLikes}`);
}