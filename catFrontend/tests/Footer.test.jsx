import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import Footer from '../src/components/Footer'
import { describe, expect, test } from 'vitest'

describe('Footer component', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
    })

    // Comprobamos logo, textos e iconos
    test('check logo, text, and social media icons', () => {
        const logo = screen.getByAltText('Icon')
        expect(logo).toBeInTheDocument()

        const followUsText = screen.getByText(/Follow Us/i)
        expect(followUsText).toBeInTheDocument()

        const instagramIcon = screen.getByAltText('Instagram Logo')
        const facebookIcon = screen.getByAltText('Facebook Logo')
        expect(instagramIcon).toBeInTheDocument()
        expect(facebookIcon).toBeInTheDocument()

        const quickLinksText = screen.getByText(/Quick Links/i)
        expect(quickLinksText).toBeInTheDocument()

        const subscribeText = screen.getByText(/Subscribete/i)
        expect(subscribeText).toBeInTheDocument()

        //Input con placeholder
        const emailInput = screen.getByPlaceholderText('Your email')
        expect(emailInput).toBeInTheDocument()

        //Enlace a la página sobre nosotros
        const aboutLink = screen.getByText(/About/i)
        expect(aboutLink).toBeInTheDocument()
        expect(aboutLink.closest('a')).toHaveAttribute('href', 'aboutus')
    })
})
