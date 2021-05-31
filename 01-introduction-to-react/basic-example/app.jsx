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
        return (
            <div>
                <h1>Hello, you are a {this.props.role}!</h1>
                <MyComponent />
            </div>
        );
    }
}

ReactDOM.render(<App role="developer" />, document.getElementById("app"));