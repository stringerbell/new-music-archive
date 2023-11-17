export default function useImageURL({rawURL, width, height}) {
  return rawURL.replaceAll('{w}', width).replaceAll('{h}', height).replaceAll('{c}', 'bf').replaceAll('{f}', 'webp')
}
