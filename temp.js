/*Create a temperature converter that can:
1. Convert to F from C
2. Convert from C to F
*/

const convertToFfromC = (cTemp) => {
    const fahrenheitTemp = cTemp * (9/5) + 32;
    return fahrenheitTemp;
};

const convertToCfromF = (fTemp) => {
    const celsiusTemp = (fTemp - 32) * (5/9); 
    return celsiusTemp;
};

module.exports = {convertToFfromC, convertToCfromF}