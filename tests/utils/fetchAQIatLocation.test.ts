import { describe, test, expect } from 'vitest'
import { fetchAQIatLocation } from '../../src/utility/airQuality'

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
})