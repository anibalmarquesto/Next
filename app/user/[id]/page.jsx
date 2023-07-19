/* async function getUser(id) {
   const res = await fetch(`https://reqres.in/api/users/${id}`)
   const data = await res.json()
   return data.data
}
async function UsersPage() {
   const user = await getUser({ params });

   return (
       <><div>
           <h1>User Details</h1>

       </div><div>
               <img src={user.avatar} alt="11111" />
               <h3>{user.id} {user.fist_name} {user.last_name}</h3>
               <p>{user.email}</p>
           </div></>
       
   )
}

export default UsersPage; */
import { useParams } from "next/navigation";

async function getUser(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    return data.data
}

async function UsersPage({ params }) {
    const user = await getUser(params.id);
    return (
        <>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header tex-center">
                            <img src={user.avatar} alt={user.email} />

                        </div>
                        <div className="card-body text-center">
                            <h3>{user.id} {user.fist_name} {user.last_name}</h3>
                            <p>{user.email}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UsersPage;