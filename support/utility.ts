///<reference path='node.d.ts' />

var array = require('array-extended');

export interface Product {
    name: string;
}

export interface ProductViewModel {
    product: string;
    selected: bool;
}

export class Utils {

    constructor() {
    }

    public static toTitleCase(str: string): string {
        return str.replace(/\w\S*/g, function (txt: string): string {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    public static addTitleToList(list: Product[]): ProductViewModel[] {
        var flatList = list.map(function (item: Product): string {
                return item.name;
            }),
            flatListLetters = flatList.map(function (item: string): string {
                return item.substring(0, 1).toUpperCase();
            });

        return array.unique(flatListLetters).concat(flatList).sort();
    }
}
