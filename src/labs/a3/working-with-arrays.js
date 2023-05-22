function WorkingWithArrays() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
    let functionScoped=25;
    let blockScoped=-3;
    let constant1="1";
    let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1
    ];
    console.log("Working With Arrays")
    console.log("numberArray1 "+variableArray1)

    return(
        <div>
            <h1>Working With Arrays</h1>
            numberArray1 = {numberArray1}<br/>
            stringArray1 = {stringArray1}<br/>
            variableArray1 = {variableArray1}<br/>

        </div>
       
    );
 };
 export default WorkingWithArrays;