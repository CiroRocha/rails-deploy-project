import axios from 'axios'
import React from 'react'

import UserCard from '../components/UserCard/UserCard'

import { getApiUsersPath } from '../lib/requestsLib'

const Network = ({ userData }) => {
  return (
    <div>
      {userData?.map((user) => (
        <UserCard userData={user} />
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const userRequest = await axios.get(getApiUsersPath())
  console.log(userRequest)

  return {
    props: { userData: userRequest?.data?.users },
  }
}

export default Network
