
import './App.css';
import {Component} from 'react'
import { SearchBox } from './components/Search';
import { CardList} from './components/card-list/card-list.component'
 class  App  extends Component {
   constructor(){
     super();
     this.state={
       monster:[],
       searchFeild:''
     };

   }
   
  render(){
    const {monster,searchFeild }=this.state;
    const filteredMonster=monster.filter(moster=>moster.name.toLowerCase().includes(searchFeild.toLowerCase()))
    return (
      
      <div className="App">
        <SearchBox placeholder="enter the demons"
        handleChange={this.handleChange}/>
        <CardList monster={filteredMonster}></CardList> 
      </div>
    );
  }
  componentDidMount(){
    (async()=>{
      let response= await fetch('https://jsonplaceholder.typicode.com/users');
      let json_response=await response.json();
      this.setState({monster:json_response})
    })();
  }

  handleChange=e=>{
    this.setState({searchFeild:e.target.value})
  }
}


export default App;
