import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Form } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Login () {
    const history = useHistory();
    /**Get user data */
    const [ userProfil, setUserProfil ] = useState(
        { username: '', password : ''}
    );
    const [ userData, setUserData ] = useState({});
    const [ userPW, setUserPW ] = useState({})

    const [ errorMessage, setErrorMessage ] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('api/login', userProfil)
            .then((res) => {
                //Store token and username on localStorage
                localStorage.setItem('token', res.data.token.rows[0].token);
                localStorage.setItem('username', res.data.token.rows[0].username);
                setUserData(res.data.token.rows[0].username);
                setUserPW(res.data.token.rows[0].password);
                //if login is ok, redirect to main page
                history.push(`/`);
                window.location.reload(false);
            })
            .catch((err) => {
                console.log(err)
            })
            formValidation();
            
    };

    const handleChange = (e) => {
        setUserProfil({...userProfil, [e.target.name] : e.target.value });
    };

    //Check if form is fill correctly
    const formValidation = () => {
        if(userProfil.username === '' || userProfil.password === ''){
            setErrorMessage(" * Tous les champs doivent être complétés ")
        }else if(userProfil.username !== userData || userProfil.password !== userPW){
            setErrorMessage(" * Le pseudo ou le mot de passe ne sont pas corrects ")
        }else{
            setErrorMessage(null)
        }
        return formValidation;
    };


    return (
        <div className='profil-form'>
            <Header as='h2'>Se connecter</Header>
            <Form
                onSubmit={handleSubmit}
             >
                 <Form.Field>
                     <label> Pseudonyme</label>
                     <input
                      type="text"
                      name="username"
                      onChange={handleChange}
                      />
                 </Form.Field>
                 <Form.Field>
                     <label> Mot de passe</label>
                     <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      />
                 </Form.Field>
                 { errorMessage && <p className="error">{errorMessage}</p>}
                 <div className="buttons">
                    <Button color='green' type='submit' >Valider</Button>
                        <Link to={'/'}>
                            <Button color='red'>Annuler</Button>
                        </Link>
                </div>
            </Form>
        </div>
    );

};

export default Login;
