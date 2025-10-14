
import { render, screen } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import App from '@/App'

// Mock the lazy-loaded components to avoid import issues in tests
vi.mock('@/pages/Index', () => ({
  default: () => <div>Index Page</div>
}))

vi.mock('@/components/AccessibilityQuestion', () => ({
  default: () => <div>Accessibility Question</div>
}))

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
})
