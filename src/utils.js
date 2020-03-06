
const helloWorld = () => {
    console.log("I'm an arrow function");
}

const square = (a,b) => a*b; 

const triangle = (a,b) => (a*b)/2

export default (a) => a*4;

export {helloWorld, square, triangle}