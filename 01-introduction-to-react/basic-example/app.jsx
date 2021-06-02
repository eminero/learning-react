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
        return (
            <div>
                <h1 style={style}>Hello, you are a {this.props.role}!</h1>
                <MyComponent />
                <p className="primary-text">We are using a className property here</p>
            </div>
        );
    }
}

ReactDOM.render(<App role="developer" />, document.getElementById("app"));