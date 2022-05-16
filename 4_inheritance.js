function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    
  }
  //get summary prototype
  Book.prototype.getSummary = function(){
      return `${this.title} was written by ${this.author} in ${this.year}`;
    };

    //MAGAZINE CONSTRUCTOR
    function Magazine(title, author, year, month){
        Book.call(this, title, author, year);
        this.month = month;
    }

    //INHERIT PROTOTYPE
    Magazine.prototype = Object.create(Book.prototype);

    //USE MAGAZINE CONSTRUCTOR
    Magazine.prototype.constructor = Magazine;

    //instantiate magazine object
    const mag1 = new Magazine('Mag one', 'John Doe', '2018', 'jan');
    console.log(mag1);