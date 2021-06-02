class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>Here is my component</h2>
                <p>Awesome!</p>
            </div>
        );
    }
}
class App extends React.Component {
    render() {
        var style = { color: 'red' };
        var level = this.props.level;

        return (
            <div>
                <h1 style={style}>Hello, you are a {this.props.role}!</h1>
                <MyComponent />
                <p className="primary-text">We are using a className property here</p>
                <p> As a {level} {level === 'beginner' ? (<h2>You are learning the basics</h2>) : (<h2>You know more than the basics</h2>)}</p>
            </div>
        );
    }
}

ReactDOM.render(<App role="developer" level="beginner"/>, document.getElementById("app"));