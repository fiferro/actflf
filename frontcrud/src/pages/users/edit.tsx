import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { api } from '../../services/api'

export default function EditUser() {
  const { query, push } = useRouter()
  const { id } = query

  const [user, setUser] = useState({ name: '', email: '', password: '' })

  useEffect(() => {
    if (id) {
      api.get(`/users/${id}`).then(res => setUser(res.data))
    }
  }, [id])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await api.put(`/users/${id}`, user)
    push('/users')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Editar Usuário</h1>
      <input value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} />
      <input value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} />
      <input type="password" value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} />
      <button type="submit">Salvar</button>
    </form>
  )
}