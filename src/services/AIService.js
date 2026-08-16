// Simple heuristic AI extraction/classification. Replace with real AI model integration.
const phoneRe = /((?:\+?\d{1,3})?[\s-]?(?:\d{5,12}))/g;
const emailRe = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

export default {
  async classifyAndExtract(text, imageUri) {
    const raw = text || '';
    const phones = (raw.match(phoneRe) || []).map(s => s.trim());
    const emails = (raw.match(emailRe) || []).map(s => s.trim());

    // Heuristic classification
    const lower = raw.toLowerCase();
    let type = 'Other';
    if (lower.includes('restaurant') || lower.includes('food') || lower.includes('dine')) type = 'Restaurant';
    else if (lower.includes('event') || lower.includes('expo') || lower.includes('conference')) type = 'Event';
    else if (lower.includes('sale') || lower.includes('offer') || lower.includes('% off')) type = 'Advertisement';
    else if (lower.includes('ac repair') || lower.includes('services') || lower.includes('installation')) type = 'Service';
    else if (lower.includes('builders') || lower.includes('apartments') || lower.includes('real estate')) type = 'Real Estate';
    else if (emails.length || phones.length) type = 'Business Card';

    // Very naive name/company extraction: first two non-empty lines
    const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    const name = lines[0] || '';
    const company = lines[1] || '';

    return {
      name,
      company,
      designation: '',
      phone: phones[0] || '',
      email: emails[0] || '',
      rawText: raw,
      type,
      imageUri
    };
  }
};
