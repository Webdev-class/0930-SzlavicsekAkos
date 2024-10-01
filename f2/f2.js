const students = require('../students.json');
/* Írj függvényt ami feltölt egy objektumot (lehetőleg üres {}-ről induljon) 
a klubbok nevével és tagjainak számával. (pl. {"club1": 4, "club2": 3....}) */
function f2() {
    const list = {}
    input.forEach(element => {
        const data = element.club
        if (!list[data]) {
            list[data] = 1;
        }
        else{
            list[data]+= 1
        }
    });    
    return list;
}
module.exports = f2;