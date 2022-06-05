export const getData = async <T>(url: string) : Promise<T> => {
    const response = await fetch(url);
    return await response.json();
}


/*
this function will take string of url as input so defining it 

but what about the return type 

here we're doing await so we'll return the Promise
and Promise as we saw before with changeEvent recieves a parameter

we need to give  the type we need to mention it so we need to return as the resolved 
value from this promise. this here we can use the generic since it can be anything 
we dont know what we're getting back. this response value doesn't have a type


So as a result, this is where we have to actually say, hey, I know what this promise is going to
be, let me tell you.

And the way you do that is you use a generic and as I mentioned, 
with a generic, it's essentially a type parameter that can be used throughout
the rest of this function inside of its definitions for types.

So what we're going to say is that I'm going to pass you some parameter t.
T typically is the starting type, so it's like TSR, etc..
Those are the parameter names that are most frequently used.

So here we're going to say, okay, let me give you some type T and this is 
what you're going to pass into the promise.

So doing this now, we're essentially saying, okay, get data is going to 
receive some type T, this type T is what you're going to return from this 
function inside of a promise.
And now if we were to use this, remember, we need to pass as some type T
we first need to import in the actual get data.
*/