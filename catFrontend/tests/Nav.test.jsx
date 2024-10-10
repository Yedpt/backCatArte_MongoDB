// Importaciones necesarias
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import Layout from '../src/layout/Layout'
import { describe, expect, test, beforeEach } from 'vitest'

describe('Nav component', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        )
    })

    //  Comprobamos que hay un logo, un texto y el menú
    test('renders logo, title, and hamburger menu', () => {
        const logo = screen.getByAltText('Logo')
        const titleElements = screen.getAllByText(/MeCat Museum/i)
        const title = titleElements[0]
        const hamburgerIcon = screen.getByAltText('Menú')

        expect(logo).toBeInTheDocument()
        expect(title).toBeInTheDocument()
        expect(hamburgerIcon).toBeInTheDocument()
    })

    //Comprobamos que el logo tiene un enlace que lleva a Home
    test('link associated with the logo', () => {
        const logo = screen.getByAltText('Logo')
        const logoLink = logo.closest('a')
        expect(logoLink).toBeInTheDocument()
        expect(logoLink).toHaveAttribute('href', '/')
    })

    // Comprobamos elementos del menú hamburguesa y si se abre con un clic
    test('check hamburger menu items and if it opens with a click', async () => {
        const hamburgerIcon = screen.getByAltText('Menú')

        // Abrir el menú
        fireEvent.click(hamburgerIcon)

        // Comprobamos opciones del menú
        const homeLink = await screen.findByText('Home')
        const aboutUsLink = await screen.findByText('About Us')
        const contactLink = await screen.findByText('Contacto')

        expect(homeLink).toBeInTheDocument()
        expect(aboutUsLink).toBeInTheDocument()
        expect(contactLink).toBeInTheDocument()
    })

    // Test para el select de categoría incluyendo todas las opciones
    test('check category filter works', async () => {
        // Click en el icono de búsqueda
        const searchIcon = screen.getByAltText('Buscar')
        fireEvent.click(searchIcon)

        // Comprobamos que el filtro está visible
        const filterComponent = screen.getByTestId('filter-component')
        expect(filterComponent).toBeInTheDocument()

        // Interactuar con el select de Categoría
        const categorySelect = screen.getByText('Categoría').closest('div')
        fireEvent.mouseDown(categorySelect)

        // Esperar que las opciones se carguen
        await waitFor(() => {
            expect(screen.getByText('Gatos siendo gatos')).toBeInTheDocument()
            expect(screen.getByText('Gatos siendo humanos')).toBeInTheDocument()
            expect(screen.getByText('Gatos enfadados')).toBeInTheDocument()
            expect(screen.getByText('Me dijiste')).toBeInTheDocument()
        })

        // Seleccionar "Gatos siendo gatos"
        fireEvent.click(screen.getByText('Gatos siendo gatos'))

        // Comprobación de que la opción seleccionada es correcta
        expect(
            await screen.findByText('Gatos siendo gatos')
        ).toBeInTheDocument()

        // Selección de "Gatos siendo humanos"
        fireEvent.mouseDown(categorySelect)
        fireEvent.click(screen.getByText('Gatos siendo humanos'))

        // Comprobación de que la nueva opción seleccionada es correcta
        expect(
            await screen.findByText('Gatos siendo humanos')
        ).toBeInTheDocument()

        // Selección de "Gatos enfadados"
        fireEvent.mouseDown(categorySelect)
        fireEvent.click(screen.getByText('Gatos enfadados'))

        // Comprobación de que la nueva opción seleccionada es correcta
        expect(await screen.findByText('Gatos enfadados')).toBeInTheDocument()

        // Selección de "Me dijiste"
        fireEvent.mouseDown(categorySelect)
        fireEvent.click(screen.getByText('Me dijiste'))

        // Comprobación de que la nueva opción seleccionada es correcta
        expect(await screen.findByText('Me dijiste')).toBeInTheDocument()
    })

    // Test para el filtro de popularidad
    test('check popularity filter works', async () => {
        // Click en el icono de búsqueda
        const searchIcon = screen.getByAltText('Buscar')
        fireEvent.click(searchIcon)

        // Comprobamos que el filtro está visible
        const filterComponent = screen.getByTestId('filter-component')
        expect(filterComponent).toBeInTheDocument()

        // Interactuar con el select de Popularidad
        const popularitySelect = screen.getByText('Popularidad').closest('div')
        fireEvent.mouseDown(popularitySelect)

        // Seleccionar "Más populares"
        fireEvent.click(screen.getByText('Más populares'))

        // Comprobación de que se ha seleccionado la opción correcta
        expect(await screen.findByText('Más populares')).toBeInTheDocument()

        // Seleccionar "Menos populares"
        fireEvent.mouseDown(popularitySelect)
        fireEvent.click(screen.getByText('Menos populares'))

        // Comprobación de que se ha seleccionado la opción correcta
        expect(await screen.findByText('Menos populares')).toBeInTheDocument()
    })

    // Test para el filtro de fecha
    test('check date filter works', async () => {
        // Click en el icono de búsqueda
        const searchIcon = screen.getByAltText('Buscar')
        fireEvent.click(searchIcon)

        // Comprobamos que el filtro está visible
        const filterComponent = screen.getByTestId('filter-component')
        expect(filterComponent).toBeInTheDocument()

        // Interactuar con el select de Fecha
        const dateSelect = screen.getByText('Fecha').closest('div')
        fireEvent.mouseDown(dateSelect)

        // Seleccionar "Más recientes"
        fireEvent.click(screen.getByText('Más recientes'))

        // Comprobación de que se ha seleccionado la opción correcta
        expect(await screen.findByText('Más recientes')).toBeInTheDocument()

        // Seleccionar "Más viejunos"
        fireEvent.mouseDown(dateSelect)
        fireEvent.click(screen.getByText('Más viejunos'))

        // Comprobación de que se ha seleccionado la opción correcta
        expect(await screen.findByText('Más viejunos')).toBeInTheDocument()
    })
})
