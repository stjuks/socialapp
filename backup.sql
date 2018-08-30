PGDMP     4                     v        	   socialapp    10.5    10.5 3    (           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            )           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            *           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            +           1262    16394 	   socialapp    DATABASE     �   CREATE DATABASE socialapp WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Estonian_Estonia.1257' LC_CTYPE = 'Estonian_Estonia.1257';
    DROP DATABASE socialapp;
             steven    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false            ,           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    12924    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false            -           0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            �            1259    16497    comments    TABLE     �   CREATE TABLE public.comments (
    comment_id integer NOT NULL,
    poster_id integer NOT NULL,
    parent_id integer,
    content text NOT NULL,
    "timestamp" timestamp with time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.comments;
       public         steven    false    3            �            1259    16500    comments_comment_id_seq    SEQUENCE     �   CREATE SEQUENCE public.comments_comment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.comments_comment_id_seq;
       public       steven    false    3    202            .           0    0    comments_comment_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.comments_comment_id_seq OWNED BY public.comments.comment_id;
            public       steven    false    203            �            1259    16480 	   followers    TABLE     g   CREATE TABLE public.followers (
    follower_id integer NOT NULL,
    following_id integer NOT NULL
);
    DROP TABLE public.followers;
       public         steven    false    3            �            1259    16458    likes    TABLE     Z   CREATE TABLE public.likes (
    user_id integer NOT NULL,
    post_id integer NOT NULL
);
    DROP TABLE public.likes;
       public         steven    false    3            �            1259    16430    posts    TABLE     �   CREATE TABLE public.posts (
    post_id integer NOT NULL,
    image text NOT NULL,
    "timestamp" timestamp with time zone DEFAULT now(),
    user_id integer NOT NULL,
    caption text
);
    DROP TABLE public.posts;
       public         steven    false    3            �            1259    16433    posts_post_id_seq    SEQUENCE     �   CREATE SEQUENCE public.posts_post_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.posts_post_id_seq;
       public       steven    false    198    3            /           0    0    posts_post_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.posts_post_id_seq OWNED BY public.posts.post_id;
            public       steven    false    199            �            1259    16395    users    TABLE     �   CREATE TABLE public.users (
    user_id integer NOT NULL,
    username text NOT NULL,
    password text,
    avatar text,
    email text
);
    DROP TABLE public.users;
       public         steven    false    3            �            1259    16416    users_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.users_user_id_seq;
       public       steven    false    196    3            0           0    0    users_user_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;
            public       steven    false    197            �
           2604    16502    comments comment_id    DEFAULT     z   ALTER TABLE ONLY public.comments ALTER COLUMN comment_id SET DEFAULT nextval('public.comments_comment_id_seq'::regclass);
 B   ALTER TABLE public.comments ALTER COLUMN comment_id DROP DEFAULT;
       public       steven    false    203    202            �
           2604    16435    posts post_id    DEFAULT     n   ALTER TABLE ONLY public.posts ALTER COLUMN post_id SET DEFAULT nextval('public.posts_post_id_seq'::regclass);
 <   ALTER TABLE public.posts ALTER COLUMN post_id DROP DEFAULT;
       public       steven    false    199    198            �
           2604    16418    users user_id    DEFAULT     n   ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);
 <   ALTER TABLE public.users ALTER COLUMN user_id DROP DEFAULT;
       public       steven    false    197    196            $          0    16497    comments 
   TABLE DATA               Z   COPY public.comments (comment_id, poster_id, parent_id, content, "timestamp") FROM stdin;
    public       steven    false    202   �5       #          0    16480 	   followers 
   TABLE DATA               >   COPY public.followers (follower_id, following_id) FROM stdin;
    public       steven    false    201   �5       "          0    16458    likes 
   TABLE DATA               1   COPY public.likes (user_id, post_id) FROM stdin;
    public       steven    false    200   6                  0    16430    posts 
   TABLE DATA               N   COPY public.posts (post_id, image, "timestamp", user_id, caption) FROM stdin;
    public       steven    false    198   86                 0    16395    users 
   TABLE DATA               K   COPY public.users (user_id, username, password, avatar, email) FROM stdin;
    public       steven    false    196   �6       1           0    0    comments_comment_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.comments_comment_id_seq', 1, false);
            public       steven    false    203            2           0    0    posts_post_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.posts_post_id_seq', 3, true);
            public       steven    false    199            3           0    0    users_user_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.users_user_id_seq', 8, true);
            public       steven    false    197            �
           2606    16518    comments comments_PK 
   CONSTRAINT     \   ALTER TABLE ONLY public.comments
    ADD CONSTRAINT "comments_PK" PRIMARY KEY (comment_id);
 @   ALTER TABLE ONLY public.comments DROP CONSTRAINT "comments_PK";
       public         steven    false    202            �
           2606    16484    followers followers_PK 
   CONSTRAINT     m   ALTER TABLE ONLY public.followers
    ADD CONSTRAINT "followers_PK" PRIMARY KEY (follower_id, following_id);
 B   ALTER TABLE ONLY public.followers DROP CONSTRAINT "followers_PK";
       public         steven    false    201    201            �
           2606    16462    likes likes_PK 
   CONSTRAINT     \   ALTER TABLE ONLY public.likes
    ADD CONSTRAINT "likes_PK" PRIMARY KEY (post_id, user_id);
 :   ALTER TABLE ONLY public.likes DROP CONSTRAINT "likes_PK";
       public         steven    false    200    200            �
           2606    16440    posts post_id_PK 
   CONSTRAINT     U   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT "post_id_PK" PRIMARY KEY (post_id);
 <   ALTER TABLE ONLY public.posts DROP CONSTRAINT "post_id_PK";
       public         steven    false    198            �
           2606    16423    users user_id_PK 
   CONSTRAINT     U   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "user_id_PK" PRIMARY KEY (user_id);
 <   ALTER TABLE ONLY public.users DROP CONSTRAINT "user_id_PK";
       public         steven    false    196            �
           2606    16428    users username_UQ 
   CONSTRAINT     R   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "username_UQ" UNIQUE (username);
 =   ALTER TABLE ONLY public.users DROP CONSTRAINT "username_UQ";
       public         steven    false    196            �
           2606    16429    users username_length    CHECK CONSTRAINT     �   ALTER TABLE public.users
    ADD CONSTRAINT username_length CHECK (((char_length(username) >= 3) AND (char_length(username) <= 25))) NOT VALID;
 :   ALTER TABLE public.users DROP CONSTRAINT username_length;
       public       steven    false    196    196            �
           1259    16490    fki_follower_id_FK    INDEX     Q   CREATE INDEX "fki_follower_id_FK" ON public.followers USING btree (follower_id);
 (   DROP INDEX public."fki_follower_id_FK";
       public         steven    false    201            �
           1259    16496    fki_following_id_FK    INDEX     S   CREATE INDEX "fki_following_id_FK" ON public.followers USING btree (following_id);
 )   DROP INDEX public."fki_following_id_FK";
       public         steven    false    201            �
           1259    16473    fki_likes_user_id_FK    INDEX     K   CREATE INDEX "fki_likes_user_id_FK" ON public.likes USING btree (user_id);
 *   DROP INDEX public."fki_likes_user_id_FK";
       public         steven    false    200            �
           1259    16530    fki_parent_id_FK    INDEX     L   CREATE INDEX "fki_parent_id_FK" ON public.comments USING btree (parent_id);
 &   DROP INDEX public."fki_parent_id_FK";
       public         steven    false    202            �
           1259    16479    fki_post_id_FK    INDEX     E   CREATE INDEX "fki_post_id_FK" ON public.likes USING btree (post_id);
 $   DROP INDEX public."fki_post_id_FK";
       public         steven    false    200            �
           1259    16524    fki_poster_id_FK    INDEX     L   CREATE INDEX "fki_poster_id_FK" ON public.comments USING btree (poster_id);
 &   DROP INDEX public."fki_poster_id_FK";
       public         steven    false    202            �
           1259    16457    fki_user_id_FK    INDEX     E   CREATE INDEX "fki_user_id_FK" ON public.posts USING btree (user_id);
 $   DROP INDEX public."fki_user_id_FK";
       public         steven    false    198            �
           2606    16485    followers follower_id_FK    FK CONSTRAINT     �   ALTER TABLE ONLY public.followers
    ADD CONSTRAINT "follower_id_FK" FOREIGN KEY (follower_id) REFERENCES public.users(user_id);
 D   ALTER TABLE ONLY public.followers DROP CONSTRAINT "follower_id_FK";
       public       steven    false    2700    196    201            �
           2606    16491    followers following_id_FK    FK CONSTRAINT     �   ALTER TABLE ONLY public.followers
    ADD CONSTRAINT "following_id_FK" FOREIGN KEY (following_id) REFERENCES public.users(user_id);
 E   ALTER TABLE ONLY public.followers DROP CONSTRAINT "following_id_FK";
       public       steven    false    2700    196    201            �
           2606    16525    comments parent_id_FK    FK CONSTRAINT     �   ALTER TABLE ONLY public.comments
    ADD CONSTRAINT "parent_id_FK" FOREIGN KEY (parent_id) REFERENCES public.comments(comment_id);
 A   ALTER TABLE ONLY public.comments DROP CONSTRAINT "parent_id_FK";
       public       steven    false    202    2715    202            �
           2606    16474    likes post_id_FK    FK CONSTRAINT     v   ALTER TABLE ONLY public.likes
    ADD CONSTRAINT "post_id_FK" FOREIGN KEY (post_id) REFERENCES public.posts(post_id);
 <   ALTER TABLE ONLY public.likes DROP CONSTRAINT "post_id_FK";
       public       steven    false    200    2705    198            �
           2606    16519    comments poster_id_FK    FK CONSTRAINT     }   ALTER TABLE ONLY public.comments
    ADD CONSTRAINT "poster_id_FK" FOREIGN KEY (poster_id) REFERENCES public.users(user_id);
 A   ALTER TABLE ONLY public.comments DROP CONSTRAINT "poster_id_FK";
       public       steven    false    196    2700    202            �
           2606    16452    posts user_id_FK    FK CONSTRAINT     v   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT "user_id_FK" FOREIGN KEY (user_id) REFERENCES public.users(user_id);
 <   ALTER TABLE ONLY public.posts DROP CONSTRAINT "user_id_FK";
       public       steven    false    198    196    2700            �
           2606    16463    likes user_id_FK    FK CONSTRAINT     v   ALTER TABLE ONLY public.likes
    ADD CONSTRAINT "user_id_FK" FOREIGN KEY (user_id) REFERENCES public.users(user_id);
 <   ALTER TABLE ONLY public.likes DROP CONSTRAINT "user_id_FK";
       public       steven    false    200    2700    196            $      x������ � �      #   !   x�3�4�2�4bm
�f@l�ed��qqq E�      "      x�3�4�2�=... �          f   x�m�1
�0�z����O"1g�I��#D����ko��m"Hȝ�N�A�JI�=�G������͖��l��N(���9='�j��ì�V��<zf��%�         �   x���=�@ ����w�,���[� �e$���g~�fֿO�Ch	�����/�*����L3	6���(cQ��)I]BU
�K#tjVtf�d�?c3�%S��d�"f���_��^��zJ�����ga��<Q%o��gņ[up���il�l	��m�GD�1)�/ne(     