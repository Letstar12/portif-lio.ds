import React, { useState } from 'react';
import { List } from 'react-window';

const UserItem = React.memo(({ user }) => {
  return <div>{user}</div>;
});

class AddUserButton extends React.PureComponent {
  render() {
    return <button onClick={this.props.onClick}>Adicionar</button>;
  }
}

function App() {
  const [users, setUsers] = useState([
    'Alice',
    'Bob',
    'Charlie',
    'Daniel',
    'Eduarda',
    'Fernanda',
    'Gabriel',
    'Helena',
    'Igor',
    'Julia'
  ]);

  const [newUser, setNewUser] = useState('');

  const addUser = () => {
    if (newUser.trim() !== '') {
      setUsers([...users, newUser]);
      setNewUser('');
    }
  };

  return (
    <div>
      <h1>Lista de Usuários</h1>

      <input
        type="text"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
        placeholder="Adicionar usuário"
      />

      <AddUserButton onClick={addUser} />

      <List
        height={150}
        itemCount={users.length}
        itemSize={35}
        width={300}
      >
        {({ index, style }) => (
          <div style={style}>
            <UserItem user={users[index]} />
          </div>
        )}
      </List>
    </div>
  );
}

export default App;

