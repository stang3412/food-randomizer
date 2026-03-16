const foods = [
  // ===== ของคาว =====
  { name: "KOFUKU", emoji: "🍱", price: 180, cat: ["ญี่ปุ่น"], location: "mall", type: "savory", desc: "ข้าวหน้าต่างๆ ราเม็ง ราคาประมาณ 150-250 บาท" },
  { name: "เตี๋ยวเรือพระนคร", emoji: "🍜", price: 60, cat: ["ก๋วยเตี๋ยว"], location: "mall", type: "savory", desc: "ก๋วยเตี๋ยวเรือสูตรต้นตำรับ ชามละ 20-30 บาท" },
  { name: "สุกี้ตี๋น้อย", emoji: "🍲", price: 280, cat: ["ชาบู", "สุกี้"], location: "both", type: "savory", desc: "บุฟเฟ่ต์ชาบู ราคา 219 บาท + เครื่องดื่ม รวม VAT ~276 บาท" },
  { name: "McDonald's", emoji: "🍔", price: 150, cat: ["ฟาสต์ฟู้ด"], location: "mall", type: "savory", desc: "เบอร์เกอร์ เฟรนช์ฟรายส์ เริ่มต้นประมาณ 89-200 บาท" },
  { name: "KFC", emoji: "🍗", price: 150, cat: ["ไก่ทอด", "ฟาสต์ฟู้ด"], location: "mall", type: "savory", desc: "ไก่ทอด ชุดแบ่งปัน เริ่มต้นประมาณ 79-200 บาท" },
  { name: "Food Court", emoji: "🥡", price: 150, cat: ["ฟู้ดคอร์ท"], location: "mall", type: "savory", desc: "อาหารหลากหลาย ราคา 100-200 บาทต่อมื้อ" },
  { name: "Eat Am Are", emoji: "🥘", price: 200, cat: ["อาหารไทย"], location: "mall", type: "savory", desc: "อาหารไทยหลากหลาย ราคาประมาณ 150-250 บาทต่อหัว" },
  { name: "The Pizza Company", emoji: "🍕", price: 350, cat: ["พิซซ่า"], location: "mall", type: "savory", desc: "พิซซ่าหลากหลาย ราคาประมาณ 200-500 บาท" },
  { name: "Pizza Hut", emoji: "🍕", price: 350, cat: ["พิซซ่า"], location: "mall", type: "savory", desc: "พิซซ่า พาสต้า ราคาประมาณ 200-500 บาท" },
  { name: "Shabushi", emoji: "🍲", price: 300, cat: ["ชาบู", "สุกี้", "ญี่ปุ่น"], location: "mall", type: "savory", desc: "ชาบูบุฟเฟ่ต์สไตล์ญี่ปุ่น ราคาประมาณ 259-299 บาท" },
  { name: "Sizzler", emoji: "🥩", price: 400, cat: ["สเต็ก/ฝรั่ง"], location: "mall", type: "savory", desc: "สเต็ก สลัดบาร์ ราคาประมาณ 300-500 บาท" },
  { name: "7-Eleven", emoji: "🏪", price: 60, cat: ["สะดวกซื้อ", "เบเกอรี่", "เครื่องดื่ม", "ไอศกรีม"], location: "outside", type: "both", desc: "ข้าวกล่อง เบเกอรี่ เครื่องดื่ม ไอศกรีม ราคาประมาณ 20-60 บาท" },
  { name: "ร้านข้างทาง/แถวบ้าน", emoji: "🛺", price: 60, cat: ["ร้านข้างทาง"], location: "outside", type: "savory", desc: "ข้าวแกง ก๋วยเตี๋ยว อาหารตามสั่ง ราคาประมาณ 40-60 บาท" },
  { name: "ตลาด", emoji: "🏪", price: 30, cat: ["ตลาด", "ร้านข้างทาง"], location: "outside", type: "savory", desc: "ของกินในตลาด ราคาประมาณ 20-50 บาท" },
  { name: "ก๋วยเตี๋ยวข้างทาง", emoji: "🍜", price: 50, cat: ["ก๋วยเตี๋ยว", "ร้านข้างทาง"], location: "outside", type: "savory", desc: "ก๋วยเตี๋ยวน้ำ/แห้ง ราคาประมาณ 40-50 บาท" },
  { name: "Bonchon", emoji: "🍗", price: 200, cat: ["ไก่ทอด", "ไก่ทอดเกาหลี"], location: "mall", type: "savory", desc: "ไก่ทอดสไตล์เกาหลี ซอสต่างๆ ราคาประมาณ 150-250 บาท" },
  { name: "SUSHIRO", emoji: "🍣", price: 600, cat: ["ซูชิ", "ญี่ปุ่น"], location: "mall", type: "savory", desc: "ซูชิสายพานสไตล์ญี่ปุ่นแท้ จานละ 40-80 บาท รวมประมาณ 400-600 บาท" },
  { name: "Salad Factory", emoji: "🥗", price: 200, cat: ["สลัด"], location: "mall", type: "savory", desc: "สลัดสูตรต่างๆ เมนูเพื่อสุขภาพ ราคาประมาณ 150-200 บาท" },
  { name: "Hongdae Buffet", emoji: "🔥", price: 400, cat: ["ชาบู", "สุกี้"], location: "mall", type: "savory", desc: "บุฟเฟ่ต์ปิ้งย่างเกาหลี ราคาประมาณ 300-400 บาท" },

  // ===== ของหวาน/เครื่องดื่ม =====
  { name: "Swensen's", emoji: "🍨", price: 200, cat: ["ไอศกรีม"], location: "mall", type: "sweet", desc: "ไอศกรีมซันเดย์ บิงซู ราคา 100-300 บาท" },
  { name: "Dairy Queen", emoji: "🍦", price: 100, cat: ["ไอศกรีม"], location: "mall", type: "sweet", desc: "ซอฟต์เสิร์ฟ บลิซซาร์ด เริ่มต้น 59-150 บาท" },
  { name: "Yoguruto", emoji: "🥤", price: 80, cat: ["โยเกิร์ต"], location: "mall", type: "sweet", desc: "โยเกิร์ตปั่นสไตล์ญี่ปุ่น ราคาต่ำกว่า 100 บาท" },
  { name: "Bonjour", emoji: "🥐", price: 80, cat: ["เบเกอรี่"], location: "mall", type: "sweet", desc: "เบเกอรี่สไตล์ฝรั่งเศส ขนมปัง เค้ก ราคา 40-150 บาท" },
  { name: "Mister Donut", emoji: "🍩", price: 60, cat: ["เบเกอรี่"], location: "mall", type: "sweet", desc: "โดนัทหลากหลายรสชาติ ราคาประมาณ 20-60 บาท" },
  { name: "Amazon Cafe", emoji: "☕", price: 80, cat: ["ชา", "เครื่องดื่ม", "กาแฟ"], location: "both", type: "sweet", desc: "กาแฟ ชา เครื่องดื่มเย็น ราคาประมาณ 50-90 บาท" },
  { name: "Starbucks", emoji: "☕", price: 150, cat: ["ชา", "เครื่องดื่ม", "กาแฟ"], location: "mall", type: "sweet", desc: "กาแฟ ชา เครื่องดื่มพรีเมียม ราคาประมาณ 120-200 บาท" },
  { name: "Nose Tea", emoji: "🥤", price: 80, cat: ["ชา", "เครื่องดื่ม"], location: "mall", type: "sweet", desc: "ชาสไตล์ไต้หวัน เครื่องดื่มชาสดหลากหลาย ราคา 55-90 บาท" },
  { name: "Chagee", emoji: "🥤", price: 100, cat: ["ชา", "เครื่องดื่ม"], location: "mall", type: "sweet", desc: "ชาจีนพรีเมียม ชาเขียว ชานม ราคา 75-120 บาท" },
];

