function Book(title, author, year){
  this.title = title;
  this.author = author;
  this.year = year;
  
}
//get summary prototype
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };

  //get age
  Book.prototype.getAge = function(){
      const years = new Date().getFullYear()- this.year;
      return `${this.title} is ${years}  years old`;
  };
  
  //REVISE / CHANGE YEAR
  Book.prototype.revise = function(newYear){
      this.year = newYear;
      this.revised = true;
  };

//INSTATIATE OBJECT
const book1 = new Book('Book one' ,'John Doe' ,'2013');
const book2 = new Book('Book two', 'Jane Doe', '2016' );
console.log(book2);
book2.revise('2018');
console.log(book2);
