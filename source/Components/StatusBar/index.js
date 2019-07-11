// Core
import React, {Component} from 'react';

//Components
import { Consumer } from 'components/HOC/withProfile';

//Instruments
import Styles from './styles.m.css';
import { withProfile } from '../HOC/withProfile';
// import avatar from 'theme/assets/Parrot';

@withProfile
class StatusBar extends Component {
    render(){
        const { avatar, currentUserFirstName, currentUserLastName } = this.props;
        return (
            // <Consumer >
                // {/* {(context) => ( */}
                    <section className = {Styles.statusBar}>
                        <button>
                            <img src = {avatar}/>
                            <span>{currentUserFirstName}</span>
                            &nbsp;
                            <span>{currentUserLastName}</span>
                        </button>
                    </section>
                // )}
            // </Consumer>
        );

    }
}

export default withProfile(StatusBar);