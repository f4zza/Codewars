// Is the string uppercase?
// Task: Create a method to see whether the string is ALL CAPS. 


String.prototype.isUpperCase = function() {
    return this.toString() === this.toUpperCase()
   }