


function printTriangle(){
    let height = window.prompt("Please enter the size of the triangle."),
        count = 1,
        result = "*<br>",
        ast = "*";

    for( let i = 0; i < count; i++ ){
        ast+=" *";
        result += ast +"<br>";
        count++;
        if( count == height ) break;
        
    }
    document.getElementById("printTri").innerHTML=result;
}

function printDiamond(){

    let height = window.prompt("Please enter the size of the diamond."),
        count = 1,
        ast = "*",
        result = "*<br>";

    for( let i = 0; i < count; i++ ){
        ast+=" *";
        result += ast +"<br>";
        count++;
        if( count == height ) break;
    }
    for( let i = count; i > 0; i-- ){
        ast = ast.substring(0, ( count + count ) - 3);
        result += ast + "<br>";
        count--;
    }
    document.getElementById("printDi").innerHTML=result;
}


function printHollowRect(){

    let height = window.prompt("Please enter the size of the rectangle."),
        top = "*",
        sides = "*",
        result = "";

    for( let i = 0; i < height - 2; i++ ){
        top += "&nbsp;&nbsp;*";
        sides += "&nbsp;&nbsp;&nbsp;";
    }
    sides += "&nbsp;&nbsp;*<br>";
    top += "&nbsp;&nbsp;*<br>";
    result += top;

    for( let i = 0; i < height - 2; i++ ){
        result += sides;
    }
    result += top;
    document.getElementById("printRect").innerHTML=result;
}

function fibonacci(){
    let parent = document.getElementById( "fibList" );
    parent.lastChild.remove();

    let n = window.prompt("How many fibonacci numbers do you want?"),
        fib = [0, 1],
        child = document.createElement('li');
    parent.appendChild(child).innerHTML+= 0 + " <br>";

    for( let i = 1; i <= n - 1; i++ ){
        fib.push( fib[i] + fib[i-1]);
        parent.appendChild(child).innerHTML+=fib[i] + " ";
        if ( i % 4 == 0 ) parent.appendChild( child ).innerHTML+= "<br>";
    }
}

