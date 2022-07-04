import React from 'react'
import { useParams } from 'react-router-dom';


function UserProfile() {
    const {githubPrfl} = useParams();
    return (
        <div>
            <p>Hello {githubPrfl}!</p>
        </div>
    );
}

export default UserProfile;
