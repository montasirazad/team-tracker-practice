import { useState, useEffect } from 'react';
import { useLocation, useParams } from "react-router";
import maleImage from '../../male.jpg'
import femaleImage from '../../female2.jpg'

const TeamDetails = () => {


    const [team, setTeam] = useState({})
    const { strAlternate, strDescriptionEN, strTeamBadge } = team

    const { idTeam } = useParams()
    let location = useLocation()


    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [idTeam])
    return (
        <div>
            {

                location.state ? <img src={maleImage} alt="" style={{width: '100%', height: 'auto'}} /> :

                    <img src={femaleImage} alt="" style={{width:'100%', height: 'auto'}} />

            } <br />

            <img style={{ height: 'auto',width:'150px' }} src={strTeamBadge} alt="" />
            <h2>{strAlternate}</h2>
            <p>{strDescriptionEN}</p>

 
        </div>
    );
};

export default TeamDetails;