import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import './Layout.css';
import '../Toolbar/Toolbar';
import Toolbar from '../Toolbar/Toolbar';
//import Footer from '../Footer/Footer';
import Jumbotron from '../Jumbotron/Jumbotron';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Toolbar {...this.props} />
                <Jumbotron />

                <main>
                    {this.props.children}
                </main>

            </Aux>
        );
    }
}



export default Layout;

//<Footer />