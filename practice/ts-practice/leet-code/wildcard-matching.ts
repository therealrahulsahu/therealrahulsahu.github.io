// https://leetcode.com/problems/wildcard-matching/description/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch1 = (s, p) => {
    const hash = {};

    const isMatchHelper = (si, pi) => {
        const sSub = s.slice(si);
        const pSub = p.slice(pi);
        //debugger;
        
        const base = 1e4 * si + pi;
        if(hash[base]){
            // debugger;
            return hash[base];
        }else{
            //debugger;
            if(si>=s.length && pi>=p.length) return true;
            //debugger;
            let iM;
            if(p[pi]==='*' && p[pi+1]==='*'){
                //debugger;
                iM = isMatchHelper(si, pi+1);
                //debugger;
            }else if(p[pi]==='*') {
                //debugger;
                iM =  isMatchHelper(si, pi+1) || (si<s.length && isMatchHelper(si+1, pi));
                //debugger;
            }else{
                //debugger;
                const fMatch = si<s.length && pi<p.length && (p[pi]==='?' || s[si]===p[pi]);

                //debugger;
                iM = fMatch && isMatchHelper(si+1, pi+1);
                //debugger;
            }
            //debugger;
            hash[base] = iM;
            return iM;
        }
    }

    return isMatchHelper(0, 0);
};


const isMatch2 = (s, p) =>{

    const hash = {};

    const isMatchHelper = (pi, si) => {
        const base = pi*1e4+si;
        if(pi<0 && si<0) return true; // both exhausted
        if(pi<0 && si>=0) return false; // pattern exhausted but string not
        if(si<0 && pi>=0){ // string exhausted but pattern not
            for(let ii=0; ii<=pi; ii++){
                if(p[ii]!== '*'){
                    return false
                }
            }
            return true;
        }

        if(hash[base]!==undefined) return hash[base]; // retriving from cache

        if(p[pi]===s[si] || p[pi]==='?') {
            return hash[base] = isMatchHelper(pi-1, si-1);
        }

        if(p[pi]==='*'){
            const notConsider = isMatchHelper(pi-1, si);
            const consider = isMatchHelper(pi, si-1);

            return hash[base] = (consider || notConsider);
        }
        return hash[base]=false;

    };
    return isMatchHelper(p.length-1, s.length-1);
};

const isMatch3 = (s, p) =>{

    const hash = {};
    const pLen = p.length;
    const sLen = s.length;

    const isMatchHelper = (pi, si) => {
        const base = pi*1e4+si;
        if(pi>=pLen && si>=sLen) return true; // both exhausted
        if(pi>=pLen && si<sLen) return false; // pattern exhausted but string not
        if(si>=sLen && pi<pLen){ // string exhausted but pattern not
            for(let ii=pi; ii<pLen; ii++){
                if(p[ii]!== '*'){
                    return false
                }
            }
            return true;
        }

        if(hash[base]!==undefined) return hash[base]; // retriving from cache

        if(p[pi]===s[si] || p[pi]==='?') {
            return hash[base] = isMatchHelper(pi+1, si+1);
        }

        if(p[pi]==='*'){
            const notConsider = isMatchHelper(pi+1, si);
            const consider = isMatchHelper(pi, si+1);

            return hash[base] = (consider || notConsider);
        }
        return hash[base]=false;

    };
    return isMatchHelper(0, 0);
};

const isMatch = (s, p) =>{

    let [si,pi,Tpi,Tsi] = [0,0,-1,0];

    const sSub = s.slice(si);
    const pSub = p.slice(pi);

    const TsSub = s.slice(Tsi);
    const TpSub = p.slice(Tpi);
    debugger;

    // si string
    // pi pattern

    while(si<s.length){
        if(pi<p.length && (s[si]===p[pi] || p[pi]==='?')){
            pi++;
            si++;
        }else if(pi<p.length && p[pi]==='*'){
            Tpi=pi;
            Tsi=si;
            pi++;
        }else if(Tpi!=-1){
            pi=Tpi+1;
            Tsi++;
            si=Tsi;
        }else{
            return false;
        }
    }
    while(pi<p.length && p[pi]==='*'){
        pi++;
    }
    return pi===p.length;
};