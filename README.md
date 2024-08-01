# Todo App
This small application is a part of a Code The Dream React Course.

## Lesson 5

### Topics covered

#### Topics:

Hooks And Fragments:
  * Side-effects
  * Custom Hooks
  * Fragments

### The Road To React Conspect (pages 83 through 93)
#### React Side-Effects
React Side-Effects are used to interact with third-party APIs (e.g. browsers localStorage API, remote APIs for data fetching), with HTML elements for width and height and height mesurments, or with built-in JavaScript functions such as timers or intervals.

React’s useEffect Hook takes two arguments: The first argument is a function that runs our side-effect. In our case, the side-effect stores searchTerm into the browser’s local storage. The second argument is a dependency array of variables. If one of these variables changes, the function for the side-effect is called. It’s also called initially when the component
renders for the first time.

Leaving out the second argument (the dependency array) would make the function for the side-effect run on every render (initial render and update renders) of the component. If the dependency array of React’s useEffect is an empty array, the function for the side-effect is only called once when the component renders for the first time. After all, the hook lets us opt into React’s component lifecycle. It can be triggered when the component is first mounted, but also if one of its values (state, props, derived values from state/props) is updated.

#### React Custom Hooks (Advanced)
The two most popular hooks in React are useState and useEffect. useState is used for values that change over time; useEffect is used to opt into the lifecycle of your components to introduce side-effects.

Two conventions of React’s built-in hooks:
1) the naming convention which puts the “use” prefix in front of every hook name.
2) the returned values are returned as an array.
Another goal of a custom hook should be reusability. 

#### React Fragments
React fragments are the way of returning siblings elements side-by-side without a top-level element from a react component. A fragment wraps sibling elements into a single top-level element without adding them to the rendered output.


### Lesson 1.5 Instructions
[Lesson 1.5 Instructions](https://learn.codethedream.org/react-fundamentals-hooks-and-fragments/)

### Assignment
[Lesson 1.5 Assignment](https://github.com/Code-the-Dream-School/react/wiki/Lesson-1.5)