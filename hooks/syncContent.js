// syncContent.js
import { NextApiRequest, NextApiResponse } from 'next';
import { syncContent } from '@/hooks/useSupabaseData'; // hooks dosyanızdan syncContent fonksiyonunu içe aktarıyoruz

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Sadece POST istekleri kabul edilir.' });
  }

  try {
    await syncContent();
    res.status(200).json({ message: 'Veri senkronizasyonu başarıyla tamamlandı.' });
  } catch (error) {
    res.status(500).json({ message: 'Veri senkronizasyonu sırasında hata oluştu.', error });
  }
}
