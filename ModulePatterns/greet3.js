function greet() {
    this.message = "Hello world3";
    this.greet = function () {
        console.log(this.message);
    }
}

module.exports = new greet();