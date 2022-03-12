import ReactDOM from 'react-dom';

function App() {
    return (
        <section>
            <Top />
            <Stories-And-Feed />
            <Side-Bar />
        </section>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));
