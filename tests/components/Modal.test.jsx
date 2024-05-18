import React from 'react';
import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/vitest"
import Modal from '../../src/components/Modal';

describe('modal', () => {
    it('should render name when provided', () => {
        render(<Modal name="John Doe" showPopup={true} />)
        

    })
})