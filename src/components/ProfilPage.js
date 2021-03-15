import React, { useState, useEffect } from 'react';
import { Header, Segment, Button, Dimmer, Loader, Confirm, List } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import logo from '../img/FUNNY QUIZ.jpg';
import axios from 'axios';


function ProfilPage () {

    const history = useHistory();

    /**Get user Id */
    const userId = localStorage.getItem('userId');

    const [ userData, getUserData ] = useState([]);
    const userProfil = () => {
        axios
            .get(`/users/${userId}` , { 
                // withCredentials: true,
                headers: {
                  Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then((res) => {
                getUserData(res.data);                
                setLoading(true);
            })
            .catch((err) => {
                console.log(err);
            })
    };
   userProfil();

   /**Get game history by user */
   const [ userHistory, setUserHistory ] = useState([]);
   const getHistory = () => {
       axios
        .get(`scoresbyuser/user/${userId}` , { 
            withCredentials: true,
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((res) => {
            setUserHistory(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
   };
 

   const getHistoryData = userHistory.map((historyData) => 
        <List key={historyData.id}>
            <List.Item>
            <List.Icon name='check square outline' />
                <List.Content>
                    { historyData.subcategory ? <List.Header as='h4' style={{color: historyData.subcategory.color}}>{historyData.subcategory.title}</List.Header> : null}
                    <List.Header as='h4' style={{color: historyData.tag.color}}>{historyData.tag.title}</List.Header>
                    <List.Header as='h4' style={{color: historyData.level.color}}>{historyData.level.title}</List.Header>
                    <List.Description>
                    Tu as obtenu {historyData.number} point(s) le {new Intl.DateTimeFormat('fr-FR').format(new Date(historyData.user.created_at))}
                    </List.Description>
                </List.Content>
            </List.Item>
        </List>
   );

   /**On click logo, go to main page */
   const handleClick = () => {
        history.push(`/`);
   };

    /**Loader */
    const [ loading, setLoading ] = useState(false);

    /**Delete account */
    const [ getOpen, setGetOpen ] = useState(false);
    const onClickDelete = () => {
        /**first disconnect */
        const token = localStorage.getItem('token');
        axios
            .get('api/logout', { headers:{
                Authorization: 'Bearer ' + token,
            },        
          }) 
          .then((res) => {
              localStorage.removeItem('token');
              window.location.reload(false);
            setGetOpen(false);
              /**Then delete account */
              deleteAccount();
          })
          .catch((err) => {
              console.log(err)
          })
          history.push('/');
    };
    const handleCancel = () => {
        setGetOpen(false);
    };
    const deleteAccount = () => {
        axios.delete(`delete/${userId}`)
        .then((res) =>{
            window.location.reload(false)
        })
        .catch((err) =>{
            console.log(err);
        })
        return deleteAccount;
    };

   useEffect(getHistory, [userId]);
   useEffect(userProfil, [userId]);

   
    return (
        <div className='profil-page'>
            <div className="header">
                    <img onClick={handleClick} src={logo} alt="Funny quiz logo"/>
            </div>
            <p className="arrow" onClick={handleClick}>&#8678; Retour à la page d'accueil</p>
            <Segment>
                {loading ? [] :  <Dimmer active inverted><Loader inverted /></Dimmer> }
                <Header as='h2' className='welcome'>Bienvenue sur ton Profil {userData.username}!</Header>
                <Header as='h2'>Voici ton historique de jeux:</Header>
                { userHistory ? <ul>{getHistoryData}</ul> : <p>Erreur</p>}
               
            </Segment>
            <div className='buttons'>
                <Button onClick={() => history.push(`/editprofile/${userData.id}`)}  >Modifier le profil</Button>
                <Button color='red' onClick={() =>setGetOpen(true)}>Supprimer le profil</Button>
            </div>
            <Confirm 
                open={getOpen}
                onCancel={handleCancel}
                onConfirm={onClickDelete}
                content=' Êtes-vous bien sûr(e) de vouloir supprimer votre profil?'
                cancelButton='Annuler'
                confirmButton='OK'
            />
        </div>

    );

};

export default ProfilPage;