

const User = ({user}) => {
    const {id, name, username, email, address} = user;
    const userStyle = {
        border: '2px solid salmon',
        borderRadius: '10px',
        backgroundColor: 'light green'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <h3>{username}</h3>
            <span>{email}</span>
        </div>
    );
};

export default User;