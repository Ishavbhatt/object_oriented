// factory way
      function createUser(name) {
        var obj = [];
        obj.name = name;
        obj.score = 0;
        obj.increment = function(score) {
          return obj.score ++;
        }
        obj.decrement =function(score) {
          return obj.score --;
        }
        return obj;
      }
      var ishav = createUser("ishav");

      ishav.increment()
      ishav.increment()
      ishav.increment()
      ishav.increment()
      ishav.increment()
      ishav.increment()
      ishav.increment()
      // output [name: "ishav", score: 7, increment: ƒ, decrement: ƒ]

      // using dunder proto
      function createUser