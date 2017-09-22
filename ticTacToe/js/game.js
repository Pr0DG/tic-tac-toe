const game = {
  name:"tic-tac-toe",
  players:
  [
    {
      id:1,
      PlayerName: "Czarek",
      mark:"cross",
      score:0
    },
    {
      id:2,
      PlayerName: "XYZ",
      mark:"nought",
      score:0
    }
  ],
  move: "cross",
  changeMove: function () {
      if (this.move == "cross") {
        this.move = "nought";
      }
      else
        this.move = "cross";
  },
  fields:
  [
    {
      id:0,
      mark:null
    },
    {
      id:1,
      mark:null
    },
    {
      id:2,
      mark:null
    },
    {
      id:3,
      mark:null
    },
    {
      id:4,
      mark:null
    },
    {
      id:5,
      mark:null
    },
    {
      id:6,
      mark:null
    },
    {
      id:7,
      mark:null
    },
    {
      id:8,
      mark:null
    },
  ]
}
