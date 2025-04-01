

Sorting Visualizer

__Description__

  This is a Sorting Visualizer built using React.js. It allows users to visualize various sorting algorithms in action. The visualizer displays an array of bars, each representing a value, and sorts them using algorithms like Merge Sort, Quick Sort, Bubble Sort, and Heap Sort. The bars are animated to visually represent the sorting process, making it easier to understand how different algorithms work.

__Features__

  1. Sorting Algorithms: Visualize different sorting algorithms:
  
        Merge Sort  Quick Sort  Bubble Sort Heap Sort 
  
  2. Generate New Arrays: Click a button to generate a new random array of bars to sort.
  
  3. Animation Speed Control: The speed of the sorting process is adjustable.
  
  4. Sorting Test: You can test if the sorting algorithms work correctly by comparing the results with JavaScript’s built-in .sort() function.


__Technologies Used__

  React.js: A JavaScript library for building user interfaces.
  
  CSS: Used for styling the array bars and the page layout.
  
  JavaScript: Core logic for the sorting algorithms and animation.


__Installation__

  To run the Sorting Visualizer locally, follow the steps below:

  _Prerequisites_:
    Make sure you have the following installed on your machine:
  
    - Node.js: Install Node.js
  
    - npm (Node Package Manager): npm is usually installed with Node.js.
  
    __Steps__
  
    1. Clone the repository:
        > git clone https://github.com/yourusername/sorting-visualizer.git
    2. Traverse to the folder location
        > cd sorting-visualizer
    3. Install the required dependencies:
        > npm install
    4. Start the development server:
        > npm start
    5. Open your browser and navigate to http://localhost:3000 to view the application.


__Usage__

Generate a New Array: Click the "Generate New Array" button to create a new array of bars with random heights representing the elements of array.

Sort the Array: Select one of the sorting algorithms (Merge Sort, Quick Sort, Bubble Sort, or Heap Sort) and watch the array get sorted step-by-step with animations.

Test the Sorting Algorithms: Use the "Test your Algorithm" button to compare the results of your algorithm with JavaScript's native .sort() function to ensure correctness.

__Working__
The sorting visualizer uses several sorting algorithms and represents them visually by animating the bars. Here’s an overview of how each algorithm is represented:

Merge Sort: 
  This is a divide-and-conquer algorithm that divides the array into two halves, sorts them, and then merges the sorted halves.

Quick Sort: (in progress)
  A highly efficient divide-and-conquer algorithm that picks a "pivot" element and partitions the array around the pivot.

Bubble Sort: (in progress)
  A simple algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

Heap Sort: (in progress)
  A comparison-based sorting algorithm that builds a heap from the array and repeatedly extracts the maximum element.

Each sorting algorithm has its own animation showing the key operations (like swapping or merging) with different colors to highlight the process.

