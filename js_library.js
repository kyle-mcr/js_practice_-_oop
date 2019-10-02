var _ = {
    map: function (arr, callback) {
        if (typeof callback == "function") {
            var arrnew = [];
            for (var i = 0; i < arr.length; i++) {
                arrnew.push(callback(arr[i]));

            }
            return arrnew;
        }
    },
    find: function (arr, callback) {
        if (typeof callback == "function") {
            for (i = 0; i < arr.length; i++) {
                if (callback(arr[i]) == true) {
                    return arr[i];
                }
            }
        }
    },

};
var answer = _.map([1, 2, 3], function (num) { return num * 3; });
console.log(answer);
var even = _.find([1, 2, 3, 4, 5, 6], function (num) { return num % 2 == 0; });
console.log(even);