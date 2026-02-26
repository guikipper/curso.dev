test("Get to /api/v1/status should return 200", async () => {
  const response = await fetch(
    "https://cuddly-funicular-g5xqrr5x9v9cvgwv-3000.app.github.dev/api/v1/status",
  );
  console.log(response.status);
  expect(response.status).toBe(200);
});
