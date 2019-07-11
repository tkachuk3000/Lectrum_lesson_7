// Core
import React, {Component} from 'react';
import moment from 'moment';

// Components
import { withProfile } from 'components/HOC/withProfile';
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';
import Spinner from 'components/Spinner';

//Instruments
import Styles from './styles.m.css';
import {getUniqueID,delay} from 'instruments';

@withProfile
export default class Feed extends Component{

    state = {
        posts:[
            {id: '145',comment: 'Hello!!',created: 1526825076849,likes:[] },
            {id: '156',comment: "WTF??",created: 1526825076858, likes:[] }
        ],
        spin: false,
    };


    // Домашнее задание
    _deletePostFromState = (idDeletingPost) => {
        const newPosts = this.state.posts.filter(post =>{
            // const state = post.id === idDeletingPost ? false : true;
            if(!(post.id === idDeletingPost)) {
                return {
                    ...post
                };
            };
        })

        this.setState({
            posts:  newPosts,
            
        })
    }
    
    _setPostsFetchingState = (state) => {
        this.setState({
            spin: state,
        })
    }
    
    _createPost = async (comment) => {
        this._setPostsFetchingState(true);
        
        const post = {
            id: getUniqueID(),
            created: moment.now(),
            comment,
            likes: [] ,     // 
        };
        
        await delay(1200);

        this.setState(({ posts }) => ({
            posts:[post, ...posts],
            spin: false,
        }));
    };

    _likePost = async  (id) => {
        const { currentUserFirstName, currentUserLastName} = this.props;
        this._setPostsFetchingState(true);

        await delay(1200);

        const newPosts = this.state.posts.map(post =>{
            if(post.id === id) {
                return {
                    ...post,
                    likes: [
                        {
                            id: getUniqueID(),
                            firstName: currentUserFirstName,
                            lastName: currentUserLastName,
                        },
                    ],
                };
            };

            return post;
        })

        this.setState({
            posts:  newPosts,
            spin:   false,
        })
    }

    render (){
        const { posts, spin } = this.state;

        const postsJSX = posts.map((post) =>{
            return <Post key = { post.id } {...post} _likePost = {this._likePost} 
                            _deletePostFromState = {this._deletePostFromState}/>
        })
        
        return (
            <section className = {Styles.feed}>
               <Spinner isSpinning  = {spin} />
               <StatusBar/>
               <Composer _createPost = {this._createPost}/>
               {postsJSX}
            </section>
        )
    }
}