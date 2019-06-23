// Core
import React, {Component} from 'react';

// Components
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';
import Spinner from 'components/Spinner';

//Instruments
import Styles from './styles.m.css';

export default class Feed extends Component{
    state = {
        posts:[{id: 145,comment: 'Hello!!',created: 1526825076849 },{id:156,comment: "WTF??",created: 1526825076858 }],
        likes:[],
        spin: true,
    };
    
    render (){
        
        const { posts } = this.state;
        // console.log(posts);
        const postsJSX = posts.map((post) =>{
            // console.log(post);
            return <Post key = { post.id } {...post}/>
        })
        
        return (
            <section className = {Styles.feed}>
               <Spinner isSpinning  = {this.state.spin} />
               <StatusBar/>
               <Composer/>
               {postsJSX}
               {/* <Post/> */}
            </section>
        )
    }
}