import React, { useEffect, useState } from 'react';

const Indicacao = () => {
    const [indicacoes, setIndicacoes] = useState([]);

    useEffect(() => {
        const fetchIndicacoes = async () => {
            const response = await fetch('http://www.omdbapi.com/?s=batman&type=movie&apikey=305e7b8e');
            const data = await response.json();
            if (data.Search) {
                const top5Indicacoes = data.Search.slice(0, 6);
                setIndicacoes(top5Indicacoes);
            }
        };

        fetchIndicacoes();
    }, []);

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
        fontSize: '2.5em',
    };

    const listStyle = {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: 0,
        margin: 0,
        listStyleType: 'none'
    };

    const listItemStyle = {
        margin: '20px',
        padding: '20px',
        border: '1px solid #444',
        borderRadius: '10px',
        backgroundColor: '#333',
        width: '250px',
        height: '250px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
    };

    const imageStyle = {
        width: '40%',
        height: 'auto',
        borderRadius: '10px'
    };

    const titleStyle = {
        fontSize: '1.5em',
        margin: '10px 0',
        color: '#FFD700'
    };

    const yearStyle = {
        fontSize: '1em',
        color: '#ccc'
    };

    const plotStyle = {
        fontSize: '0.9em',
        color: '#ccc'
    };

    const topThree = indicacoes.slice(0, 3);
    const bottomTwo = indicacoes.slice(3, 6);

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Indicações da Semana</h1>
            <div style={listStyle}>
                <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                    {topThree.map(movie => (
                        <div key={movie.imdbID} style={listItemStyle}>
                            <img src={movie.Poster} alt={movie.Title} style={imageStyle} />
                            <h2 style={titleStyle}>{movie.Title}</h2>
                            <p style={yearStyle}>{movie.Year}</p>
                            <p style={plotStyle}>{movie.Plot}</p>
                        </div>
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                    {bottomTwo.map(movie => (
                        <div key={movie.imdbID} style={listItemStyle}>
                            <img src={movie.Poster} alt={movie.Title} style={imageStyle} />
                            <h2 style={titleStyle}>{movie.Title}</h2>
                            <p style={yearStyle}>{movie.Year}</p>
                            <p style={plotStyle}>{movie.Plot}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Indicacao;
