import {useEffect, useState} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import { getData } from './utils/data.utils';


//define return type of url returning data
type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [searchField,setSearchField] = useState('');
  const [monsters,setMonsters] = useState([]);
  const [filteredMonsters,setFilteredMonsters] = useState(monsters);

  useEffect(()=>{
    // fetch('')
    //   .then((response) => response.json())
    //   .then((users) => setMonsters(users));

    /*

    So first we know that we get back the users from us calling our get data.
    We're calling it data with this URL.

    But here we need to define.

    What the actual type that we're getting is going to be, because right now, 
    users, we don't actually know, which is why we're saying it's unknown.
    It's an unknown type.

    We don't know what the type that we're going to get is. We haven't defined it yet.
    We have to pass it in, as I mentioned, as a generic.

    What we know is that we have, again, those three values we want.
    So we can say this type is going to be of type monster.

    This monster has an ID, which is a string, has a name, which is a string and 
    has an email, which is a string.

    And we know this because we were earlier referencing the actual values inside
    of the website itself

    */
    const fetchUsers = async () => {
      // we need to reference return data of type Monster array ie. 
      // <Monster[]> or <Array<Monster>>
      
      /*
      TSX is able to know, Oh, if I await this, get data, I'm going to definitely get back.
      A promise with an resolved value of a monster's array away is going to 
      resolve that value cast as the user.

      So of course you're going to get an array of monsters and now users is 
      explicitly typed to a monster's array, which is what it's expecting.

      And just like that, now we have type safety.
      */
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/posts')
    }
  },[]);

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    setFilteredMonsters(newFilteredMonsters);
  },[monsters,searchField]);

  const onSearchChange = (e) =>{
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
