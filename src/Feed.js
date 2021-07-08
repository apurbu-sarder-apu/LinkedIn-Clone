import React, {useState} from 'react'
import './Feed.css';
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import InputOption from "./InputOption";
import { CalendarViewDay, EventNote, Subscriptions } from '@material-ui/icons';
import Post from "./Post";



function Feed() {
    const [posts, setPosts] = useState([])


    const sendPost = e => {
        e.preventDefault();
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
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
            {posts.map((post) =>(
                <Post />
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
