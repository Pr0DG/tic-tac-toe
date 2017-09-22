document.querySelector('.header--text').innerHTML = game.name;

function setFieldMark(id) {
  if(game.fields[id].mark === null)
  {
    game.fields[id].mark = game.move;
    getField(id).classList.add(game.fields[id].mark);
    game.changeMove();
  }
}

function getField(id) {
  return document.getElementsByClassName('quad')[id];
}

for (let i = 0; i < 9; i++) {
  getField(i).addEventListener('click', function () {
    setFieldMark(i);
  })
}
