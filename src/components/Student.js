import React from "react";

export default class Student extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            age:18
        }
        this.incrementAge = this.incrementAge.bind(this);
        this.decreaseAge = this.decreaseAge.bind(this);
    }
    incrementAge() {
        const age = this.state.age;
        this.setState({
            age: age+1
        })
    }
    decreaseAge() {
        const age = this.state.age;
        this.setState({
            age: age-1
        })
    }
    render()
    {
        const student_name = this.props.name;
        const mark = this.props.mark;
        const tts = this.props.telephone; //array
        const age = this.state.age;
        return (
            <div>
                <h1>{student_name}</h1>
                <h2>Mark: {mark}</h2>
                <ul>
                    {
                        tts.map((v,k) => {
                            return (<li key={k}>{v} </li>);
                        })
                    }
                </ul>
                <h2>Age: <button onClick={this.decreaseAge}>-</button> {age} <button onClick={this.incrementAge}>+</button></h2>
            </div>
        );
    }
}