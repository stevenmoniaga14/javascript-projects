// Define your Book class here:

class Book {
    constructor(title, author, copyRightDate, iSBN, numberOfPages, numCheckOut = 0, isDiscarded = false) {
        this.title = title;
        this.author = author; 
        this.copyRightDate = copyRightDate;
        this.iSBN = iSBN;
        this.numberOfPages = numberOfPages;
        this.numCheckOut = numCheckOut;
        this.isDiscarded = isDiscarded;
    }
    checkout () {
        this.numCheckOut += 1;
    }
}

// Define your Manual and Novel classes here:

class Novel extends Book {
    constructor (title, author, copyRightDate, iSBN, numberOfPages, numCheckOut = 0, isDiscarded = false) {
        super (title, author, copyRightDate, iSBN, numberOfPages, numCheckOut, isDiscarded);
    }

   dispose() {
    if(this.numCheckOut > 100) {
        this.isDiscarded = true;
    }
   }

}

let novel1 = new Novel("Pride and Prejudice", "Jane Austen", 1813, '111111', 432, 32, false);

// check Test
// novel1.numCheckOut = 101;
// novel1.dispose();
// console.log(novel1);



class Manual extends Book {
    constructor (title, author, copyRightDate, iSBN, numberOfPages, numCheckOut = 0, isDiscarded = false) {
        super (title, author, copyRightDate, iSBN, numberOfPages, numCheckOut, isDiscarded);
    }

    dispose (currentYear) {
        if (currentYear - this.copyRightDate > 5) {
            this.isDiscarded = true;
        }
    }

}

let manual1 = new Manual ("Top Secret Shuttle Building Manual", "Redacted", 2013, '0000000000000', 1147, 1, false);


// Declare the objects for exercises 2 and 3 here:


// Code exercises 4 & 5 here:
                                            // Code 4
// One of the above books needs to be discarded. 
// Call the appropriate method for that book to update the property. That way the crew can throw it into empty space to become debris.
/* Before */
console.log(manual1); 
manual1.dispose(2024);
/* After */
console.log(manual1); 
                                            // Code 5
// The other book has been checked out 5 times since you first created the object. 
// Call the appropriate method to update the number of times the book has been checked out.

// novel1.checkout();
// novel1.checkout();
// console.log(novel1);

for (let i=0; i<5; i++) {
    novel1.checkout();
}

console.log(novel1);

