document.querySelector('.header--text').innerHTML = game.name;

function setFieldMark(id) {
  if(game.fields[id].mark === null)
  {
    game.fields[id].mark = game.move;
    getField(id).classList.add(game.fields[id].mark);
    game.changeMove();
    isEnd();
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

const btn = document.querySelector('.btn--clear');

function isMarkEaqual(st, nd, rd) {
  if(
      (game.fields[st].mark === game.fields[nd].mark && game.fields[nd].mark === game.fields[rd].mark)
      &&
      (game.fields[st].mark != null && game.fields[nd].mark !=null && game.fields[rd].mark != null)
    )
  return true;
}

function checkMoves() {
  ++game.movesCounter;
  if(
      (isMarkEaqual(0, 1, 2))
      ||
      (isMarkEaqual(3, 4, 5))
      ||
      (isMarkEaqual(6, 7, 8))
      ||
      (isMarkEaqual(0, 3, 6))
      ||
      (isMarkEaqual(1, 4, 7))
      ||
      (isMarkEaqual(2, 5, 8))
      ||
      (isMarkEaqual(0, 4, 8))
      ||
      (isMarkEaqual(2, 4, 6))
    )
  return true;
}

function isEnd() {
  if(game.movesCouner == 9 || checkMoves())
  {
    btn.classList.remove('hidden');
    return true;
  }
  else
    btn.classList.add('hidden');
}

function newGame() {
  if(isEnd()) {
    for (let i = 0; i < game.fields.length; i++) {
      getField(i).classList.remove(game.fields[i].mark);
      game.fields[i].mark = null;
      game.movesCounter = 0;
      btn.classList.add('hidden');
    }
  }
}

btn.addEventListener('click', newGame);
