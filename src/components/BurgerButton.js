import React from 'react';
import { Dropdown } from 'semantic-ui-react';

function BurgerButton () {
    return (
        <div className="burger-button">
            <Dropdown item text='' icon='bars'>
                <Dropdown.Menu>
                    <Dropdown.Item>Créer un compte</Dropdown.Item>
                    <Dropdown.Item>Connexion</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default BurgerButton;
