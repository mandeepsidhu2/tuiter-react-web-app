function FilterFunction() {
    const numberArray1 = [1,2,4,5,6]
    const stringArray1 = ['string1', 'string2'];

    const fourIndex = numberArray1.findIndex(a => a === 4);
    const string3Index = stringArray1.findIndex(a => a === 'string2');

    const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
    const evenNumbers = numberArray1.filter(a => a % 2 === 0);
    const oddNumbers = numberArray1.filter(a => a % 2 !== 0);

    return(
        <div>
            <h3>FindIndex function</h3>
            fourIndex = {fourIndex}<br/>
            string3Index = {string3Index}<br/>
            <h3>Filter function</h3>
            numbersGreaterThan2 = {numbersGreaterThan2}<br/>
            evenNumbers = {evenNumbers}<br/>
            oddNumbers = {oddNumbers}<br/>
        </div>
        
    );
 };
 export default FilterFunction;