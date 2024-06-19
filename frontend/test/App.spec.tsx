import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App/App'

describe('App test', () => {
  beforeEach(() => {
    render(<App />)
  })

  test('should Be App', async () => {
    expect(screen.getByText(/Главная/i)).not.toBe(null)
  })
})
