import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const tickets = sqliteTable('tickets', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  username: text('username').notNull().unique(),
  avatar: text('avatar').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
})
