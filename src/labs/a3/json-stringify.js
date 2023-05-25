function JsonStringify() {
    const square = (a) => a*a;
    const numberArray1 = [1,2,3,4,5,6]
    const squares = numberArray1.map(square);
    return(
        <div>
            <h3>JSON Stringify</h3>
            squares = { JSON.stringify(squares) } <br />
        </div>
        
    );
 };
 export default JsonStringify;