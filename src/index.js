import ReactDOM from 'react-dom';
/* import App from './components/App.js'; */



function App() {
    return (
        <div>
            <Top />

        </div>
    )
}
function Top() {
    return (
        <div className="Top">

        </div>
    )
}









const app = App();
const local = document.querySelector(".root");

ReactDOM.render(app, local);