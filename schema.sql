DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS followers;
DROP TABLE IF EXISTS likes;

CREATE TABLE users (
    user_id SERIAL,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(255) NOT NULL,
    avatar VARCHAR(20) NOT NULL DEFAULT 'default-avatar.jpg',
    email VARCHAR(255) NOT NULL,
    description VARCHAR(512),
    registered_at timestamp NOT NULL DEFAULT Now(),
    last_logged_in timestamptz,
    CONSTRAINT PK_users PRIMARY KEY (user_id),
    CONSTRAINT CHK_users_username_len CHECK (char_length(username) >= 3),
    CONSTRAINT CHK_users_email_format CHECK (email LIKE '%@%' AND email NOT LIKE '%@%@%')
);

CREATE UNIQUE INDEX IXUQ_users_email ON users(LOWER(email));
CREATE UNIQUE INDEX IXUQ_users_username ON users(LOWER(username));

CREATE TABLE posts (
    post_id SERIAL,
    poster_id INTEGER NOT NULL,
    image_name VARCHAR(20) NOT NULL,
    created_at timestamptz NOT NULL DEFAULT Now(),
    caption VARCHAR(2000),
    CONSTRAINT PK_posts PRIMARY KEY (post_id),
    CONSTRAINT FK_posts_poster_id FOREIGN KEY (poster_id) REFERENCES users(user_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE INDEX IX_posts_poster_id ON posts(poster_id);

CREATE TABLE comments (
    comment_id SERIAL,
    poster_id INTEGER NOT NULL,
    parent_id INTEGER,
    post_id INTEGER NOT NULL,
    content VARCHAR(2000) NOT NULL,
    created_at timestamptz NOT NULL DEFAULT Now(),
    CONSTRAINT CHK_comments_parent_id CHECK (comment_id != parent_id),
    CONSTRAINT PK_comments PRIMARY KEY (comment_id),
    CONSTRAINT FK_comments_poster_id FOREIGN KEY (poster_id) REFERENCES users(user_id) ON DELETE CASCADE,
    CONSTRAINT FK_comments_parent_id FOREIGN KEY (parent_id) REFERENCES comments(comment_id) ON DELETE CASCADE,
    CONSTRAINT FK_comments_post_id FOREIGN KEY (post_id) REFERENCES posts(post_id) ON DELETE CASCADE
);

CREATE INDEX IX_comments_parent_id ON comments(parent_id);
CREATE INDEX IX_comments_poster_id ON comments(poster_id);
CREATE INDEX IX_comments_post_id ON comments(post_id);

CREATE TABLE followers (
    follower_id INTEGER,
    following_id INTEGER,
    followed_at timestamptz NOT NULL DEFAULT Now(),
    CONSTRAINT PK_followers PRIMARY KEY (follower_id, following_id),
    CONSTRAINT FK_followers_follower_id FOREIGN KEY (follower_id) REFERENCES users(user_id) ON DELETE CASCADE,
    CONSTRAINT FK_followers_following_id FOREIGN KEY (following_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE INDEX IX_followers_following_id ON followers(following_id);

CREATE TABLE likes (
    user_id INTEGER,
    post_id INTEGER,
    liked_at timestamptz NOT NULL DEFAULT Now(),
    CONSTRAINT PK_likes PRIMARY KEY (user_id, post_id),
    CONSTRAINT FK_likes_user_id FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    CONSTRAINT FK_likes_post_id FOREIGN KEY (post_id) REFERENCES posts(post_id) ON DELETE CASCADE
);

CREATE INDEX IX_likes_post_id ON likes(post_id);

INSERT INTO users(username, password, email) VALUES ('sauland', 'p4ssw0rd', 'sauland@mail.com');
INSERT INTO users(username, password, email) VALUES ('sauland2', 'p4ssw0rd', 'sauland2@mail.com');
INSERT INTO users(username, password, email) VALUES ('sauland3', 'p4ssw0rd', 'sauland3@mail.com');
INSERT INTO users(username, password, email) VALUES ('sauland4', 'p4ssw0rd', 'sauland4@mail.com');
INSERT INTO users(username, password, email) VALUES ('sauland5', 'p4ssw0rd', 'sauland5@mail.com');
INSERT INTO users(username, password, email) VALUES ('sauland6', 'p4ssw0rd', 'sauland6@mail.com');

INSERT INTO posts(poster_id, image_name) VALUES (1, '1532235123.png');
INSERT INTO posts(poster_id, image_name) VALUES (1, '1532235124.png');
INSERT INTO posts(poster_id, image_name) VALUES (2, '1532235125.png');
INSERT INTO posts(poster_id, image_name) VALUES (2, '1532235126.png');
INSERT INTO posts(poster_id, image_name) VALUES (3, '1532235123.png');

INSERT INTO likes(post_id, user_id) VALUES (1, 1);
INSERT INTO likes(post_id, user_id) VALUES (1, 2);
INSERT INTO likes(post_id, user_id) VALUES (1, 3);
INSERT INTO likes(post_id, user_id) VALUES (1, 4);

INSERT INTO followers(follower_id, following_id) VALUES (2, 1);
INSERT INTO followers(follower_id, following_id) VALUES (3, 1);
INSERT INTO followers(follower_id, following_id) VALUES (4, 1);
INSERT INTO followers(follower_id, following_id) VALUES (4, 2);
INSERT INTO followers(follower_id, following_id) VALUES (4, 3);

DROP VIEW IF EXISTS all_posts CASCADE;

CREATE OR REPLACE VIEW all_posts AS 
SELECT 
    posts.post_id,
    users.user_id AS poster_id,
    users.username AS poster_username, 
    users.avatar AS poster_avatar,
    posts.image_name,
    posts.created_at,
    posts.caption,
	(
        SELECT COUNT(*) FROM likes 
        WHERE likes.post_id = posts.post_id
    ) AS like_count,
	(
		SELECT COUNT(*) FROM comments
		WHERE comments.post_id = posts.post_id
	) AS comment_count
FROM 
    (posts INNER JOIN users ON 
    posts.poster_id = users.user_id)
ORDER BY posts.created_at DESC;

DROP VIEW IF EXISTS feed_posts;

CREATE OR REPLACE VIEW feed_posts AS
SELECT 
    all_posts.*, 
    followers.follower_id
FROM 
    all_posts INNER JOIN followers ON
    all_posts.poster_id = followers.following_id;

DROP VIEW IF EXISTS all_comments;

CREATE OR REPLACE VIEW all_comments AS
SELECT
    comments.*,
    users.username AS poster_username,
    users.avatar AS poster_avatar
FROM
    comments INNER JOIN users ON 
    comments.poster_id = users.user_id;

DROP VIEW IF EXISTS user_profiles;

CREATE OR REPLACE VIEW user_profiles AS 
SELECT
    users.user_id,
    users.username,
    users.avatar,
    users.description,
    users.registered_at,
    (
        SELECT COUNT(*) FROM followers
        WHERE followers.follower_id = users.user_id
    ) AS following_count,
    (
        SELECT COUNT(*) FROM followers
        WHERE followers.following_id = users.user_id
    ) AS follower_count,
    (
        SELECT COUNT(*) FROM posts
        WHERE posts.poster_id = users.user_id
    ) AS post_count
FROM users;

DROP VIEW IF EXISTS user_search;

CREATE OR REPLACE VIEW user_search AS
SELECT
    users.user_id,
    users.username,
    users.avatar
FROM users;

DROP VIEW IF EXISTS followers_list;

CREATE OR REPLACE VIEW followers_list AS
SELECT 
	users.user_id, 
	users.username, 
	users.avatar,
	followers.following_id AS self_id
FROM users INNER JOIN followers ON 
	users.user_id = followers.follower_id;

DROP VIEW IF EXISTS following_list;

CREATE OR REPLACE VIEW following_list AS
SELECT 
	users.user_id, 
	users.username, 
	users.avatar,
	followers.follower_id AS self_id
FROM users INNER JOIN followers ON 
	users.user_id = followers.following_id;

DROP FUNCTION IF EXISTS f_register_user;

CREATE OR REPLACE FUNCTION f_register_user(
    p_username users.username%TYPE,
    p_email users.email%TYPE,
    p_password users.password%TYPE
) RETURNS VOID AS $$
    BEGIN
        INSERT INTO users(
            username, 
            email, 
            password
        ) VALUES (
            p_username,
            p_email,
            crypt(p_password, gen_salt('bf', 11))
        );
    END;
$$ LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp;

DROP FUNCTION IF EXISTS f_login_user;

CREATE OR REPLACE FUNCTION f_login_user(
    p_username users.username%TYPE,
    p_password users.password%TYPE
) RETURNS TABLE (
    user_id users.user_id%TYPE,
    username users.username%TYPE
) AS $$
    BEGIN
        RETURN QUERY 
            UPDATE users
            SET last_logged_in = Now()
            WHERE
                LOWER(users.username) = LOWER(p_username)
                AND password = public.crypt(p_password, password)
            RETURNING users.user_id, users.username;
    END;
$$ LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp;

DROP FUNCTION IF EXISTS f_follow_user;

CREATE OR REPLACE FUNCTION f_follow_user(
    p_follower_id followers.follower_id%TYPE,
    p_following_id followers.following_id%TYPE
) RETURNS VOID AS $$
    BEGIN
        INSERT INTO followers(
            follower_id,
            following_id
        ) VALUES (
            p_follower_id,
            p_following_id
        );
    END;
$$ LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp;

DROP FUNCTION IF EXISTS f_unfollow_user;

CREATE OR REPLACE FUNCTION f_unfollow_user(
    p_follower_id followers.follower_id%TYPE,
    p_following_id followers.following_id%TYPE
) RETURNS VOID AS $$
    BEGIN
        DELETE FROM followers WHERE 
        follower_id = p_follower_id AND
        following_id = p_following_id;
    END;
$$ LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp;

DROP FUNCTION IF EXISTS f_create_post;

CREATE OR REPLACE FUNCTION f_create_post(
    p_poster_id posts.poster_id%TYPE,
    p_image_name posts.image_name%TYPE,
    p_caption posts.caption%TYPE
) RETURNS VOID AS $$
    BEGIN
        INSERT INTO posts(
            poster_id,
            image_name,
            caption
        ) VALUES (
            p_poster_id,
            p_image_name,
            p_caption
        );
    END;
$$ LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp;

DROP FUNCTION IF EXISTS f_delete_post;

CREATE OR REPLACE FUNCTION f_delete_post(
    p_post_id posts.post_id%TYPE
) RETURNS VOID AS $$
    BEGIN
        DELETE FROM posts WHERE
        post_id = p_post_id;
    END;
$$ LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp;

DROP FUNCTION IF EXISTS f_like_post;

CREATE OR REPLACE FUNCTION f_like_post(
    p_user_id posts.poster_id%TYPE,
    p_post_id posts.post_id%TYPE
) RETURNS VOID AS $$
    BEGIN
        INSERT INTO likes(
            user_id,
            post_id
        ) VALUES (
            p_user_id,
            p_post_id
        );
    END;
$$ LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp;

DROP FUNCTION IF EXISTS f_unlike_post;

CREATE OR REPLACE FUNCTION f_unlike_post(
    p_user_id posts.poster_id%TYPE,
    p_post_id posts.post_id%TYPE
) RETURNS VOID AS $$
    BEGIN
        DELETE FROM likes WHERE
        user_id = p_user_id AND
        post_id = p_post_id;
    END;
$$ LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp;

DROP FUNCTION IF EXISTS f_comment_on_post;

CREATE OR REPLACE FUNCTION f_comment_on_post(
    p_post_id comments.post_id%TYPE,
    p_poster_id comments.poster_id%TYPE,
    p_content comments.content%TYPE,
    p_parent_id comments.parent_id%TYPE
) RETURNS VOID AS $$
    BEGIN
        INSERT INTO comments(
            post_id,
            poster_id,
            content,
            parent_id
        ) VALUES (
            p_post_id,
            p_poster_id,
            p_content,
            p_parent_id
        );
    END;
$$ LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp;

DROP FUNCTION IF EXISTS f_delete_comment_from_post;

CREATE OR REPLACE FUNCTION f_delete_comment_from_post(
    p_comment_id comments.comment_id%TYPE
) RETURNS VOID AS $$
    BEGIN
        DELETE FROM comments WHERE
        comment_id = p_comment_id;
    END;
$$ LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp;

DROP FUNCTION IF EXISTS f_get_user_profile;

CREATE OR REPLACE FUNCTION f_get_user_profile(
    p_self_id users.user_id%TYPE,
    p_username users.username%TYPE
) RETURNS TABLE (
    user_id user_profiles.user_id%TYPE,
    username user_profiles.username%TYPE,
    avatar user_profiles.avatar%TYPE,
    description user_profiles.description%TYPE,
    registered_at user_profiles.registered_at%TYPE,
    following_count user_profiles.following_count%TYPE,
    follower_count user_profiles.follower_count%TYPE,
    post_count user_profiles.post_count%TYPE,
    is_watcher_following boolean
 ) AS $$
    BEGIN
        RETURN QUERY SELECT user_profiles.*,
        EXISTS (
            SELECT 1 FROM followers WHERE
            follower_id = p_self_id AND
            following_id = user_profiles.user_id
        ) AS is_watcher_following
        FROM user_profiles
        WHERE user_profiles.username = p_username;
    END;
$$ LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp;

DROP FUNCTION IF EXISTS f_get_all_posts;

CREATE OR REPLACE FUNCTION f_get_all_posts(
    p_self_id users.user_id%TYPE
) RETURNS TABLE (
    post_id all_posts.post_id%TYPE,
    poster_id all_posts.poster_id%TYPE,
    poster_username all_posts.poster_username%TYPE,
    poster_avatar all_posts.poster_avatar%TYPE,
    image_name all_posts.image_name%TYPE,
    created_at all_posts.created_at%TYPE,
    caption all_posts.caption%TYPE,
    like_count all_posts.like_count%TYPE,
    comment_count all_posts.like_count%TYPE,
    has_watcher_liked boolean
) AS $$
    BEGIN
        RETURN QUERY SELECT all_posts.*,
        EXISTS (
            SELECT 1 FROM likes 
            WHERE likes.post_id = all_posts.post_id AND
            likes.user_id = p_self_id 
        ) FROM all_posts;
    END;
$$ LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp;

DROP FUNCTION IF EXISTS f_get_feed_posts;

CREATE OR REPLACE FUNCTION f_get_feed_posts(
    p_self_id users.user_id%TYPE
) RETURNS TABLE (
    post_id all_posts.post_id%TYPE,
    poster_id all_posts.poster_id%TYPE,
    poster_username all_posts.poster_username%TYPE,
    poster_avatar all_posts.poster_avatar%TYPE,
    image_name all_posts.image_name%TYPE,
    created_at all_posts.created_at%TYPE,
    caption all_posts.caption%TYPE,
    like_count all_posts.like_count%TYPE,
    comment_count all_posts.like_count%TYPE,
    has_watcher_liked boolean
) AS $$
    BEGIN
        RETURN QUERY SELECT all_posts.*,
        EXISTS (
            SELECT 1 FROM likes 
            WHERE likes.post_id = all_posts.post_id 
            AND likes.user_id = p_self_id
        ) FROM 
            all_posts INNER JOIN followers
            ON all_posts.poster_id = followers.following_id
            WHERE followers.follower_id = p_self_id;
    END;
$$ LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp;

DROP FUNCTION IF EXISTS f_get_user_posts;

CREATE OR REPLACE FUNCTION f_get_user_posts(
    p_self_id users.user_id%TYPE,
    p_username users.username%TYPE
) RETURNS TABLE (
    post_id all_posts.post_id%TYPE,
    poster_id all_posts.poster_id%TYPE,
    poster_username all_posts.poster_username%TYPE,
    poster_avatar all_posts.poster_avatar%TYPE,
    image_name all_posts.image_name%TYPE,
    created_at all_posts.created_at%TYPE,
    caption all_posts.caption%TYPE,
    like_count all_posts.like_count%TYPE,
    comment_count all_posts.like_count%TYPE,
    has_watcher_liked boolean
) AS $$
    BEGIN
        RETURN QUERY SELECT all_posts.*,
        EXISTS (
            SELECT 1 FROM likes 
            WHERE likes.post_id = all_posts.post_id 
            AND likes.user_id = p_self_id
        ) FROM 
            all_posts
        WHERE all_posts.poster_username = p_username;
    END;
$$ LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp;