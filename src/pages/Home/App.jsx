import Header from "../../components/Header";
import background from "../../assets/background.png";
import "./styles.css";

function App() {
    return (
        <>
            <Header />
            <div className="conteudo">
                <img
                    src={background}
                    className="background"
                    alt="background app"
                />
            </div>
        </>
    );
}

export default App;
