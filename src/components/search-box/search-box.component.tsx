import React from 'react';

import './search-box.styles.css';

// 1- declaring vars
// const name:string = '1212'; //ts compiler will not throw any errors
// const name:string = '1212'; //ts compiler will give err - num is not assignable to string

//declaring funcs - A function only cares about the types internally to itself.
// When it receives properties, it has to receive the actual types that it's expecting to receive.
// so it will declaring types of what is comming in and what it is returning.void means it 
//expects nothing in return

// const func:(a:string , b:number , c:boolean) => void = (a,b,c) =>{}

// here in react ,we're running funcs which have functions as param and also
//we can do prop destructuring in the functions. 

/*
Inside of TypeScript, you have two options for typing objects, and they're very unique.

You actually have to define them ahead of time as either a type or as a interface.
Now types and interfaces are very similar.
They used to be more different when TypeScript first came out, but over time their overlap is significantly
greater now.

The key golden rule to remember about types versus interfaces is that interfaces are extendable very
similar to class components.
If you remember with class components, you can extend one class component from another and inherit
all of that class components, original methods.
Similarly with interfaces, you can actually do the same thing.

syntax of interface is - 
interface ISearchBoxProps {

} 
I in SearchBoxProps signify it is interface.
*/

interface ISearchBoxProps extends IChangeHandlerProps{
    // placeholder?:string | null;
    placeholder?:string;
} 
//for option props Now, if this placeholder is an optional property, 
// you can put a question mark here.
// This will now tell TypeScript that what you can get here is either string or null.
// It's essentially the equivalent because with an optional placeholder value, we're essentially 
// declaring to TypeScript, Hey, you can expect a string, but I might not always give it to you.

/*
Interface is extensible we can make new interface and then extend it afterwards.
*/ 

interface IChangeHandlerProps {
    handleChange : (a: string) => void
}

/*
Another thing that you can do with interfaces is you can actually overload them.
So if we write this twice, TypeScript under the hood, it is going to also combine these together so
that your Isearchboxprops now contains all 2 of these values.
*/

export const SearchBox = ({placeholder, handleChange}: ISearchBoxProps) =>(
    <input type="search"
    className="search" 
    placeholder={placeholder}
    onChange={handleChange}/>
);

/*
The alternative is to write types.
Types are very similar to interfaces, but we lack both of these functionalities.
We do not have the ability to overload and we do not have the ability to extend.
*/

