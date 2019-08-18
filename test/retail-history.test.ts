import request from 'supertest';
import app from '../src/app';

describe("GET /v1/retail-history", () => {
    
    it("should return success response", () => {
        return request(app.router).get("/v1/retail-history").expect(200);
    });

    it("should return response with message: Successful", (done) => {
        return request(app.router).get("/v1/retail-history").expect(200).end((_, resp) => {
            expect(JSON.parse(resp.text).message).toBe("Successful");
            done();
        })
    });
});