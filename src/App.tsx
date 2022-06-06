import {useEffect, useState,ChangeEvent} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import { getData } from './utils/data.utils';


export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  /*
  Now you might be wondering, well, why don't we need to type the use state?
  So if you hover over it, you should notice that we don't.
  And the reason for this is because TypeScript is able to infer the type if it has a type
  already.When we passed in use state.
  The default initial state that we pass for search field is a empty string.
  Now an empty string is explicitly typed because there's no way a string can be any
  other type.
  
  So here what you see is that you state is already assigned to this string search field.
  We'll infer that type and know that it can only be a string.
  Because if you're giving you say, an initial value of a string, it's only setting strings.

  There's no way that you can set for anything else.
  So if you try and call set search field and pass it any other type other than string,
  you will get an error.
  This also means that we do not need to explicitly type to use state as a result because
  it can infer that type.
  */
  const [searchField,setSearchField] = useState('');
  const [monsters,setMonsters] = useState<Monster[]>([]);
  /*
  Set state right here.If you look at you state, notice that right now it's initialized
  with the never type for the array as the default value.
  I'm not going to set it to any because that would be extremely not type safe.
  
  I'm forcing you to give me a type in order for me to actually set this value.
  So now what we need to do then is pass it as a generic argument or monsters array.
  Now what this knows is that U.S. knows we are going to get an initial state of a monsters
  array.Our set state is going to expect a monsters array as the actual definition of what
  gets received as the argument.
  */


  const [filteredMonsters,setFilteredMonsters] = useState(monsters);
  /*
  Similarly, our use state for our filtered monsters takes the monsters from 
  our actual previous use state as the default initial state.
  This is explicitly type to monsters array, which we've already done.

  So now this use state is going to also infer that from the initial state.

  There is a lot of inference inside of TypeScript so that we don't have to get too 
  explicit about everything.
  */
  useEffect(()=>{
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users')
      setMonsters(users);
      /*
      What I want you to see is that once we get our users, let's say I call set monsters 
      and I pass in our users.
      Notice how there throw an error argument of a type monsters array is not assignable 
      to parameter of type sets the action never array type monster array is not assignable
      to type never array type monster is not assignable to type never what is all this 
      mean? Especially the never never is a very special keyword inside of TypeScript.

      It's a very special type.
      Essentially, the never type is the opposite of the any type.
      It means that nothing can ever get assigned to never.
      The reason why it says this is because it needs to make sure that you are defending 
      your code base and making it strictly tight.
      */
    }

    fetchUsers();
  },[]);

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    setFilteredMonsters(newFilteredMonsters);
  },[monsters,searchField]);

  const onSearchChange = (e:ChangeEvent<HTMLInputElement>):void =>{
    setSearchField(e.target.value.toLocaleLowerCase());
  }

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
        placeholder="Search Monsters" 
        handleChange={onSearchChange}/>
        <CardList monster={filteredMonsters} />
      </div>
    );
}

export default App;
