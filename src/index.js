/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var count = 0;
    for( var i = 0; i < preferences.length; i++){
        
        var list =[];
            list[0] = {value: preferences[i]-1};
            list[1] = {value: preferences[list[0].value]-1};
            list[2] = {value: preferences[list[1].value]-1};
            list[0].next = list[1];
            list[1].next = list[2];
            list[2].next = list[0];

        if(list[2].value == i && list[0].value != i ){
            count ++;
            list[2].next = null;
        }
            
    }
    
    return count/3;
};