let selectedCats = new Set();
let currentType = 'savory';
let currentLocation = 'all';

function switchType(type) {
  currentType = type;
  document.getElementById('tab-savory').classList.toggle('active', type === 'savory');
  document.getElementById('tab-sweet').classList.toggle('active', type === 'sweet');
  document.getElementById('results').innerHTML = '';
  resetCats();
  renderTags();
}

function switchLocation(loc) {
  currentLocation = loc;
  document.getElementById('loc-all').classList.toggle('active', loc === 'all');
  document.getElementById('loc-mall').classList.toggle('active', loc === 'mall');
  document.getElementById('loc-outside').classList.toggle('active', loc === 'outside');
  document.getElementById('results').innerHTML = '';
  resetCats();
  renderTags();
}

function getFiltered() {
  return foods.filter(f => {
    const typeMatch = f.type === currentType || f.type === 'both';
    const locMatch = currentLocation === 'all' ||
      f.location === currentLocation ||
      f.location === 'both';
    return typeMatch && locMatch;
  });
}

function resetCats() {
  const cats = getAllCats(getFiltered());
  selectedCats = new Set(cats);
}

function clearAllCats() {
  selectedCats = new Set();
  renderTags();
}

function resetAllCats() {
  resetCats();
  renderTags();
}

function getAllCats(list) {
  const set = new Set();
  list.forEach(f => f.cat.forEach(c => set.add(c)));
  return [...set];
}

function foodMatchesCats(f) {
  return f.cat.some(c => selectedCats.has(c));
}

