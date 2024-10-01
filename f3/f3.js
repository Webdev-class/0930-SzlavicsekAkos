const students = require('../students.json');
/* Írj függvényt ami megvizsgálja, hogy van-e eltérés a freeDormitory
 boolean és dormitoryPrice number-ek között 
 (Ha jól van feltöltve a lista a false értékek száma és a null-ok száma megegyezik.
  Ha nem akkor írja ki az eltérést) */
const f3 = () => {
    let result = 0
    for (let i = 0; i < input.length; i++) {
     if (students[i].freeDormitory === false && students[i].dormitoryPrice != 0) {
      result = 0
     }
     else{
      result++
     }
    }
    return result;
}
module.exports = f3;