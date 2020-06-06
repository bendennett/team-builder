import React from "react";

const Members = props => {
    return (
        <div>
            {props.teamMembers.map(teamMember => (
                <div key={teamMember.id}>
                    <h2>{teamMember.name}</h2>
                    <h3>{teamMember.job}</h3>
                    <h6>{teamMember.email}</h6>
                    </div>
            ))}
        </div>
    );
};

export default Members