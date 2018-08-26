// HOC -> Higher Order Component

import React, { Component } from 'react';
const ReactDOM = require('react-dom');

const LoadWebsite = (Cx) => {
    class _LoadWebsite extends Component {
        constructor(props) {
            super(props);
            this.state = { label: 'Run' };
            this.state.handleClick = this.handleClick.bind(this);
        }

        getUrl() {
            return 'https://facebook.github.io/react/docs/top-level-api.html';
        }

        handleClick(event) {
            document.getElementById('frame').src = this.getUrl();
        }

        componentDidMount() {
            console.log(ReactDOM.findDOMNode(this));
        }

        render() {
            console.log(this.state);
            return <Cx {...this.state} {...this.props} />
        }
    }

    // Defines a display name for the HOC
    _LoadWebsite.displayName = 'EnhancedComponent'

    return _LoadWebsite;

}

export default LoadWebsite;