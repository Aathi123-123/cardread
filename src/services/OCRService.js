// Mock OCR service. Replace with on-device OCR or cloud OCR integration.
export default {
  async extractText(imageUri) {
    // In production, run OCR on the image and return plain text.
    // Here we return a placeholder string with the imageUri included so the AIService can parse it.
    return `IMAGE_URI:${imageUri}\n(Replace this mock OCR with a real OCR engine.)`;
  }
};
