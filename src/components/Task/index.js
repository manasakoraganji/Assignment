import React, { Component } from 'react';
import './index.css';

class Task extends Component {
  state = {
    f1: false,
    f2: true,
    para: 'undefined',
    f3: true,
    newArgCount: 0,
    f4: false,
    additionalOps: [],
    f5:'undefined'
  };

  CreateNew = () => {
    this.setState((prevState) => ({
      f4: true,
      additionalOps: [...prevState.additionalOps, 'select']
    }));
  };

  ChangeMenu2 = () => {
    this.setState({ f3: true });
  };

  CreateNewInput = () => {
    this.setState((prevState) => ({
      f1: true,
      newArgCount: prevState.newArgCount + 1
    }));
  };

  ChangeLabels = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === 'const') {
      this.setState({
        f2: false,
        para: 'const'
      });
    } else if (selectedValue === 'argument') {
      this.setState({
        f2: false,
        para: 'argument'
      });
    } else if (selectedValue === 'and') {
      this.setState({
        f2: false,
        para: 'and',
        f3: true
      });
    } else {
      this.setState({ f2: true });
    }
  };

  ChangeMenu = () => {
    this.setState({ f2: true });
  };

  ChangePara = (event) => {
this.setState({f5:event.target.value})
  };

  f11=(event)=>{
    this.setState({f5:event.target.value})
  }

  render() {
    const { f1, f2, para, f3, newArgCount, f4, additionalOps,f5 } = this.state;

    return (
      <div>
       < button type="button" className='btn'>My Arg</button>
       <select onChange={this.f11} className="custom-select-container">
  <option className="dropdown-item">false</option>
  <option className="dropdown-item">true</option>
</select>

        <br />

        {f1 && (
          <div>
            {[...Array(newArgCount)].map((_, index) => (
              <div key={index}>
               <input type='text' placeholder='newarg'/>
                <select onChange={this.ChangePara}>
                  <option>false</option>
                  <option>true</option>
                </select>
              </div>
            ))}
          </div>
        )}

        <button type="button" onClick={this.CreateNewInput}>
          + add arg
        </button>

        <div>
          {f3 ? (
            <div>
              {f2 ? (
                <div>
                  <select onChange={this.ChangeLabels}>
                    <option>select....</option>
                    <option>const</option>
                    <option>argument</option>
                    <option>and</option>
                    <option>or</option>
                  </select>
                  <button type="button" onClick={this.ChangeMenu}>
                    x
                  </button>
                </div>
              ) : (
                <div>
                  {para === 'const' ? (
                    <div>
                      <select onChange={this.ChangePara}>
                        <option>true</option>
                        <option>false</option>
                      </select>
                      <button type="button" onClick={this.ChangeMenu}>
                        x
                      </button>
                      <p>result: {para}</p>
                    </div>
                  ) : para === 'argument' ? (
                    <div>
                      <select>
                        <option>My Arg</option>
                        <option>x</option>
                      </select>
                      <button type="button" onClick={this.ChangeMenu}>
                        x
                      </button>
                      <p>result: {para}</p>
                    </div>
                  ) : (
                    <div>
                      <select>
                        <option>and</option>
                        <option>or</option>
                      </select>
                      <button type="button" onClick={this.ChangeMenu}>
                        x
                      </button>
                      {para === 'and' && (
                        <div>
                          <select>
                            <option>select</option>
                            <option>const</option>
                            <option>argument</option>
                            <option>and</option>
                            <option>or</option>
                          </select>
                          <button>x</button>
                          <br/>
                          <select>
                            <option>select</option>
                            <option>const</option>
                            <option>argument</option>
                            <option>and</option>
                            <option>or</option>
                          </select>
                          <button>x</button>
                          <br />
                          {additionalOps.map((op, index) => (
                            <div key={index}>
                              <select>
                                <option>select</option>
                                <option>const</option>
                                <option>argument</option>
                                <option>and</option>
                                <option>or</option>
                              </select>
                              <br />
                            </div>
                          ))}
                          {f4 && (
                            <div>
                              <select>
                                <option>select</option>
                                <option>const</option>
                                <option>argument</option>
                                <option>and</option>
                                <option>or</option>
                              </select>
                              <br />
                              <button type="button">+ add op</button>
                            </div>
                          )}
                          <button type="button" onClick={this.CreateNew}>
                            + add op
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div>
              <button type="button" onClick={this.ChangeMenu2}>
                +
              </button>
            </div>
          )}
        </div>
        <p>result:{f5}</p>
      </div>
    );
  }
}

export default Task;
