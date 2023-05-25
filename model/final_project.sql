/*POSTGRES USER*/
ALTER DATABASE adb OWNER TO postgres;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO postgres;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO postgres;

/*POSTGRES USER*/
DROP TABLE IF EXISTS "product" CASCADE;
DROP TABLE IF EXISTS "order" CASCADE;
DROP TABLE IF EXISTS "client" CASCADE;
DROP TABLE IF EXISTS "category" CASCADE;
DROP TABLE IF EXISTS "brand" CASCADE;
DROP TABLE IF EXISTS "orders_products" CASCADE;
DROP TABLE IF EXISTS "payment" CASCADE;

CREATE TABLE "client" (
  "client_id" SERIAL PRIMARY KEY,
  "name" VARCHAR(50) NOT NULL,
  "address" VARCHAR(100) NOT NULL,
  "email"  VARCHAR(50) UNIQUE NOT NULL,
  "phone" NUMERIC UNIQUE NOT NULL
);

CREATE TABLE "category" (
  "category_id" SERIAL PRIMARY KEY,
  "description" VARCHAR(500) NOT NULL,
  "code" VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE "brand" (
  "brand_id" SERIAL PRIMARY KEY,
  "name" VARCHAR(50) UNIQUE NOT NULL,
  "description" VARCHAR(500) NOT NULL
);

CREATE TABLE "product" (
  "product_id" SERIAL PRIMARY KEY,
  "name" VARCHAR(50) UNIQUE NOT NULL,
  "description" VARCHAR(500) NOT NULL,
  "stock" NUMERIC CHECK ("stock" > 0) NOT NULL,
  "multimedia" BYTEA NOT NULL,
  "multimedia_path" VARCHAR(300) UNIQUE NOT NULL,
  "category_id" INTEGER REFERENCES "category"("category_id") NOT NULL,
  "brand_id" INTEGER REFERENCES "brand"("brand_id") NOT NULL
);

CREATE TABLE "order" (
  "order_id" SERIAL PRIMARY KEY,
  "order_date" DATE NOT NULL,
  "address" VARCHAR(200) NOT NULL,
  "client_id" INTEGER REFERENCES "client"("client_id") NOT NULL
);

CREATE TABLE "orders_products" (
  "orders_products_id" SERIAL PRIMARY KEY,
  "quantity" NUMERIC CHECK ("quantity" > 0) NOT NULL,
  "unit_price" NUMERIC CHECK ("unit_price" > 0) NOT NULL,
  "subtotal" NUMERIC CHECK ("subtotal" > 0) NOT NULL,
  "order_id" INTEGER REFERENCES "order"("order_id") NOT NULL,
  "product_id" INTEGER REFERENCES "product"("product_id") NOT NULL
);

CREATE TABLE "payment" (
  "payment_id" SERIAL PRIMARY KEY,
  "method" VARCHAR(100) NOT NULL,
  "amount" NUMERIC CHECK ("amount" > 0) NOT NULL,
  "date" DATE NOT NULL,
  "product_id" INTEGER REFERENCES "product"("product_id") UNIQUE NOT NULL
);