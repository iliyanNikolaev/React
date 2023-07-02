import React from "react"
import { getAllGames, createGame, deleteGameById, editGameById } from '../services/gameService';
import { useNavigate } from "react-router-dom";

export const GameContext = React.createContext();

export const GameProvider = ({
    children
}) => {
    const navigate = useNavigate();

    const [games, setGames] = React.useState([]);

    React.useEffect(() => {
        getAllGames()
            .then(res => setGames(res));
    }, []);


    const onCreateHandler = async (gameData) => {
        const game = await createGame(gameData);
        setGames(state => [...state, game]);
        navigate('/catalog');
    }

    const onDelete = async (gameId) => {
        try {
            
            await deleteGameById(gameId);

            setGames(state => state.filter(x => x._id !== gameId));

            navigate('/catalog');
        } catch (err) {
            console.log('error in App.js -> onDelete');
        }

    }

    const onEdit = async (gameId, data) => {
        try {
            
            const result = await editGameById(gameId, data);

            setGames(state => state.map(x => x._id === gameId ? result : { ...x }));

            navigate(`/details/${gameId}`);

        } catch (err) {
            console.log('error in App.js -> onEdit')
        }
    }

    const ctx = {
        games,
        onCreateHandler,
        onDelete,
        onEdit
    }

    return (
        <GameContext.Provider value={ctx}>
            {children}
        </GameContext.Provider>
    );

}