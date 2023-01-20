import "./myaccount.scss";
import {Container, Row, Col} from 'react-bootstrap';
import AnnouncementPreviewPost from '../../components/postpreview/types/AnnouncementPreviewPost';
//import Calendar from '../../components/calendar'
import Header from '../../components/header/Header';
import Courses from '../../pages/courses/Courses';
import Posts from '../../components/posts/Posts';
import CommentSection from '../../components/commentsection/CommentSection';

const MyAccount = () => {
    return (
        <div className="profile">
            <Header/>
            <div className="images">
                <img src="https://picsum.photos/1600/1200" alt="" className="cover" />
                <img src="https://picsum.photos/200" alt="" className="profilePic" />
            </div>

            <div className="profileContainer">
                <div className ="fullName">
                    <h1>Web App</h1>
                </div>
                <div className ="userName">
                    <span> @username </span>
                </div>
                <div className="userInfo">
                    <div className="left">
                        <span>Majors</span>
                    </div>
                    <div className="right">
                        <span>Graduation Year</span>
                    </div>
                </div>
            </div>

            <Container>
                <h2> My Courses </h2>
                <Courses/>
            </Container>
            <Container>
                <h2> My Study Sessions </h2>

            </Container>
            <Container>
                <h2> My Posts </h2>
                <Posts/>
                <CommentSection currentUserId = "1"/>
            </Container>
        </div>
    )
}

export default MyAccount


//inspired by Lama Dev https://www.youtube.com/watch?v=FweHcYHkt9A
