import React from 'react';

const Contato = () => {
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

    const descriptionStyle = {
        marginBottom: '30px',
        fontSize: '1.5em',
        lineHeight: '1.6',
        marginTop: '50px',
    };

    const formContainerStyle = {
        maxWidth: '500px',
        margin: '0 auto',
        marginTop: '50px',
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#333',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
    };

    const inputStyle = {
        padding: '15px',
        width: '100%',
        marginBottom: '15px',
        borderRadius: '5px',
        border: 'none',
        fontSize: '1em'
    };

    const textareaStyle = {
        padding: '15px',
        width: '100%',
        height: '150px',
        marginBottom: '15px',
        borderRadius: '5px',
        border: 'none',
        fontSize: '1em'
    };

    const buttonStyle = {
        padding: '15px 30px',
        backgroundColor: '#FFD700',
        color: '#333',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1em',
        fontWeight: 'bold'
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Formulário enviado!');
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Contato</h1>
            <p style={descriptionStyle}>
                O "Cinema na Mão" é um aplicativo dedicado aos amantes do cinema, oferecendo destaques,
                busca de filmes e recomendações personalizadas.<br />
                Entre em contato conosco para mais informações ou feedback.
            </p>
            <div style={formContainerStyle}>
                <form style={formStyle} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Seu nome"
                        style={inputStyle}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Seu email"
                        style={inputStyle}
                        required
                    />
                    <textarea
                        placeholder="Digite sua mensagem..."
                        style={textareaStyle}
                        required
                    />
                    <button type="submit" style={buttonStyle}>Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Contato;
