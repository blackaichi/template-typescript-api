import axios from "axios"
import { PORT } from "../../src/utils/envLoader"

describe('Test V1 endpoints', () => {
    describe('healthcheck endpoint', () => {
        it('should return status 200', async () => {
            const response = await axios.get(`http://app_dev:${PORT}/api/v1/healthcheck`)

            expect(response.data.success).toBe(true);
            expect(response.status).toBe(200);
        })
    })
})