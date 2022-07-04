import React from 'react'
import { useParams } from 'react-router-dom';


function UserProfile() {
    const { githubLogin } = useParams();
    console.log(githubLogin);
    return (
        <div>
            <p>Bonjour {githubLogin}</p>
        </div>
    )
}

export default UserProfile;
