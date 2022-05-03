import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import Searchbox from './components/card-list/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    };
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users/')
  .then((response)=>response.json())
  .then((users)=>this.setState(()=>{
   
    return {monsters:users}
    
  }));
}

onSearchChange=(event)=>{
  const searchField=event.target.value.toLocaleLowerCase();
  this.setState(()=>{
    return {searchField};
  })
}
  render(){
    const {monsters,searchField}=this.state;
    const {onSearchChange}=this;
    const filteredMonsters=monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField)
  });
  return (
    <div className="App">
      <h1 className='app-title'>Monster Search Tool </h1>
      {filteredMonsters.map((monster)=>{
        // return(
        //   // <div key={monster.id}>
        //   //   <h1>{monster.name}</h1>
        //   //   </div>
        // )
      })}
      <Searchbox onChangeHandler={onSearchChange} placeholder='Search Monsters' className='search-box'/>
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}
}

export default App;
