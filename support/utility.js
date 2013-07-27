var array = require('array-extended');

var Utils = (function () {
    function Utils() {
    }
    Utils.toTitleCase = function (str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };

    Utils.addTitleToList = function (list) {
        var flatList = list.map(function (item) {
            return item.name;
        }), flatListLetters = flatList.map(function (item) {
            return item.substring(0, 1).toUpperCase();
        });

        return array.unique(flatListLetters).concat(flatList).sort();
    };
    return Utils;
})();
exports.Utils = Utils;

//@ sourceMappingURL=utility.js.map
