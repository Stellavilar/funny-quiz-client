import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

function BurgerButton () {
    const history = useHistory();
    return (
        <div className="burger-button">
            <Dropdown item text='' icon='bars'>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=> history.push('/createAccount')} >Créer un compte</Dropdown.Item>
                    <Dropdown.Item>Connexion</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default BurgerButton;
