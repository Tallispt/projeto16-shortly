--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: authTokens; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."authTokens" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token text NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: authTokens_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."authTokens_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: authTokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."authTokens_id_seq" OWNED BY public."authTokens".id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: visits; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.visits (
    id integer NOT NULL,
    "urlId" integer NOT NULL,
    "visitNumber" integer DEFAULT 1 NOT NULL
);


--
-- Name: visits_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.visits_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: visits_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.visits_id_seq OWNED BY public.visits.id;


--
-- Name: authTokens id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."authTokens" ALTER COLUMN id SET DEFAULT nextval('public."authTokens_id_seq"'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: visits id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.visits ALTER COLUMN id SET DEFAULT nextval('public.visits_id_seq'::regclass);


--
-- Data for Name: authTokens; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."authTokens" VALUES (2, 2, '5d63e788-fca4-40dd-adf8-4c5760979ec6', '2022-10-15 17:17:30.349099-03');
INSERT INTO public."authTokens" VALUES (3, 1, '2a6a91d0-78c9-43d7-b981-6a92bd0c910a', '2022-10-15 17:17:39.1454-03');
INSERT INTO public."authTokens" VALUES (4, 4, 'dc5141cd-0a33-40c5-bb92-17d22ce4ed43', '2022-10-15 20:53:42.233489-03');
INSERT INTO public."authTokens" VALUES (1, 3, '7b4318bc-b870-45ee-9687-c42d38018132', '2022-10-16 19:50:36.83274-03');
INSERT INTO public."authTokens" VALUES (5, 5, '3e9e8f2b-9528-4583-9ed9-12ee5f83ceec', '2022-10-16 20:18:22.208625-03');
INSERT INTO public."authTokens" VALUES (6, 6, '06bc054c-4ad4-4683-b2fd-06ef505a3f16', '2022-10-16 22:39:15.374238-03');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (3, 3, 'https://www.figma.com/file/DWg9233KR2GS6RLvfZRwyd/Shortly?node-id=0%3A1', '4tjTLb7F', '2022-10-14 15:27:07.846054-03');
INSERT INTO public.urls VALUES (4, 2, 'https://www.postgresql.org/docs/current/sql-update.html', 'hUTzgVn4', '2022-10-15 17:19:03.8163-03');
INSERT INTO public.urls VALUES (5, 2, 'https://bootcampra.notion.site/Projeto-Shortly-API-21533489cd5042058524caf3429b62e4', '2ec1aIl1', '2022-10-15 17:19:24.719084-03');
INSERT INTO public.urls VALUES (6, 1, 'https://hub.driven.com.br/computacao/modulo/43', 'B-5gqUdv', '2022-10-15 17:20:00.04479-03');
INSERT INTO public.urls VALUES (7, 1, 'https://app.dbdesigner.net/designer/schema/567103', 'CAWSB-gX', '2022-10-15 17:20:11.453366-03');
INSERT INTO public.urls VALUES (9, 6, 'https://app.dbdesigner.net/designer/schema/567103', 'LforDij6', '2022-10-16 21:38:53.58664-03');
INSERT INTO public.urls VALUES (11, 6, 'https://www.figma.com/file/DWg9233KR2GS6RLvfZRwyd/Shortly?node-id=0%3A1', 'CkJYgziu', '2022-10-16 22:38:47.462909-03');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Maria', 'maria@driven.com.br', '$2b$10$2DPerv7m9JyH99zaKcw7HekGIvW.sWYyGHHS9e9vkRSH2RMIT3AjS', '2022-10-14 13:59:26.442062-03');
INSERT INTO public.users VALUES (2, 'João', 'joao@driven.com.br', '$2b$10$704Oz4RaiyuoTMJAGNI7ZumcNxErycLjv2zIWKZy491ZKyJcRCfcq', '2022-10-14 13:59:59.857007-03');
INSERT INTO public.users VALUES (3, 'Tallis', 'tallis@driven.com.br', '$2b$10$8qytQHxOuXFhZ1g1VhWAVuqmhpG9NYggYDmuKbezYDvBTgriyuFsG', '2022-10-14 14:00:25.674865-03');
INSERT INTO public.users VALUES (4, 'José', 'jose@driven.com.br', '$2b$10$2xqmln4Y/MOVZB1gAUmGwOPcAuiuNK6Mav6.5haBmJdKZnnPBlSTW', '2022-10-15 17:20:42.238976-03');
INSERT INTO public.users VALUES (5, 'Marta', 'marta@driven.com.br', '$2b$10$VevumjRJAJAHQhynkkhCGu/fvfT/8l6H6tCdUP4yJNfzihxWGPuHW', '2022-10-16 20:08:41.835006-03');
INSERT INTO public.users VALUES (6, 'Gabi', 'gabi@driven.com.br', '$2b$10$DIRRMMjvgbc2EY3jNSQyeON02B6onmEa6h2MJ9.fylpiBxw08T8FK', '2022-10-16 21:34:51.001573-03');


--
-- Data for Name: visits; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.visits VALUES (1, 3, 3);
INSERT INTO public.visits VALUES (2, 4, 5);


--
-- Name: authTokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."authTokens_id_seq"', 6, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 11, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 6, true);


--
-- Name: visits_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.visits_id_seq', 3, true);


--
-- Name: authTokens authTokens_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."authTokens"
    ADD CONSTRAINT "authTokens_pkey" PRIMARY KEY (id);


--
-- Name: authTokens authTokens_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."authTokens"
    ADD CONSTRAINT "authTokens_token_key" UNIQUE (token);


--
-- Name: authTokens authTokens_userId_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."authTokens"
    ADD CONSTRAINT "authTokens_userId_key" UNIQUE ("userId");


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: visits visits_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.visits
    ADD CONSTRAINT visits_pkey PRIMARY KEY (id);


--
-- Name: authTokens authTokens_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."authTokens"
    ADD CONSTRAINT "authTokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: visits visits_urlId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.visits
    ADD CONSTRAINT "visits_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES public.urls(id);


--
-- PostgreSQL database dump complete
--

