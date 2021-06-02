class RoleComponent extends React.Component {
    render() {
        return <h1>You are a {this.props.role}</h1>
    }
}

class TeamComponent extends React.Component {
    render() {
        return <h2>You are part of the {this.props.team} team!</h2>
    }
}

class WelcomeComponent extends React.Component {
    render() {
        return <p>Welcome on board!</p>
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <RoleComponent role="developer"/>
                <TeamComponent team="development"/>
                <WelcomeComponent />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));