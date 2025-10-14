import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import Navigation from '@/components/navigation/Navigation'

const NavigationWrapper = () => (
  <BrowserRouter>
    <Navigation />
  </BrowserRouter>
)

describe('Navigation Component', () => {
  test('renders logo and navigation items', () => {
    render(<NavigationWrapper />)
    
    expect(screen.getByAltText('11th Temple Solutions')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  test('mobile menu toggles correctly', () => {
    render(<NavigationWrapper />)
    
    const mobileMenuButton = screen.getByRole('button', { name: /menu/i })
    fireEvent.click(mobileMenuButton)
    
    // Mobile navigation should be visible
    expect(screen.getAllByText('Services')).toHaveLength(2) // Desktop and mobile
  })

  test('services dropdown shows all service items', () => {
    render(<NavigationWrapper />)
    
    const servicesMenu = screen.getByText('Services Menu')
    fireEvent.mouseEnter(servicesMenu.parentElement!)
    
    expect(screen.getByText('Process Automation')).toBeInTheDocument()
    expect(screen.getByText('Customer Service Agents')).toBeInTheDocument()
    expect(screen.getByText('Local SEO AI')).toBeInTheDocument()
  })
})
