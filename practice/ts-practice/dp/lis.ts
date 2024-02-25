function longestIncreasingSubsequenceLength(arr: number[]): number {
    const n = arr.length;
    const dp = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
            }
        }
    }

    return Math.max(...dp);
}

// Example usage:
const arr = [10, 22, 9, 33, 21, 50, 41, 60];
const result = longestIncreasingSubsequenceLength(arr);
console.log(result); // Output: 5



function longestIncreasingSubsequenceLengthRecursive(arr: number[]): number {
    const n = arr.length;
    let maxLength = 1;

    function lisRecursive(index: number, prev: number, length: number): void {
        if (index === n) {
            maxLength = Math.max(maxLength, length);
            return;
        }

        if (arr[index] > prev) {
            lisRecursive(index + 1, arr[index], length + 1);
        }

        lisRecursive(index + 1, prev, length);
    }

    lisRecursive(0, Number.MIN_SAFE_INTEGER, 0);
    return maxLength;
}

// Example usage:
const arr2 = [10, 22, 9, 33, 21, 50, 41, 60];
const result2 = longestIncreasingSubsequenceLengthRecursive(arr2);
console.log(result2); // Output: 5