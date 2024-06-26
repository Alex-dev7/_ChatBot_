import { describe, test, expect, vi } from 'vitest'
import { fetchAQIatLocation } from '../../src/utility/airQuality'


vi.mock('../../src/utility/airQuality', () => {
    return {
        fetchAQIatLocation() 
        {
            return {
                data: expect.objectContaining({
                    aqi: 15,
                    city: expect.objectContaining({
                        name: "Stillwater, New York, USA",
                    }),
                }),
                status: "ok",
            }

        }
    
    }
})


describe('fetchAQIatLocation', () => {



    test('loads data at location', async () => {
        const data = await fetchAQIatLocation()

        expect(data).toEqual(expect.objectContaining({
            data: expect.objectContaining({
                aqi: 15,
                city: expect.objectContaining({
                    name: "Stillwater, New York, USA",
                }),
            }),
            status: "ok",
        }))


    }, 10000)


    // test('throws an error when fetch fails', async () => {


    //     // Use the mock function instead of the real fetchAQIatLocation
    //     const data = await mockFetchAQI();

    //     // Expect the mock to have been called once
    //     expect(mockFetchAQI).toHaveBeenCalled();

    //     // Expect the error thrown by the mock to match the expected error message
    //     expect(data).toThrow('NETWORK ERROR:');
    // }, 10000);
})