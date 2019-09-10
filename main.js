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
    function createUser(name,score = 0){
    var obj = {};
    obj.__proto__.increment = function(score) {
        return obj.score ++;
    }
    obj.__proto__.decrement = function(score) {
        return obj.score --;
    }
    obj.name = name;
    obj.score = score;
    return obj;
    }

    var ishav = createUser("ishav", 4)

    ishav

    // output {name: "ishav", score: 4}

    ishav.increment()

    ishav.increment()

    ishav.increment()

    ishav.increment()
    
    ishav

    // output {name: "ishav", score: 8}