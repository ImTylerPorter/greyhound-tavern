import { pgTable, uuid, text, timestamp, varchar, integer, decimal, boolean } from "drizzle-orm/pg-core";

export const profileTable = pgTable("profile",{
  id: uuid("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  profilePhoto: varchar('profile_photo', { length: 255 }),
})

export const menuCategoryTable = pgTable("menu_categories", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  description: text("description"),
  parentId: uuid("parent_id").references(() => menuCategoryTable.id),
});

export const menuItemTable = pgTable("menu_items", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  description: text("description"),
  price: decimal("price", { precision: 10, scale: 2 }),
  categoryId: uuid("category_id").references(() => menuCategoryTable.id).notNull(),
  imageUrl: varchar("image_url", { length: 255 }),
  available: integer("available").default(1), // 1 for available, 0 for not available
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const eventTable = pgTable("events", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  description: text("description"),
  startDate: timestamp("start_date"),
  endDate: timestamp("end_date"),
  location: text("location"),
  creatorId: uuid("creator_id").references(() => profileTable.id),
  isPublic: boolean("is_public").default(true),
});