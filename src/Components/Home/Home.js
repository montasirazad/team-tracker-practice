import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Detail from '../Details/Detail';

const Home = () => {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
           
    }, [])

 
    return (
        <div>
            <h1>This is Home</h1>
            <h2>Total teams: {teams.length}</h2>

            {
                teams.map(team => <Detail team={team} key={team.strAlternate}  >  </Detail>)
            }
        </div>
    );
};

export default Home;