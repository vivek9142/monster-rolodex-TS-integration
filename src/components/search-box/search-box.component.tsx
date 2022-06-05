import React from 'react';
// So here we can import this in from React and it's called if we highlight over it again.
// Change event handler.
// Now change event handler is essentially a function type that we receive from React.

import { ChangeEventHandler } from 'react';

import './search-box.styles.css';

// We can put this here.
// For now, though, all you need to know is that we are going to pass to it a 
// type parameter of H our input element.And now this change event handler is correct.

type SearchBoxProps = {
    placeholder?: string;
    // handleChange:(a: string) => void
    // handleChange: ChangeEventHandler
    handleChange: ChangeEventHandler<HTMLInputElement>
}
/*
In this particular case, if you switch back to this version, you'll notice 
that on change gives you an error.

It says that our type of this function so you see type a string fat arrow void
is not assignable to type change event handler HTML input element change event
handler is actually a functional type definition that we get from React.

And what we also need to pass it.If you remember when we had our.
Definition like this where we received some kind of event.
Notice that this event is of react change event.H html input element.Here.

We want to pass that html input element into this change event handler because 

if you hover over this reading this definition.Alias type change event handler.

(alias) type ChangeEventHandler<T = Element> = (event: ChangeEvent<T>) => void
import ChangeEventHandler

Notice that there are angular brackets.This angular bracket is essentially
representing that you can pass to this type a parameter the same
way that you pass a parameter to a function.

Certain types, by definition, you can actually also pass it a parameter.
This parameter, though, is a type you have to pass at a type so that it can use 
that type inside of its own type definition.

For example, what you're seeing here with Change event handler is that it receives 
some parameter value of T.This T has to be some kind of element type.
Now, element here is a union.
It's a numerous bunch of different HTML element types of which h timber input 
element is one of them.

We're going to work with these types of type parameters.
These are known as generics, and we're definitely going to explore those.

For now, though, all you need to know is that we are going to pass to it a 
type parameter of H our input element.And now this change event handler is correct.

So we don't even need this ((e)=> )anymore.


There are numerous different components that register and on change as a result, 
depending on which input element is triggering this on change, they might have 
different values on the event.So React is saying, Hey, tell me what type of on
change this is going to be.So I know that this function is 
ready to receive the correct event type.

So as a result, now this extends for us a way to leverage 
these existing types that react as made in
order to define the functions that will pass to it.
*/

export const SearchBox = ({placeholder, handleChange}: SearchBoxProps) =>(
    <input type="search"
    className="search" 
    placeholder={placeholder}
    // onChange={handleChange}
    // onChange={(e) => handleChange(e)}
    onChange={handleChange}
    />
);

