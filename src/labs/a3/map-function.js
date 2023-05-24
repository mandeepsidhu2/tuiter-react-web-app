function MapFunction() {
    const square = (a) => a*a;
    const numberArray1 = [1,2,3,4,5,6]
    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(a => a * a * a);
    return(
        <div>
            <h3>Map</h3>
            squares = {squares}<br/>
            cubes = {cubes}
            <h3>JSON Stringify</h3>
            squares = { JSON.stringify(squares) } <br />
        </div>
        
    );
 };
 export default MapFunction;