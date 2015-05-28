/** @jsx React.DOM */

var React = require('react');

GLifeCycle = React.createClass({
        
    getInitialState: function() {
        return{ value: 'Initial State set. Init or prefilter stuff here.' };
    },
    handleChange: function() {
        //this.setState({ userInput:e.target.value });
        //this.setState({ userInput:e.target.value });
        console.log('Handle change event here...');
    },
    render: function() {
        return(
           <div className="GLifeCycle">
                <textarea
                    onChange={this.handleChange}
                    ref="textarea"
                    defaultValue={this.state.value}
                />
           </div> 
        );
    }

});

module.exports = GLifeCycle;
