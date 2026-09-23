import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
export const waitlistSignups = sqliteTable("waitlist_signups", {
  email: text("email").primaryKey(),
  createdAt: text("created_at").notNull(),
  consent: integer("consent").notNull(),
  consentVersion: text("consent_version").notNull(),
  source: text("source").notNull(),
});

export const teamInquiries = sqliteTable('team_inquiries', {
 id: text('id').primaryKey(),
 createdAt: text('created_at').notNull(),
 name: text('name').notNull(),
 organization: text('organization').notNull(),
 role: text('role').notNull(),
 monthlyVolume: text('monthly_volume').notNull(),
 email: text('email').notNull(),
 consent: integer('consent').notNull()
});
