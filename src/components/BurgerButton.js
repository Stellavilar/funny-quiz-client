import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function BurgerButton () {
    const history = useHistory();

    /**Detect if a user is connected */
    const getToken = localStorage.getItem('token');
    /**Get user id  */
    const userId = localStorage.getItem('userId');

    /**On click disconnect button, remove token and username from localstorage */
    const disconnect = () => {
        const token = localStorage.getItem('token');
        axios
            .get('api/logout', { headers:{
                Authorization: 'Bearer ' + token,
            },        
        }) 
            .then((res) => {
              localStorage.clear();
              window.location.reload(false)
        })
            .catch((err) => {
              console.log(err)
        })
    };

    return (
        <div className="burger-button">
            <Dropdown item text='' icon='bars'>
            {getToken ? 
                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=> history.push(`/profilPage/${userId}`)}>Voir mon profil</Dropdown.Item>
                    <Dropdown.Item onClick={()=> disconnect()}>Déconnexion</Dropdown.Item>
                </Dropdown.Menu> :
                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=> history.push('/createAccount')} >Créer un compte</Dropdown.Item>
                    <Dropdown.Item onClick={()=> history.push('/login')}>Connexion</Dropdown.Item>
                </Dropdown.Menu>
        }
                
            </Dropdown>
        </div>
    );
};

export default BurgerButton;
