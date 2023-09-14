import request from "supertest";

describe("INT - Aluno Suite", () => {
    it("##GET /aluno should be able to GET all students", async () => {
        const response = await request("http://localhost:8080").get("/aluno");

        expect(response.status).toBe(200);
        expect(response.header["content-type"]).toMatch("json");
    });
    it.skip("##POST /aluno should be able to POST a new student", async () => {
        const response = await request("http://localhost:8080")
            .post("/aluno")
            .send({
                nome: "Marina",
                cpf: "20496689274",
                idade: 23,
            });

        expect(response.status).toBe(201);
        expect(response.header["content-type"]).toMatch("json");
    });
    it("##POST /aluno should NOT be able to post a new student with invalid attributes", async () => {
        const response = await request("http://localhost:8080")
            .post("/aluno")
            .send({
                name: "Isabelle",
                cfp: "22222",
                idoede: 24,
            });

        expect(response.status).toBe(400);
        expect(response.header["content-type"]).toMatch("json");
    });
});
