import React, { useState } from 'react';

const Busca = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=305e7b8e`);
        const data = await response.json();
        if (data.Search) {
            const moviePromises = data.Search.map(movie =>
                fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=305e7b8e`).then(response => response.json())
            );
            const detailedMovies = await Promise.all(moviePromises);
            setResults(detailedMovies);
        } else {
            setResults([]);
        }
    };

    const containerStyle = {
        padding: '10px',
        textAlign: 'center',
        backgroundColor: '#1c1c1c',
        color: '#fff',
        backgroundImage: 'url("https://s3u.tmimgcdn.com/800x0/u28018890/d54bd25959c5c51617830d8dcdea4e6e.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', 
        minHeight: '100vh',
    };

    const headingStyle = {
        color: '#FFD700',
        marginBottom: '20px',
        fontSize: '2.5em'
    };

    const formStyle = {
        marginBottom: '20px'
    };

    const inputStyle = {
        padding: '10px',
        width: '70%',
        marginRight: '10px',
        borderRadius: '5px',
        border: '1px solid #444'
    };

    const buttonStyle = {
        padding: '10px',
        backgroundColor: '#FFD700',
        color: '#333',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px'
    };

    const movieListStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    };

    const movieItemStyle = {
        margin: '20px',
        padding: '20px',
        border: '1px solid #444',
        borderRadius: '10px',
        backgroundColor: '#333',
        width: '250px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        textAlign: 'left'
    };

    const imageStyle = {
        width: '100%',
        height: 'auto',
        borderRadius: '10px'
    };

    const titleStyle = {
        fontSize: '1.5em',
        margin: '10px 0',
        color: '#FFD700',
        textAlign: 'center',
    };

    const yearStyle = {
        fontSize: '1em',
        color: '#ccc',
        textAlign: 'center',
    };

    const plotStyle = {
        fontSize: '0.9em',
        color: '#ccc',
        textAlign: 'center',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Buscar Filme</h1>
            <form onSubmit={handleSearch} style={formStyle}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscar filmes..."
                    style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>Buscar</button>
            </form>
            <div style={movieListStyle}>
                {results.map(movie => (
                    <div key={movie.imdbID} style={movieItemStyle}>
                        <img src={movie.Poster} alt={movie.Title} style={imageStyle} />
                        <h2 style={titleStyle}>{movie.Title}</h2>
                        <p style={plotStyle}>{movie.Plot}</p>
                        <p style={yearStyle}>{movie.Year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Busca;
