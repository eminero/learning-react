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
                <h1>Second React App!</h1>
                <MyComponent />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));