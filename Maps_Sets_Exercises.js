//Quick Question #1
new Set([1,1,2,2,3,4]) //{1, 2, 3, 4}

//Quick Question #2
[...new Set("referee")].join("")// "ref" It will eliminate duplicates

//Quick Questions #3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// {[1,2,3] => false} the element will be updated

const hasDuplicate = (arr) => {
    return [...new Set(arr)].length === (arr.length) ? true : false
}

//vowelCount

const vowelCount = (str) => {
    str = [...str.toLowerCase()]
    output = str.reduce((accum, nextEl) => {
        if ("aeiou".indexOf(nextEl) !== -1){
            if (accum[nextEl] === undefined){
                accum[nextEl] = 1;
            }
            else if (accum[nextEl] !== undefined){
                accum[nextEl] += 1;
            }
        }
        return accum;
    },{})
    return new Map(Object.entries(output))
}