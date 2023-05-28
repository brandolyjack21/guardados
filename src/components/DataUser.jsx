

function DataUser({ userState, edit }){


    return (
        <>
          <li>
            <h2>{userState.first_name}{userState.last_name}</h2>
            <p>correo electronico:</p>
            <p>{userState.email}</p>
            <p>fecha de nacimiento:</p>
            <p>{userState.birthday}</p>
            <button>eliminar</button>
            <button onClick={() => edit(userState.id)}>editar</button>
          </li>
        </>
    )
}

export default DataUser