import { Generated, ColumnType } from "kysely";
import { createKysely } from "@vercel/postgres-kysely";

interface UserTable {
  id: Generated<number>;
  name: string;
  email: string;
  image: string;
  createdAt: ColumnType<Date, string | undefined, never>;
}

export interface Database {
  users: UserTable;
}

export const db = createKysely<Database>();