function renderTags() {
  const cats = getAllCats(getFiltered());
  const container = document.getElementById('tags');
  container.innerHTML = '';
  cats.forEach(cat => {
    const tag = document.createElement('div');
    tag.className = 'tag' + (selectedCats.has(cat) ? ' active' : '');
    tag.textContent = cat;
    tag.onclick = () => {
      if (selectedCats.has(cat)) {
        if (selectedCats.size > 1) selectedCats.delete(cat);
      } else {
        selectedCats.add(cat);
      }
      renderTags();
    };
    container.appendChild(tag);
  });
}

function openAllByLocation(loc) {
  const labels = { mall: '🏬 ร้านทั้งหมดในห้างสรรพสินค้า', outside: '🏠 ร้านทั้งหมดนอกห้าง', both: '🏬🏠 ร้านที่มีทั้งในห้างและนอกห้าง' };
  const shops = foods.filter(f => f.location === loc);
  const resultsEl = document.getElementById('results');
  resultsEl.innerHTML = `<div class="section-label" style="margin-bottom:12px">${labels[loc]}</div>`;
  shops.forEach((f, i) => {
    const card = document.createElement('div');
    card.className = 'result-card';
    card.style.animationDelay = (i * 0.04) + 's';
    card.style.opacity = '0';
    const locLabel = f.location === 'mall' ? '🏬 ในห้าง' : f.location === 'outside' ? '🏠 นอกห้าง' : '🏬🏠 ทั้งสองที่';
    const catBadges = f.cat.map(c => `<span class="badge">${c}</span>`).join('');
    card.innerHTML = `
      <div class="emoji-box">${f.emoji}</div>
      <div style="flex:1">
        <div class="food-name">${f.name}</div>
        <div class="food-desc">${f.desc}</div>
        <div class="food-meta">
          ${catBadges}
          <span class="badge ${f.type === 'sweet' ? 'badge-sweet' : 'badge-savory'}">${f.type === 'sweet' ? 'ของหวาน' : 'ของคาว'}</span>
          <span class="badge">${locLabel}</span>
        </div>
        <div class="food-price">งบประมาณ ~฿${f.price}</div>
      </div>`;
    setTimeout(() => card.style.opacity = '1', i * 40);
    resultsEl.appendChild(card);
  });
}

function spin() {
  const budget = parseInt(document.getElementById('budget').value) || 0;
  if (budget > 0 && budget < 19) {
    document.getElementById('results').innerHTML =
      '<div class="no-result">🛏️ นอนอยู่ห้องเถอะนะ...</div>';
    return;
  }

  if (!budget || budget < 1) {
    document.getElementById('results').innerHTML =
      '<div class="no-result">กรุณาใส่งบประมาณก่อนนะ 🙏</div>';
    return;
  }

  const pool = getFiltered().filter(f => f.price <= budget && foodMatchesCats(f));
  if (!pool.length) {
    document.getElementById('results').innerHTML =
      '<div class="no-result">ไม่มีร้านในงบนี้สำหรับประเภทที่เลือก ลองเพิ่มงบหรือเลือกประเภทอื่น 😅</div>';
    return;
  }

  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const picks = shuffled.slice(0, Math.min(3, shuffled.length));
  const resultsEl = document.getElementById('results');
  resultsEl.innerHTML = '';

  picks.forEach((f, i) => {
    const card = document.createElement('div');
    card.className = 'result-card';
    card.style.animationDelay = (i * 0.08) + 's';
    card.style.opacity = '0';
    const catBadges = f.cat.map(c => `<span class="badge">${c}</span>`).join('');
    card.innerHTML = `
      <div class="emoji-box">${f.emoji}</div>
      <div style="flex:1">
        <div class="food-name">${f.name}</div>
        <div class="food-desc">${f.desc}</div>
        <div class="food-meta">
          ${catBadges}
          <span class="badge">${f.location === 'mall' ? '🏬 ในห้าง' : f.location === 'outside' ? '🏠 นอกห้าง' : '🏬🏠 ทั้งสองที่'}</span>
        </div>
        <div class="food-price">งบประมาณ ~฿${f.price}</div>
      </div>`;
    setTimeout(() => card.style.opacity = '1', i * 80);
    resultsEl.appendChild(card);
  });

  const spinAgain = document.createElement('div');
  spinAgain.className = 'spin-again';
  spinAgain.textContent = '🔄 สุ่มใหม่อีกครั้ง';
  spinAgain.onclick = spin;
  resultsEl.appendChild(spinAgain);
}

// Init
switchType('savory');
document.getElementById('budget').addEventListener('keydown', e => {
  if (e.key === 'Enter') spin();
});
