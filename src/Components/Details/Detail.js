 import { Link } from 'react-router-dom';
 
 const Detail = (props) => {
    const { strAlternate, idTeam } = props.team


    return (
         
            <div style={{ border: '1px solid green', marginBottom: '10px', padding: '10px' }}>

                <h1> {strAlternate}</h1>
                <Link to= {{pathname:`team-detail${idTeam}`,state:true}}> <button  > Explore Male Team</button> </Link> <br /> <br />
                <Link to={`team-detail${idTeam}`}> <button > Explore Female Team</button> </Link>
 

            </div>
        
    );
};

export default Detail;