'use client' 

import { useQuery } from '@tanstack/react-query'
import { api } from '../services/api'
import Link from 'next/link'
import { User } from './types/User' 

const fetchUsers = async () => {
  const { data } = await api.get('/users')
  return data
}

export default function UsersList() {
  const { data: users = [], isLoading } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })
  
  if (isLoading) return <p>Carregando...</p>

  return (
    <div>
      <h1>Usuários</h1>
      <Link href="/users/new">➕ Novo Usuário</Link>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
            {' | '}
            <Link href={`/users/${user.id}/edit`}>Editar</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}