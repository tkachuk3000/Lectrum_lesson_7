// Core
import React, {Component} from 'react';
import moment from 'moment';
import { func, string, number, array } from 'prop-types';

//Components
import Like from 'components/Like';
// import { Consumer } from '../HOC/withProfile';
import { withProfile } from '../HOC/withProfile';

//Instruments
import  Styles from './styles.m.css';

@withProfile
//export default 
class Post extends Component{
    
    static propTypes = {
        _likePost:  func.isRequired,
        _deletePostFromState: func.isRequired,
        comment:    string.isRequired,
        created:    number.isRequired,
        id:         string.isRequired,
        likes:      array.isRequired,
    }
    // static defaultProps = {
    //     likes:[]
    // }

    _deletePost = () => {
        const {_deletePostFromState, id} = this.props;
        _deletePostFromState(id);
    }
    render (){
        const { comment, created, _likePost, id, likes, 
                avatar, currentUserFirstName, currentUserLastName} = this.props;

        return (
            // <Consumer>
                // {(context) => (
                    <section className = {Styles.post}>
                        <span className = {Styles.cross} onClick = {this._deletePost}/>
                        <img src = {avatar} />  
                        <a>{`${currentUserFirstName} ${currentUserLastName}`}</a>
                        <time> {moment.unix(created).format('MMMM D h:mm:ss a')}</time>
                        <p>{comment}</p>
                        <Like 
                            _likePost = {_likePost} 
                            id = {id} 
                            likes = {likes} 
                            // {...context} 
                        />
                    </section>
                // )}
            // {/* </Consumer>  context.*/}
             
        )
    }
};

export default withProfile(Post);