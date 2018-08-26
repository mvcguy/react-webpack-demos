import React from 'react';
import Clock from './clock';
import LogTime from './log-time';
import Content from './events/content';
import Calculator from './events/calculator';
import Radio from './events/radio';
import LoanForm from './forms/loan-form';
import HocContent from './HOC/hoc-content';

// TODO: add router
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to react world using Webpack!</h1>
                <span>
                    {this.props.hashTag}
                </span>
                <div>
                    <Clock />
                </div>
                <div>
                    <LogTime />
                </div>
                <div>
                    <Content />
                </div>

                <br />
                <Calculator />
                <br />

                {/* <Radio label="Credit card" id="x" name="x" order='1' />
                <Radio label="Paypal" id="x" name="x" order="2" />
                <Radio label="Check" id="x" name="x" order="3"  /> */}

                {/* react forms */}
                <br />
                <div>
                    <LoanForm />
                </div>

                <div>
                    <HocContent />
                </div>

            </div>
        );
    }
}

export default App;
