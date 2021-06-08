class Tweet extends React.Component {
    render() {
        let date = new Date();
        date = date.toDateString();
        return(
            <div className="tweet">
                <Avatar />
                <div className="content">
                    <Author name="Emerson Minero" handle="@eminero5"/>
                    <Time createdAt={date} />
                    <Message message="I am creating a tweet component using React.js"/>
                    <div className="buttons">
                        <ReplyButton />
                        <RetweetButton />
                        <LikeButton />
                        <ShareButton />
                    </div>
                </div>
            </div>
        ) 
    }
}

class Avatar extends React.Component {
    render() {
        return <img src="https://www.gravatar.com/avatar/nothing" className="avatar" alt="avatar" />
    }
}

class Author extends React.Component {
    render() {
        return (
            <span className="author">
                <span className="name">{this.props.name}</span>
                <span className="handle">{this.props.handle}</span>
            </span>
        );
    }
}

class Time extends React.Component {
    render() {
       return <span className="time">{this.props.createdAt}</span>
    }
}

class Message extends React.Component {
    render() {
        return <div className="message">{this.props.message}</div>
    }
}

class ReplyButton extends React.Component {
    render() {
        return <i className="fa fa-reply"></i>
    }
}

class RetweetButton extends React.Component {
    render() {
        return <i className="fas fa-retweet"></i>
    }
}

class LikeButton extends React.Component {
    render() {
        return <i className="fas fa-heart"></i>
    }
}

class ShareButton extends React.Component {
    render() {
        return <i className="fas fa-share"></i>
    }
}

ReactDOM.render(<Tweet />, document.getElementById("app"));