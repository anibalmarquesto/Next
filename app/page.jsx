import React from "react";
import Users from "@/components/Users";


async function fetchUsers() {
  const rest = await fetch("https://reqres.in/api/users")
  const data = await rest.json()
  return data.data
}

async function IndexPage() {
  const users = await fetchUsers();
  return (
    <div>
      <h1> Index Page</h1>
      <Users  users={users}/>

    </div>

  )
}

export default IndexPage;