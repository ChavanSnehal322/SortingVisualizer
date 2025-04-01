

import React from "react";

import {getMergeSortAnimations}  from '../SortingAlgorithms/SortingAlgorithms.js'

import './SortingVisualizer.css';

// Value to modify speed of sorting
const Animation_speed_ms = 5;

// number of bars/ values per array
const Number_of_bars = 150;

export default class SortingVisualizer extends React.Component{

    
    constructor(props){
        super(props);

        this.state = {
            array: [],              // initializing main array for sorting the numbers 
        };
    }

    // called when loads for firsts time
    componentDidMount(){
        // loading the array to get data
        this.resetArray();
    }

    // function to generate a new data for array when the button is clicked
    resetArray(){
        
        const array = [];

        // iterate 310 times to fetach random numbers fromrange of 50 to 600
        for( let i = 0; i < Number_of_bars; i++)
        {
            array.push(randomIntFromInterval(50, 650));         // populates with random value
        }

        this.setState({array});
    }

    // mergesort function
    mergeSort() {

        /*
        const javaScriptSortedArray = this.state.array       // creating a new array as a copy of main array
        .slice()
        .sort((a,b) => a - b);                              // pass a parameter on how to perform sorting using inbuilt function
        
        */

        const {sortedArray, animations }= getMergeSortAnimations(this.state.array);
        
        
        for( let i = 0; i< animations.length; i++)
        {
            const arrayBars = document.getElementsByClassName('array-bar');
            
            const isColorChanged = i % 3 !== 2;
            

            if( isColorChanged){

                const [barOneIndx, barTwoIndx] = animations[i];

                const barOneStyle = arrayBars[barOneIndx].style;
                const barTwoStyle = arrayBars[barTwoIndx].style;

                // if first triplet of animation change color to mint to perform 
                const color = i % 3 === 0 ? 'green' : 'pink';             

                setTimeout(() => {

                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;

                }, i * Animation_speed_ms );     // after every 5 seconds delays
            }
            else
            {
            setTimeout(() => {

                // perform swapping of bars

                const [barOneIndx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIndx].style;

                barOneStyle.height = `${newHeight}px`;

                }, i * Animation_speed_ms );
            }
        }

        setTimeout(() => {
            this.setState( { array: sortedArray});

        }, animations.length * Animation_speed_ms);
    }

    heapSort() {

    }

    quickSort(){

    }

    bubbleSort(){

    }

    // function that test the algorithm results if the sorted array values are equal
    testSortingAlgorithms(){
    // iterate through 0 to 100 to generate 100 arrays of length ( 1 to 1000)
        for( let i = 0; i< 100; i++)
        {
            const array = [];

            const length = randomIntFromInterval(1, 1000);

            for( let i = 0; i < length; i++)
            {
                array.push(randomIntFromInterval(-1000, 1000));
            }

            const javaScriptSortedArray = array.slice().sort((a,b) => a - b);       // creating a new array as a copy of main array
            const {sortedArray: mergeSortedArray} = getMergeSortAnimations(array.slice());        // mergesort function call for  getting sorted array
            
            console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray ));  // this statement is executed to check if arrays are equal 
        }
    }



    render(){
        const {array} = this.state;
    

    return (
        // iterating through araray using key property with index to map it with class 
        
        <div className = "array-container">

            {array.map((value, idx) => (
                <div 
                className = "array-bar" 
                key={idx} 

                style={{ 
                    backgroundColor: 'pink',
                    height: `${value}px` 
                }} >  </div>

            ))}
            <br></br>

            <button onClick= { () => this.resetArray() } > Generate new array input</button>
            <button onClick= { () => this.mergeSort()} > Merge Sort </button>
            <button onClick= { () => this.quickSort() } > Quick Sort</button>
            <button onClick= { () => this.bubbleSort() } > Bubble Sort</button>
            <button onClick= { () => this.heapSort() } > Heap Sort</button>
            <button onClick={ () => this.testSortingAlgorithms() } > Test your Algorithm</button>
        </div>
    );
    }
}

// function to generate random numbers from 0 to 1000
function randomIntFromInterval(min, max){
    // upperbound and lower npund included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// function to check if the arrays after sorting are equal to verify mergesort function is working
function arraysAreEqual(firstArray, SecondArray){

    // if the lengths of array are not equal no need to check for the elements
    if( firstArray.length !== SecondArray.length)
    {
        return false;
    }

    // iterate until the range of length of one array
    for( let i = 0; i< firstArray.length; i++)
    {
        // check if elements in both array at ith position are equal
        if( firstArray[i] !== SecondArray[i])
        {
            return false;
        }
    }

    return true;
}