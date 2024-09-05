-- Sosyal Medya Tabloları
CREATE TABLE socials (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Profil Tablosu
CREATE TABLE profiles (
    id uuid PRIMARY KEY references auth.users (id),
    full_name VARCHAR(255),
    bio TEXT,
    image_url VARCHAR(255),
    socials JSONB,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Beceriler Tablosu
CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Proje Tablosu
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    slug VARCHAR(255) UNIQUE,
    published_at TIMESTAMP,
    description TEXT,
    image_url VARCHAR(255),
    skills JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Post Tablosu
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    slug VARCHAR(255) UNIQUE,
    body TEXT,
    style VARCHAR(50),
    image_url VARCHAR(255),
    author JSONB,
    tags JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- RLS ve Politikalar Kurulumu
-- Profiller için RLS
ALTER TABLE profiles
  ENABLE ROW LEVEL SECURITY;

-- Profilleri herkes görüntüleyebilir.
CREATE POLICY "Public profiles are viewable by everyone." ON profiles
  FOR SELECT USING (true);

-- Kullanıcılar kendi profillerini ekleyebilir.
CREATE POLICY "Users can insert their own profile." ON profiles
  FOR INSERT WITH CHECK ((SELECT auth.uid()) = id);

-- Kullanıcılar kendi profillerini güncelleyebilir.
CREATE POLICY "Users can update own profile." ON profiles
  FOR UPDATE USING ((SELECT auth.uid()) = id);

-- Yeni bir kullanıcı kaydı sırasında otomatik profil oluşturma fonksiyonu
CREATE FUNCTION public.handle_new_user()
RETURNS trigger
SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, image_url)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'avatar_url');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Yeni kullanıcı kaydında tetiklenen tetikleyici
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Depolama Yapılandırmaları
-- Avatarlar için depolama alanı oluşturma
INSERT INTO storage.buckets (id, name)
  VALUES ('avatars', 'avatars');

-- Depolama nesneleri için politikalar
-- Avatar resimleri herkese açıktır.
CREATE POLICY "Avatar images are publicly accessible." ON storage.objects
  FOR SELECT USING (bucket_id = 'avatars');

-- Herkes avatar yükleyebilir.
CREATE POLICY "Anyone can upload an avatar." ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'avatars');

-- Kullanıcılar kendi avatarlarını güncelleyebilir.
CREATE POLICY "Anyone can update their own avatar." ON storage.objects
  FOR UPDATE USING ((SELECT auth.uid()) = owner) WITH CHECK (bucket_id = 'avatars');

-- Avatarları güncellemek için eksik kalan güncelleme politikası
CREATE POLICY "Users can update their own avatar." ON storage.objects
  FOR UPDATE USING ((SELECT auth.uid()) = owner) WITH CHECK (bucket_id = 'avatars');
