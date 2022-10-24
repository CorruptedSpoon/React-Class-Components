class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <p>Hello World!</p>
            </div>
        );
    }
};

const init = () => {
    ReactDOM.render(
        <HelloWorld />,
        document.getElementById('app')
    );
};

window.onload = init;