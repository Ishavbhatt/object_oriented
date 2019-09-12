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
 
// using factory way
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


// using dunder proto
function userDetail(name, username, balance = 0) {
    var obj = {};
    obj.name = name;
    obj.username = username;
    obj.balance = balance;
    obj.__proto__.changename = function(changename) {
      return obj.name = changename;
    }
    obj.__proto__.changeusername = function(changeusername) {
      return obj.username =changeusername;
    }
    obj.__proto__.incrementbal = function(balance) {
      return obj.balance ++;
    }
    obj.__proto__.decrementbal =function(balance) {
      return obj.balance --;
    }
    return obj;
}

var ishav = userDetail("ishav", "bhatt");

ishav
// output name: "ishav", username: "bhatt", balance: 0}

ishav.changename("rahul");

ishav.changeusername("singh");

ishav
// output {name: "rahul", username: "singh", balance: 0}

ishav.incrementbal();
ishav.incrementbal();
ishav.incrementbal();
ishav.incrementbal();
ishav.incrementbal();

ishav
// output {name: "rahul", username: "singh", balance: 5}


// Using Object.create method
function userDetail(name, username, balance = 0) {
  var obj = Object.create(
                          {
                            changename: function(changename) {
                              return obj.name = changename;
                            },

                            changeusername: function(changeusername) {
                              return obj.username =changeusername;
                            },

                            incrementbal: function(balance) {
                              return obj.balance ++;
                            },

                            decrementbal: function(balance) {
                              return obj.balance --;  
                            }
                          }
                        );
  obj.name = name;
  obj.username = username;
  obj.balance = balance;

  return obj;
}

var ishav = userDetail("ishav", "bhatt");

ishav 

// output {name: "ishav", username: "bhatt", balance: 0}

ishav.changename("rahul");

// prasant
function userDetail(name, username, balance = 0) {
  var obj = Object.create(
                          {
                            changename: function(changename) {
                              return obj.name = changename;
                            },

                            changeusername: function(changeusername) {
                              return obj.username =changeusername;
                            },

                            incrementbal: function(balance) {
                              return obj.balance ++;
                            },

                            decrementbal: function(balance) {
                              return obj.balance --;  
                            }
                          }
                        );
  obj.name = name;
  obj.username = username;
  obj.balance = balance;

  return obj;
}

var prasant = userDetail("prasant", "chaduvula");

prasant

prasant.changename("chaduvula");

prasant.changeusername("prasant");

prasant

// rakesh

function userDetail(name, username, balance = 0) {
  var obj = Object.create(
                        {
                          changename: function(changename) {
                            return obj.name = changename;
                          },

                          changeusername: function(changeusername) {
                            return obj.username = changeusername;
                          },

                          incrementbal: function(balance) {
                            return obj.balance ++;
                          },

                          decrementbal: function(balance) {
                            return obj.balance --;
                          }

                        }
                        )
  obj.name = name;
  obj.username = username;
  obj.balance = balance;

  return obj;
}

// class 
class User {
  constructor(name, score) {
  this.name = name;
  this.score = score;
    }
    increment() {
    return this.score ++;
    }
    decrement() {
    return this.score --;
    }
}
var ishav = new User("ishav", 0);


// inheritence
var userMethod = {
  incscore: function() {
    return this.score ++;
    },
  decscore: function() {
    return this.score --;
    }
}

function createUser(name, score) {
  var user  = Object.create(userMethod);
  user.name = name;
  user.score = score;
  return user;
}

var paidMethod = {
  incbal: function() {
    return this.balance ++;
  },
  decbal: function() {
    return this.balance --;
    }
}


function paidUser(name, score, balance) {
  var user = createUser(name, score);
  Object.setPrototypeOf(user, userMethod);
  Object.setPrototypeOf(paidMethod, userMethod);
  user.balance = balance;
  return user;
}

// class
class User {
  constructor(name, score) {
    this.name = name;
    this.score = score;
    }
  increment = function() {
    return this.score ++;
    }
  decrement = function() {
    return this.score --;
    }
}

class paidUser extends User {
  constructor(name, score, balance) {
    super(name, score);
    this.balance = balance;
    }
  incbal = function() {
    return this.balance ++;
    }
  decbal = function() {
    return this.balance --;
    }
}

// psudo 
function createUser(name, score) {
  this.name = name;
  this.score = score;
}
createUser.prototype.incscore = function() { return this.score ++;}
createUser.prototype.decscore = function() { return this.score --;}


function paidUser(name, score, balance) {
  createUser.call(this, name, score);
  this.balance = balance;
} 
paidUser.prototype.incbal = function() { return this.balance ++;}
paidUser.prototype.decbal = function() { return this.balance --;}
Object.setPrototypeOf(paidUser.prototype, createUser.prototype);

var ishav = new paidUser("ishav", 0, 9);

ishav

paidUser {name: "ishav", score: 0, balance: 9}

ishav.incbal()
9
