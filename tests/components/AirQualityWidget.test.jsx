import React from 'react';
import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import { fetchAQIatLocation } from '../../src/utility/airQuality';
import AirQualityWidget from '../../src/components/AirQualityWidget';



describe('AirQualityWidget', () => {
    it('should render when AQ data is provided',async () => {
        // const data = await fetchAQIatLocation()

        render(<AirQualityWidget  />)

        const locationContainer = await screen.findByTestId('location-aqi-container')
        expect(locationContainer).toBeInTheDocument()
        
    })
} )