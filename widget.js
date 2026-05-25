// ============ CONFIGURATION ============
const VOTING_OPEN = new Date('2026-05-27T00:00:00+08:00').getTime();
const VOTING_CLOSE = new Date('2026-09-03T00:00:00+08:00').getTime();
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw1aNpbIZoDmor4jI8Rgrj5P0Yr7FvSrjBxLqR9g8ruAnmscxwTfNH6P1X_kWwAoEuaWg/exec';

const NOMINEES = [
  { name: "1-ARDEN BAR AND LOUNGE",                     logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/v1779730103/Arden_logo_jxncls.png" },
  { name: "ARTEASTIQ",                                  logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/q_auto/f_auto/v1779263169/LOGO_ARTEASTIQ_TRANS_1000x1000-18_yxoykp.png" },
  { name: "BARISTART COFFEE SINGAPORE (TRAS STREET)",   logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/q_auto/f_auto/v1779262380/BAC_Official_Logo_Black_chhv6r.jpg" },
  { name: "BURGER KING SINGAPORE",                      logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/q_auto/f_auto/v1779262539/BK_LOGO_PRIMARY_BACKGROUND_1_asa13u.png" },
  { name: "CASA VOSTRA",                                logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/v1779267958/CasaVostra_Logo_1000px_Cream_lnmldo.svg" },
  { name: "CAVERN RESTAURANT",                          logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/q_auto/f_auto/v1779262670/Cavern_Logo_mrqnbn.png" },
  { name: "CEDELE",                                     logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/v1779266491/Cedele_Logo_1000_x_1000px_Reverse_t0yltv.png" },
  { name: "CÉ LA VI",                                   logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/q_auto/f_auto/v1779262841/CeLaVi_Red_y6hrtp.svg" },
  { name: "DIAN XIAO ER",                               logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/q_auto/f_auto/v1779262901/DXE_Logo_1x1_1_jicjh5.jpg" },
  { name: "DIN TAI FUNG",                               logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/q_auto/f_auto/v1779262938/DTF_Logo_1_avun65.png" },
  { name: "EDGE, PAN PACIFIC SINGAPORE",                logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/q_auto/f_auto/v1779262965/Edge_Logo_hrpo53.jpg" },
  { name: "FOOD CAPITAL",                               logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/q_auto/f_auto/v1779262990/FC_LogoHQ_1_1_1_tttcmq.png" },
  { name: "GUZMAN Y GOMEZ",                             logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/q_auto/f_auto/v1779727570/GUZMAN_Y_GOMEZ_PRIMARY_LOGO_CIRCLE_RGB_2024_mwkxd6.png" },
  { name: "HAI TIEN LO, PAN PACIFIC SINGAPORE",         logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/q_auto/f_auto/v1779263014/Hai_Tien_Lo_Logo_euhkby.jpg" },
  { name: "KAARLA WOOD-FIRE GRILL AND BAR",             logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/v1779730102/kaarla_logo_mfhmyh.png" },
  { name: "KEYAKI, PAN PACIFIC SINGAPORE",              logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/q_auto/f_auto/v1779263034/Keyaki_Logo_fyy5m3.jpg" },
  { name: "MODU SAMGYETANG SPECIALTY KOREAN RESTAURANT", logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/q_auto/f_auto/v1779263074/MODU_logo_1_1_a2rvqp.png" },
  { name: "OUMI MODERN JAPANESE KAPPO RESTAURANT",      logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/v1779730102/oumi_logo_yowfs0.png" },
  { name: "PACIFIC EMPORIUM, PAN PACIFIC SINGAPORE",    logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/q_auto/f_auto/v1779263100/Pacific_Emporium_Logo_vvmdp9.jpg" },
  { name: "PRINCESS TERRACE AUTHENTIC PENANG CUISINE",  logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/q_auto/f_auto/v1779263130/New_Princess_Terrace_Logo_black-9Sep_1_wqigx6.png" },
  { name: "PUTIEN",                                     logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/q_auto/f_auto/v1779267124/logo1024x1024px-02_1_exmies.jpg" },
  { name: "QIN RESTAURANT & BAR",                       logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/q_auto/f_auto/v1779262672/QIN_Logo_mvcdia.png" },
  { name: "SAMPANMAN",                                  logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/q_auto/f_auto/v1779263169/LOGO_ARTEASTIQ_TRANS-04_1_hvgl8z.png" },
  { name: "SOL & LUNA",                                 logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/q_auto/f_auto/v1779730102/sol_n_luna_logo_w1fr5m.png" },
  { name: "SURREY HILLS GROCER",                        logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/q_auto/f_auto/v1779263217/Surrey_Hills.jpg_1_tuuufn.jpg" },
  { name: "SWENSEN'S",                                  logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/q_auto/f_auto/v1779263254/Swensen_s_Logo_Red_Outline_emqxnf.png" },
  { name: "TEMPER. WINE ROOM & LOUNGE",                 logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/v1779267908/Copy_of_temperlogo_100px_cream_ds3mrs.svg" },
  { name: "THE LANDMARK",                               logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/v1779264333/Landmark_Logo_2023_Singapore_1_vfe8kb.png" },
  { name: "TIEN COURT AUTHENTIC TEOCHEW RESTAURANT",    logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/q_auto/f_auto/v1779263351/Tien_Court_new_logo_BLACK_14May2021-01_3_1_opfqd7.png" },
  { name: "TÓNG LÈ PRIVATE DINING",                     logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/q_auto/f_auto/v1779262671/To%CC%81ng_Le%CC%80_Private_Dining_Logo_qsiwko.png" },
  { name: "TUNGLOK PEKING DUCK",                        logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/q_auto/f_auto/v1779262669/TungLok_Peking_Duck_Logo_monbav.png" },
  { name: "TUNGLOK SEAFOOD",                            logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/q_auto/f_auto/v1779262670/TungLok_Seafood_Logo_kxkspd.png" },
  { name: "TUNGLOK SIGNATURES",                         logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/q_auto/f_auto/v1779262671/TungLok_Signatures_Logo_kvrpi1.png" },
  { name: "WILDSEED CAFE AT THE ALKAFF MANSION",        logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/v1779730101/wildseed_cafe_logo_mefq2l.jpg" },
  { name: "YO-CHI SINGAPORE",                           logoUrl: "https://res.cloudinary.com/dpzqnfemq/image/upload/q_auto/f_auto/v1779263385/Yo-Chi_Singapore_Logo_1_rtjkrz.png" }
];

// ============ STATE ============
let selectedNominee = null;
let captchaToken = null;
let votingClosed = false;
let votingNotYetOpen = Date.now() < VOTING_OPEN;

const initials = (name) => {
  const clean = name.replace(/[^A-Z\s]/gi, '').trim();
  const parts = clean.split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return clean.substring(0, 2).toUpperCase();
};

// ============ COUNTDOWN ============
function updateCountdown() {
  const now = Date.now();
  let target, label;

  if (now < VOTING_OPEN) {
    // Pre-launch: count down to voting opens
    target = VOTING_OPEN;
    label = 'The arena opens in';
    if (!document.body.classList.contains('voting-locked')) {
      document.body.classList.add('voting-locked');
      const cdLabel = document.querySelector('.countdown-label');
      if (cdLabel) cdLabel.textContent = label;
    }
  } else if (now < VOTING_CLOSE) {
    // Voting is open: count down to close
    target = VOTING_CLOSE;
    label = 'The arena closes in';
    if (votingNotYetOpen) {
      votingNotYetOpen = false;
      document.body.classList.remove('voting-locked');
      const cdLabel = document.querySelector('.countdown-label');
      if (cdLabel) cdLabel.textContent = label;
      // Re-render grid so click handlers respond
      renderGrid(document.getElementById('search').value);
    }
  } else {
    // Voting closed
    ['d','h','m','s'].forEach(k => document.getElementById('cd-'+k).textContent = '00');
    if (!votingClosed) {
      votingClosed = true;
      document.body.classList.add('voting-closed');
      document.getElementById('closed-banner').classList.add('visible');
    }
    return;
  }

  const diff = target - now;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById('cd-d').textContent = String(d).padStart(2,'0');
  document.getElementById('cd-h').textContent = String(h).padStart(2,'0');
  document.getElementById('cd-m').textContent = String(m).padStart(2,'0');
  document.getElementById('cd-s').textContent = String(s).padStart(2,'0');
}
setInterval(updateCountdown, 1000);
updateCountdown();

// ============ RENDER GRID ============
function renderGrid(filter = '') {
  const grid = document.getElementById('grid');
  const f = filter.toLowerCase().trim();
  const matches = NOMINEES.filter(n => !f || n.name.toLowerCase().includes(f));

  grid.innerHTML = matches.length === 0
    ? '<div class="empty-state">No champion bears that name.</div>'
    : matches.map(n => {
        const isSelected = selectedNominee === n.name;
        const logoHtml = n.logoUrl
          ? `<img src="${n.logoUrl}" alt="${n.name} logo" loading="lazy" onerror="this.outerHTML='<span class=&quot;nominee-logo-placeholder&quot;>${initials(n.name)}</span>'">`
          : `<span class="nominee-logo-placeholder">${initials(n.name)}</span>`;
        return `
          <div class="nominee ${isSelected ? 'selected' : ''}" data-name="${n.name}" role="radio" aria-checked="${isSelected}" tabindex="0">
            <div class="check-mark">✓</div>
            <div class="nominee-logo">${logoHtml}</div>
            <div class="nominee-name">${n.name}</div>
          </div>`;
      }).join('');

  const resultsCount = document.getElementById('results-count');
  resultsCount.textContent = f ? `${matches.length} ${matches.length === 1 ? 'champion found' : 'champions found'}` : '';
}
renderGrid();

// ============ SELECTION ============
function selectNominee(name) {
  if (votingClosed) return;
  if (Date.now() < VOTING_OPEN) {
    showPreLaunchModal();
    return;
  }
  selectedNominee = name;
  document.querySelectorAll('.nominee').forEach(el => {
    const match = el.dataset.name === name;
    el.classList.toggle('selected', match);
    el.setAttribute('aria-checked', match ? 'true' : 'false');
  });
  document.getElementById('champion-name').textContent = name;
  document.getElementById('cast-vote-section').classList.add('has-selection');
  document.getElementById('vote-btn').disabled = false;

  // Smooth scroll to the Cast Vote section
  setTimeout(() => {
    document.getElementById('cast-vote-section').scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }, 200);
}

// ============ PRE-LAUNCH MODAL ============
function showPreLaunchModal() {
  const modal = document.getElementById('pre-launch-modal');
  modal.classList.add('visible');
  document.body.style.overflow = 'hidden';
  updatePreLaunchCountdown();
}

function updatePreLaunchCountdown() {
  const diff = VOTING_OPEN - Date.now();
  if (diff <= 0) {
    document.getElementById('pre-launch-modal').classList.remove('visible');
    document.body.style.overflow = '';
    return;
  }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  const el = document.getElementById('pre-launch-time');
  if (el) el.textContent = `${String(d).padStart(2,'0')}d ${String(h).padStart(2,'0')}h ${String(m).padStart(2,'0')}m ${String(s).padStart(2,'0')}s`;
}
setInterval(() => {
  if (document.getElementById('pre-launch-modal')?.classList.contains('visible')) {
    updatePreLaunchCountdown();
  }
}, 1000);

// Pre-launch modal close button
document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'btn-prelaunch-close') {
    document.getElementById('pre-launch-modal').classList.remove('visible');
    document.body.style.overflow = '';
  }
  // Click outside modal to close
  if (e.target && e.target.id === 'pre-launch-modal') {
    document.getElementById('pre-launch-modal').classList.remove('visible');
    document.body.style.overflow = '';
  }
});

document.getElementById('grid').addEventListener('click', (e) => {
  const card = e.target.closest('.nominee');
  if (card) selectNominee(card.dataset.name);
});

document.getElementById('grid').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    const card = e.target.closest('.nominee');
    if (card) { e.preventDefault(); selectNominee(card.dataset.name); }
  }
});

// ============ SEARCH ============
const searchInput = document.getElementById('search');
const searchClear = document.getElementById('search-clear');

let searchTimer;
searchInput.addEventListener('input', (e) => {
  clearTimeout(searchTimer);
  const val = e.target.value;
  searchClear.classList.toggle('visible', val.length > 0);
  searchTimer = setTimeout(() => renderGrid(val), 120);
});

searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchClear.classList.remove('visible');
  renderGrid('');
  searchInput.focus();
});

// ============ VOTE FLOW ============
const modal = document.getElementById('modal');
const voteBtn = document.getElementById('vote-btn');

voteBtn.addEventListener('click', () => {
  if (!selectedNominee || votingClosed) return;
  document.getElementById('modal-selection').textContent = selectedNominee;
  modal.classList.add('visible');
  document.body.style.overflow = 'hidden';
  if (window.grecaptcha) try { grecaptcha.reset(); } catch(e) {}
  captchaToken = null;
  document.getElementById('btn-confirm').disabled = true;
});

document.getElementById('btn-cancel').addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

function closeModal() {
  modal.classList.remove('visible');
  document.body.style.overflow = '';
}

window.onCaptchaOK = (token) => {
  captchaToken = token;
  document.getElementById('btn-confirm').disabled = false;
};

window.onCaptchaExpired = () => {
  captchaToken = null;
  document.getElementById('btn-confirm').disabled = true;
};

document.getElementById('btn-confirm').addEventListener('click', async () => {
  if (!captchaToken || !selectedNominee) return;
  const btn = document.getElementById('btn-confirm');
  btn.disabled = true;
  btn.textContent = 'Submitting...';
  try {
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nominee: selectedNominee, token: captchaToken })
    });
    handleVoteSuccess();
  } catch (err) {
    showToast('The arena could not hear your vote. Try once more.');
    btn.disabled = false;
    btn.textContent = 'Confirm Vote';
  }
});

function handleVoteSuccess() {
  closeModal();
  document.getElementById('voted-for-name').textContent = selectedNominee;
  document.getElementById('success').classList.add('visible');
  document.body.style.overflow = 'hidden';
  const totalEl = document.getElementById('total-votes');
  totalEl.textContent = (parseInt(totalEl.textContent.replace(/,/g, ''), 10) + 1).toLocaleString();
  setTimeout(loadStats, 1500);
}

document.getElementById('btn-vote-again').addEventListener('click', () => {
  document.getElementById('success').classList.remove('visible');
  document.body.style.overflow = '';
  selectedNominee = null;
  document.querySelectorAll('.nominee').forEach(el => {
    el.classList.remove('selected');
    el.setAttribute('aria-checked', 'false');
  });
  document.getElementById('champion-name').innerHTML = '<span class="pick-prompt">Choose your champion above</span>';
  document.getElementById('cast-vote-section').classList.remove('has-selection');
  voteBtn.disabled = true;
  const confirm = document.getElementById('btn-confirm');
  confirm.textContent = 'Confirm Vote';
  confirm.disabled = true;
  document.getElementById('grid').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.getElementById('btn-share').addEventListener('click', async () => {
  const shareData = {
    title: "The People's Choice Award 2026",
    text: 'I cast my vote in the arena. Now you must choose your champion.',
    url: window.location.href
  };
  try {
    if (navigator.share) await navigator.share(shareData);
    else {
      await navigator.clipboard.writeText(window.location.href);
      showToast('Link copied to clipboard');
    }
  } catch (err) {}
});

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 3500);
}

// ============ LIVE STATS ============
async function loadStats() {
  if (APPS_SCRIPT_URL.startsWith('PASTE')) return;
  try {
    const res = await fetch(APPS_SCRIPT_URL + '?action=stats');
    if (!res.ok) throw new Error('Bad response');
    const data = await res.json();
    if (typeof data.total === 'number') {
      document.getElementById('total-votes').textContent = data.total.toLocaleString();
    }
    if (Array.isArray(data.top5) && data.top5.length > 0) {
      // Shuffle to display in random order (rank is intentionally hidden)
      const shuffled = [...data.top5].sort(() => Math.random() - 0.5);
      const lb = document.getElementById('champions-list');
      lb.innerHTML = shuffled.map((name) => `
        <li class="champion-row">
          <span class="champion-rank">✦</span>
          <span class="champion-name">${name}</span>
        </li>
      `).join('');
    } else {
      document.getElementById('champions-list').innerHTML =
        '<li class="champions-loading">Awaiting the first cries of the people...</li>';
    }
  } catch (err) {
    document.getElementById('champions-list').innerHTML =
      '<li class="champions-loading">Awaiting the first cries of the people...</li>';
  }
}
loadStats();
setInterval(loadStats, 30000);
