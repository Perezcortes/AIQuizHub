// src/hooks/useAuth.ts

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

// Importa las acciones del slice de autenticación
import { setUser, logout, setLoading, setError } from '@/store/slices/authSlice'

// Hook personalizado que maneja la lógica de autenticación
export function useAuth() {
  // Inicializa el dispatch para poder enviar acciones a Redux
  const dispatch = useDispatch()

  // useEffect se ejecuta una vez al montar el componente
  useEffect(() => {
    async function fetchUser() {
      // Establece el estado de carga a true mientras se realiza la petición
      dispatch(setLoading(true))
      try {
        const res = await fetch('/api/auth/me')

        if (!res.ok) {
          dispatch(logout())
          return
        }

        const data = await res.json()

        // Si el backend indica que el usuario está autenticado, lo guarda en el estado
        if (data.authenticated) {
          dispatch(setUser(data.user))
        } else {
          // Si no está autenticado, se fuerza el logout
          dispatch(logout())
        }
      } catch (error) {
        dispatch(setError('Error al cargar usuario'))
      }
    }

    fetchUser()

  }, [dispatch])
}
