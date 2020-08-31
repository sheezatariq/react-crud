import React, { useState } from 'react';
import { Button } from  '../calculator2/Button'
import { Input } from '../calculator2/Input';
import { ClearButton } from '../calculator2/ClearButton'
import  * as math from 'mathjs';
import { Card } from 'react-bootstrap';


const CalculatorSample = () => {

  const [input, setInput] = useState("");

  const addToInput = val => {
    setInput(input + val);
  };

  const handleMultiply = val => {
    if (val === "x") {
      setInput(input + val.replace("x", "*"));
    }
  };

  const handleEqual = () => {
    setInput(math.evaluate(input));
  }

  return(
    <Card.Body>
      <div className="app">
        <div className="calculator-wrapper">
          <Input input={input}></Input>
          <div className="row">
            <Button handleClick={(val)=> addToInput(val)}>7</Button>
            <Button handleClick={(val)=> addToInput(val)}>8</Button>
            <Button handleClick={(val)=> addToInput(val)}>9</Button>
            <Button handleClick={(val)=> handleMultiply(val)}>x</Button>
          </div>
          <div className="row">
            <Button handleClick={(val)=> addToInput(val)}>4</Button>
            <Button handleClick={(val)=> addToInput(val)}>5</Button>
            <Button handleClick={(val)=> addToInput(val)}>6</Button>
            <Button handleClick={addToInput}>-</Button>
          </div> 
          <div className="row">
            <Button handleClick={(val)=> addToInput(val)}>1</Button>
            <Button handleClick={(val)=> addToInput(val)}>2</Button>
            <Button handleClick={(val)=> addToInput(val)}>3</Button>
            <Button handleClick={addToInput}>+</Button>
          </div> 
          <div className="row">
            <Button handleClick={(val)=> addToInput(val)}>0</Button>
            <Button handleClick={(val) =>addToInput(val)}>.</Button>
            <Button handleClick={() => handleEqual()}>=</Button>
            <Button handleClick={(val) =>addToInput(val)}>/</Button>
          </div> 
          <div className="row">
            <ClearButton handleClear={() => setInput("")}>clear</ClearButton>
          </div>
        </div>
      </div>
    </Card.Body>
  ) 
};
export default CalculatorSample;















// class CalculatorSample extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: ""
//     }
//   }

//   addToInput = val => {
//     this.setState({input: this.state.input + val});
//   }

//   handleEqual =() => {
//     this.setState({input: math.evaluate(this.state.input)})
//   }

//   handleMultiply = val => {
//     if (val === "x") {
//       this.setState({input: this.state.input + val.replace("x", "*")});
//     }
//   }

//   render() {
//     return (
//       <div className="app">
//         <div className="calculator-wrapper">
//           <Input input={this.state.input}></Input>
//           <div className="row">
//             <Button handleClick={this.addToInput}>7</Button>
//             <Button handleClick={this.addToInput}>8</Button>
//             <Button handleClick={this.addToInput}>9</Button>
//             <Button handleClick={this.handleMultiply}>x</Button>
//           </div>
//           <div className="row">
//             <Button handleClick={this.addToInput}>4</Button>
//             <Button handleClick={this.addToInput}>5</Button>
//             <Button handleClick={this.addToInput}>6</Button>
//             <Button handleClick={this.addToInput}>-</Button>
//           </div>
//           <div className="row">
//             <Button handleClick={this.addToInput}>1</Button>
//             <Button handleClick={this.addToInput}>2</Button>
//             <Button handleClick={this.addToInput}>3</Button>
//             <Button handleClick={this.addToInput}>+</Button>
//           </div>
//           <div className="row">
//             <Button handleClick={this.addToInput}>0</Button>
//             <Button handleClick={this.addToInput}>.</Button>
//             <Button handleClick={() => this.handleEqual()}>=</Button>
//             <Button handleClick={this.addToInput}>/</Button>
//           </div>
//           <div className="row">
//             <ClearButton handleClear={() => this.setState({input: ""})}>clear</ClearButton>
//           </div>
//         </div>
//       </div>
//     );
//   }  
// }

// export default CalculatorSample;