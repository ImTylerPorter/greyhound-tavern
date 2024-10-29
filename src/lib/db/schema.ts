import { pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";

export const profileTable = pgTable("profile",{
  id: uuid("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  profilePhoto: varchar('profile_photo', { length: 255 }),
})