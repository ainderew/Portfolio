import { render, screen } from '@testing-library/react'
import SocialWidget from './social-widget'

describe('SocialWidget', () => {
  it('renders social media links', () => {
    render(<SocialWidget />)

    const githubLink = screen.getByLabelText('GitHub Profile')
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href', 'https://www.github.com/ainderew')

    const linkedinLink = screen.getByLabelText('LinkedIn Profile')
    expect(linkedinLink).toBeInTheDocument()
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/andrew-pinon-620b4b14a/')
  })
})
