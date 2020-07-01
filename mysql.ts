import { Client } from "https://deno.land/x/mysql/mod.ts";

const credential ={
  hostname: "typof.ch0f92wfnknx.ap-south-1.rds.amazonaws.com",
  username: "typof",
  db: "deno",
  password: "tuna1234",
}

const client= await new Client().connect(credential)

export { client }

