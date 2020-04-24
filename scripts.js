function createPhotoData(photo, title, description) {
  let dataObj = {
      photo: photo,
      title: title,
      description: description
  };
  return dataObj;
}

let forest = createPhotoData('images/forest.jpg', 'The green forest with a girl', 'This picture shows a green, beautiful forest with a lonely girl in it. There is only one tree standing at the edge of the mountain.');
let moon = createPhotoData('images/moon.jpg', 'The moon', 'The moon in the black sky with stars is so lonely.');
let niagara = createPhotoData('images/niagara.jpg', 'The Niagara Falls', 'The Niagara Falls during summer can be found in its beautiest version.');
let palmtrees = createPhotoData('images/palmtrees.jpg', 'The beach with palmtrees', '2 palmtrees standing on a lonely beach where there is only one boat parking.');
let rainbow = createPhotoData('images/rainbow.jpg', 'The rainbow is hope', 'The beauty of raining is that there can be rainbow afterwards which brings hope for the sunny weather.');
let roadtomountain = createPhotoData('images/roadtomountain.jpg', 'The road to the mountain', 'The lonely and long road to the beautiful, snowy mountain goes through a deserted area.');
let sealion = createPhotoData('images/sealion.jpg', 'The sea lion in action', 'The sea lion was captured in the middle of catching a penguin for lunch.');
let tajmahal = createPhotoData('images/tajmahal.png', 'Taj Mahal', 'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan (reigned from 1628 to 1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.');

let myImages = [forest, moon, niagara, palmtrees, rainbow, roadtomountain, sealion, tajmahal];
let currentPhoto = 0; 
  
$('#photo').attr('src', myImages[currentPhoto].photo);
$('#photo-title').text(myImages[currentPhoto].title);
$('#photo-description').text(myImages[currentPhoto].description);

let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', myImages[photoNumber].photo);
  $('#photo-title').text(myImages[photoNumber].title);
  $('#photo-description').text(myImages[photoNumber].description);
  $('.box').removeClass("clicked")
  $(`#${photoNumber}`).addClass("clicked");
}

$('#leftarrow').click(() => {
  if(currentPhoto === 0) {
    currentPhoto = 8;
  }
  else {
  currentPhoto--;
  }
  loadPhoto(currentPhoto);
});

$('#rightarrow').click(() => {
  if(currentPhoto === 8) {
    currentPhoto = 0;
  }
  else {
    currentPhoto++;
  }
  loadPhoto(currentPhoto);
});

loadPhoto(currentPhoto);

myImages.forEach((item, index) => {
  $('#thumbnails').append(`<div class="container" id="container${index}"></div>`);
  $(`#container${index}`).append(`<img src=${myImages[index].photo} class="box" id="${index}">`);
  $(`#container${index}`).append(`<div class="small-title"> ${myImages[index].title} <div>`);

  $('.box').click((event) => {
    let indexClicked = $(event.target).attr('id');
    let numberIndex = parseInt(indexClicked);
    currentPhoto = numberIndex
    loadPhoto(currentPhoto)
  });
});
