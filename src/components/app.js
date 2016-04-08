import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as Util from '../util';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }
    render() {

        var {state, dispatch} = this.props;
        return (
            <div>
            </div>
        )
    }
}
App = connect(Util.mapStateToProps, Util.mapDispatchToProps)(App)

export default App