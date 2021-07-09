import React, {useEffect, useState} from 'react'
import './Feed.css';
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import InputOption from "./InputOption";
import { CalendarViewDay, EventNote, Subscriptions } from '@material-ui/icons';
import Post from "./Post";
import { db } from './firebase';
import firebase from 'firebase';


function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    
    useEffect(() => {
        db.collection("posts")
            .orderBy('timestamp')
            .onSnapshot(snapshot =>(
                setPosts(
                    snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    }, [])


    const sendPost = e => {
        e.preventDefault();
        db.collection('posts').add({
            name: 'Apurbu Sarder Apu',
            description: 'this is a test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9"/>
                    <InputOption Icon={Subscriptions} title='Video' color="#E7A33E"/>
                    <InputOption Icon={EventNote} title='Event' color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDay} title='Write article' color="#7FC15E"/>
                </div>
            </div>
            {posts.map(({ id, data: { name, description, message, photoUrl } }) =>(
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}

            {/* Posts */}
            <Post 
                name='Apurbu Sarder Apu' 
                description='This is a test' 
                message='WOW this worked'/>

        </div>
    );
}

export default Feed;
