import React from 'react';
import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/vitest"
import Modal from '../../src/components/Modal';

describe('Modal', () => {
    it('should render name when provided', () => {
        render(<Modal name="John Doe" showPopup={true} />)

       const h3 = screen.getByRole('heading')

        expect(h3).toBeInTheDocument()
        expect(h3).toHaveTextContent('Welcome back, John Doe !')
    })
})