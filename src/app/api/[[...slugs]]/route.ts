import Elysia, { t } from "elysia";

// const app = new Elysia({ prefix: "/api" })
//   .get("/hello", () => {
//     return { hello: "world" }; // 잘못된 키 "wolrd"를 수정
//   })
//   .post("/", ({ body }) => body, {
//     body: t.Object({
//       name: t.String(),
//     }),
//   });

const app = new Elysia({ prefix: "/api" })
  .get("/hello", () => {
    return { hello: "world2" }; // 잘못된 키 "wolrd"를 수정
  })
  .post("/", ({ body }) => body, {
    body: t.Object({
      name: t.String(),
    }),
  });

export const GET = app.handle;
export const POST = app.handle;
