import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DO $$ BEGIN
 CREATE TYPE "enum_covers_page" AS ENUM('home', 'service', 'about', 'contact', 'blog');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "covers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"page" "enum_covers_page" NOT NULL,
	"cover_id" uuid NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "covers_locales" (
	"heading" varchar NOT NULL,
	"description" varchar NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" uuid NOT NULL,
	CONSTRAINT "covers_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "configuration_phone_numbers" (
	"_order" integer NOT NULL,
	"_parent_id" uuid NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"phone" varchar
);

CREATE TABLE IF NOT EXISTS "configuration_emails" (
	"_order" integer NOT NULL,
	"_parent_id" uuid NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"email" varchar
);

CREATE TABLE IF NOT EXISTS "configuration_addresses" (
	"_order" integer NOT NULL,
	"_parent_id" uuid NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "configuration_addresses_locales" (
	"address" varchar,
	"street" varchar,
	"city" varchar,
	"province" varchar,
	"country" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "configuration_addresses_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "configuration" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"logo_id" uuid,
	"logo_square_id" uuid,
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "configuration_locales" (
	"site_name" varchar NOT NULL,
	"slogan" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" uuid NOT NULL,
	CONSTRAINT "configuration_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

DROP INDEX IF EXISTS "_services_v_autosave_idx";
DROP INDEX IF EXISTS "_service_categories_v_autosave_idx";
DROP INDEX IF EXISTS "_posts_v_autosave_idx";
DROP INDEX IF EXISTS "_post_categories_v_autosave_idx";
DROP INDEX IF EXISTS "_projects_v_autosave_idx";
DROP INDEX IF EXISTS "_reviews_v_autosave_idx";
DROP INDEX IF EXISTS "_faq_v_autosave_idx";
DROP INDEX IF EXISTS "_pages_v_autosave_idx";
ALTER TABLE "posts" ADD COLUMN "content_html" varchar;
ALTER TABLE "_posts_v" ADD COLUMN "version_content_html" varchar;
CREATE UNIQUE INDEX IF NOT EXISTS "covers_page_idx" ON "covers" ("page");
CREATE INDEX IF NOT EXISTS "covers_created_at_idx" ON "covers" ("created_at");
CREATE INDEX IF NOT EXISTS "configuration_phone_numbers_order_idx" ON "configuration_phone_numbers" ("_order");
CREATE INDEX IF NOT EXISTS "configuration_phone_numbers_parent_id_idx" ON "configuration_phone_numbers" ("_parent_id");
CREATE INDEX IF NOT EXISTS "configuration_emails_order_idx" ON "configuration_emails" ("_order");
CREATE INDEX IF NOT EXISTS "configuration_emails_parent_id_idx" ON "configuration_emails" ("_parent_id");
CREATE INDEX IF NOT EXISTS "configuration_addresses_order_idx" ON "configuration_addresses" ("_order");
CREATE INDEX IF NOT EXISTS "configuration_addresses_parent_id_idx" ON "configuration_addresses" ("_parent_id");
ALTER TABLE "_services_v" DROP COLUMN IF EXISTS "autosave";
ALTER TABLE "_service_categories_v" DROP COLUMN IF EXISTS "autosave";
ALTER TABLE "_posts_v" DROP COLUMN IF EXISTS "autosave";
ALTER TABLE "_post_categories_v" DROP COLUMN IF EXISTS "autosave";
ALTER TABLE "_projects_v" DROP COLUMN IF EXISTS "autosave";
ALTER TABLE "_reviews_v" DROP COLUMN IF EXISTS "autosave";
ALTER TABLE "_faq_v" DROP COLUMN IF EXISTS "autosave";
ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "autosave";
DO $$ BEGIN
 ALTER TABLE "covers" ADD CONSTRAINT "covers_cover_id_media_id_fk" FOREIGN KEY ("cover_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "covers_locales" ADD CONSTRAINT "covers_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "covers"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "configuration_phone_numbers" ADD CONSTRAINT "configuration_phone_numbers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "configuration"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "configuration_emails" ADD CONSTRAINT "configuration_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "configuration"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "configuration_addresses" ADD CONSTRAINT "configuration_addresses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "configuration"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "configuration_addresses_locales" ADD CONSTRAINT "configuration_addresses_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "configuration_addresses"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "configuration" ADD CONSTRAINT "configuration_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "configuration" ADD CONSTRAINT "configuration_logo_square_id_profile_id_fk" FOREIGN KEY ("logo_square_id") REFERENCES "profile"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "configuration_locales" ADD CONSTRAINT "configuration_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "configuration"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`)
};

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DROP TABLE "covers";
DROP TABLE "covers_locales";
DROP TABLE "configuration_phone_numbers";
DROP TABLE "configuration_emails";
DROP TABLE "configuration_addresses";
DROP TABLE "configuration_addresses_locales";
DROP TABLE "configuration";
DROP TABLE "configuration_locales";
ALTER TABLE "_services_v" ADD COLUMN "autosave" boolean;
ALTER TABLE "_service_categories_v" ADD COLUMN "autosave" boolean;
ALTER TABLE "_posts_v" ADD COLUMN "autosave" boolean;
ALTER TABLE "_post_categories_v" ADD COLUMN "autosave" boolean;
ALTER TABLE "_projects_v" ADD COLUMN "autosave" boolean;
ALTER TABLE "_reviews_v" ADD COLUMN "autosave" boolean;
ALTER TABLE "_faq_v" ADD COLUMN "autosave" boolean;
ALTER TABLE "_pages_v" ADD COLUMN "autosave" boolean;
CREATE INDEX IF NOT EXISTS "_services_v_autosave_idx" ON "_services_v" ("autosave");
CREATE INDEX IF NOT EXISTS "_service_categories_v_autosave_idx" ON "_service_categories_v" ("autosave");
CREATE INDEX IF NOT EXISTS "_posts_v_autosave_idx" ON "_posts_v" ("autosave");
CREATE INDEX IF NOT EXISTS "_post_categories_v_autosave_idx" ON "_post_categories_v" ("autosave");
CREATE INDEX IF NOT EXISTS "_projects_v_autosave_idx" ON "_projects_v" ("autosave");
CREATE INDEX IF NOT EXISTS "_reviews_v_autosave_idx" ON "_reviews_v" ("autosave");
CREATE INDEX IF NOT EXISTS "_faq_v_autosave_idx" ON "_faq_v" ("autosave");
CREATE INDEX IF NOT EXISTS "_pages_v_autosave_idx" ON "_pages_v" ("autosave");
ALTER TABLE "posts" DROP COLUMN IF EXISTS "content_html";
ALTER TABLE "_posts_v" DROP COLUMN IF EXISTS "version_content_html";`)
};
