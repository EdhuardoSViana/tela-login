import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import React from "react";
import "./Login.css";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        alert("Enviando os dados: " + username + " --> " + password);
    };


  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Acesse o Sistema</h1>
            
            <div className="input-field">
                <input required type="email" placeholder='usuario@usuario.com' onChange={(e) => setUsername(e.target.value)} />
                <FaUser className="icon" />
            </div>
                
            <div className="input-field">
                <input type="password" placeholder='senha' onChange={(e) => setPassword(e.target.value)} />
                <FaLock className="icon" />
            </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox" />
                    Lembre-se de mim
                </label>
                <a href="#">Esqueci minha senha</a>
            </div>

            <button type="submit">Login</button>

            <div className="signup-link">
                <p>
                    Não tem uma conta? <a href="#">Cadastre-se</a>
                </p>
            </div>

        </form>
    </div>
  );
};

export default Login;
