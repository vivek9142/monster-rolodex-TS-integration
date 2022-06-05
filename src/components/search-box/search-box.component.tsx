import React from 'react';

import { ChangeEvent , ChangeEventHandler } from 'react';

import './search-box.styles.css';


type SearchBoxProps = {
    placeholder?: string;
    // handleChange: ChangeEventHandler<HTMLInputElement>
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}
/*
Now this function by default, returns void, which is what change event 
handler assumes you're going to do.

You don't need to return anything because it's not expecting you to receive anything.
But if for some reason you wanted on your change handler to actually register some 
type of return for whatever reason.

Another way that you can actually define this function is you can bring in the change event.
Change event is the event definition instead of the actual function definition.
And what this means is that you can define your own function definition.

So you can say, I'm going to give you some function where 
I expect to receive the event of change event where the change event is 
registered to H HTML input element.

If you remember earlier when we looked at the actual change event handler, 
when we hovered over the parameter, we noticed that we were receiving the
change event as well,where we were passing the actual type. we can put the return 
type if we're returning something e.g - Boolean else void is placed.


So when I hover or change event handler again, we receive some generic T 
which is equal to an element and then that gets passed to change event.

So essentially this is change event.
Change event here is expecting some value t in order for us 
to tell it what type of element this change event is for.

So really this function that we see right here is really just us typing it out like so.
More manually.
That's really just something I wanted to highlight to you if you wanted to define 
your own function normally.
*/

export const SearchBox = ({placeholder, handleChange}: SearchBoxProps) =>(
    <input type="search"
    className="search" 
    placeholder={placeholder}
    onChange={handleChange}
    />
);

