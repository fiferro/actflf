import { useState } from 'react'
import { api } from '../../services/api'
import { useRouter } from 'next/router'

export default function CreateUser() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    await api.post('/users', { name, email, password })
    router.push('/users')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Cadastrar Usuário</h1>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Nome" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" />
      <button type="submit">Cadastrar</button>
    </form>
  )
}