import { useEffect } from 'react'
import { NavigateFunction } from 'react-router'

export function useAppNavigation({ isFormSubmitted, navigate }: HookParameters) {
  useEffect(() => {
    if (isFormSubmitted) navigate('/success')
    else navigate('/')
  }, [isFormSubmitted])
}

interface HookParameters {
  isFormSubmitted: boolean
  navigate: NavigateFunction
}
