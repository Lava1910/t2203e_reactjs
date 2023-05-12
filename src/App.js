import './App.css';
import Student from './components/Student';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: [
        {
          name:"Student1",
          mark:"7",
          telephone: ["0989898","1028391038109"]
        },
        {
          name:"Student2",
          mark:"8",
          telephone: ["0989898","1028391038109"]
        }
      ],
      className: "T2203E",
      new_student: {
        name: "",
        mark: 0,
        telephone: ""
      }
    }
    this.changeClassName = this.changeClassName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.submitStudent = this.submitStudent.bind(this);
  }
  changeClassName(event){
    const v = event.target.value;
    this.setState({
      className : v
    })
  }
  handleInput(event){
    const input = event.target;
    const new_student = this.state.new_student;
    new_student[input.name] = input.value; //name - tên của prop
    this.setState({
      new_student: new_student
    })
    // console.log(new_student);
  }
  submitStudent(event){
    event.preventDefault();
    const new_student = this.state.new_student;
    new_student.telephone = [new_student.telephone];
    const students = this.state.student;
    students.push(new_student);
    this.setState({student:students});
  }
  render() {
    const student = this.state.student;
    const className = this.state.className;
    const new_student = this.state.new_student;
    return (
      <div className="App">
        <h1>Danh sách sinh viên lớp {className}:</h1>
        {
          student.map((v,k) => {
            return <Student key={k} name={v.name} mark={v.mark} telephone={v.telephone}/>
          })
        }
        <hr/>
        <input onChange={this.changeClassName} type='text' value={className} placeholder='Enter class name....' />
        <hr/>
        <h2>Thêm sinh viên:</h2>
        <form method='post' onSubmit={this.submitStudent}>
          <input onChange={this.handleInput} value={new_student.name} name='name' type='text' placeholder='Name..' />
          <input onChange={this.handleInput} value={new_student.mark} name='mark' type='number' placeholder='Mark..' />
          <input onChange={this.handleInput} value={new_student.telephone} name='telephone' type='text' placeholder='Telephone..' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
