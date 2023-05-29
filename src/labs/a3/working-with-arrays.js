import ArrayIndexAndLength from "./array-index-and-length";
import AddingAndRemovingDataToFromArrays from "./adding-and-removing-data-to-from-arrays"
import ForLoops from './for-loops'
import MapFunction from './map-function'
import FindFunction from "./find-function";
import FilterFunction from "./filter-function";
import JsonStringify from "./json-stringify";
import FindIndex from "./find-index";

function WorkingWithArrays() {
    let numberArray1 = [2, 3, 4, 5];
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
            <h3>Working With Arrays</h3>
            numberArray1 = {numberArray1}<br/>
            stringArray1 = {stringArray1}<br/>
            variableArray1 = {variableArray1}<br/>
            <ArrayIndexAndLength />
            <AddingAndRemovingDataToFromArrays />
            <ForLoops />
            <MapFunction />
            <JsonStringify />
            <FindFunction />
            <FindIndex />
            <FilterFunction />
        </div>
       
    );
 };
 export default WorkingWithArrays;