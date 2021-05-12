function greet4() {
    this.message = 'hello world4';
    this.greet = function () {
        console.log(this.message)
    }
}

module.exports = greet4;