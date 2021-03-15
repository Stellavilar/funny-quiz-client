import React, { useState, useEffect, useRef } from 'react';
import logo from '../img/FUNNY QUIZ.jpg';
import { Link } from 'react-router-dom';
import { Button, Header, Form, Modal } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


import validateEmail from '../utils/mail.utils';
import validatePassword from '../utils/password.utils';

function CreateAccount () {

    const history = useHistory();

    /**Modale state */
    const [open, setOpen] = useState(false)
    const closeModal = () => {
        history.push('/');
        setOpen(false)
    };

    /**Hooks for form validation */
    const firstRender = useRef(true);
    const [disable, setDisabled] = useState(true);
    const [ passwordError, setPasswordError ] = useState(null);
    const [ mailError, setMailError ] = useState(null);

    /**Get input informations */
    const [ userProfil, setUserProfil ] = useState(
        { username: '', mail: '', password: ''}
    );
    
    const handleChange = (e) => {
        setUserProfil({...userProfil, [e.target.name] : e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault(); 
        setOpen(true);
        axios.post('add', userProfil)
            .then((res) => {
            })
            .catch((err) => {
                console.log(err)
            })
    };

    /**Form validaton */
    useEffect(() => {
        const formValidation = () => {
            if(userProfil.username === "" || userProfil.mail === "" || userProfil.password === ""){
                return true
            }else if(!validatePassword.validate(userProfil.password)){
                setPasswordError(' * Votre mot de passe doit contenir au moins 8 caractères et 1 chiffre minimum');
                return true
            }else if(!validateEmail.validate(userProfil.mail)){
                setMailError(' * Votre adresse mail n\'est pas correcte');
                return true
            }else{
                setPasswordError(null);
                setMailError(null);
                return false;
            }
        }

        if(firstRender.current) {
            firstRender.current = false;
            return;
        }
        setDisabled(formValidation())
    }, [ userProfil.username, userProfil.mail, userProfil.password ])

   
    return (
        <div className='profil-form'>
            <Link to='/'>
                <img src={logo} alt="Funny quiz logo"/>
                <p>Quizs marrants pour les petits et les grands!</p>
            </Link>
            <Header as='h2'>Créer un compte</Header>
            <Form
             onSubmit={handleSubmit}
             >
                 <Form.Field>
                     <label> Pseudonyme</label>
                     <input
                      type="text"
                      name="username"
                      value={userProfil.username}
                      onChange={handleChange}
                      />
                 </Form.Field>
                 <Form.Field>
                     <label> Adresse mail</label>
                     <input
                      type="text"
                      name="mail"
                      value={userProfil.mail}
                      onChange={handleChange}
                      />
                      { mailError && <p className="error">{mailError}</p>}
                 </Form.Field>
                 <Form.Field>
                     <label> Mot de passe</label>
                     <input
                      type="password"
                      name="password"
                      placeholder="8 caractères minimum et un chiffre"
                      value={userProfil.password}
                      onChange={handleChange}
                      />
                      { passwordError && <p className="error">{passwordError}</p>}
                 </Form.Field>
                 <div className="buttons">
                    <Button color='green' type='submit' disabled={disable}>Valider</Button>
                        <Link to={'/'}>
                            <Button color='red'>Annuler</Button>
                        </Link>
                </div>
            </Form>
            <Modal
                closeIcon
                open={open}
                onClose={closeModal}
                onOpen={() => setOpen(true)}
            >
            <Modal.Content>
                <p>Compte crée avec succès! Vous pouvez vous connecter maintenant.</p>
            </Modal.Content>
            </Modal>
        </div>
    );

};

export default CreateAccount;