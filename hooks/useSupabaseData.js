// hooks/useSupabaseData.js
import { createClient as createSanityClient } from '@sanity/client';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';

// Sanity Client
const sanity = createSanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: false,
  apiVersion: 'v2024-02-28',
});

// Supabase Client
const supabase = createSupabaseClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Sanity'den içerikleri çek ve Supabase'e ekle
async function syncContent() {
  try {
    // Sanity'den verileri çekiyoruz
    const contents = await sanity.fetch(`*[_type == "content"]{
      _id,
      title,
      body,
      publishedAt,
      "imageUrl": image.asset->url
    }`);

    if (!contents || contents.length === 0) {
      console.log('Sanity’den herhangi bir içerik bulunamadı.');
      return;
    }

    // İçerikleri Supabase'e eklemek için toplu ekleme yapıyoruz
    const transformedContents = contents.map(content => ({
      id: content._id,
      title: content.title,
      description: content.body,
      published_at: content.publishedAt,
      image_url: content.imageUrl,
    }));

    const { data, error } = await supabase
      .from('products') // Supabase'deki tablo adı
      .insert(transformedContents, { returning: 'minimal' }); // Verileri minimal olarak döndür, daha hızlı olur

    if (error) {
      console.error('Supabase’e toplu ekleme sırasında hata oluştu:', error);
    } else {
      console.log('Başarıyla eklendi:', data ? data.length : transformedContents.length, 'öğe.');
    }
  } catch (error) {
    console.error('Sanity’den veri çekerken hata oluştu:', error);
  }
}

// Fonksiyonu çalıştır
syncContent();
