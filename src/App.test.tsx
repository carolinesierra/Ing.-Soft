import { describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'


describe('App', () => { 

  it('should rendering', () => { 
    render(<App />);
  });

  it('should have title "Mi DUI es valido?"', () => { 
    render(<App />)
    expect(screen.getByText('Mi DUI es valido?')).toBeInTheDocument()
  });

  it('should have an input text', () => { 
    render(<App />)
    expect(screen.getByPlaceholderText('000000000')).toBeInTheDocument()
  });

  it(' should have a button with text "Validar" ', () => { 
    render(<App />)
    expect(screen.getByRole('button', 
    {name: /validar/i})).toBeInTheDocument()
  });

})