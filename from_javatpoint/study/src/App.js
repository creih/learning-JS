// import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';

class App extends Component {
  render(){
    var num1 = 10;
    var num2 = 20;
    var headingStyle = {
      color: 'red',
      fontSize: '50px',
    };
    return(
      <div>
        <h1 className="hello">"Hello Rwanda!!"</h1>
        <h1 style={headingStyle}>"Hello Kgl!!"</h1>
        <p data-demoAttribute="demo">{num1 < num2 ? num2+' is greater than '+num1: '10 is lesser than 20'}</p>
        <ClassComponent/>
      </div>
    );
  }
}
/* this class is meant to clearly illustrate class Components */
class ClassComponent extends Component{
  constructor(){
    super();
    this.state = {
      people: [
        {
          name: 'John',
          age: 30
        },
        {
          name: 'Doe',
          age: 25
        },
        {
          name: 'Smith',
          age: 35
        }
      ]
    }
  }
  render() {
    return(
      <>
        <StudentNames/>
        <ul>
          {this.state.people.map((item)=> <List people={item}/>)}
        </ul>
      </>
    )
  }
}

/* this class is meant to clearly illustrate functional Components */

class StudentNames extends Component{
  render(){
    return(
      <h1>Student Names</h1>
    );
  }
}
/* another class to illustrate the use of props but also is a functional component */
class List extends Component{
  render(){
    return(
      <ul>
        <li>{this.props.people.name} is {this.props.people.age} years old</li>
      </ul>
    );
  }
}

export default App;
