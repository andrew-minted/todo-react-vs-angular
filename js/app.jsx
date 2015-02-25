var React = window.React = require('react');

var ExampleModel = require('./models/ExampleModel.js');
var DisplayView = require('./components/DisplayView.component.jsx');
var ToggleView = require('./components/ToggleView.component.jsx');

var model = new ExampleModel();

// Main App Component / View
var ExampleApp = React.createClass({
  render: function() {
    return (
      <div>
        <DisplayView model={model} />
        <ToggleView model={model} name="Bob" />
        <br />
        <ToggleView model={model} name="Joe" />
      </div>
    );
  }
});

// Render Example Application 
React.render(<ExampleApp />, document.getElementById('example-app'));