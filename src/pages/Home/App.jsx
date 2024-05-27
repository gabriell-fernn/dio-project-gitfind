import { useState } from "react";
import Header from "../../components/Header";
import background from "../../assets/background.png";
import ItemList from "../../components/ItemList";
import "./styles.css";

function App() {
    const [user, setUser] = useState("");
    const [currentUser, setCurrentUser] = useState(null);
    const [repository, setRepository] = useState(null);

    const handleGetData = async () => {
        const userData = await fetch(`https://api.github.com/users/${user}`);
        const newUser = await userData.json();

        if (newUser.name) {
            const { avatar_url, name, bio, login } = newUser;
            setCurrentUser({ avatar_url, name, bio, login });

            const repositoryData = await fetch(
                `https://api.github.com/users/${user}/repos`
            );
            const newRepository = await repositoryData.json();

            if (newRepository.length) {
                setRepository(newRepository);
            }
        }
    };

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
            <div className="info">
                <div>
                    <input
                        name="usuario"
                        value={user}
                        onChange={(event) => setUser(event.target.value)}
                        placeholder="@username"
                    />
                    <button onClick={handleGetData}>Buscar</button>
                </div>
                {currentUser?.name ? (
                    <>
                        <div className="perfil">
                            <img
                                src={currentUser.avatar_url}
                                className="profile"
                                alt="profile picture"
                            />
                            <div>
                                <h3>{currentUser.name}</h3>
                                <span>{currentUser.login}</span>
                                <p>{currentUser.bio}</p>
                            </div>
                        </div>
                        <hr />
                    </>
                ) : null}
                {repository?.length ? (
                    <>
                        <div>
                            <h4 className="repositorio">Repositórios</h4>
                            {repository.map((repo) => (
                                <ItemList
                                    key={1}
                                    title={repo.name}
                                    description={repo.description}
                                />
                            ))}
                        </div>
                    </>
                ) : null}
            </div>
        </>
    );
}

export default App;
