
function makeLine(size) {
    let hash = '';
    for (let i=0; i < size; i++) {
        if (i < size) {
            hash += "#";
        }
    }
    return hash;
}


// console.log(makeLine(6));

function makeSquare(size) {
    let squareNew = "";
    
for (let j=0; j < size; j++) {
        
    squareNew += makeLine(size);
    
    if (j < size - 1) {
        squareNew += "\n";
        }
    }   
    return squareNew;
    }

// console.log(makeSquare(4));

function makeRectangle(width, height) {
    let rectHash = "";
    for (let i=0; i < height; i++) {
        rectHash += makeLine(width);
       
        if (i < height - 1) {
            rectHash += "\n";
        }
    }

    return rectHash;
}

// console.log(makeRectangle(6, 3));

function makeDownwardStairs(height) {
    let stairs = "";
    for (let i=0; i < height; i++) {
        stairs += makeLine(i + 1);   
        
        if (i < height - 1) {
            stairs += "\n"
        }
    
    }

    return stairs;
}



// console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars) {
    let phraseLine = "";

   
    for (let i = 0; i < numSpaces; i++) {
        phraseLine += " ";
    }

   for (let i = 0; i < numChars; i++) {
        phraseLine += "#";
    }

   for (let i = 0; i < numSpaces; i++) {
        phraseLine += " ";
    }

    return phraseLine;
}

// console.log(makeSpaceLine(2,1));

function makeIsoscelesTriangle(height) {
    let triangleForm = "";

    for (let i = 0; i < height; i++) {
        let numSpaces = height - i - 1; 
        let numHashes = 2 * i + 1; 
        triangleForm += makeSpaceLine(numSpaces, numHashes);
      
        if (i < height - 1) {
            triangleForm += "\n";
        }
    }

    return triangleForm;
}

// console.log(makeIsoscelesTriangle(4));

function reverse(text) {
    let lines = text.split("\n"); 
    lines.reverse();              
    return lines.join("\n");
}  


function makeDiamond(height) {
    let diamondShape = "";

    let topPart = makeIsoscelesTriangle(height);
    let topLines = topPart.split("\n");
    let bottomPart = reverse(topLines.slice(0, -1).join("\n"));

    diamondShape = topPart + "\n" + bottomPart

    return diamondShape;
}

console.log(makeDiamond(7));