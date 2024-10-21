import express from "express";
import request from "supertest";
import Test from "supertest/lib/test";

const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});
Test("Hello World", async () => {
  const response = await request(app).get("/");
  expect(response.text).toBe("Hello World");
});
