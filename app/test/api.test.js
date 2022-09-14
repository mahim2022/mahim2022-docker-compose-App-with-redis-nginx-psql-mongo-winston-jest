var request = require("supertest");
var app = require("../app");

describe("users", () => {
	it("getData", () => {
		return request(app)
			.get("/")
			.expect(200)
			.expect("Content-Type", /json/)
			.then((res) => {
				expect(res.body).toEqual(
					expect.arrayContaining([
						expect.objectContaining({
							user_id: expect.any(Number),
							user_name: expect.any(String),
						}),
					])
				);
			});
	});

	it("post", () => {
		return request(app)
			.post("/")
			.send({ user_name: "mahim" })
			.set("Accept", "application/json")
			.expect("Content-Type", /json/)
			.expect(200)
			.then((res) => {
				expect(res.body).toEqual(
					expect.arrayContaining([
						expect.objectContaining({
							user_id: expect.any(Number),
							user_name: expect.any(String),
						}),
					])
				);
			});
	});
});
