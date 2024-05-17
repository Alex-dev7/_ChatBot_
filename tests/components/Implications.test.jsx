import React from 'react';
import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import Implications from '../../src/components/Implications';

describe('Implications', () => {
    it('renders implications text when provided', () => {
        // const testText = 'Test implications text';
        render(<Implications text="hi" />)

        screen.debug()
    })
})