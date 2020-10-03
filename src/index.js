
exports.min = function min (array) {
    if((array|| [] ).length === 0){
        return 0;
    } else {
    return array.reduce(function (p, v) {
        return ( p < v ? p : v );
      });
    }
}
exports.max = function max (array) {
    if((array|| [] ).length === 0){
        return 0;
    } else {
        return array.reduce(function (p, v) {
          return ( p > v ? p : v );
        });
      }
    }

exports.avg = function avg (array) {
    if((array|| [] ).length === 0){
        return 0;
    } else {
    return array.reduce((a, b) => (a + b)) / array.length;
      };
    }
