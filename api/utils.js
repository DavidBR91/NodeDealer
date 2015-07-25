/* Found at
  http://stackoverflow.com/questions/4492385/how-to-convert-simple-array-into-two-dimensional-arraymatrix-in-javascript-or */
function listToMatrix(list, elementsPerSubArray) {
    var matrix = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }

    return matrix;
}

exports.listToMatrix = listToMatrix;
