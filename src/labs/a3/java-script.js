import BooleanVariables from "./boolean-variables";
import IfElseConditionals from "./if-else";
import VariableTypes from "./variable-types";
import VariablesAndConstants
  from "./variables-and-constants";
  import TernaryOperator from "./ternary-operator";
  import WorkingWithFunctions from "./working-with-functions";
  import FunctionParenthesisAndParameters from "./function-parenthesis-and-parameters";
  import WorkingWithArrays from "./working-with-arrays";
  import ArrayIndexAndLength from "./array-index-and-length";
  import AddingAndRemovingDataToFromArrays from "./adding-and-removing-data-to-from-arrays"
  import ForLoops from './for-loops'
  import MapFunction from './map-function'
  import FindFunction from "./find-function";
  import FilterFunction from "./filter-function";
  import TemplateLiterals from "./template-literals";
import House from "./house";
import Spread from "./spread";
import Destructing from "./destructing";
import FunctionDestructing from "./function-destructing";
function JavaScript() {
    console.log('Hello World!');
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
          <VariableTypes/>
          <BooleanVariables/>
          <IfElseConditionals/>
          <TernaryOperator/>
          <WorkingWithFunctions/>
          <FunctionParenthesisAndParameters/>
          <WorkingWithArrays/>
          <ArrayIndexAndLength/>
          <AddingAndRemovingDataToFromArrays/>
          <ForLoops/>
          <MapFunction/>
          <FindFunction/>
          <FilterFunction/>
          <TemplateLiterals/>
          <House/>
          <Spread/>
          <Destructing/>
          <FunctionDestructing/>
       </div>
    );
 }
 export default JavaScript