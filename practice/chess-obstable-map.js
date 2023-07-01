const X = 1;
const Y = 0;
const obstableMap = {};

const genarateMap = obs=>{
  for(const point of obs){
      if(!obstableMap[point[X]]) obstableMap[point[X]] = {};
      obstableMap[point[X]][point[Y]] = true;
  }
};

const isNotObstable = (n, x, y)=>{
    if(x<=0 || y<=0 || x>n || y>n) return false;
    return !(obstableMap[x] && obstableMap[x][y]);
};

const line = (n, m, qX, qY)=>{
  let total = 0;
  if(m===null){
    for(let i=qY+1;isNotObstable(n, qX, i);i++,total++);
    for(let i=qY-1;isNotObstable(n, qX, i);i--,total++);
  }else{
    for(let i=qX+1;isNotObstable(n, i, m*(i-qX)+qY);i++,total++);
    for(let i=qX-1;isNotObstable(n, i, m*(i-qX)+qY);i--,total++); 
  }
  return total;
}

function queensAttack(n, k, r_q, c_q, obstacles) {
    genarateMap(obstacles);
    let total = 0;
    [0,1,-1,null].forEach(m=>{
      total += line(n, m, c_q, r_q)
    });
    return total;
}

console.log(queensAttack(4, 0, 4, 4, []));
console.log(queensAttack(5, 3, 4, 3, [[5,5],[4,2],[2,3]]));