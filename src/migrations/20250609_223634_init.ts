import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum_pages_blocks_archive_relation_to" AS ENUM('posts');
  CREATE TYPE "public"."enum_pages_blocks_hero_block_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_hero_block_buttons_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_hero_block_notice_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_hero_block_background_color" AS ENUM('brand-dark-green', 'brand-lime', 'brand-green', 'white');
  CREATE TYPE "public"."enum_pages_blocks_story_block_media_type" AS ENUM('image', 'svg', 'lottie');
  CREATE TYPE "public"."enum_pages_blocks_story_block_layout" AS ENUM('imageRight', 'imageLeft', 'center');
  CREATE TYPE "public"."enum_pages_blocks_story_block_background_color" AS ENUM('gray', 'white', 'brand-dark-green', 'brand-lime', 'brand-green');
  CREATE TYPE "public"."enum_pages_blocks_story_block_media_border_radius" AS ENUM('rounded-none', 'rounded-xl', 'rounded-2xl', 'rounded-3xl');
  CREATE TYPE "public"."enum_pages_blocks_story_block_media_width" AS ENUM('md:w-1/3', 'md:w-1/2');
  CREATE TYPE "public"."enum_pages_blocks_story_block_content_width" AS ENUM('md:w-1/3', 'md:w-1/2');
  CREATE TYPE "public"."enum_pages_blocks_full_hero_block_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_full_hero_block_buttons_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_full_hero_block_notice_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_full_hero_block_background_color" AS ENUM('brand-dark-green', 'brand-lime', 'brand-green', 'white');
  CREATE TYPE "public"."enum_pages_blocks_pricing_table_categories_features_value" AS ENUM('text', 'icon');
  CREATE TYPE "public"."enum_pages_blocks_product_blocks_products_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_product_blocks_background_color" AS ENUM('white', 'gray', 'brand-dark-green', 'brand-lime', 'brand-green');
  CREATE TYPE "public"."enum_pages_blocks_product_blocks_product_card_color" AS ENUM('brand-dark-green', 'brand-green', 'gray', 'white');
  CREATE TYPE "public"."enum_pages_blocks_product_steps_blocks_background_color" AS ENUM('white', 'gray', 'brand-dark-green', 'brand-lime', 'brand-green');
  CREATE TYPE "public"."enum_pages_blocks_product_steps_blocks_product_card_color" AS ENUM('brand-dark-green', 'brand-green', 'gray', 'white');
  CREATE TYPE "public"."enum_pages_blocks_cta_full_block_button_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta_full_block_background_color" AS ENUM('gray', 'white', 'brand-dark-green', 'brand-lime', 'brand-green');
  CREATE TYPE "public"."enum_pages_blocks_cta_large_block_button_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta_large_block_terms_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta_large_block_background_color" AS ENUM('white', 'gray', 'brand-dark-green', 'brand-lime', 'brand-green');
  CREATE TYPE "public"."enum_pages_blocks_cta_small_block_button_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_feature_block_media_type" AS ENUM('image', 'svg', 'lottie');
  CREATE TYPE "public"."enum_pages_blocks_feature_block_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_feature_block_button_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_feature_block_layout" AS ENUM('imageRight', 'imageLeft', 'center');
  CREATE TYPE "public"."enum_pages_blocks_feature_block_background_color" AS ENUM('gray', 'white', 'brand-dark-green', 'brand-lime', 'brand-green');
  CREATE TYPE "public"."enum_pages_blocks_feature_block_media_border_radius" AS ENUM('rounded-none', 'rounded-xl', 'rounded-2xl', 'rounded-3xl');
  CREATE TYPE "public"."enum_pages_blocks_feature_block_media_width" AS ENUM('md:w-1/3', 'md:w-1/2');
  CREATE TYPE "public"."enum_pages_blocks_feature_block_content_width" AS ENUM('md:w-1/3', 'md:w-1/2');
  CREATE TYPE "public"."enum_pages_blocks_platform_features_features_icon_type" AS ENUM('lucide', 'svg');
  CREATE TYPE "public"."enum_pages_blocks_platform_features_background_color" AS ENUM('gray', 'white', 'brand-dark-green', 'brand-lime', 'brand-green');
  CREATE TYPE "public"."enum_pages_blocks_platform_features_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_faq_block_button_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_faq_block_background_color" AS ENUM('gray', 'white', 'brand-dark-green', 'brand-lime', 'brand-green');
  CREATE TYPE "public"."enum_pages_blocks_team_block_team_members_links_platform" AS ENUM('linkedin', 'github', 'twitter', 'instagram', 'facebook', 'youtube', 'website', 'email');
  CREATE TYPE "public"."enum_pages_blocks_team_block_background_color" AS ENUM('gray', 'white', 'brand-dark-green', 'brand-lime', 'brand-green');
  CREATE TYPE "public"."enum_pages_blocks_industry_block_background_color" AS ENUM('white', 'gray', 'brand-dark-green', 'brand-lime', 'brand-green');
  CREATE TYPE "public"."enum_pages_blocks_rating_block_media_type" AS ENUM('image', 'svg', 'lottie');
  CREATE TYPE "public"."enum_pages_blocks_rating_block_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_rating_block_button_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_rating_block_layout" AS ENUM('imageRight', 'imageLeft', 'center');
  CREATE TYPE "public"."enum_pages_blocks_rating_block_background_color" AS ENUM('gray', 'white', 'brand-dark-green', 'brand-lime', 'brand-green');
  CREATE TYPE "public"."enum_pages_blocks_rating_block_media_border_radius" AS ENUM('rounded-none', 'rounded-xl', 'rounded-2xl', 'rounded-3xl');
  CREATE TYPE "public"."enum_pages_blocks_rating_block_media_width" AS ENUM('md:w-1/3', 'md:w-1/2');
  CREATE TYPE "public"."enum_pages_blocks_rating_block_content_width" AS ENUM('md:w-1/3', 'md:w-1/2');
  CREATE TYPE "public"."enum_pages_blocks_hero_bg_block_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_hero_bg_block_buttons_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_hero_bg_block_notice_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_hero_bg_block_background_color" AS ENUM('brand-dark-green', 'brand-lime', 'brand-green', 'white');
  CREATE TYPE "public"."enum_pages_blocks_security_block_media_type" AS ENUM('image', 'svg', 'lottie');
  CREATE TYPE "public"."enum_pages_blocks_security_block_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_security_block_button_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_security_block_layout" AS ENUM('imageRight', 'imageLeft', 'center');
  CREATE TYPE "public"."enum_pages_blocks_security_block_background_color" AS ENUM('gray', 'white', 'brand-dark-green', 'brand-lime', 'brand-green');
  CREATE TYPE "public"."enum_pages_blocks_security_block_media_border_radius" AS ENUM('rounded-none', 'rounded-xl', 'rounded-2xl', 'rounded-3xl');
  CREATE TYPE "public"."enum_pages_blocks_security_block_media_width" AS ENUM('md:w-1/3', 'md:w-1/2');
  CREATE TYPE "public"."enum_pages_blocks_security_block_content_width" AS ENUM('md:w-1/3', 'md:w-1/2');
  CREATE TYPE "public"."enum_pages_blocks_terms_block_background_color" AS ENUM('gray', 'white', 'brand-dark-green', 'brand-lime', 'brand-green');
  CREATE TYPE "public"."enum_pages_blocks_clients_block_background_color" AS ENUM('white', 'gray-50', 'brand-dark-green', 'brand-green');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_relation_to" AS ENUM('posts');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_block_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_block_buttons_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_block_notice_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_block_background_color" AS ENUM('brand-dark-green', 'brand-lime', 'brand-green', 'white');
  CREATE TYPE "public"."enum__pages_v_blocks_story_block_media_type" AS ENUM('image', 'svg', 'lottie');
  CREATE TYPE "public"."enum__pages_v_blocks_story_block_layout" AS ENUM('imageRight', 'imageLeft', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_story_block_background_color" AS ENUM('gray', 'white', 'brand-dark-green', 'brand-lime', 'brand-green');
  CREATE TYPE "public"."enum__pages_v_blocks_story_block_media_border_radius" AS ENUM('rounded-none', 'rounded-xl', 'rounded-2xl', 'rounded-3xl');
  CREATE TYPE "public"."enum__pages_v_blocks_story_block_media_width" AS ENUM('md:w-1/3', 'md:w-1/2');
  CREATE TYPE "public"."enum__pages_v_blocks_story_block_content_width" AS ENUM('md:w-1/3', 'md:w-1/2');
  CREATE TYPE "public"."enum__pages_v_blocks_full_hero_block_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_full_hero_block_buttons_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_full_hero_block_notice_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_full_hero_block_background_color" AS ENUM('brand-dark-green', 'brand-lime', 'brand-green', 'white');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing_table_categories_features_value" AS ENUM('text', 'icon');
  CREATE TYPE "public"."enum__pages_v_blocks_product_blocks_products_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_product_blocks_background_color" AS ENUM('white', 'gray', 'brand-dark-green', 'brand-lime', 'brand-green');
  CREATE TYPE "public"."enum__pages_v_blocks_product_blocks_product_card_color" AS ENUM('brand-dark-green', 'brand-green', 'gray', 'white');
  CREATE TYPE "public"."enum__pages_v_blocks_product_steps_blocks_background_color" AS ENUM('white', 'gray', 'brand-dark-green', 'brand-lime', 'brand-green');
  CREATE TYPE "public"."enum__pages_v_blocks_product_steps_blocks_product_card_color" AS ENUM('brand-dark-green', 'brand-green', 'gray', 'white');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_full_block_button_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_full_block_background_color" AS ENUM('gray', 'white', 'brand-dark-green', 'brand-lime', 'brand-green');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_large_block_button_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_large_block_terms_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_large_block_background_color" AS ENUM('white', 'gray', 'brand-dark-green', 'brand-lime', 'brand-green');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_small_block_button_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_block_media_type" AS ENUM('image', 'svg', 'lottie');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_block_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_block_button_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_block_layout" AS ENUM('imageRight', 'imageLeft', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_block_background_color" AS ENUM('gray', 'white', 'brand-dark-green', 'brand-lime', 'brand-green');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_block_media_border_radius" AS ENUM('rounded-none', 'rounded-xl', 'rounded-2xl', 'rounded-3xl');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_block_media_width" AS ENUM('md:w-1/3', 'md:w-1/2');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_block_content_width" AS ENUM('md:w-1/3', 'md:w-1/2');
  CREATE TYPE "public"."enum__pages_v_blocks_platform_features_features_icon_type" AS ENUM('lucide', 'svg');
  CREATE TYPE "public"."enum__pages_v_blocks_platform_features_background_color" AS ENUM('gray', 'white', 'brand-dark-green', 'brand-lime', 'brand-green');
  CREATE TYPE "public"."enum__pages_v_blocks_platform_features_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_block_button_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_block_background_color" AS ENUM('gray', 'white', 'brand-dark-green', 'brand-lime', 'brand-green');
  CREATE TYPE "public"."enum__pages_v_blocks_team_block_team_members_links_platform" AS ENUM('linkedin', 'github', 'twitter', 'instagram', 'facebook', 'youtube', 'website', 'email');
  CREATE TYPE "public"."enum__pages_v_blocks_team_block_background_color" AS ENUM('gray', 'white', 'brand-dark-green', 'brand-lime', 'brand-green');
  CREATE TYPE "public"."enum__pages_v_blocks_industry_block_background_color" AS ENUM('white', 'gray', 'brand-dark-green', 'brand-lime', 'brand-green');
  CREATE TYPE "public"."enum__pages_v_blocks_rating_block_media_type" AS ENUM('image', 'svg', 'lottie');
  CREATE TYPE "public"."enum__pages_v_blocks_rating_block_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_rating_block_button_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_rating_block_layout" AS ENUM('imageRight', 'imageLeft', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_rating_block_background_color" AS ENUM('gray', 'white', 'brand-dark-green', 'brand-lime', 'brand-green');
  CREATE TYPE "public"."enum__pages_v_blocks_rating_block_media_border_radius" AS ENUM('rounded-none', 'rounded-xl', 'rounded-2xl', 'rounded-3xl');
  CREATE TYPE "public"."enum__pages_v_blocks_rating_block_media_width" AS ENUM('md:w-1/3', 'md:w-1/2');
  CREATE TYPE "public"."enum__pages_v_blocks_rating_block_content_width" AS ENUM('md:w-1/3', 'md:w-1/2');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_bg_block_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_bg_block_buttons_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_bg_block_notice_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_bg_block_background_color" AS ENUM('brand-dark-green', 'brand-lime', 'brand-green', 'white');
  CREATE TYPE "public"."enum__pages_v_blocks_security_block_media_type" AS ENUM('image', 'svg', 'lottie');
  CREATE TYPE "public"."enum__pages_v_blocks_security_block_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_security_block_button_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_security_block_layout" AS ENUM('imageRight', 'imageLeft', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_security_block_background_color" AS ENUM('gray', 'white', 'brand-dark-green', 'brand-lime', 'brand-green');
  CREATE TYPE "public"."enum__pages_v_blocks_security_block_media_border_radius" AS ENUM('rounded-none', 'rounded-xl', 'rounded-2xl', 'rounded-3xl');
  CREATE TYPE "public"."enum__pages_v_blocks_security_block_media_width" AS ENUM('md:w-1/3', 'md:w-1/2');
  CREATE TYPE "public"."enum__pages_v_blocks_security_block_content_width" AS ENUM('md:w-1/3', 'md:w-1/2');
  CREATE TYPE "public"."enum__pages_v_blocks_terms_block_background_color" AS ENUM('gray', 'white', 'brand-dark-green', 'brand-lime', 'brand-green');
  CREATE TYPE "public"."enum__pages_v_blocks_clients_block_background_color" AS ENUM('white', 'gray-50', 'brand-dark-green', 'brand-green');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_terms_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__terms_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_users_role" AS ENUM('super_admin', 'admin', 'dev', 'editor', 'author', 'contributor');
  CREATE TYPE "public"."enum_redirects_to_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_forms_confirmation_type" AS ENUM('message', 'redirect');
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_header_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_mega_menu_items_sections_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_auth_buttons_register_button_auth_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_auth_buttons_sign_in_button_auth_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_auth_buttons_register_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_auth_buttons_register_button_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_header_auth_buttons_sign_in_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_auth_buttons_sign_in_button_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_footer_product_links_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_company_links_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_resource_links_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_notification_banner_link_details_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_notification_banner_link_details_link_appearance" AS ENUM('default', 'outline');
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_cta_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_pages_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_pages_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_content_columns_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum_pages_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum_pages_blocks_archive_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_form_block_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar DEFAULT 'lucide',
  	"title" varchar,
  	"content" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"social_links_facebook" varchar,
  	"social_links_twitter" varchar,
  	"social_links_instagram" varchar,
  	"social_links_linkedin" varchar,
  	"social_links_youtube" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_hero_block_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_hero_block_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_hero_block_buttons_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_hero_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_notice" boolean DEFAULT false,
  	"notice_link_notice_text" varchar,
  	"notice_link_link_type" "enum_pages_blocks_hero_block_notice_link_link_type" DEFAULT 'reference',
  	"notice_link_link_new_tab" boolean,
  	"notice_link_link_url" varchar,
  	"notice_link_link_label" varchar,
  	"rich_text" jsonb,
  	"show_icons" boolean DEFAULT false,
  	"media_id" integer,
  	"use_image_placeholder" boolean DEFAULT false,
  	"background_color" "enum_pages_blocks_hero_block_background_color" DEFAULT 'brand-dark-green',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_story_block_feature_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_story_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"pre_heading" varchar,
  	"heading" varchar,
  	"sub_heading" varchar,
  	"rich_text" jsonb,
  	"media_type" "enum_pages_blocks_story_block_media_type" DEFAULT 'image',
  	"media_id" integer,
  	"svg_code" varchar,
  	"lottie_j_s_o_n" varchar,
  	"layout" "enum_pages_blocks_story_block_layout" DEFAULT 'imageRight',
  	"background_color" "enum_pages_blocks_story_block_background_color" DEFAULT 'white',
  	"media_border_radius" "enum_pages_blocks_story_block_media_border_radius" DEFAULT 'rounded-3xl',
  	"media_width" "enum_pages_blocks_story_block_media_width" DEFAULT 'md:w-1/2',
  	"content_width" "enum_pages_blocks_story_block_content_width" DEFAULT 'md:w-1/2',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_full_hero_block_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_full_hero_block_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_full_hero_block_buttons_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_full_hero_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_notice" boolean DEFAULT false,
  	"notice_link_notice_text" varchar,
  	"notice_link_link_type" "enum_pages_blocks_full_hero_block_notice_link_link_type" DEFAULT 'reference',
  	"notice_link_link_new_tab" boolean,
  	"notice_link_link_url" varchar,
  	"notice_link_link_label" varchar,
  	"pre_heading" varchar,
  	"rich_text" jsonb,
  	"show_icons" boolean DEFAULT false,
  	"use_image_placeholder" boolean DEFAULT false,
  	"media_id" integer,
  	"background_color" "enum_pages_blocks_full_hero_block_background_color" DEFAULT 'brand-dark-green',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_pricing_table_categories_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"value" "enum_pages_blocks_pricing_table_categories_features_value" DEFAULT 'text',
  	"text" varchar,
  	"icon" boolean DEFAULT false
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_pricing_table_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_pricing_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"subheading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_product_blocks_products" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"link_type" "enum_pages_blocks_product_blocks_products_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_product_blocks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"pre_heading" varchar,
  	"heading" varchar,
  	"sub_heading" varchar,
  	"background_color" "enum_pages_blocks_product_blocks_background_color" DEFAULT 'white',
  	"product_card_color" "enum_pages_blocks_product_blocks_product_card_color" DEFAULT 'brand-dark-green',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_product_steps_blocks_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_product_steps_blocks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"pre_heading" varchar,
  	"heading" varchar,
  	"sub_heading" varchar,
  	"background_color" "enum_pages_blocks_product_steps_blocks_background_color" DEFAULT 'white',
  	"product_card_color" "enum_pages_blocks_product_steps_blocks_product_card_color" DEFAULT 'brand-dark-green',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta_full_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"pre_heading" varchar DEFAULT 'Ready to get started?',
  	"heading" varchar,
  	"subheading" varchar,
  	"button_link_link_type" "enum_pages_blocks_cta_full_block_button_link_link_type" DEFAULT 'reference',
  	"button_link_link_new_tab" boolean,
  	"button_link_link_url" varchar,
  	"button_link_link_label" varchar,
  	"background_color" "enum_pages_blocks_cta_full_block_background_color" DEFAULT 'brand-dark-green',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta_large_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"pre_heading" varchar DEFAULT 'Easy Pricing',
  	"heading" varchar,
  	"subheading" varchar,
  	"button_link_link_type" "enum_pages_blocks_cta_large_block_button_link_link_type" DEFAULT 'reference',
  	"button_link_link_new_tab" boolean,
  	"button_link_link_url" varchar,
  	"button_link_link_label" varchar,
  	"terms_link_link_type" "enum_pages_blocks_cta_large_block_terms_link_link_type" DEFAULT 'reference',
  	"terms_link_link_new_tab" boolean,
  	"terms_link_link_url" varchar,
  	"terms_link_link_label" varchar,
  	"illustration_id" integer,
  	"use_illustration_placeholder" boolean DEFAULT false,
  	"background_color" "enum_pages_blocks_cta_large_block_background_color" DEFAULT 'brand-dark-green',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta_small_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"subheading" varchar,
  	"button_link_link_type" "enum_pages_blocks_cta_small_block_button_link_link_type" DEFAULT 'reference',
  	"button_link_link_new_tab" boolean,
  	"button_link_link_url" varchar,
  	"button_link_link_label" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_feature_block_feature_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_feature_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"pre_heading" varchar,
  	"heading" varchar,
  	"sub_heading" varchar,
  	"media_type" "enum_pages_blocks_feature_block_media_type" DEFAULT 'image',
  	"media_id" integer,
  	"svg_code" varchar,
  	"lottie_j_s_o_n" varchar,
  	"show_button" boolean DEFAULT false,
  	"button_link_type" "enum_pages_blocks_feature_block_button_link_type" DEFAULT 'reference',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"button_link_label" varchar,
  	"button_link_appearance" "enum_pages_blocks_feature_block_button_link_appearance" DEFAULT 'default',
  	"layout" "enum_pages_blocks_feature_block_layout" DEFAULT 'imageRight',
  	"background_color" "enum_pages_blocks_feature_block_background_color" DEFAULT 'white',
  	"media_border_radius" "enum_pages_blocks_feature_block_media_border_radius" DEFAULT 'rounded-3xl',
  	"media_width" "enum_pages_blocks_feature_block_media_width" DEFAULT 'md:w-1/2',
  	"content_width" "enum_pages_blocks_feature_block_content_width" DEFAULT 'md:w-1/2',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_platform_features_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon_type" "enum_pages_blocks_platform_features_features_icon_type" DEFAULT 'lucide',
  	"icon" varchar,
  	"svg_media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_platform_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"pre_heading" varchar,
  	"heading" varchar,
  	"sub_heading" varchar,
  	"background_color" "enum_pages_blocks_platform_features_background_color" DEFAULT 'white',
  	"button_link_type" "enum_pages_blocks_platform_features_button_link_type" DEFAULT 'reference',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"button_link_label" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_faq_block_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_faq_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"pre_heading" varchar DEFAULT 'FAQs',
  	"heading" varchar DEFAULT 'For Employees',
  	"sub_heading" varchar DEFAULT 'Discover responses to common asked questions about our product and services.',
  	"button_link_link_type" "enum_pages_blocks_faq_block_button_link_link_type" DEFAULT 'reference',
  	"button_link_link_new_tab" boolean,
  	"button_link_link_url" varchar,
  	"button_link_link_label" varchar,
  	"background_color" "enum_pages_blocks_faq_block_background_color" DEFAULT 'white',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_team_block_team_members_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_pages_blocks_team_block_team_members_links_platform",
  	"url" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_team_block_team_members" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"name" varchar,
  	"title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_team_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"pre_heading" varchar DEFAULT 'Our Team',
  	"heading" varchar DEFAULT 'Our leadership',
  	"sub_heading" varchar DEFAULT 'Meet the visionaries leading our company forward.',
  	"background_color" "enum_pages_blocks_team_block_background_color" DEFAULT 'white',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_industry_block_industry" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_industry_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"pre_heading" varchar,
  	"heading" varchar,
  	"sub_heading" varchar,
  	"background_color" "enum_pages_blocks_industry_block_background_color" DEFAULT 'white',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_rating_block_feature_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_rating_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"pre_heading" varchar,
  	"heading" varchar,
  	"sub_heading" varchar,
  	"media_type" "enum_pages_blocks_rating_block_media_type" DEFAULT 'image',
  	"media_id" integer,
  	"svg_code" varchar,
  	"lottie_j_s_o_n" varchar,
  	"show_button" boolean DEFAULT false,
  	"button_link_type" "enum_pages_blocks_rating_block_button_link_type" DEFAULT 'reference',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"button_link_label" varchar,
  	"button_link_appearance" "enum_pages_blocks_rating_block_button_link_appearance" DEFAULT 'default',
  	"show_rating_component" boolean DEFAULT false,
  	"rating_component_rating" numeric,
  	"rating_component_icon" varchar,
  	"rating_component_text" varchar,
  	"layout" "enum_pages_blocks_rating_block_layout" DEFAULT 'imageRight',
  	"background_color" "enum_pages_blocks_rating_block_background_color" DEFAULT 'white',
  	"media_border_radius" "enum_pages_blocks_rating_block_media_border_radius" DEFAULT 'rounded-3xl',
  	"media_width" "enum_pages_blocks_rating_block_media_width" DEFAULT 'md:w-1/2',
  	"content_width" "enum_pages_blocks_rating_block_content_width" DEFAULT 'md:w-1/2',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_hero_bg_block_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_hero_bg_block_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_hero_bg_block_buttons_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_hero_bg_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_notice" boolean DEFAULT false,
  	"notice_link_notice_text" varchar,
  	"notice_link_link_type" "enum_pages_blocks_hero_bg_block_notice_link_link_type" DEFAULT 'reference',
  	"notice_link_link_new_tab" boolean,
  	"notice_link_link_url" varchar,
  	"notice_link_link_label" varchar,
  	"pre_heading" varchar,
  	"rich_text" jsonb,
  	"show_icons" boolean DEFAULT false,
  	"use_image_placeholder" boolean DEFAULT false,
  	"media_id" integer,
  	"background_color" "enum_pages_blocks_hero_bg_block_background_color" DEFAULT 'brand-dark-green',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_security_block_feature_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_security_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"pre_heading" varchar,
  	"heading" varchar,
  	"sub_heading" varchar,
  	"media_type" "enum_pages_blocks_security_block_media_type" DEFAULT 'image',
  	"media_id" integer,
  	"svg_code" varchar,
  	"lottie_j_s_o_n" varchar,
  	"show_button" boolean DEFAULT false,
  	"button_link_type" "enum_pages_blocks_security_block_button_link_type" DEFAULT 'reference',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"button_link_label" varchar,
  	"button_link_appearance" "enum_pages_blocks_security_block_button_link_appearance" DEFAULT 'default',
  	"layout" "enum_pages_blocks_security_block_layout" DEFAULT 'imageRight',
  	"background_color" "enum_pages_blocks_security_block_background_color" DEFAULT 'white',
  	"media_border_radius" "enum_pages_blocks_security_block_media_border_radius" DEFAULT 'rounded-3xl',
  	"media_width" "enum_pages_blocks_security_block_media_width" DEFAULT 'md:w-1/2',
  	"content_width" "enum_pages_blocks_security_block_content_width" DEFAULT 'md:w-1/2',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_terms_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Terms & Conditions',
  	"sub_heading" varchar,
  	"background_color" "enum_pages_blocks_terms_block_background_color" DEFAULT 'white',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_related_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Recent Articles',
  	"show_categories" boolean DEFAULT true,
  	"limit" numeric DEFAULT 3,
  	"intro_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_clients_block_clients" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"logo_id" integer,
  	"url" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_clients_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Our Clients',
  	"subheading" varchar,
  	"background_color" "enum_pages_blocks_clients_block_background_color" DEFAULT 'white',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"categories_id" integer,
  	"terms_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_cta_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__pages_v_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum__pages_v_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_content_columns_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum__pages_v_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum__pages_v_blocks_archive_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_form_block_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" varchar DEFAULT 'lucide',
  	"title" varchar,
  	"content" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"social_links_facebook" varchar,
  	"social_links_twitter" varchar,
  	"social_links_instagram" varchar,
  	"social_links_linkedin" varchar,
  	"social_links_youtube" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_hero_block_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_hero_block_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_hero_block_buttons_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_hero_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"show_notice" boolean DEFAULT false,
  	"notice_link_notice_text" varchar,
  	"notice_link_link_type" "enum__pages_v_blocks_hero_block_notice_link_link_type" DEFAULT 'reference',
  	"notice_link_link_new_tab" boolean,
  	"notice_link_link_url" varchar,
  	"notice_link_link_label" varchar,
  	"rich_text" jsonb,
  	"show_icons" boolean DEFAULT false,
  	"media_id" integer,
  	"use_image_placeholder" boolean DEFAULT false,
  	"background_color" "enum__pages_v_blocks_hero_block_background_color" DEFAULT 'brand-dark-green',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_story_block_feature_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_story_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"pre_heading" varchar,
  	"heading" varchar,
  	"sub_heading" varchar,
  	"rich_text" jsonb,
  	"media_type" "enum__pages_v_blocks_story_block_media_type" DEFAULT 'image',
  	"media_id" integer,
  	"svg_code" varchar,
  	"lottie_j_s_o_n" varchar,
  	"layout" "enum__pages_v_blocks_story_block_layout" DEFAULT 'imageRight',
  	"background_color" "enum__pages_v_blocks_story_block_background_color" DEFAULT 'white',
  	"media_border_radius" "enum__pages_v_blocks_story_block_media_border_radius" DEFAULT 'rounded-3xl',
  	"media_width" "enum__pages_v_blocks_story_block_media_width" DEFAULT 'md:w-1/2',
  	"content_width" "enum__pages_v_blocks_story_block_content_width" DEFAULT 'md:w-1/2',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_full_hero_block_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_full_hero_block_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_full_hero_block_buttons_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_full_hero_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"show_notice" boolean DEFAULT false,
  	"notice_link_notice_text" varchar,
  	"notice_link_link_type" "enum__pages_v_blocks_full_hero_block_notice_link_link_type" DEFAULT 'reference',
  	"notice_link_link_new_tab" boolean,
  	"notice_link_link_url" varchar,
  	"notice_link_link_label" varchar,
  	"pre_heading" varchar,
  	"rich_text" jsonb,
  	"show_icons" boolean DEFAULT false,
  	"use_image_placeholder" boolean DEFAULT false,
  	"media_id" integer,
  	"background_color" "enum__pages_v_blocks_full_hero_block_background_color" DEFAULT 'brand-dark-green',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_pricing_table_categories_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"value" "enum__pages_v_blocks_pricing_table_categories_features_value" DEFAULT 'text',
  	"text" varchar,
  	"icon" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_pricing_table_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_pricing_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"subheading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_product_blocks_products" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"link_type" "enum__pages_v_blocks_product_blocks_products_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_product_blocks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"pre_heading" varchar,
  	"heading" varchar,
  	"sub_heading" varchar,
  	"background_color" "enum__pages_v_blocks_product_blocks_background_color" DEFAULT 'white',
  	"product_card_color" "enum__pages_v_blocks_product_blocks_product_card_color" DEFAULT 'brand-dark-green',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_product_steps_blocks_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_product_steps_blocks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"pre_heading" varchar,
  	"heading" varchar,
  	"sub_heading" varchar,
  	"background_color" "enum__pages_v_blocks_product_steps_blocks_background_color" DEFAULT 'white',
  	"product_card_color" "enum__pages_v_blocks_product_steps_blocks_product_card_color" DEFAULT 'brand-dark-green',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta_full_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"pre_heading" varchar DEFAULT 'Ready to get started?',
  	"heading" varchar,
  	"subheading" varchar,
  	"button_link_link_type" "enum__pages_v_blocks_cta_full_block_button_link_link_type" DEFAULT 'reference',
  	"button_link_link_new_tab" boolean,
  	"button_link_link_url" varchar,
  	"button_link_link_label" varchar,
  	"background_color" "enum__pages_v_blocks_cta_full_block_background_color" DEFAULT 'brand-dark-green',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta_large_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"pre_heading" varchar DEFAULT 'Easy Pricing',
  	"heading" varchar,
  	"subheading" varchar,
  	"button_link_link_type" "enum__pages_v_blocks_cta_large_block_button_link_link_type" DEFAULT 'reference',
  	"button_link_link_new_tab" boolean,
  	"button_link_link_url" varchar,
  	"button_link_link_label" varchar,
  	"terms_link_link_type" "enum__pages_v_blocks_cta_large_block_terms_link_link_type" DEFAULT 'reference',
  	"terms_link_link_new_tab" boolean,
  	"terms_link_link_url" varchar,
  	"terms_link_link_label" varchar,
  	"illustration_id" integer,
  	"use_illustration_placeholder" boolean DEFAULT false,
  	"background_color" "enum__pages_v_blocks_cta_large_block_background_color" DEFAULT 'brand-dark-green',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta_small_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"subheading" varchar,
  	"button_link_link_type" "enum__pages_v_blocks_cta_small_block_button_link_link_type" DEFAULT 'reference',
  	"button_link_link_new_tab" boolean,
  	"button_link_link_url" varchar,
  	"button_link_link_label" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_feature_block_feature_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_feature_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"pre_heading" varchar,
  	"heading" varchar,
  	"sub_heading" varchar,
  	"media_type" "enum__pages_v_blocks_feature_block_media_type" DEFAULT 'image',
  	"media_id" integer,
  	"svg_code" varchar,
  	"lottie_j_s_o_n" varchar,
  	"show_button" boolean DEFAULT false,
  	"button_link_type" "enum__pages_v_blocks_feature_block_button_link_type" DEFAULT 'reference',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"button_link_label" varchar,
  	"button_link_appearance" "enum__pages_v_blocks_feature_block_button_link_appearance" DEFAULT 'default',
  	"layout" "enum__pages_v_blocks_feature_block_layout" DEFAULT 'imageRight',
  	"background_color" "enum__pages_v_blocks_feature_block_background_color" DEFAULT 'white',
  	"media_border_radius" "enum__pages_v_blocks_feature_block_media_border_radius" DEFAULT 'rounded-3xl',
  	"media_width" "enum__pages_v_blocks_feature_block_media_width" DEFAULT 'md:w-1/2',
  	"content_width" "enum__pages_v_blocks_feature_block_content_width" DEFAULT 'md:w-1/2',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_platform_features_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon_type" "enum__pages_v_blocks_platform_features_features_icon_type" DEFAULT 'lucide',
  	"icon" varchar,
  	"svg_media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_platform_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"pre_heading" varchar,
  	"heading" varchar,
  	"sub_heading" varchar,
  	"background_color" "enum__pages_v_blocks_platform_features_background_color" DEFAULT 'white',
  	"button_link_type" "enum__pages_v_blocks_platform_features_button_link_type" DEFAULT 'reference',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"button_link_label" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_faq_block_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_faq_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"pre_heading" varchar DEFAULT 'FAQs',
  	"heading" varchar DEFAULT 'For Employees',
  	"sub_heading" varchar DEFAULT 'Discover responses to common asked questions about our product and services.',
  	"button_link_link_type" "enum__pages_v_blocks_faq_block_button_link_link_type" DEFAULT 'reference',
  	"button_link_link_new_tab" boolean,
  	"button_link_link_url" varchar,
  	"button_link_link_label" varchar,
  	"background_color" "enum__pages_v_blocks_faq_block_background_color" DEFAULT 'white',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_team_block_team_members_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"platform" "enum__pages_v_blocks_team_block_team_members_links_platform",
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_team_block_team_members" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"name" varchar,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_team_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"pre_heading" varchar DEFAULT 'Our Team',
  	"heading" varchar DEFAULT 'Our leadership',
  	"sub_heading" varchar DEFAULT 'Meet the visionaries leading our company forward.',
  	"background_color" "enum__pages_v_blocks_team_block_background_color" DEFAULT 'white',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_industry_block_industry" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_industry_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"pre_heading" varchar,
  	"heading" varchar,
  	"sub_heading" varchar,
  	"background_color" "enum__pages_v_blocks_industry_block_background_color" DEFAULT 'white',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_rating_block_feature_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_rating_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"pre_heading" varchar,
  	"heading" varchar,
  	"sub_heading" varchar,
  	"media_type" "enum__pages_v_blocks_rating_block_media_type" DEFAULT 'image',
  	"media_id" integer,
  	"svg_code" varchar,
  	"lottie_j_s_o_n" varchar,
  	"show_button" boolean DEFAULT false,
  	"button_link_type" "enum__pages_v_blocks_rating_block_button_link_type" DEFAULT 'reference',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"button_link_label" varchar,
  	"button_link_appearance" "enum__pages_v_blocks_rating_block_button_link_appearance" DEFAULT 'default',
  	"show_rating_component" boolean DEFAULT false,
  	"rating_component_rating" numeric,
  	"rating_component_icon" varchar,
  	"rating_component_text" varchar,
  	"layout" "enum__pages_v_blocks_rating_block_layout" DEFAULT 'imageRight',
  	"background_color" "enum__pages_v_blocks_rating_block_background_color" DEFAULT 'white',
  	"media_border_radius" "enum__pages_v_blocks_rating_block_media_border_radius" DEFAULT 'rounded-3xl',
  	"media_width" "enum__pages_v_blocks_rating_block_media_width" DEFAULT 'md:w-1/2',
  	"content_width" "enum__pages_v_blocks_rating_block_content_width" DEFAULT 'md:w-1/2',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_hero_bg_block_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_hero_bg_block_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_hero_bg_block_buttons_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_hero_bg_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"show_notice" boolean DEFAULT false,
  	"notice_link_notice_text" varchar,
  	"notice_link_link_type" "enum__pages_v_blocks_hero_bg_block_notice_link_link_type" DEFAULT 'reference',
  	"notice_link_link_new_tab" boolean,
  	"notice_link_link_url" varchar,
  	"notice_link_link_label" varchar,
  	"pre_heading" varchar,
  	"rich_text" jsonb,
  	"show_icons" boolean DEFAULT false,
  	"use_image_placeholder" boolean DEFAULT false,
  	"media_id" integer,
  	"background_color" "enum__pages_v_blocks_hero_bg_block_background_color" DEFAULT 'brand-dark-green',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_security_block_feature_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" varchar,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_security_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"pre_heading" varchar,
  	"heading" varchar,
  	"sub_heading" varchar,
  	"media_type" "enum__pages_v_blocks_security_block_media_type" DEFAULT 'image',
  	"media_id" integer,
  	"svg_code" varchar,
  	"lottie_j_s_o_n" varchar,
  	"show_button" boolean DEFAULT false,
  	"button_link_type" "enum__pages_v_blocks_security_block_button_link_type" DEFAULT 'reference',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"button_link_label" varchar,
  	"button_link_appearance" "enum__pages_v_blocks_security_block_button_link_appearance" DEFAULT 'default',
  	"layout" "enum__pages_v_blocks_security_block_layout" DEFAULT 'imageRight',
  	"background_color" "enum__pages_v_blocks_security_block_background_color" DEFAULT 'white',
  	"media_border_radius" "enum__pages_v_blocks_security_block_media_border_radius" DEFAULT 'rounded-3xl',
  	"media_width" "enum__pages_v_blocks_security_block_media_width" DEFAULT 'md:w-1/2',
  	"content_width" "enum__pages_v_blocks_security_block_content_width" DEFAULT 'md:w-1/2',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_terms_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Terms & Conditions',
  	"sub_heading" varchar,
  	"background_color" "enum__pages_v_blocks_terms_block_background_color" DEFAULT 'white',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_related_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Recent Articles',
  	"show_categories" boolean DEFAULT true,
  	"limit" numeric DEFAULT 3,
  	"intro_content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_clients_block_clients" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"logo_id" integer,
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_clients_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Our Clients',
  	"subheading" varchar,
  	"background_color" "enum__pages_v_blocks_clients_block_background_color" DEFAULT 'white',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"categories_id" integer,
  	"terms_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "posts_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"author_id" integer,
  	"hero_image_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_posts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "posts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_author_id" integer,
  	"version_hero_image_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"caption" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_square_url" varchar,
  	"sizes_square_width" numeric,
  	"sizes_square_height" numeric,
  	"sizes_square_mime_type" varchar,
  	"sizes_square_filesize" numeric,
  	"sizes_square_filename" varchar,
  	"sizes_small_url" varchar,
  	"sizes_small_width" numeric,
  	"sizes_small_height" numeric,
  	"sizes_small_mime_type" varchar,
  	"sizes_small_filesize" numeric,
  	"sizes_small_filename" varchar,
  	"sizes_medium_url" varchar,
  	"sizes_medium_width" numeric,
  	"sizes_medium_height" numeric,
  	"sizes_medium_mime_type" varchar,
  	"sizes_medium_filesize" numeric,
  	"sizes_medium_filename" varchar,
  	"sizes_large_url" varchar,
  	"sizes_large_width" numeric,
  	"sizes_large_height" numeric,
  	"sizes_large_mime_type" varchar,
  	"sizes_large_filesize" numeric,
  	"sizes_large_filename" varchar,
  	"sizes_xlarge_url" varchar,
  	"sizes_xlarge_width" numeric,
  	"sizes_xlarge_height" numeric,
  	"sizes_xlarge_mime_type" varchar,
  	"sizes_xlarge_filesize" numeric,
  	"sizes_xlarge_filename" varchar,
  	"sizes_og_url" varchar,
  	"sizes_og_width" numeric,
  	"sizes_og_height" numeric,
  	"sizes_og_mime_type" varchar,
  	"sizes_og_filesize" numeric,
  	"sizes_og_filename" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "categories_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"parent_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "terms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"content" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_terms_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "_terms_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_content" jsonb,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__terms_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"role" "enum_users_role" DEFAULT 'super_admin' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "cached_responses_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cached_responses" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"response" jsonb NOT NULL,
  	"usage_count" numeric DEFAULT 0,
  	"last_used" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "chat_feedback" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"response" jsonb NOT NULL,
  	"is_positive" boolean DEFAULT true,
  	"metadata_user_agent" varchar,
  	"metadata_ip_address" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from" varchar NOT NULL,
  	"to_type" "enum_redirects_to_type" DEFAULT 'reference',
  	"to_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "redirects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_checkbox" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"default_value" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_country" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_email" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_message" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"message" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_number" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"placeholder" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_state" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_textarea" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_emails" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email_to" varchar,
  	"cc" varchar,
  	"bcc" varchar,
  	"reply_to" varchar,
  	"email_from" varchar,
  	"subject" varchar DEFAULT 'You''''ve received a new message.' NOT NULL,
  	"message" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "forms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"submit_button_label" varchar,
  	"confirmation_type" "enum_forms_confirmation_type" DEFAULT 'message',
  	"confirmation_message" jsonb,
  	"redirect_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "form_submissions_submission_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"field" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "form_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "search_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"relation_to" varchar,
  	"title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "search" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"priority" numeric,
  	"slug" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "search_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_jobs_log" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"executed_at" timestamp(3) with time zone NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"task_slug" "enum_payload_jobs_log_task_slug" NOT NULL,
  	"task_i_d" varchar NOT NULL,
  	"input" jsonb,
  	"output" jsonb,
  	"state" "enum_payload_jobs_log_state" NOT NULL,
  	"error" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "payload_jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"input" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"total_tried" numeric DEFAULT 0,
  	"has_error" boolean DEFAULT false,
  	"error" jsonb,
  	"task_slug" "enum_payload_jobs_task_slug",
  	"queue" varchar DEFAULT 'default',
  	"wait_until" timestamp(3) with time zone,
  	"processing" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"media_id" integer,
  	"categories_id" integer,
  	"terms_id" integer,
  	"users_id" integer,
  	"cached_responses_id" integer,
  	"chat_feedback_id" integer,
  	"redirects_id" integer,
  	"forms_id" integer,
  	"form_submissions_id" integer,
  	"search_id" integer,
  	"payload_jobs_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header_mega_menu_items_sections_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_mega_menu_items_sections_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL,
  	"icon" varchar,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header_mega_menu_items_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header_mega_menu_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"icon" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "header_auth_buttons_register_button_auth_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_auth_buttons_register_button_auth_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"icon" varchar,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "header_auth_buttons_sign_in_button_auth_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_auth_buttons_sign_in_button_auth_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"icon" varchar,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"auth_buttons_show_register" boolean DEFAULT false,
  	"auth_buttons_register_button_link_type" "enum_header_auth_buttons_register_button_link_type" DEFAULT 'reference',
  	"auth_buttons_register_button_link_new_tab" boolean,
  	"auth_buttons_register_button_link_url" varchar,
  	"auth_buttons_register_button_link_label" varchar,
  	"auth_buttons_register_button_link_appearance" "enum_header_auth_buttons_register_button_link_appearance" DEFAULT 'default',
  	"auth_buttons_register_button_icon" varchar DEFAULT 'UserPlus',
  	"auth_buttons_show_sign_in" boolean DEFAULT false,
  	"auth_buttons_sign_in_button_link_type" "enum_header_auth_buttons_sign_in_button_link_type" DEFAULT 'reference',
  	"auth_buttons_sign_in_button_link_new_tab" boolean,
  	"auth_buttons_sign_in_button_link_url" varchar,
  	"auth_buttons_sign_in_button_link_label" varchar,
  	"auth_buttons_sign_in_button_link_appearance" "enum_header_auth_buttons_sign_in_button_link_appearance" DEFAULT 'default',
  	"auth_buttons_sign_in_button_icon" varchar DEFAULT 'LogIn',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "header_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "footer_product_links_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_product_links_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "footer_company_links_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_company_links_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "footer_resource_links_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_resource_links_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "footer_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"product_links_title" varchar DEFAULT 'Products',
  	"company_links_title" varchar DEFAULT 'Company',
  	"resource_links_title" varchar DEFAULT 'Resources',
  	"contact_info_email" varchar DEFAULT 'info@nacitlilongwe.com',
  	"contact_info_phone" varchar DEFAULT '0990167497',
  	"contact_info_alternative_phone" varchar DEFAULT '0998484630',
  	"contact_info_location" varchar DEFAULT 'Plot 47/378, Area 47 Sector 1, Lilongwe',
  	"app_download_links_title" varchar DEFAULT 'Download app',
  	"app_download_links_app_store_link" varchar DEFAULT '#',
  	"app_download_links_google_play_link" varchar DEFAULT '#',
  	"social_links_facebook" varchar DEFAULT '#',
  	"social_links_linkedin" varchar DEFAULT '#',
  	"social_links_twitter" varchar DEFAULT '#',
  	"social_links_instagram" varchar DEFAULT '#',
  	"social_links_youtube" varchar DEFAULT '#',
  	"copyright" varchar DEFAULT '© Nacit Lilongwe 2024.',
  	"external_copyright" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "footer_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "notification_banner" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT false,
  	"message" varchar,
  	"has_link" boolean DEFAULT false,
  	"link_details_link_type" "enum_notification_banner_link_details_link_type" DEFAULT 'reference',
  	"link_details_link_new_tab" boolean,
  	"link_details_link_url" varchar,
  	"link_details_link_label" varchar,
  	"link_details_link_appearance" "enum_notification_banner_link_details_link_appearance" DEFAULT 'default',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "notification_banner_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "ai_assistant" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT false,
  	"welcome_message" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta_links" ADD CONSTRAINT "pages_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_content_columns" ADD CONSTRAINT "pages_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_content" ADD CONSTRAINT "pages_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_archive" ADD CONSTRAINT "pages_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_form_block_sections" ADD CONSTRAINT "pages_blocks_form_block_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_form_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hero_block_buttons" ADD CONSTRAINT "pages_blocks_hero_block_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hero_block" ADD CONSTRAINT "pages_blocks_hero_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hero_block" ADD CONSTRAINT "pages_blocks_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_story_block_feature_items" ADD CONSTRAINT "pages_blocks_story_block_feature_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_story_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_story_block" ADD CONSTRAINT "pages_blocks_story_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_story_block" ADD CONSTRAINT "pages_blocks_story_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_full_hero_block_buttons" ADD CONSTRAINT "pages_blocks_full_hero_block_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_full_hero_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_full_hero_block" ADD CONSTRAINT "pages_blocks_full_hero_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_full_hero_block" ADD CONSTRAINT "pages_blocks_full_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_pricing_table_categories_features" ADD CONSTRAINT "pages_blocks_pricing_table_categories_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_table_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_pricing_table_categories" ADD CONSTRAINT "pages_blocks_pricing_table_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_table"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_pricing_table" ADD CONSTRAINT "pages_blocks_pricing_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_product_blocks_products" ADD CONSTRAINT "pages_blocks_product_blocks_products_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_product_blocks_products" ADD CONSTRAINT "pages_blocks_product_blocks_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_product_blocks"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_product_blocks" ADD CONSTRAINT "pages_blocks_product_blocks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_product_steps_blocks_steps" ADD CONSTRAINT "pages_blocks_product_steps_blocks_steps_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_product_steps_blocks_steps" ADD CONSTRAINT "pages_blocks_product_steps_blocks_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_product_steps_blocks"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_product_steps_blocks" ADD CONSTRAINT "pages_blocks_product_steps_blocks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta_full_block" ADD CONSTRAINT "pages_blocks_cta_full_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta_large_block" ADD CONSTRAINT "pages_blocks_cta_large_block_illustration_id_media_id_fk" FOREIGN KEY ("illustration_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta_large_block" ADD CONSTRAINT "pages_blocks_cta_large_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta_small_block" ADD CONSTRAINT "pages_blocks_cta_small_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_feature_block_feature_items" ADD CONSTRAINT "pages_blocks_feature_block_feature_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_feature_block" ADD CONSTRAINT "pages_blocks_feature_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_feature_block" ADD CONSTRAINT "pages_blocks_feature_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_platform_features_features" ADD CONSTRAINT "pages_blocks_platform_features_features_svg_media_id_media_id_fk" FOREIGN KEY ("svg_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_platform_features_features" ADD CONSTRAINT "pages_blocks_platform_features_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_platform_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_platform_features" ADD CONSTRAINT "pages_blocks_platform_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_faq_block_faq_items" ADD CONSTRAINT "pages_blocks_faq_block_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_faq_block" ADD CONSTRAINT "pages_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_team_block_team_members_links" ADD CONSTRAINT "pages_blocks_team_block_team_members_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_team_block_team_members"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_team_block_team_members" ADD CONSTRAINT "pages_blocks_team_block_team_members_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_team_block_team_members" ADD CONSTRAINT "pages_blocks_team_block_team_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_team_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_team_block" ADD CONSTRAINT "pages_blocks_team_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_industry_block_industry" ADD CONSTRAINT "pages_blocks_industry_block_industry_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_industry_block_industry" ADD CONSTRAINT "pages_blocks_industry_block_industry_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_industry_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_industry_block" ADD CONSTRAINT "pages_blocks_industry_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_rating_block_feature_items" ADD CONSTRAINT "pages_blocks_rating_block_feature_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_rating_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_rating_block" ADD CONSTRAINT "pages_blocks_rating_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_rating_block" ADD CONSTRAINT "pages_blocks_rating_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hero_bg_block_buttons" ADD CONSTRAINT "pages_blocks_hero_bg_block_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero_bg_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hero_bg_block" ADD CONSTRAINT "pages_blocks_hero_bg_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hero_bg_block" ADD CONSTRAINT "pages_blocks_hero_bg_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_security_block_feature_items" ADD CONSTRAINT "pages_blocks_security_block_feature_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_security_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_security_block" ADD CONSTRAINT "pages_blocks_security_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_security_block" ADD CONSTRAINT "pages_blocks_security_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_terms_block" ADD CONSTRAINT "pages_blocks_terms_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_related_posts" ADD CONSTRAINT "pages_blocks_related_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_clients_block_clients" ADD CONSTRAINT "pages_blocks_clients_block_clients_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_clients_block_clients" ADD CONSTRAINT "pages_blocks_clients_block_clients_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_clients_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_clients_block" ADD CONSTRAINT "pages_blocks_clients_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_terms_fk" FOREIGN KEY ("terms_id") REFERENCES "public"."terms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta_links" ADD CONSTRAINT "_pages_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_content_columns" ADD CONSTRAINT "_pages_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_content" ADD CONSTRAINT "_pages_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_archive" ADD CONSTRAINT "_pages_v_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_form_block_sections" ADD CONSTRAINT "_pages_v_blocks_form_block_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_form_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hero_block_buttons" ADD CONSTRAINT "_pages_v_blocks_hero_block_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hero_block" ADD CONSTRAINT "_pages_v_blocks_hero_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hero_block" ADD CONSTRAINT "_pages_v_blocks_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_story_block_feature_items" ADD CONSTRAINT "_pages_v_blocks_story_block_feature_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_story_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_story_block" ADD CONSTRAINT "_pages_v_blocks_story_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_story_block" ADD CONSTRAINT "_pages_v_blocks_story_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_full_hero_block_buttons" ADD CONSTRAINT "_pages_v_blocks_full_hero_block_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_full_hero_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_full_hero_block" ADD CONSTRAINT "_pages_v_blocks_full_hero_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_full_hero_block" ADD CONSTRAINT "_pages_v_blocks_full_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_pricing_table_categories_features" ADD CONSTRAINT "_pages_v_blocks_pricing_table_categories_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_table_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_pricing_table_categories" ADD CONSTRAINT "_pages_v_blocks_pricing_table_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_table"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_pricing_table" ADD CONSTRAINT "_pages_v_blocks_pricing_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_product_blocks_products" ADD CONSTRAINT "_pages_v_blocks_product_blocks_products_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_product_blocks_products" ADD CONSTRAINT "_pages_v_blocks_product_blocks_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_product_blocks"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_product_blocks" ADD CONSTRAINT "_pages_v_blocks_product_blocks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_product_steps_blocks_steps" ADD CONSTRAINT "_pages_v_blocks_product_steps_blocks_steps_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_product_steps_blocks_steps" ADD CONSTRAINT "_pages_v_blocks_product_steps_blocks_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_product_steps_blocks"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_product_steps_blocks" ADD CONSTRAINT "_pages_v_blocks_product_steps_blocks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta_full_block" ADD CONSTRAINT "_pages_v_blocks_cta_full_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta_large_block" ADD CONSTRAINT "_pages_v_blocks_cta_large_block_illustration_id_media_id_fk" FOREIGN KEY ("illustration_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta_large_block" ADD CONSTRAINT "_pages_v_blocks_cta_large_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta_small_block" ADD CONSTRAINT "_pages_v_blocks_cta_small_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_feature_block_feature_items" ADD CONSTRAINT "_pages_v_blocks_feature_block_feature_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_feature_block" ADD CONSTRAINT "_pages_v_blocks_feature_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_feature_block" ADD CONSTRAINT "_pages_v_blocks_feature_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_platform_features_features" ADD CONSTRAINT "_pages_v_blocks_platform_features_features_svg_media_id_media_id_fk" FOREIGN KEY ("svg_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_platform_features_features" ADD CONSTRAINT "_pages_v_blocks_platform_features_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_platform_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_platform_features" ADD CONSTRAINT "_pages_v_blocks_platform_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_faq_block_faq_items" ADD CONSTRAINT "_pages_v_blocks_faq_block_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_faq_block" ADD CONSTRAINT "_pages_v_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_team_block_team_members_links" ADD CONSTRAINT "_pages_v_blocks_team_block_team_members_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_team_block_team_members"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_team_block_team_members" ADD CONSTRAINT "_pages_v_blocks_team_block_team_members_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_team_block_team_members" ADD CONSTRAINT "_pages_v_blocks_team_block_team_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_team_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_team_block" ADD CONSTRAINT "_pages_v_blocks_team_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_industry_block_industry" ADD CONSTRAINT "_pages_v_blocks_industry_block_industry_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_industry_block_industry" ADD CONSTRAINT "_pages_v_blocks_industry_block_industry_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_industry_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_industry_block" ADD CONSTRAINT "_pages_v_blocks_industry_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_rating_block_feature_items" ADD CONSTRAINT "_pages_v_blocks_rating_block_feature_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_rating_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_rating_block" ADD CONSTRAINT "_pages_v_blocks_rating_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_rating_block" ADD CONSTRAINT "_pages_v_blocks_rating_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hero_bg_block_buttons" ADD CONSTRAINT "_pages_v_blocks_hero_bg_block_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero_bg_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hero_bg_block" ADD CONSTRAINT "_pages_v_blocks_hero_bg_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hero_bg_block" ADD CONSTRAINT "_pages_v_blocks_hero_bg_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_security_block_feature_items" ADD CONSTRAINT "_pages_v_blocks_security_block_feature_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_security_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_security_block" ADD CONSTRAINT "_pages_v_blocks_security_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_security_block" ADD CONSTRAINT "_pages_v_blocks_security_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_terms_block" ADD CONSTRAINT "_pages_v_blocks_terms_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_related_posts" ADD CONSTRAINT "_pages_v_blocks_related_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_clients_block_clients" ADD CONSTRAINT "_pages_v_blocks_clients_block_clients_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_clients_block_clients" ADD CONSTRAINT "_pages_v_blocks_clients_block_clients_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_clients_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_clients_block" ADD CONSTRAINT "_pages_v_blocks_clients_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_terms_fk" FOREIGN KEY ("terms_id") REFERENCES "public"."terms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_populated_authors" ADD CONSTRAINT "posts_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts" ADD CONSTRAINT "posts_author_id_users_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts" ADD CONSTRAINT "posts_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts" ADD CONSTRAINT "posts_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_version_populated_authors" ADD CONSTRAINT "_posts_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_parent_id_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_author_id_users_id_fk" FOREIGN KEY ("version_author_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "categories_breadcrumbs" ADD CONSTRAINT "categories_breadcrumbs_doc_id_categories_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "categories_breadcrumbs" ADD CONSTRAINT "categories_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_id_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_terms_v" ADD CONSTRAINT "_terms_v_parent_id_terms_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."terms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cached_responses_tags" ADD CONSTRAINT "cached_responses_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cached_responses"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_checkbox" ADD CONSTRAINT "forms_blocks_checkbox_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_country" ADD CONSTRAINT "forms_blocks_country_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_email" ADD CONSTRAINT "forms_blocks_email_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_message" ADD CONSTRAINT "forms_blocks_message_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_number" ADD CONSTRAINT "forms_blocks_number_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select_options" ADD CONSTRAINT "forms_blocks_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select" ADD CONSTRAINT "forms_blocks_select_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_state" ADD CONSTRAINT "forms_blocks_state_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_text" ADD CONSTRAINT "forms_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_textarea" ADD CONSTRAINT "forms_blocks_textarea_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_emails" ADD CONSTRAINT "forms_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_submissions_submission_data" ADD CONSTRAINT "form_submissions_submission_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search_categories" ADD CONSTRAINT "search_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search" ADD CONSTRAINT "search_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_jobs_log" ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_terms_fk" FOREIGN KEY ("terms_id") REFERENCES "public"."terms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_cached_responses_fk" FOREIGN KEY ("cached_responses_id") REFERENCES "public"."cached_responses"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_chat_feedback_fk" FOREIGN KEY ("chat_feedback_id") REFERENCES "public"."chat_feedback"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_search_fk" FOREIGN KEY ("search_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_payload_jobs_fk" FOREIGN KEY ("payload_jobs_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_nav_items" ADD CONSTRAINT "header_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_mega_menu_items_sections_items" ADD CONSTRAINT "header_mega_menu_items_sections_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_mega_menu_items_sections"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_mega_menu_items_sections" ADD CONSTRAINT "header_mega_menu_items_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_mega_menu_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_mega_menu_items" ADD CONSTRAINT "header_mega_menu_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_auth_buttons_register_button_auth_items" ADD CONSTRAINT "header_auth_buttons_register_button_auth_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_auth_buttons_sign_in_button_auth_items" ADD CONSTRAINT "header_auth_buttons_sign_in_button_auth_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_product_links_links" ADD CONSTRAINT "footer_product_links_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_company_links_links" ADD CONSTRAINT "footer_company_links_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_resource_links_links" ADD CONSTRAINT "footer_resource_links_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_nav_items" ADD CONSTRAINT "footer_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "notification_banner_rels" ADD CONSTRAINT "notification_banner_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."notification_banner"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "notification_banner_rels" ADD CONSTRAINT "notification_banner_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "notification_banner_rels" ADD CONSTRAINT "notification_banner_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_links_order_idx" ON "pages_blocks_cta_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_links_parent_id_idx" ON "pages_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_order_idx" ON "pages_blocks_cta" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_parent_id_idx" ON "pages_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_path_idx" ON "pages_blocks_cta" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_columns_order_idx" ON "pages_blocks_content_columns" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_columns_parent_id_idx" ON "pages_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_order_idx" ON "pages_blocks_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_parent_id_idx" ON "pages_blocks_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_path_idx" ON "pages_blocks_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_order_idx" ON "pages_blocks_media_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_parent_id_idx" ON "pages_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_path_idx" ON "pages_blocks_media_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_media_idx" ON "pages_blocks_media_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_archive_order_idx" ON "pages_blocks_archive" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_archive_parent_id_idx" ON "pages_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_archive_path_idx" ON "pages_blocks_archive" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_block_sections_order_idx" ON "pages_blocks_form_block_sections" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_block_sections_parent_id_idx" ON "pages_blocks_form_block_sections" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_block_order_idx" ON "pages_blocks_form_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_block_parent_id_idx" ON "pages_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_block_path_idx" ON "pages_blocks_form_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_block_form_idx" ON "pages_blocks_form_block" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_block_buttons_order_idx" ON "pages_blocks_hero_block_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_block_buttons_parent_id_idx" ON "pages_blocks_hero_block_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_block_order_idx" ON "pages_blocks_hero_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_block_parent_id_idx" ON "pages_blocks_hero_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_block_path_idx" ON "pages_blocks_hero_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_block_media_idx" ON "pages_blocks_hero_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_story_block_feature_items_order_idx" ON "pages_blocks_story_block_feature_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_story_block_feature_items_parent_id_idx" ON "pages_blocks_story_block_feature_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_story_block_order_idx" ON "pages_blocks_story_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_story_block_parent_id_idx" ON "pages_blocks_story_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_story_block_path_idx" ON "pages_blocks_story_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_story_block_media_idx" ON "pages_blocks_story_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_full_hero_block_buttons_order_idx" ON "pages_blocks_full_hero_block_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_full_hero_block_buttons_parent_id_idx" ON "pages_blocks_full_hero_block_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_full_hero_block_order_idx" ON "pages_blocks_full_hero_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_full_hero_block_parent_id_idx" ON "pages_blocks_full_hero_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_full_hero_block_path_idx" ON "pages_blocks_full_hero_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_full_hero_block_media_idx" ON "pages_blocks_full_hero_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_pricing_table_categories_features_order_idx" ON "pages_blocks_pricing_table_categories_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_pricing_table_categories_features_parent_id_idx" ON "pages_blocks_pricing_table_categories_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_pricing_table_categories_order_idx" ON "pages_blocks_pricing_table_categories" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_pricing_table_categories_parent_id_idx" ON "pages_blocks_pricing_table_categories" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_pricing_table_order_idx" ON "pages_blocks_pricing_table" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_pricing_table_parent_id_idx" ON "pages_blocks_pricing_table" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_pricing_table_path_idx" ON "pages_blocks_pricing_table" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_product_blocks_products_order_idx" ON "pages_blocks_product_blocks_products" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_product_blocks_products_parent_id_idx" ON "pages_blocks_product_blocks_products" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_product_blocks_products_media_idx" ON "pages_blocks_product_blocks_products" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_product_blocks_order_idx" ON "pages_blocks_product_blocks" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_product_blocks_parent_id_idx" ON "pages_blocks_product_blocks" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_product_blocks_path_idx" ON "pages_blocks_product_blocks" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_product_steps_blocks_steps_order_idx" ON "pages_blocks_product_steps_blocks_steps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_product_steps_blocks_steps_parent_id_idx" ON "pages_blocks_product_steps_blocks_steps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_product_steps_blocks_steps_media_idx" ON "pages_blocks_product_steps_blocks_steps" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_product_steps_blocks_order_idx" ON "pages_blocks_product_steps_blocks" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_product_steps_blocks_parent_id_idx" ON "pages_blocks_product_steps_blocks" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_product_steps_blocks_path_idx" ON "pages_blocks_product_steps_blocks" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_full_block_order_idx" ON "pages_blocks_cta_full_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_full_block_parent_id_idx" ON "pages_blocks_cta_full_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_full_block_path_idx" ON "pages_blocks_cta_full_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_large_block_order_idx" ON "pages_blocks_cta_large_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_large_block_parent_id_idx" ON "pages_blocks_cta_large_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_large_block_path_idx" ON "pages_blocks_cta_large_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_large_block_illustration_idx" ON "pages_blocks_cta_large_block" USING btree ("illustration_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_small_block_order_idx" ON "pages_blocks_cta_small_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_small_block_parent_id_idx" ON "pages_blocks_cta_small_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_small_block_path_idx" ON "pages_blocks_cta_small_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_feature_block_feature_items_order_idx" ON "pages_blocks_feature_block_feature_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_feature_block_feature_items_parent_id_idx" ON "pages_blocks_feature_block_feature_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_feature_block_order_idx" ON "pages_blocks_feature_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_feature_block_parent_id_idx" ON "pages_blocks_feature_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_feature_block_path_idx" ON "pages_blocks_feature_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_feature_block_media_idx" ON "pages_blocks_feature_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_platform_features_features_order_idx" ON "pages_blocks_platform_features_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_platform_features_features_parent_id_idx" ON "pages_blocks_platform_features_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_platform_features_features_svg_media_idx" ON "pages_blocks_platform_features_features" USING btree ("svg_media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_platform_features_order_idx" ON "pages_blocks_platform_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_platform_features_parent_id_idx" ON "pages_blocks_platform_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_platform_features_path_idx" ON "pages_blocks_platform_features" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_faq_items_order_idx" ON "pages_blocks_faq_block_faq_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_faq_items_parent_id_idx" ON "pages_blocks_faq_block_faq_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_order_idx" ON "pages_blocks_faq_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_parent_id_idx" ON "pages_blocks_faq_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_path_idx" ON "pages_blocks_faq_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_team_block_team_members_links_order_idx" ON "pages_blocks_team_block_team_members_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_team_block_team_members_links_parent_id_idx" ON "pages_blocks_team_block_team_members_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_team_block_team_members_order_idx" ON "pages_blocks_team_block_team_members" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_team_block_team_members_parent_id_idx" ON "pages_blocks_team_block_team_members" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_team_block_team_members_image_idx" ON "pages_blocks_team_block_team_members" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_team_block_order_idx" ON "pages_blocks_team_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_team_block_parent_id_idx" ON "pages_blocks_team_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_team_block_path_idx" ON "pages_blocks_team_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_industry_block_industry_order_idx" ON "pages_blocks_industry_block_industry" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_industry_block_industry_parent_id_idx" ON "pages_blocks_industry_block_industry" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_industry_block_industry_media_idx" ON "pages_blocks_industry_block_industry" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_industry_block_order_idx" ON "pages_blocks_industry_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_industry_block_parent_id_idx" ON "pages_blocks_industry_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_industry_block_path_idx" ON "pages_blocks_industry_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_rating_block_feature_items_order_idx" ON "pages_blocks_rating_block_feature_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_rating_block_feature_items_parent_id_idx" ON "pages_blocks_rating_block_feature_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_rating_block_order_idx" ON "pages_blocks_rating_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_rating_block_parent_id_idx" ON "pages_blocks_rating_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_rating_block_path_idx" ON "pages_blocks_rating_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_rating_block_media_idx" ON "pages_blocks_rating_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_bg_block_buttons_order_idx" ON "pages_blocks_hero_bg_block_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_bg_block_buttons_parent_id_idx" ON "pages_blocks_hero_bg_block_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_bg_block_order_idx" ON "pages_blocks_hero_bg_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_bg_block_parent_id_idx" ON "pages_blocks_hero_bg_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_bg_block_path_idx" ON "pages_blocks_hero_bg_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_bg_block_media_idx" ON "pages_blocks_hero_bg_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_security_block_feature_items_order_idx" ON "pages_blocks_security_block_feature_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_security_block_feature_items_parent_id_idx" ON "pages_blocks_security_block_feature_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_security_block_order_idx" ON "pages_blocks_security_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_security_block_parent_id_idx" ON "pages_blocks_security_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_security_block_path_idx" ON "pages_blocks_security_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_security_block_media_idx" ON "pages_blocks_security_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_terms_block_order_idx" ON "pages_blocks_terms_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_terms_block_parent_id_idx" ON "pages_blocks_terms_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_terms_block_path_idx" ON "pages_blocks_terms_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_related_posts_order_idx" ON "pages_blocks_related_posts" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_related_posts_parent_id_idx" ON "pages_blocks_related_posts" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_related_posts_path_idx" ON "pages_blocks_related_posts" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_clients_block_clients_order_idx" ON "pages_blocks_clients_block_clients" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_clients_block_clients_parent_id_idx" ON "pages_blocks_clients_block_clients" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_clients_block_clients_logo_idx" ON "pages_blocks_clients_block_clients" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_clients_block_order_idx" ON "pages_blocks_clients_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_clients_block_parent_id_idx" ON "pages_blocks_clients_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_clients_block_path_idx" ON "pages_blocks_clients_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_meta_meta_image_idx" ON "pages" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_posts_id_idx" ON "pages_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_categories_id_idx" ON "pages_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_terms_id_idx" ON "pages_rels" USING btree ("terms_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_links_order_idx" ON "_pages_v_blocks_cta_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_links_parent_id_idx" ON "_pages_v_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_order_idx" ON "_pages_v_blocks_cta" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_parent_id_idx" ON "_pages_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_path_idx" ON "_pages_v_blocks_cta" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_columns_order_idx" ON "_pages_v_blocks_content_columns" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_columns_parent_id_idx" ON "_pages_v_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_order_idx" ON "_pages_v_blocks_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_parent_id_idx" ON "_pages_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_path_idx" ON "_pages_v_blocks_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_block_order_idx" ON "_pages_v_blocks_media_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_block_parent_id_idx" ON "_pages_v_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_block_path_idx" ON "_pages_v_blocks_media_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_block_media_idx" ON "_pages_v_blocks_media_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_archive_order_idx" ON "_pages_v_blocks_archive" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_archive_parent_id_idx" ON "_pages_v_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_archive_path_idx" ON "_pages_v_blocks_archive" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_block_sections_order_idx" ON "_pages_v_blocks_form_block_sections" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_block_sections_parent_id_idx" ON "_pages_v_blocks_form_block_sections" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_block_order_idx" ON "_pages_v_blocks_form_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_block_parent_id_idx" ON "_pages_v_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_block_path_idx" ON "_pages_v_blocks_form_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_block_form_idx" ON "_pages_v_blocks_form_block" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_block_buttons_order_idx" ON "_pages_v_blocks_hero_block_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_block_buttons_parent_id_idx" ON "_pages_v_blocks_hero_block_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_block_order_idx" ON "_pages_v_blocks_hero_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_block_parent_id_idx" ON "_pages_v_blocks_hero_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_block_path_idx" ON "_pages_v_blocks_hero_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_block_media_idx" ON "_pages_v_blocks_hero_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_story_block_feature_items_order_idx" ON "_pages_v_blocks_story_block_feature_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_story_block_feature_items_parent_id_idx" ON "_pages_v_blocks_story_block_feature_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_story_block_order_idx" ON "_pages_v_blocks_story_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_story_block_parent_id_idx" ON "_pages_v_blocks_story_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_story_block_path_idx" ON "_pages_v_blocks_story_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_story_block_media_idx" ON "_pages_v_blocks_story_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_full_hero_block_buttons_order_idx" ON "_pages_v_blocks_full_hero_block_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_full_hero_block_buttons_parent_id_idx" ON "_pages_v_blocks_full_hero_block_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_full_hero_block_order_idx" ON "_pages_v_blocks_full_hero_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_full_hero_block_parent_id_idx" ON "_pages_v_blocks_full_hero_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_full_hero_block_path_idx" ON "_pages_v_blocks_full_hero_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_full_hero_block_media_idx" ON "_pages_v_blocks_full_hero_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_pricing_table_categories_features_order_idx" ON "_pages_v_blocks_pricing_table_categories_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_pricing_table_categories_features_parent_id_idx" ON "_pages_v_blocks_pricing_table_categories_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_pricing_table_categories_order_idx" ON "_pages_v_blocks_pricing_table_categories" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_pricing_table_categories_parent_id_idx" ON "_pages_v_blocks_pricing_table_categories" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_pricing_table_order_idx" ON "_pages_v_blocks_pricing_table" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_pricing_table_parent_id_idx" ON "_pages_v_blocks_pricing_table" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_pricing_table_path_idx" ON "_pages_v_blocks_pricing_table" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_product_blocks_products_order_idx" ON "_pages_v_blocks_product_blocks_products" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_product_blocks_products_parent_id_idx" ON "_pages_v_blocks_product_blocks_products" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_product_blocks_products_media_idx" ON "_pages_v_blocks_product_blocks_products" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_product_blocks_order_idx" ON "_pages_v_blocks_product_blocks" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_product_blocks_parent_id_idx" ON "_pages_v_blocks_product_blocks" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_product_blocks_path_idx" ON "_pages_v_blocks_product_blocks" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_product_steps_blocks_steps_order_idx" ON "_pages_v_blocks_product_steps_blocks_steps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_product_steps_blocks_steps_parent_id_idx" ON "_pages_v_blocks_product_steps_blocks_steps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_product_steps_blocks_steps_media_idx" ON "_pages_v_blocks_product_steps_blocks_steps" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_product_steps_blocks_order_idx" ON "_pages_v_blocks_product_steps_blocks" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_product_steps_blocks_parent_id_idx" ON "_pages_v_blocks_product_steps_blocks" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_product_steps_blocks_path_idx" ON "_pages_v_blocks_product_steps_blocks" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_full_block_order_idx" ON "_pages_v_blocks_cta_full_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_full_block_parent_id_idx" ON "_pages_v_blocks_cta_full_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_full_block_path_idx" ON "_pages_v_blocks_cta_full_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_large_block_order_idx" ON "_pages_v_blocks_cta_large_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_large_block_parent_id_idx" ON "_pages_v_blocks_cta_large_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_large_block_path_idx" ON "_pages_v_blocks_cta_large_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_large_block_illustration_idx" ON "_pages_v_blocks_cta_large_block" USING btree ("illustration_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_small_block_order_idx" ON "_pages_v_blocks_cta_small_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_small_block_parent_id_idx" ON "_pages_v_blocks_cta_small_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_small_block_path_idx" ON "_pages_v_blocks_cta_small_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_feature_block_feature_items_order_idx" ON "_pages_v_blocks_feature_block_feature_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_feature_block_feature_items_parent_id_idx" ON "_pages_v_blocks_feature_block_feature_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_feature_block_order_idx" ON "_pages_v_blocks_feature_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_feature_block_parent_id_idx" ON "_pages_v_blocks_feature_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_feature_block_path_idx" ON "_pages_v_blocks_feature_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_feature_block_media_idx" ON "_pages_v_blocks_feature_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_platform_features_features_order_idx" ON "_pages_v_blocks_platform_features_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_platform_features_features_parent_id_idx" ON "_pages_v_blocks_platform_features_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_platform_features_features_svg_media_idx" ON "_pages_v_blocks_platform_features_features" USING btree ("svg_media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_platform_features_order_idx" ON "_pages_v_blocks_platform_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_platform_features_parent_id_idx" ON "_pages_v_blocks_platform_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_platform_features_path_idx" ON "_pages_v_blocks_platform_features" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_faq_items_order_idx" ON "_pages_v_blocks_faq_block_faq_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_faq_items_parent_id_idx" ON "_pages_v_blocks_faq_block_faq_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_order_idx" ON "_pages_v_blocks_faq_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_parent_id_idx" ON "_pages_v_blocks_faq_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_path_idx" ON "_pages_v_blocks_faq_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_team_block_team_members_links_order_idx" ON "_pages_v_blocks_team_block_team_members_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_team_block_team_members_links_parent_id_idx" ON "_pages_v_blocks_team_block_team_members_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_team_block_team_members_order_idx" ON "_pages_v_blocks_team_block_team_members" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_team_block_team_members_parent_id_idx" ON "_pages_v_blocks_team_block_team_members" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_team_block_team_members_image_idx" ON "_pages_v_blocks_team_block_team_members" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_team_block_order_idx" ON "_pages_v_blocks_team_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_team_block_parent_id_idx" ON "_pages_v_blocks_team_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_team_block_path_idx" ON "_pages_v_blocks_team_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_industry_block_industry_order_idx" ON "_pages_v_blocks_industry_block_industry" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_industry_block_industry_parent_id_idx" ON "_pages_v_blocks_industry_block_industry" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_industry_block_industry_media_idx" ON "_pages_v_blocks_industry_block_industry" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_industry_block_order_idx" ON "_pages_v_blocks_industry_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_industry_block_parent_id_idx" ON "_pages_v_blocks_industry_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_industry_block_path_idx" ON "_pages_v_blocks_industry_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_rating_block_feature_items_order_idx" ON "_pages_v_blocks_rating_block_feature_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_rating_block_feature_items_parent_id_idx" ON "_pages_v_blocks_rating_block_feature_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_rating_block_order_idx" ON "_pages_v_blocks_rating_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_rating_block_parent_id_idx" ON "_pages_v_blocks_rating_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_rating_block_path_idx" ON "_pages_v_blocks_rating_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_rating_block_media_idx" ON "_pages_v_blocks_rating_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_bg_block_buttons_order_idx" ON "_pages_v_blocks_hero_bg_block_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_bg_block_buttons_parent_id_idx" ON "_pages_v_blocks_hero_bg_block_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_bg_block_order_idx" ON "_pages_v_blocks_hero_bg_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_bg_block_parent_id_idx" ON "_pages_v_blocks_hero_bg_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_bg_block_path_idx" ON "_pages_v_blocks_hero_bg_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_bg_block_media_idx" ON "_pages_v_blocks_hero_bg_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_security_block_feature_items_order_idx" ON "_pages_v_blocks_security_block_feature_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_security_block_feature_items_parent_id_idx" ON "_pages_v_blocks_security_block_feature_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_security_block_order_idx" ON "_pages_v_blocks_security_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_security_block_parent_id_idx" ON "_pages_v_blocks_security_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_security_block_path_idx" ON "_pages_v_blocks_security_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_security_block_media_idx" ON "_pages_v_blocks_security_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_terms_block_order_idx" ON "_pages_v_blocks_terms_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_terms_block_parent_id_idx" ON "_pages_v_blocks_terms_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_terms_block_path_idx" ON "_pages_v_blocks_terms_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_related_posts_order_idx" ON "_pages_v_blocks_related_posts" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_related_posts_parent_id_idx" ON "_pages_v_blocks_related_posts" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_related_posts_path_idx" ON "_pages_v_blocks_related_posts" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_clients_block_clients_order_idx" ON "_pages_v_blocks_clients_block_clients" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_clients_block_clients_parent_id_idx" ON "_pages_v_blocks_clients_block_clients" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_clients_block_clients_logo_idx" ON "_pages_v_blocks_clients_block_clients" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_clients_block_order_idx" ON "_pages_v_blocks_clients_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_clients_block_parent_id_idx" ON "_pages_v_blocks_clients_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_clients_block_path_idx" ON "_pages_v_blocks_clients_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_posts_id_idx" ON "_pages_v_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_categories_id_idx" ON "_pages_v_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_terms_id_idx" ON "_pages_v_rels" USING btree ("terms_id");
  CREATE INDEX IF NOT EXISTS "posts_populated_authors_order_idx" ON "posts_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "posts_populated_authors_parent_id_idx" ON "posts_populated_authors" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "posts_title_idx" ON "posts" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "posts_author_idx" ON "posts" USING btree ("author_id");
  CREATE INDEX IF NOT EXISTS "posts_hero_image_idx" ON "posts" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "posts_meta_meta_image_idx" ON "posts" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "posts_slug_idx" ON "posts" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "posts__status_idx" ON "posts" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "posts_rels_order_idx" ON "posts_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "posts_rels_parent_idx" ON "posts_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "posts_rels_path_idx" ON "posts_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "posts_rels_posts_id_idx" ON "posts_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "posts_rels_categories_id_idx" ON "posts_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "posts_rels_users_id_idx" ON "posts_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_populated_authors_order_idx" ON "_posts_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_populated_authors_parent_id_idx" ON "_posts_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_parent_idx" ON "_posts_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_title_idx" ON "_posts_v" USING btree ("version_title");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_author_idx" ON "_posts_v" USING btree ("version_author_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_hero_image_idx" ON "_posts_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_meta_version_meta_image_idx" ON "_posts_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_slug_idx" ON "_posts_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_updated_at_idx" ON "_posts_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_created_at_idx" ON "_posts_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version__status_idx" ON "_posts_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_posts_v_created_at_idx" ON "_posts_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_updated_at_idx" ON "_posts_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_latest_idx" ON "_posts_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_posts_v_autosave_idx" ON "_posts_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_order_idx" ON "_posts_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_parent_idx" ON "_posts_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_path_idx" ON "_posts_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_posts_id_idx" ON "_posts_v_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_categories_id_idx" ON "_posts_v_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_users_id_idx" ON "_posts_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_square_sizes_square_filename_idx" ON "media" USING btree ("sizes_square_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_small_sizes_small_filename_idx" ON "media" USING btree ("sizes_small_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_medium_sizes_medium_filename_idx" ON "media" USING btree ("sizes_medium_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_large_sizes_large_filename_idx" ON "media" USING btree ("sizes_large_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_xlarge_sizes_xlarge_filename_idx" ON "media" USING btree ("sizes_xlarge_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_og_sizes_og_filename_idx" ON "media" USING btree ("sizes_og_filename");
  CREATE INDEX IF NOT EXISTS "categories_breadcrumbs_order_idx" ON "categories_breadcrumbs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "categories_breadcrumbs_parent_id_idx" ON "categories_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "categories_breadcrumbs_doc_idx" ON "categories_breadcrumbs" USING btree ("doc_id");
  CREATE INDEX IF NOT EXISTS "categories_slug_idx" ON "categories" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "categories_parent_idx" ON "categories" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "categories_updated_at_idx" ON "categories" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "categories_created_at_idx" ON "categories" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "terms_slug_idx" ON "terms" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "terms_updated_at_idx" ON "terms" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "terms_created_at_idx" ON "terms" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "terms__status_idx" ON "terms" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_terms_v_parent_idx" ON "_terms_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_terms_v_version_version_slug_idx" ON "_terms_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_terms_v_version_version_updated_at_idx" ON "_terms_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_terms_v_version_version_created_at_idx" ON "_terms_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_terms_v_version_version__status_idx" ON "_terms_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_terms_v_created_at_idx" ON "_terms_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_terms_v_updated_at_idx" ON "_terms_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_terms_v_latest_idx" ON "_terms_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "cached_responses_tags_order_idx" ON "cached_responses_tags" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cached_responses_tags_parent_id_idx" ON "cached_responses_tags" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "cached_responses_question_idx" ON "cached_responses" USING btree ("question");
  CREATE INDEX IF NOT EXISTS "cached_responses_updated_at_idx" ON "cached_responses" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "cached_responses_created_at_idx" ON "cached_responses" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "chat_feedback_updated_at_idx" ON "chat_feedback" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "chat_feedback_created_at_idx" ON "chat_feedback" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX IF NOT EXISTS "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "redirects_rels_order_idx" ON "redirects_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "redirects_rels_parent_idx" ON "redirects_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "redirects_rels_path_idx" ON "redirects_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "redirects_rels_pages_id_idx" ON "redirects_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "redirects_rels_posts_id_idx" ON "redirects_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_order_idx" ON "forms_blocks_checkbox" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_parent_id_idx" ON "forms_blocks_checkbox" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_path_idx" ON "forms_blocks_checkbox" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_country_order_idx" ON "forms_blocks_country" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_country_parent_id_idx" ON "forms_blocks_country" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_country_path_idx" ON "forms_blocks_country" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_order_idx" ON "forms_blocks_email" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_parent_id_idx" ON "forms_blocks_email" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_path_idx" ON "forms_blocks_email" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_message_order_idx" ON "forms_blocks_message" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_message_parent_id_idx" ON "forms_blocks_message" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_message_path_idx" ON "forms_blocks_message" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_order_idx" ON "forms_blocks_number" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_parent_id_idx" ON "forms_blocks_number" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_path_idx" ON "forms_blocks_number" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_options_order_idx" ON "forms_blocks_select_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_options_parent_id_idx" ON "forms_blocks_select_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_order_idx" ON "forms_blocks_select" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_parent_id_idx" ON "forms_blocks_select" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_path_idx" ON "forms_blocks_select" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_state_order_idx" ON "forms_blocks_state" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_state_parent_id_idx" ON "forms_blocks_state" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_state_path_idx" ON "forms_blocks_state" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_order_idx" ON "forms_blocks_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_parent_id_idx" ON "forms_blocks_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_path_idx" ON "forms_blocks_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_order_idx" ON "forms_blocks_textarea" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_parent_id_idx" ON "forms_blocks_textarea" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_path_idx" ON "forms_blocks_textarea" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_emails_order_idx" ON "forms_emails" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_emails_parent_id_idx" ON "forms_emails" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_updated_at_idx" ON "forms" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "forms_created_at_idx" ON "forms" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_order_idx" ON "form_submissions_submission_data" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_parent_id_idx" ON "form_submissions_submission_data" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "form_submissions_form_idx" ON "form_submissions" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "form_submissions_updated_at_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "search_categories_order_idx" ON "search_categories" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "search_categories_parent_id_idx" ON "search_categories" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "search_slug_idx" ON "search" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "search_meta_meta_image_idx" ON "search" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "search_updated_at_idx" ON "search" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "search_created_at_idx" ON "search" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "search_rels_order_idx" ON "search_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "search_rels_parent_idx" ON "search_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "search_rels_path_idx" ON "search_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "search_rels_posts_id_idx" ON "search_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "payload_jobs_log_order_idx" ON "payload_jobs_log" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "payload_jobs_log_parent_id_idx" ON "payload_jobs_log" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "payload_jobs_completed_at_idx" ON "payload_jobs" USING btree ("completed_at");
  CREATE INDEX IF NOT EXISTS "payload_jobs_total_tried_idx" ON "payload_jobs" USING btree ("total_tried");
  CREATE INDEX IF NOT EXISTS "payload_jobs_has_error_idx" ON "payload_jobs" USING btree ("has_error");
  CREATE INDEX IF NOT EXISTS "payload_jobs_task_slug_idx" ON "payload_jobs" USING btree ("task_slug");
  CREATE INDEX IF NOT EXISTS "payload_jobs_queue_idx" ON "payload_jobs" USING btree ("queue");
  CREATE INDEX IF NOT EXISTS "payload_jobs_wait_until_idx" ON "payload_jobs" USING btree ("wait_until");
  CREATE INDEX IF NOT EXISTS "payload_jobs_processing_idx" ON "payload_jobs" USING btree ("processing");
  CREATE INDEX IF NOT EXISTS "payload_jobs_updated_at_idx" ON "payload_jobs" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_jobs_created_at_idx" ON "payload_jobs" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_terms_id_idx" ON "payload_locked_documents_rels" USING btree ("terms_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_cached_responses_id_idx" ON "payload_locked_documents_rels" USING btree ("cached_responses_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_chat_feedback_id_idx" ON "payload_locked_documents_rels" USING btree ("chat_feedback_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_forms_id_idx" ON "payload_locked_documents_rels" USING btree ("forms_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_form_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_search_id_idx" ON "payload_locked_documents_rels" USING btree ("search_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_payload_jobs_id_idx" ON "payload_locked_documents_rels" USING btree ("payload_jobs_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "header_nav_items_order_idx" ON "header_nav_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "header_nav_items_parent_id_idx" ON "header_nav_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "header_mega_menu_items_sections_items_order_idx" ON "header_mega_menu_items_sections_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "header_mega_menu_items_sections_items_parent_id_idx" ON "header_mega_menu_items_sections_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "header_mega_menu_items_sections_order_idx" ON "header_mega_menu_items_sections" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "header_mega_menu_items_sections_parent_id_idx" ON "header_mega_menu_items_sections" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "header_mega_menu_items_order_idx" ON "header_mega_menu_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "header_mega_menu_items_parent_id_idx" ON "header_mega_menu_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "header_auth_buttons_register_button_auth_items_order_idx" ON "header_auth_buttons_register_button_auth_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "header_auth_buttons_register_button_auth_items_parent_id_idx" ON "header_auth_buttons_register_button_auth_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "header_auth_buttons_sign_in_button_auth_items_order_idx" ON "header_auth_buttons_sign_in_button_auth_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "header_auth_buttons_sign_in_button_auth_items_parent_id_idx" ON "header_auth_buttons_sign_in_button_auth_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "header_rels_order_idx" ON "header_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "header_rels_parent_idx" ON "header_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "header_rels_path_idx" ON "header_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "header_rels_pages_id_idx" ON "header_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "header_rels_posts_id_idx" ON "header_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "footer_product_links_links_order_idx" ON "footer_product_links_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_product_links_links_parent_id_idx" ON "footer_product_links_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_company_links_links_order_idx" ON "footer_company_links_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_company_links_links_parent_id_idx" ON "footer_company_links_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_resource_links_links_order_idx" ON "footer_resource_links_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_resource_links_links_parent_id_idx" ON "footer_resource_links_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_nav_items_order_idx" ON "footer_nav_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_nav_items_parent_id_idx" ON "footer_nav_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_rels_order_idx" ON "footer_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "footer_rels_parent_idx" ON "footer_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "footer_rels_path_idx" ON "footer_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "footer_rels_pages_id_idx" ON "footer_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "footer_rels_posts_id_idx" ON "footer_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "notification_banner_rels_order_idx" ON "notification_banner_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "notification_banner_rels_parent_idx" ON "notification_banner_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "notification_banner_rels_path_idx" ON "notification_banner_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "notification_banner_rels_pages_id_idx" ON "notification_banner_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "notification_banner_rels_posts_id_idx" ON "notification_banner_rels" USING btree ("posts_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_cta_links" CASCADE;
  DROP TABLE "pages_blocks_cta" CASCADE;
  DROP TABLE "pages_blocks_content_columns" CASCADE;
  DROP TABLE "pages_blocks_content" CASCADE;
  DROP TABLE "pages_blocks_media_block" CASCADE;
  DROP TABLE "pages_blocks_archive" CASCADE;
  DROP TABLE "pages_blocks_form_block_sections" CASCADE;
  DROP TABLE "pages_blocks_form_block" CASCADE;
  DROP TABLE "pages_blocks_hero_block_buttons" CASCADE;
  DROP TABLE "pages_blocks_hero_block" CASCADE;
  DROP TABLE "pages_blocks_story_block_feature_items" CASCADE;
  DROP TABLE "pages_blocks_story_block" CASCADE;
  DROP TABLE "pages_blocks_full_hero_block_buttons" CASCADE;
  DROP TABLE "pages_blocks_full_hero_block" CASCADE;
  DROP TABLE "pages_blocks_pricing_table_categories_features" CASCADE;
  DROP TABLE "pages_blocks_pricing_table_categories" CASCADE;
  DROP TABLE "pages_blocks_pricing_table" CASCADE;
  DROP TABLE "pages_blocks_product_blocks_products" CASCADE;
  DROP TABLE "pages_blocks_product_blocks" CASCADE;
  DROP TABLE "pages_blocks_product_steps_blocks_steps" CASCADE;
  DROP TABLE "pages_blocks_product_steps_blocks" CASCADE;
  DROP TABLE "pages_blocks_cta_full_block" CASCADE;
  DROP TABLE "pages_blocks_cta_large_block" CASCADE;
  DROP TABLE "pages_blocks_cta_small_block" CASCADE;
  DROP TABLE "pages_blocks_feature_block_feature_items" CASCADE;
  DROP TABLE "pages_blocks_feature_block" CASCADE;
  DROP TABLE "pages_blocks_platform_features_features" CASCADE;
  DROP TABLE "pages_blocks_platform_features" CASCADE;
  DROP TABLE "pages_blocks_faq_block_faq_items" CASCADE;
  DROP TABLE "pages_blocks_faq_block" CASCADE;
  DROP TABLE "pages_blocks_team_block_team_members_links" CASCADE;
  DROP TABLE "pages_blocks_team_block_team_members" CASCADE;
  DROP TABLE "pages_blocks_team_block" CASCADE;
  DROP TABLE "pages_blocks_industry_block_industry" CASCADE;
  DROP TABLE "pages_blocks_industry_block" CASCADE;
  DROP TABLE "pages_blocks_rating_block_feature_items" CASCADE;
  DROP TABLE "pages_blocks_rating_block" CASCADE;
  DROP TABLE "pages_blocks_hero_bg_block_buttons" CASCADE;
  DROP TABLE "pages_blocks_hero_bg_block" CASCADE;
  DROP TABLE "pages_blocks_security_block_feature_items" CASCADE;
  DROP TABLE "pages_blocks_security_block" CASCADE;
  DROP TABLE "pages_blocks_terms_block" CASCADE;
  DROP TABLE "pages_blocks_related_posts" CASCADE;
  DROP TABLE "pages_blocks_clients_block_clients" CASCADE;
  DROP TABLE "pages_blocks_clients_block" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_links" CASCADE;
  DROP TABLE "_pages_v_blocks_cta" CASCADE;
  DROP TABLE "_pages_v_blocks_content_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_content" CASCADE;
  DROP TABLE "_pages_v_blocks_media_block" CASCADE;
  DROP TABLE "_pages_v_blocks_archive" CASCADE;
  DROP TABLE "_pages_v_blocks_form_block_sections" CASCADE;
  DROP TABLE "_pages_v_blocks_form_block" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_block_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_block" CASCADE;
  DROP TABLE "_pages_v_blocks_story_block_feature_items" CASCADE;
  DROP TABLE "_pages_v_blocks_story_block" CASCADE;
  DROP TABLE "_pages_v_blocks_full_hero_block_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_full_hero_block" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_table_categories_features" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_table_categories" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_table" CASCADE;
  DROP TABLE "_pages_v_blocks_product_blocks_products" CASCADE;
  DROP TABLE "_pages_v_blocks_product_blocks" CASCADE;
  DROP TABLE "_pages_v_blocks_product_steps_blocks_steps" CASCADE;
  DROP TABLE "_pages_v_blocks_product_steps_blocks" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_full_block" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_large_block" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_small_block" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_block_feature_items" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_block" CASCADE;
  DROP TABLE "_pages_v_blocks_platform_features_features" CASCADE;
  DROP TABLE "_pages_v_blocks_platform_features" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_block_faq_items" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_block" CASCADE;
  DROP TABLE "_pages_v_blocks_team_block_team_members_links" CASCADE;
  DROP TABLE "_pages_v_blocks_team_block_team_members" CASCADE;
  DROP TABLE "_pages_v_blocks_team_block" CASCADE;
  DROP TABLE "_pages_v_blocks_industry_block_industry" CASCADE;
  DROP TABLE "_pages_v_blocks_industry_block" CASCADE;
  DROP TABLE "_pages_v_blocks_rating_block_feature_items" CASCADE;
  DROP TABLE "_pages_v_blocks_rating_block" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_bg_block_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_bg_block" CASCADE;
  DROP TABLE "_pages_v_blocks_security_block_feature_items" CASCADE;
  DROP TABLE "_pages_v_blocks_security_block" CASCADE;
  DROP TABLE "_pages_v_blocks_terms_block" CASCADE;
  DROP TABLE "_pages_v_blocks_related_posts" CASCADE;
  DROP TABLE "_pages_v_blocks_clients_block_clients" CASCADE;
  DROP TABLE "_pages_v_blocks_clients_block" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "posts_populated_authors" CASCADE;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "posts_rels" CASCADE;
  DROP TABLE "_posts_v_version_populated_authors" CASCADE;
  DROP TABLE "_posts_v" CASCADE;
  DROP TABLE "_posts_v_rels" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "categories_breadcrumbs" CASCADE;
  DROP TABLE "categories" CASCADE;
  DROP TABLE "terms" CASCADE;
  DROP TABLE "_terms_v" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "cached_responses_tags" CASCADE;
  DROP TABLE "cached_responses" CASCADE;
  DROP TABLE "chat_feedback" CASCADE;
  DROP TABLE "redirects" CASCADE;
  DROP TABLE "redirects_rels" CASCADE;
  DROP TABLE "forms_blocks_checkbox" CASCADE;
  DROP TABLE "forms_blocks_country" CASCADE;
  DROP TABLE "forms_blocks_email" CASCADE;
  DROP TABLE "forms_blocks_message" CASCADE;
  DROP TABLE "forms_blocks_number" CASCADE;
  DROP TABLE "forms_blocks_select_options" CASCADE;
  DROP TABLE "forms_blocks_select" CASCADE;
  DROP TABLE "forms_blocks_state" CASCADE;
  DROP TABLE "forms_blocks_text" CASCADE;
  DROP TABLE "forms_blocks_textarea" CASCADE;
  DROP TABLE "forms_emails" CASCADE;
  DROP TABLE "forms" CASCADE;
  DROP TABLE "form_submissions_submission_data" CASCADE;
  DROP TABLE "form_submissions" CASCADE;
  DROP TABLE "search_categories" CASCADE;
  DROP TABLE "search" CASCADE;
  DROP TABLE "search_rels" CASCADE;
  DROP TABLE "payload_jobs_log" CASCADE;
  DROP TABLE "payload_jobs" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "header_nav_items" CASCADE;
  DROP TABLE "header_mega_menu_items_sections_items" CASCADE;
  DROP TABLE "header_mega_menu_items_sections" CASCADE;
  DROP TABLE "header_mega_menu_items" CASCADE;
  DROP TABLE "header_auth_buttons_register_button_auth_items" CASCADE;
  DROP TABLE "header_auth_buttons_sign_in_button_auth_items" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "header_rels" CASCADE;
  DROP TABLE "footer_product_links_links" CASCADE;
  DROP TABLE "footer_company_links_links" CASCADE;
  DROP TABLE "footer_resource_links_links" CASCADE;
  DROP TABLE "footer_nav_items" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_rels" CASCADE;
  DROP TABLE "notification_banner" CASCADE;
  DROP TABLE "notification_banner_rels" CASCADE;
  DROP TABLE "ai_assistant" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_content_columns_size";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_type";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_archive_populate_by";
  DROP TYPE "public"."enum_pages_blocks_archive_relation_to";
  DROP TYPE "public"."enum_pages_blocks_hero_block_buttons_link_type";
  DROP TYPE "public"."enum_pages_blocks_hero_block_buttons_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_hero_block_notice_link_link_type";
  DROP TYPE "public"."enum_pages_blocks_hero_block_background_color";
  DROP TYPE "public"."enum_pages_blocks_story_block_media_type";
  DROP TYPE "public"."enum_pages_blocks_story_block_layout";
  DROP TYPE "public"."enum_pages_blocks_story_block_background_color";
  DROP TYPE "public"."enum_pages_blocks_story_block_media_border_radius";
  DROP TYPE "public"."enum_pages_blocks_story_block_media_width";
  DROP TYPE "public"."enum_pages_blocks_story_block_content_width";
  DROP TYPE "public"."enum_pages_blocks_full_hero_block_buttons_link_type";
  DROP TYPE "public"."enum_pages_blocks_full_hero_block_buttons_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_full_hero_block_notice_link_link_type";
  DROP TYPE "public"."enum_pages_blocks_full_hero_block_background_color";
  DROP TYPE "public"."enum_pages_blocks_pricing_table_categories_features_value";
  DROP TYPE "public"."enum_pages_blocks_product_blocks_products_link_type";
  DROP TYPE "public"."enum_pages_blocks_product_blocks_background_color";
  DROP TYPE "public"."enum_pages_blocks_product_blocks_product_card_color";
  DROP TYPE "public"."enum_pages_blocks_product_steps_blocks_background_color";
  DROP TYPE "public"."enum_pages_blocks_product_steps_blocks_product_card_color";
  DROP TYPE "public"."enum_pages_blocks_cta_full_block_button_link_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta_full_block_background_color";
  DROP TYPE "public"."enum_pages_blocks_cta_large_block_button_link_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta_large_block_terms_link_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta_large_block_background_color";
  DROP TYPE "public"."enum_pages_blocks_cta_small_block_button_link_link_type";
  DROP TYPE "public"."enum_pages_blocks_feature_block_media_type";
  DROP TYPE "public"."enum_pages_blocks_feature_block_button_link_type";
  DROP TYPE "public"."enum_pages_blocks_feature_block_button_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_feature_block_layout";
  DROP TYPE "public"."enum_pages_blocks_feature_block_background_color";
  DROP TYPE "public"."enum_pages_blocks_feature_block_media_border_radius";
  DROP TYPE "public"."enum_pages_blocks_feature_block_media_width";
  DROP TYPE "public"."enum_pages_blocks_feature_block_content_width";
  DROP TYPE "public"."enum_pages_blocks_platform_features_features_icon_type";
  DROP TYPE "public"."enum_pages_blocks_platform_features_background_color";
  DROP TYPE "public"."enum_pages_blocks_platform_features_button_link_type";
  DROP TYPE "public"."enum_pages_blocks_faq_block_button_link_link_type";
  DROP TYPE "public"."enum_pages_blocks_faq_block_background_color";
  DROP TYPE "public"."enum_pages_blocks_team_block_team_members_links_platform";
  DROP TYPE "public"."enum_pages_blocks_team_block_background_color";
  DROP TYPE "public"."enum_pages_blocks_industry_block_background_color";
  DROP TYPE "public"."enum_pages_blocks_rating_block_media_type";
  DROP TYPE "public"."enum_pages_blocks_rating_block_button_link_type";
  DROP TYPE "public"."enum_pages_blocks_rating_block_button_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_rating_block_layout";
  DROP TYPE "public"."enum_pages_blocks_rating_block_background_color";
  DROP TYPE "public"."enum_pages_blocks_rating_block_media_border_radius";
  DROP TYPE "public"."enum_pages_blocks_rating_block_media_width";
  DROP TYPE "public"."enum_pages_blocks_rating_block_content_width";
  DROP TYPE "public"."enum_pages_blocks_hero_bg_block_buttons_link_type";
  DROP TYPE "public"."enum_pages_blocks_hero_bg_block_buttons_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_hero_bg_block_notice_link_link_type";
  DROP TYPE "public"."enum_pages_blocks_hero_bg_block_background_color";
  DROP TYPE "public"."enum_pages_blocks_security_block_media_type";
  DROP TYPE "public"."enum_pages_blocks_security_block_button_link_type";
  DROP TYPE "public"."enum_pages_blocks_security_block_button_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_security_block_layout";
  DROP TYPE "public"."enum_pages_blocks_security_block_background_color";
  DROP TYPE "public"."enum_pages_blocks_security_block_media_border_radius";
  DROP TYPE "public"."enum_pages_blocks_security_block_media_width";
  DROP TYPE "public"."enum_pages_blocks_security_block_content_width";
  DROP TYPE "public"."enum_pages_blocks_terms_block_background_color";
  DROP TYPE "public"."enum_pages_blocks_clients_block_background_color";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_size";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_archive_populate_by";
  DROP TYPE "public"."enum__pages_v_blocks_archive_relation_to";
  DROP TYPE "public"."enum__pages_v_blocks_hero_block_buttons_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_hero_block_buttons_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_hero_block_notice_link_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_hero_block_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_story_block_media_type";
  DROP TYPE "public"."enum__pages_v_blocks_story_block_layout";
  DROP TYPE "public"."enum__pages_v_blocks_story_block_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_story_block_media_border_radius";
  DROP TYPE "public"."enum__pages_v_blocks_story_block_media_width";
  DROP TYPE "public"."enum__pages_v_blocks_story_block_content_width";
  DROP TYPE "public"."enum__pages_v_blocks_full_hero_block_buttons_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_full_hero_block_buttons_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_full_hero_block_notice_link_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_full_hero_block_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_pricing_table_categories_features_value";
  DROP TYPE "public"."enum__pages_v_blocks_product_blocks_products_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_product_blocks_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_product_blocks_product_card_color";
  DROP TYPE "public"."enum__pages_v_blocks_product_steps_blocks_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_product_steps_blocks_product_card_color";
  DROP TYPE "public"."enum__pages_v_blocks_cta_full_block_button_link_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_full_block_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_cta_large_block_button_link_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_large_block_terms_link_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_large_block_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_cta_small_block_button_link_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_feature_block_media_type";
  DROP TYPE "public"."enum__pages_v_blocks_feature_block_button_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_feature_block_button_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_feature_block_layout";
  DROP TYPE "public"."enum__pages_v_blocks_feature_block_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_feature_block_media_border_radius";
  DROP TYPE "public"."enum__pages_v_blocks_feature_block_media_width";
  DROP TYPE "public"."enum__pages_v_blocks_feature_block_content_width";
  DROP TYPE "public"."enum__pages_v_blocks_platform_features_features_icon_type";
  DROP TYPE "public"."enum__pages_v_blocks_platform_features_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_platform_features_button_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_faq_block_button_link_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_faq_block_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_team_block_team_members_links_platform";
  DROP TYPE "public"."enum__pages_v_blocks_team_block_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_industry_block_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_rating_block_media_type";
  DROP TYPE "public"."enum__pages_v_blocks_rating_block_button_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_rating_block_button_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_rating_block_layout";
  DROP TYPE "public"."enum__pages_v_blocks_rating_block_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_rating_block_media_border_radius";
  DROP TYPE "public"."enum__pages_v_blocks_rating_block_media_width";
  DROP TYPE "public"."enum__pages_v_blocks_rating_block_content_width";
  DROP TYPE "public"."enum__pages_v_blocks_hero_bg_block_buttons_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_hero_bg_block_buttons_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_hero_bg_block_notice_link_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_hero_bg_block_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_security_block_media_type";
  DROP TYPE "public"."enum__pages_v_blocks_security_block_button_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_security_block_button_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_security_block_layout";
  DROP TYPE "public"."enum__pages_v_blocks_security_block_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_security_block_media_border_radius";
  DROP TYPE "public"."enum__pages_v_blocks_security_block_media_width";
  DROP TYPE "public"."enum__pages_v_blocks_security_block_content_width";
  DROP TYPE "public"."enum__pages_v_blocks_terms_block_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_clients_block_background_color";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_posts_status";
  DROP TYPE "public"."enum__posts_v_version_status";
  DROP TYPE "public"."enum_terms_status";
  DROP TYPE "public"."enum__terms_v_version_status";
  DROP TYPE "public"."enum_users_role";
  DROP TYPE "public"."enum_redirects_to_type";
  DROP TYPE "public"."enum_forms_confirmation_type";
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  DROP TYPE "public"."enum_payload_jobs_log_state";
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  DROP TYPE "public"."enum_header_nav_items_link_type";
  DROP TYPE "public"."enum_header_mega_menu_items_sections_items_link_type";
  DROP TYPE "public"."enum_header_auth_buttons_register_button_auth_items_link_type";
  DROP TYPE "public"."enum_header_auth_buttons_sign_in_button_auth_items_link_type";
  DROP TYPE "public"."enum_header_auth_buttons_register_button_link_type";
  DROP TYPE "public"."enum_header_auth_buttons_register_button_link_appearance";
  DROP TYPE "public"."enum_header_auth_buttons_sign_in_button_link_type";
  DROP TYPE "public"."enum_header_auth_buttons_sign_in_button_link_appearance";
  DROP TYPE "public"."enum_footer_product_links_links_link_type";
  DROP TYPE "public"."enum_footer_company_links_links_link_type";
  DROP TYPE "public"."enum_footer_resource_links_links_link_type";
  DROP TYPE "public"."enum_footer_nav_items_link_type";
  DROP TYPE "public"."enum_notification_banner_link_details_link_type";
  DROP TYPE "public"."enum_notification_banner_link_details_link_appearance";`)
}
