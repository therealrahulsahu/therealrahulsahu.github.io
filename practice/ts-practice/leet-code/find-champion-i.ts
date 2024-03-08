// https://leetcode.com/problems/find-champion-i

/**
 * @param {number[][]} grid
* @return {number}
*/
var findChampion1 = function(grid) {
   
   let high1 = 0;
   let high1I = -1;

   for(let i=0; i<grid.length; i++){
       const c = grid[i].reduce((t, v)=>v?t+1:t, 0);
       if(c>high1){
           high1 = c;
           high1I = i;
       }
   }
   
   return high1I
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {

    for(let i=0; i<grid.length; i++){
        const c = grid[i].reduce((t, v)=>t+v, 0);
        if(c===grid.length-1) return i;
    }
    
    return 0;
};