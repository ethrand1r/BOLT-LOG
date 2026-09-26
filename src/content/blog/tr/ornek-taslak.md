---
title: 'Örnek taslak: yeni blog yazısı nasıl eklenir?'
description: 'Bu dosya bir şablondur ve draft: true olduğu için sitede yayınlanmaz.'
date: 2026-09-26
lang: tr
slug: ornek-taslak
draft: true
---

Bu dosyayı kopyalayarak yeni bir blog yazısı oluşturabilirsiniz.

## Adımlar

1. Bu dosyayı aynı klasöre yeni bir adla kopyalayın (örneğin `konteyner-rehberi.md`).
2. Üst kısımdaki `title`, `description`, `date` ve `slug` alanlarını doldurun.
3. `draft` değerini `false` yapın.
4. Yazının İngilizce sürümü varsa `src/content/blog/en/` klasörüne `lang: en` ile ekleyin.

İlk yazı yayınlandığında `astro.config.mjs` içindeki `excluded` listesinden `/blog` ve `/en/blog` adreslerini çıkarın; böylece blog sayfası site haritasına ve arama sonuçlarına girer.
