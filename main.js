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



    // using Object.create
function createUser(name,score = 0){
    var obj = Object.create({
        increment: function(score) {
            return obj.score ++;
        },
        decrement: function(score) {
            return obj.score --;
        }
    });
    obj.name = name;
    obj.score = score;
    return obj;
}
var ishav = createUser("ishav", 9);

ishav
// output {name: "ishav", score: 9}

ishav.decrement()
ishav.decrement()
ishav.decrement()
ishav.decrement()
ishav.decrement()

ishav
// output {name: "ishav", score: 4}

// tast

function userDetail(name, username, balance=0) {
  var obj = {};
  obj.name = name;
  obj.username = username;
  obj.balance = balance;
  obj.changename = function(changename) {
      return obj.name = changename;
  }
  obj.incrementbal = function(balance) {
      return obj.balance ++;
  }
  obj.decrementbal = function(balance) {
      return obj.balance --;
  }
  obj.changeusername = function(changeusername) {
      return obj.username = changeusername;
  }
  return obj;
}

var ishav = userDetail("ishav", "bhatt");

ishav

// output {name: "ishav", username: "bhatt", balance: 0, changename: ƒ, incrementbal: ƒ, …}

ishav.changename("rahul");

ishav

// output {name: "rahul", username: "bhatt", balance: 0, changename: ƒ, incrementbal: ƒ, …}

ishav.incrementbal();
ishav.incrementbal();
ishav.incrementbal();
ishav.incrementbal();
ishav.incrementbal();
ishav.incrementbal();

ishav

// output {name: "ishav", username: "bhatt", balance: 6, changename: ƒ, incrementbal: ƒ, …}

ishav.changeusername("singh");

ishav
// output {name: "ishav", username: "singh", balance: 6, changename: ƒ, incrementbal: ƒ, …}

