
export const jenksBuckets = (data: Array<number>, numberClasses: number) : Array<number> => {

    // if (!validateNumberClasses(validateNumberClasses)) return

    // if (!validateDataArray) return 

    data.sort((a,v) => a - b)

    var mat1 = []
    for ( var x = 0, xl = dataList.length + 1; x < xl; x++) {
        var temp = []
        for ( var j = 0, jl = nbClass + 1; j < jl; j++) {
            temp.push(0)
        }
        mat1.push(temp)
    }

    var mat2 = []
    for ( var i = 0, il = dataList.length + 1; i < il; i++) {
        var temp2 = []
        for ( var c = 0, cl = nbClass + 1; c < cl; c++) {
            temp2.push(0)
        }
        mat2.push(temp2)
    }

}

// /**
// 	 * Credits : Doug Curl (javascript) and Daniel J Lewis (python implementation)
// 	 * http://www.arcgis.com/home/item.html?id=0b633ff2f40d412995b8be377211c47b
// 	 * http://danieljlewis.org/2010/06/07/jenks-natural-breaks-algorithm-in-python/
// 	 */
//  this.getClassJenks2 = function(nbClass) {
	
    
    
//     var dataList = this.sorted();

//     // now iterate through the datalist:
//     // determine mat1 and mat2
//     // really not sure how these 2 different arrays are set - the code for
//     // each seems the same!
//     // but the effect are 2 different arrays: mat1 and mat2
//     var mat1 = []
//     for ( var x = 0, xl = dataList.length + 1; x < xl; x++) {
//         var temp = []
//         for ( var j = 0, jl = nbClass + 1; j < jl; j++) {
//             temp.push(0)
//         }
//         mat1.push(temp)
//     }

//     var mat2 = []
//     for ( var i = 0, il = dataList.length + 1; i < il; i++) {
//         var temp2 = []
//         for ( var c = 0, cl = nbClass + 1; c < cl; c++) {
//             temp2.push(0)
//         }
//         mat2.push(temp2)
//     }

//     // absolutely no idea what this does - best I can tell, it sets the 1st
//     // group in the
//     // mat1 and mat2 arrays to 1 and 0 respectively
//     for ( var y = 1, yl = nbClass + 1; y < yl; y++) {
//         mat1[0][y] = 1
//         mat2[0][y] = 0
//         for ( var t = 1, tl = dataList.length + 1; t < tl; t++) {
//             mat2[t][y] = Infinity
//         }
//         var v = 0.0
//     }

//     // and this part - I'm a little clueless on - but it works
//     // pretty sure it iterates across the entire dataset and compares each
//     // value to
//     // one another to and adjust the indices until you meet the rules:
//     // minimum deviation
//     // within a class and maximum separation between classes
//     for ( var l = 2, ll = dataList.length + 1; l < ll; l++) {
//         var s1 = 0.0
//         var s2 = 0.0
//         var w = 0.0
//         for ( var m = 1, ml = l + 1; m < ml; m++) {
//             var i3 = l - m + 1
//             var val = parseFloat(dataList[i3 - 1])
//             s2 += val * val
//             s1 += val
//             w += 1
//             v = s2 - (s1 * s1) / w
//             var i4 = i3 - 1
//             if (i4 != 0) {
//                 for ( var p = 2, pl = nbClass + 1; p < pl; p++) {
//                     if (mat2[l][p] >= (v + mat2[i4][p - 1])) {
//                         mat1[l][p] = i3
//                         mat2[l][p] = v + mat2[i4][p - 1]
//                     }
//                 }
//             }
//         }
//         mat1[l][1] = 1
//         mat2[l][1] = v
//     }

//     var k = dataList.length
//     var kclass = []

//     // fill the kclass (classification) array with zeros:
//     for (var i = 0; i <= nbClass; i++) {
//         kclass.push(0);
//     }

//     // this is the last number in the array:
//     kclass[nbClass] = parseFloat(dataList[dataList.length - 1])
//     // this is the first number - can set to zero, but want to set to lowest
//     // to use for legend:
//     kclass[0] = parseFloat(dataList[0])
//     var countNum = nbClass
//     while (countNum >= 2) {
//         var id = parseInt((mat1[k][countNum]) - 2)
//         kclass[countNum - 1] = dataList[id]
//         k = parseInt((mat1[k][countNum] - 1))
//         // spits out the rank and value of the break values:
//         // console.log("id="+id,"rank = " + String(mat1[k][countNum]),"val =
//         // " + String(dataList[id]))
//         // count down:
//         countNum -= 1
//     }
//     // check to see if the 0 and 1 in the array are the same - if so, set 0
//     // to 0:
//     if (kclass[0] == kclass[1]) {
//         kclass[0] = 0
//     }

//     this.setBounds(kclass);
//     this.setRanges();

    
//     this.method = _t('Jenks2') + ' (' + nbClass + ' ' + _t('classes') + ')';
    
//     return this.bounds; //array of breaks
// }