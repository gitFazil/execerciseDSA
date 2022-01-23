function Queue() {
  collection = [];
  stack = [];
  this.print = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    collection.push(element);
  };
  this.dequeue = function () {
    return collection.shift();
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
  this.reverseK = function (k) {
    if (collection.length <= k || this.isEmpty == true) {
      return "empty or out of bound";
    } else {
      for (let i = 1; i <= k; i++) {
        stack.push(collection.shift());
      }
      for (let i = 1; i <= k; i++) {
        this.enqueue(stack.pop());
      }
      for (let i = 1; i <= this.size() - k; i++) {
        this.enqueue(collection.shift());
      }
    }
  };
}
const q = new Queue();
q.enqueue("2");
q.enqueue("3");
q.enqueue("4");
q.enqueue("5");
q.enqueue("6");
console.log(q.size());
console.log("original");
q.print();
q.reverseK(3);
console.log("reversed");
q.print();
