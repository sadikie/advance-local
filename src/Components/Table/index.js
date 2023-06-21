import "./Table.css"

const Table = ({users})=>{
    return(
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Phone</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>{
                            return <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                                <td>{user.phone}</td>
                                <td>{user.company.name}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table