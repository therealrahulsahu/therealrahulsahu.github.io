/**
 * Represents a Pascal's Triangle.
 */
export default class PascalTriangle {

    /**
     * Calculates the factorial of a given number.
     * @param n - The number to calculate the factorial for.
     * @returns The factorial of the given number.
     */
    factorial = (n: number): number => n < 2 ? 1 : n * this.factorial(n - 1);

    /**
     * Calculates the combination of two numbers.
     * 
     * @param n - The total number of items.
     * @param r - The number of items to choose.
     * @returns The combination of n and r.
     */
    combination = (n: number, r: number): number => this.factorial(n) / (this.factorial(r) * this.factorial(n - r));

    /**
     * Generates a Pascal's triangle of a given size.
     * @param n - The number of rows in the triangle.
     * @returns The Pascal's triangle as a 2D array.
     */
    triangle = (n: number): number[][] => {
        const triangle: number[][] = [];
        for (let i = 0; i <= n; i++) {
            triangle[i] = [];
            for (let j = 0; j <= i; j++) {
                triangle[i][j] = this.combination(i, j);
            }
        }
        return triangle;
    }

    /**
     * Generates a string representation of Pascal's triangle up to the given number of rows.
     * 
     * @param n - The number of rows in Pascal's triangle.
     * @returns A string representation of Pascal's triangle.
     */
    stringTriangle = (n: number): string => {
        const maxLen = this.combination(n, Math.floor(n / 2)).toString().length;
        const triSArr = this.triangle(n)
            .map(val => val
                .map(v => this.padBoth(v.toString(), maxLen))
                .join(' '.repeat(maxLen))
            );

        const topLen = triSArr.at(-1).length;
        return triSArr.map(val => this.padBoth(val, topLen)).join('\n');
    }

    /**
     * Pads a string with a specified delimiter on both sides to achieve a maximum length.
     * @param nString - The string to be padded.
     * @param maxLen - The maximum length of the padded string.
     * @param delim - The delimiter to be used for padding. Defaults to a single space.
     * @returns The padded string.
     */
    padBoth(nString:string, maxLen:number, delim:string = " "): string {
        const sLength = nString.length;
        const lPad = delim.repeat(Math.ceil((maxLen - sLength) / 2));
        const rPad = delim.repeat(Math.floor((maxLen - sLength) / 2));
        return `${lPad}${nString}${rPad}`;
    }

}

const pascalTriangle = new PascalTriangle();

console.log(
    pascalTriangle.stringTriangle(18)
    // `|${pascalTriangle.padBoth(1, 6)}|`
);

// const low = 10;
// const high = 120;
// console.log(pascalTriangle.factorial(high));
// console.time('cached Factotial');
// // for(let i = low; i < high; i++) {
// //     pascalTriangle.factorial(i);
// // }
// console.log(pascalTriangle.factorial(high));
// console.timeEnd('cached Factotial');

// console.log(pascalTriangle.nativeFactorial(high));
// console.time('native Factotial');
// // for(let i = low; i < high; i++) {
// //     pascalTriangle.nativeFactorial(i);
// // }
// console.log(pascalTriangle.nativeFactorial(high));
// console.timeEnd('native Factotial');

// // console.log(pascalTriangle.factorial(3));