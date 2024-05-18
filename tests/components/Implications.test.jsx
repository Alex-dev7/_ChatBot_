import React from 'react';
import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import Implications from '../../src/components/Implications';
import "@testing-library/jest-dom/vitest"

describe('Implications', () => {
    it('renders implications text when provided', () => {
        const testText = 'Test implications text';
        render(<Implications text={testText} />)

       const divElement =  screen.getByTestId('implications')

       expect(divElement).toBeInTheDocument()
       expect(divElement).toHaveTextContent(/\S/)
    })
    it('does not render when no text prop is provided', () => {
        render(<Implications  text="" />)

        const pElement = screen.queryByRole('paragraph')

        expect(pElement).not.toBeInTheDocument()
    })
})