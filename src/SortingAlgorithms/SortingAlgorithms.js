


// mergeSort Algorithm

export function getMergeSortAnimations(array){

    const animations = [];                  // to store the animation of sorted array

    // if( array.length <= 1) return array;

    const auxillaryArray = array.slice();       // overwrite values of mainarray as the partion changes

    mergeSortHelper(array, 0, array.length - 1, auxillaryArray, animations);

    // return an animation of sorted arrays as answer
    return {sortedArray : array, animations};


}

function mergeSortHelper(
    mainArray,
    startIndx,
    endIndx,
    auxillaryArray,     
    animations,

){

    if( startIndx === endIndx)
    {
        return ;
    }

    const middleIndx = Math.floor((startIndx + endIndx) / 2);

    mergeSortHelper(auxillaryArray, startIndx, middleIndx, mainArray, animations);
    mergeSortHelper(auxillaryArray, middleIndx + 1, endIndx, mainArray, animations);

    performMerge(mainArray, startIndx, middleIndx, endIndx, auxillaryArray, animations);


}

function performMerge(
    mainArray,
    startIndx,
    middleIndx,
    endIndx,
    auxillaryArray,
    animations,

)
{
    let k = startIndx;
    let i = startIndx;
    let j = middleIndx + 1;

    // iterate through both halfs of mainarray
    while( i <= middleIndx && j <= endIndx)
    {
        // comparing the array element values, pushing them once to change their color.

        animations.push([i, j]);    
        
        // Comparing the array values, push them a second time to revert their color to original after swapping elements.
        animations.push([i, j]);

        if( auxillaryArray[i] <= auxillaryArray[j])
        {       
            // swap/ overwritting  first half element if it is smaller
            // Overwriting the value at index k in the original array with the value at index i in the auxiliary array.
            animations.push([k, auxillaryArray[i]]);

            mainArray[k++] = auxillaryArray[i++];
        }
        else{ 
            // else swap/overwrite second half element
            // We overwrite the value at index k in the original array with the value at index j in the auxiliary array.
            animations.push([k, auxillaryArray[j]]);
            mainArray[k++] = auxillaryArray[j++];
        }
  
    }

    // insert remaining elements of the first half array
    while( i <= middleIndx)
    {
        // comparing the array elements values; pushing them once to change their color.
        animations.push([i,i]);

        // comparing the values ,  pushing them a second time to revert their color.
        animations.push([i,i]);

        // Overwriting the value at index k in the original array with the value at index i in the auxiliary array.

        animations.push([k,auxillaryArray[i]]);

        mainArray[k++] = auxillaryArray[i++];
    }

      // iterating for the remaining elements of the second half array
    while( j <= endIndx){

        // Comparing the array elements values , pushing them once to change their color.
        animations.push([j, j]);

       //  Comparing the array elements values, pushing them second time to revert to original color
        animations.push([j, j]);

        // Overwriting the value at index k in the original array with the value at index j in the auxiliary array.
        animations.push([k, auxillaryArray[j]]);

        mainArray[k++] = auxillaryArray[j++];
    }
}

