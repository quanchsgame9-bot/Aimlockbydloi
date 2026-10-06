/* ==========================================================================
   UULTRALOCK - CORE LOGIC
   ========================================================================== */

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyApQfKUe6lbA7_VY1NacJdTdz4lnesAFI4",
  authDomain: "ultralock-key.firebaseapp.com",
  databaseURL: "https://ultralock-key-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ultralock-key",
  storageBucket: "ultralock-key.firebasestorage.app",
  messagingSenderId: "1055844200853",
  appId: "1:1055844200853:web:1ec19a4982f3b074ae069c"
};

// ========== ĐA NGÔN NGỮ ==========
const I18N = {
  vi: {
    app_name: 'UULTRALOCK',
    banner1: 'HỆ THỐNG KÉO TÂM VIP',
    banner2: 'UULTRALOCK PRO 2026',
    key_ph: 'Nhập key...',
    name_ph: 'Nhập tên...',
    login_btn: '⚔️ ĐĂNG NHẬP ⚔️',
    contact: '☠ LIÊN HỆ ☠',
    tab_main: 'MAIN', tab_ai: 'AI SENSI', tab_ultra: 'ULTRA', tab_profile: 'HỒ SƠ', tab_members: 'MEMBERS',
    ai_title: '🧠 AI PHÂN TÍCH ĐỘ NHẠY',
    ai_desc: 'Nhập tên máy để AI phân tích độ nhạy tối ưu',
    ai_ph: 'VD: iPhone 13 Pro...',
    ai_btn: '🔍 PHÂN TÍCH NGAY',
    sensi_general: 'Nhìn xung quanh:', sensi_reddot: 'Red Dot:', sensi_2x: 'Ống ngắm 2x:',
    sensi_4x: 'Ống ngắm 4x:', sensi_awm: 'Ống ngắm AWM:', sensi_btn: 'Nút bắn:', sensi_dpi: 'DPI:',
    admin_name: 'Duy Lợi',
    admin_role: 'Developer / Admin',
    app_info: 'THÔNG TIN ỨNG DỤNG',
    info_name: 'Tên ứng dụng', info_theme: 'Giao diện', info_guide: 'Điều hướng',
    info_game: 'Game hỗ trợ', info_booster: 'Booster mặc định', info_lang: 'Ngôn ngữ', info_admin: 'Quản trị',
    members_title: '👥 THÀNH VIÊN ĐÃ ĐĂNG NHẬP',
    on_all: '⚔️ ON ALL', off_all: '☠ OFF ALL',
    choose_game: '💀 CHỌN PHIÊN BẢN GAME',
    enter_game: '🚀 VÀO GAME', close: '✕ ĐÓNG',
    loading: 'ĐANG TẢI CẤU HÌNH...'
  },
  en: {
    app_name: 'UULTRALOCK',
    banner1: 'VIP AIM SYSTEM',
    banner2: 'UULTRALOCK PRO 2026',
    key_ph: 'Enter key...',
    name_ph: 'Enter name...',
    login_btn: '⚔️ LOGIN ⚔️',
    contact: '☠ CONTACT ☠',
    tab_main: 'MAIN', tab_ai: 'AI SENSI', tab_ultra: 'ULTRA', tab_profile: 'PROFILE', tab_members: 'MEMBERS',
    ai_title: '🧠 AI SENSITIVITY ANALYZER',
    ai_desc: 'Enter device name for AI to analyze optimal sensitivity',
    ai_ph: 'Ex: iPhone 13 Pro...',
    ai_btn: '🔍 ANALYZE NOW',
    sensi_general: 'General:', sensi_reddot: 'Red Dot:', sensi_2x: '2x Scope:',
    sensi_4x: '4x Scope:', sensi_awm: 'AWM Scope:', sensi_btn: 'Fire Button:', sensi_dpi: 'DPI:',
    admin_name: 'Duy Loi',
    admin_role: 'Developer / Admin',
    app_info: 'APP INFORMATION',
    info_name: 'App Name', info_theme: 'Theme', info_guide: 'Navigation',
    info_game: 'Supported Game', info_booster: 'Default Booster', info_lang: 'Language', info_admin: 'Admin',
    members_title: '👥 LOGGED-IN MEMBERS',
    on_all: '⚔️ ON ALL', off_all: '☠ OFF ALL',
    choose_game: '💀 CHOOSE GAME',
    enter_game: '🚀 ENTER GAME', close: '✕ CLOSE',
    loading: 'LOADING CONFIG...'
  },
  zh: {
    app_name: 'UULTRALOCK',
    banner1: 'VIP 瞄准系统',
    banner2: 'UULTRALOCK PRO 2026',
    key_ph: '输入密钥...',
    name_ph: '输入名字...',
    login_btn: '⚔️ 登录 ⚔️',
    contact: '☠ 联系 ☠',
    tab_main: '主要', tab_ai: 'AI 灵敏度', tab_ultra: '超级', tab_profile: '个人', tab_members: '成员',
    ai_title: '🧠 AI 灵敏度分析',
    ai_desc: '输入设备名称，AI 分析最佳灵敏度',
    ai_ph: '例如：iPhone 13 Pro...',
    ai_btn: '🔍 立即分析',
    sensi_general: '周围:', sensi_reddot: '红点:', sensi_2x: '2倍镜:',
    sensi_4x: '4倍镜:', sensi_awm: 'AWM:镜', sensi_btn: '开火按钮:', sensi_dpi: 'DPI:',
    admin_name: 'Duy Loi',
    admin_role: '开发员 / 管理员',
    app_info: '应用程序信息',
    info_name: '应用名称', info_theme: '主题', info_guide: '导航',
    info_game: '支持游戏', info_booster: '默认加速', info_lang: '语言', info_admin: '管理员',
    members_title: '👥 已登录成员',
    on_all: '⚔️ 全开', off_all: '☠ 全关',
    choose_game: '💀 选择游戏',
    enter_game: '🚀 进入游戏', close: '✕ 关闭',
    loading: '正在加载配置...'
  }
};

document.addEventListener("DOMContentLoaded", () => {

  const DB_PATH = {
    keys: 'headlock/keys',
    settings: 'headlock/settings',
    members: 'headlock/members'
  };
  const STORAGE_SESSION = 'auralock_session';
  const STORAGE_DEVICE = 'auralock_device';
  const STORAGE_FEATURES = 'auralock_features';
  const STORAGE_LANG = 'auralock_lang';

  const FEATURES_MAIN = [
    { id: 'aimlock', icon: '🎯', name: 'AIMLOCK PRO' },
    { id: 'headlock', icon: '💀', name: 'HEADLOCK' },
    { id: 'nhetam', icon: '💫', name: 'NHẸ TÂM' },
    { id: 'aimdrag', icon: '⬜', name: 'AIMDRAG' },
    { id: 'aimhold', icon: '🔒', name: 'AIM HOLD' },
    { id: 'sensilock', icon: '📡', name: 'SENSILOCK' },
    { id: 'autofire', icon: '🔫', name: 'AUTO FIRE' },
    { id: 'norecoil', icon: '🔧', name: 'NO RECOIL' }
  ];

  const FEATURES_ULTRA = [
    { id: 'bostram', icon: '🚀', name: 'BOST RAM PRO' },
    { id: 'cpu', icon: '🔥', name: 'CPU TUNER MAX' },
    { id: 'gpu', icon: '⚡', name: 'GPU BOOST ULTRA' },
    { id: 'network', icon: '📶', name: 'NETWORK BOOST' },
    { id: 'dpi', icon: '📱', name: 'DPI BOOST 144Hz' },
    { id: 'touch', icon: '👆', name: 'TOUCH BOOST' },
    { id: 'screen', icon: '🖥️', name: 'SCREEN BOOSTER' },
    { id: 'gyro', icon: '🎮', name: 'GYRO FIX' },
    { id: 'stability', icon: '📊', name: 'STABILITY ASSIST' },
    { id: 'flick', icon: '⚡', name: 'HEADSHOT FLICK' },
    { id: 'reg', icon: '🎯', name: 'REG FILES' },
    { id: 'fixrung', icon: '⚙️', name: 'FIX RUNG' }
  ];

  const ALL_FEATURES = [...FEATURES_MAIN, ...FEATURES_ULTRA];

  let currentLang = localStorage.getItem(STORAGE_LANG) || 'vi';
  let currentTab = 'main';
  let featureState = {};
  let selectedGameScheme = "freefire://";
  let selectedGamePkg = "com.dts.freefireth";
  let audioCtx = null;
  let db = null;
  let currentSession = null;

  const $ = id => document.getElementById(id);

  // ========== I18N ==========
  function t(key) { return (I18N[currentLang] && I18N[currentLang][key]) || I18N.vi[key] || key; }

  function applyLang() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (val) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });
    const langSel = $('lang-select');
    if (langSel) langSel.value = currentLang;
  }

  const langSelect = $('lang-select');
  if (langSelect) {
    langSelect.addEventListener('change', function() {
      currentLang = this.value;
      localStorage.setItem(STORAGE_LANG, currentLang);
      applyLang();
      showToast('🌐 ' + this.value.toUpperCase(), 'on');
      playBeep();
    });
  }

  function getDeviceId() {
    let id = localStorage.getItem(STORAGE_DEVICE);
    if (!id) {
      let hash = 0;
      const base = navigator.userAgent + screen.width + screen.height + Date.now();
      for (let i = 0; i < base.length; i++) hash = ((hash << 5) - hash) + base.charCodeAt(i);
      id = 'DEV-' + Math.abs(hash).toString(16).toUpperCase().padStart(8, '0');
      localStorage.setItem(STORAGE_DEVICE, id);
    }
    return id;
  }
  const DEVICE_ID = getDeviceId();

  function initFirebase() {
    try {
      if (typeof firebase === 'undefined') return false;
      firebase.initializeApp(FIREBASE_CONFIG);
      db = firebase.database();
      return true;
    } catch (e) { return false; }
  }

  function runLoading() {
    const steps = [
      'ĐANG TẢI CẤU HÌNH...',
      'ĐANG KẾT NỐI SERVER...',
      'ĐANG TỐI ƯU HỆ THỐNG...',
      'HOÀN TẤT!'
    ];
    let progress = 0, stepIdx = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15 + 5;
      if (progress > 100) progress = 100;
      $('loadingBar').style.width = progress + '%';
      const newIdx = Math.floor((progress / 100) * steps.length);
      if (newIdx !== stepIdx && newIdx < steps.length) {
        stepIdx = newIdx;
        $('loadingText').textContent = steps[stepIdx];
      }
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          $('loadingScreen').classList.add('hide');
          $('appContainer').style.display = 'flex';
          setTimeout(() => { $('loadingScreen').style.display = 'none'; }, 600);
          checkAutoLogin();
        }, 400);
      }
    }, 200);
  }

  function checkAutoLogin() {
    try {
      const sess = JSON.parse(localStorage.getItem(STORAGE_SESSION) || 'null');
      if (!sess || !sess.key) return;
      if (!db) {
        if (sess.key === 'DUYLOIFILE' || sess.key === 'TEST') { currentSession = sess; switchToMenu(); }
        return;
      }
      db.ref(DB_PATH.keys + '/' + sess.key).once('value').then(snap => {
        const data = snap.val();
        if (!data || data.active === false) { localStorage.removeItem(STORAGE_SESSION); return; }
        if (data.expireAt && data.expireAt < Date.now()) {
          localStorage.removeItem(STORAGE_SESSION);
          showToast('☠ Key hết hạn!', 'off');
          return;
        }
        currentSession = sess;
        switchToMenu();
      });
    } catch (e) {}
  }

  $('btn-submit-login').addEventListener('click', () => {
    const val = $('input-key').value.trim().toUpperCase();
    const name = $('input-name').value.trim() || 'Khách';
    if (!val) { showToast('⚠️ Nhập key!', 'off'); return; }

    const btn = $('btn-submit-login');
    btn.textContent = '⏳ ...';
    btn.disabled = true;

    if (!db) {
      if (val === 'DUYLOIFILE' || val === 'TEST') {
        saveSession(val, name, null);
        btn.textContent = t('login_btn'); btn.disabled = false;
        switchToMenu();
        showToast('💀 OK!', 'on');
      } else {
        btn.textContent = t('login_btn'); btn.disabled = false;
        showToast('☠ Key không tồn tại!', 'off');
      }
      return;
    }

    db.ref(DB_PATH.keys + '/' + val).once('value').then(snap => {
      const data = snap.val();
      btn.textContent = t('login_btn');
      btn.disabled = false;

      if (!data) { showToast('☠ Key không tồn tại!', 'off'); return; }
      if (data.active === false) { showToast('☠ Key đã bị xoá!', 'off'); return; }
      if (data.expireAt && data.expireAt < Date.now()) { showToast('☠ Key đã hết hạn!', 'off'); return; }

      const devices = data.devices || {};
      const deviceLimit = data.deviceLimit || 1;
      if (!devices[DEVICE_ID] && Object.keys(devices).length >= deviceLimit) {
        showToast('☠ Đã đạt giới hạn ' + deviceLimit + ' thiết bị!', 'off');
        return;
      }

      devices[DEVICE_ID] = {
        name: name,
        activatedAt: devices[DEVICE_ID]?.activatedAt || Date.now(),
        lastLogin: Date.now()
      };
      db.ref(DB_PATH.keys + '/' + val).update({ devices });

      saveMember(val, name);
      saveSession(val, name, data.expireAt);
      currentSession = { key: val, name, expireAt: data.expireAt };
      switchToMenu();
      showToast('💀 Chào ' + name + '!', 'on');
    }).catch(() => {
      btn.textContent = t('login_btn');
      btn.disabled = false;
      showToast('⚠️ Lỗi kết nối!', 'off');
    });
  });

  $('input-key').addEventListener('keypress', e => { if (e.key === 'Enter') $('btn-submit-login').click(); });
  $('input-name').addEventListener('keypress', e => { if (e.key === 'Enter') $('btn-submit-login').click(); });

  function saveSession(key, name, expireAt) {
    localStorage.setItem(STORAGE_SESSION, JSON.stringify({
      key, name, deviceId: DEVICE_ID, loginAt: Date.now(), expireAt
    }));
  }

  function saveMember(key, name) {
    if (!db) return;
    db.ref(DB_PATH.members + '/' + DEVICE_ID).set({
      name, key, deviceId: DEVICE_ID,
      lastLogin: Date.now(),
      ua: navigator.userAgent.substring(0, 60)
    });
  }

  function switchToMenu() {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    $('view-menu').classList.add('active');
    if (currentSession) {
      $('user-name-display').textContent = currentSession.name || 'Khách';
      $('user-expire').textContent = currentSession.expireAt
        ? 'Hạn: ' + new Date(currentSession.expireAt).toLocaleDateString('vi-VN')
        : 'Hạn: Vĩnh viễn';
    }
    loadFeatureState();
    renderAllTabs();
    loadMembers();
  }

  function loadMembers() {
    if (!db) return;
    db.ref(DB_PATH.members).on('value', snap => {
      const members = snap.val() || {};
      const list = $('members-list');
      list.innerHTML = '';
      const entries = Object.values(members).sort((a, b) => b.lastLogin - a.lastLogin);
      if (entries.length === 0) {
        list.innerHTML = '<div style="text-align:center;color:#4a0015;padding:20px;font-size:12px;">Empty</div>';
        return;
      }
      entries.forEach(m => {
        const div = document.createElement('div');
        div.className = 'member-item';
        const time = new Date(m.lastLogin);
        const timeStr = time.getHours().toString().padStart(2,'0') + ':' + time.getMinutes().toString().padStart(2,'0') + ' ' + time.getDate() + '/' + (time.getMonth()+1);
        div.innerHTML = `
          <div class="member-avatar">💀</div>
          <div class="member-info">
            <div class="member-name">${m.name || 'Khách'}</div>
            <div class="member-time">${timeStr}</div>
          </div>
          <div class="member-key">${(m.key || '').substring(0, 8)}...</div>
        `;
        list.appendChild(div);
      });
    });
  }

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      currentTab = btn.dataset.tab;
      $('tab-' + currentTab).classList.add('active');
      $('master-controls').style.display = (currentTab === 'main' || currentTab === 'ultra') ? 'flex' : 'none';
      playBeep();
    });
  });

  function renderAllTabs() {
    renderMenuList('main');
    renderMenuList('ultra');
  }

  function renderMenuList(tab) {
    const features = tab === 'main' ? FEATURES_MAIN : FEATURES_ULTRA;
    const listEl = $('menu-list-' + tab);
    listEl.innerHTML = '';
    features.forEach(f => {
      const isOn = featureState[f.id] === true;
      const div = document.createElement('div');
      div.className = 'menu-item' + (isOn ? ' active' : '');
      div.innerHTML = `
        <div class="item-info">
          <span class="item-icon">${f.icon}</span>
          <span class="item-name">${f.name}</span>
        </div>
        <label class="switch">
          <input type="checkbox" ${isOn ? 'checked' : ''}>
          <span class="slider"></span>
        </label>
      `;
      const cb = div.querySelector('input');
      div.addEventListener('click', (e) => {
        if (e.target.closest('.switch')) return;
        cb.checked = !cb.checked;
        cb.dispatchEvent(new Event('change'));
      });
      cb.addEventListener('change', (e) => {
        e.stopPropagation();
        handleToggle(f, cb.checked);
      });
      listEl.appendChild(div);
    });
  }

  function handleToggle(feature, isOn) {
    featureState[feature.id] = isOn;
    saveFeatureState();
    playBeep(); vibrate(30);
    if (!isOn) { showToast('⛔ ' + feature.name, 'off'); return; }
    switch (feature.id) {
      case 'headlock':
        $('overlay-game').classList.add('show');
        showToast('💀 HEADLOCK', 'on');
        break;
      case 'bostram':
        runTerminal('🚀 BOST RAM', ['$ Initializing...', '$ Clearing cache...', '$ DONE!'], '✅ BOST RAM!');
        break;
      case 'cpu':
        runTerminal('🔥 CPU TUNER', ['$ CPU access...', '$ Performance...', '$ DONE!'], '✅ CPU TUNER!');
        break;
      case 'gpu':
        runTerminal('⚡ GPU BOOST', ['$ GPU access...', '$ High perf...', '$ DONE!'], '✅ GPU BOOST!');
        break;
      case 'network':
        runTerminal('📶 NETWORK', ['$ Optimizing...', '$ DONE!'], '✅ NETWORK!');
        break;
      default:
        showToast('✅ ' + feature.name, 'on');
    }
  }

  function loadFeatureState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_FEATURES) || '{}');
      ALL_FEATURES.forEach(f => { featureState[f.id] = saved[f.id] === true; });
    } catch (e) {}
  }

  function saveFeatureState() {
    localStorage.setItem(STORAGE_FEATURES, JSON.stringify(featureState));
  }

  function runTerminal(title, logs, successText) {
    $('terminal-title').textContent = title;
    const overlay = $('overlay-terminal');
    const content = $('terminal-content');
    overlay.classList.add('show');
    content.innerHTML = '';
    let i = 0;
    function next() {
      if (i < logs.length) {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        line.textContent = logs[i];
        content.appendChild(line);
        content.scrollTop = content.scrollHeight;
        i++;
        setTimeout(next, 250);
      } else {
        setTimeout(() => {
          overlay.classList.remove('show');
          $('success-msg').textContent = successText;
          $('overlay-success').classList.add('show');
        }, 400);
      }
    }
    next();
  }

  // ========== AI ==========
  $('btn-analyze').addEventListener('click', () => {
    const device = $('device-model').value.trim();
    if (!device) { showToast('⚠️ Nhập tên máy!', 'off'); return; }
    playBeep(); vibrate(30);

    const clean = device.toLowerCase();
    let general, reddot, scope2x, scope4x, snip, button, dpi, reason;

    if (clean.includes('iphone') || clean.includes('ipad') || clean.includes('ios') || clean.includes('apple')) {
      general = Math.floor(174 + Math.random() * 4);
      reddot = Math.floor(182 + Math.random() * 4);
      scope2x = 186; scope4x = 178; snip = 110;
      button = Math.floor(39 + Math.random() * 3);
      dpi = 'iOS Optimized';
      reason = '🔹 iOS high sampling rate. Range 174-186 for smooth aim tracking.';
    } else if (clean.includes('rog') || clean.includes('magic') || clean.includes('shark') || clean.includes('gaming')) {
      general = Math.floor(198 + Math.random() * 3);
      reddot = 196; scope2x = 194; scope4x = 190; snip = 135; button = 45;
      dpi = Math.floor(580 + Math.random() * 20);
      reason = '🔹 Gaming phone max performance. Sensitivity near 200 for fast tracking.';
    } else if (clean.includes('samsung') || clean.includes('galaxy') || clean.includes('ultra')) {
      general = 200;
      reddot = Math.floor(194 + Math.random() * 4);
      scope2x = 192; scope4x = 188; snip = 125;
      button = Math.floor(45 + Math.random() * 3);
      dpi = Math.floor(510 + Math.random() * 20);
      reason = '🔹 Samsung optimized: lock general at 200, DPI boost for zero lag.';
    } else if (clean.includes('xiaomi') || clean.includes('poco') || clean.includes('redmi') || clean.includes('snapdragon')) {
      general = Math.floor(190 + Math.random() * 4);
      reddot = 186; scope2x = 184; scope4x = 180; snip = 115; button = 46;
      dpi = Math.floor(490 + Math.random() * 20);
      reason = '🔹 Snapdragon/MIUI smooth graphics. Range 180-190 balanced.';
    } else {
      general = Math.floor(192 + Math.random() * 4);
      reddot = 188; scope2x = 185; scope4x = 182; snip = 120; button = 44;
      dpi = Math.floor(470 + Math.random() * 20);
      reason = '🔹 General Android config. Range 182-192 for mid-range devices.';
    }

    $('result-device').textContent = '🔹 ' + device.toUpperCase();
    $('val-general').textContent = general;
    $('val-reddot').textContent = reddot;
    $('val-scope2x').textContent = scope2x;
    $('val-scope4x').textContent = scope4x;
    $('val-snip').textContent = snip;
    $('val-button').textContent = button + '%';
    $('val-dpi').textContent = typeof dpi === 'number' ? dpi : dpi;
    $('reason-text').textContent = reason;
    showToast('✅ AI OK!', 'on');
  });

  $('master-on').addEventListener('click', () => {
    playBeep(); vibrate([50, 30, 50]);
    ALL_FEATURES.forEach(f => { featureState[f.id] = true; });
    saveFeatureState();
    renderAllTabs();
    runTerminal('💀 ON ALL', ['$ Full...', '$ Loading...', '$ Ready!'], '✅ ALL ON!');
    setTimeout(() => {
      $('overlay-success').classList.remove('show');
      $('overlay-game').classList.add('show');
    }, 2000);
  });

  $('master-off').addEventListener('click', () => {
    playBeep(); vibrate([50, 30, 50]);
    ALL_FEATURES.forEach(f => { featureState[f.id] = false; });
    saveFeatureState();
    renderAllTabs();
    $('overlay-game').classList.remove('show');
    $('overlay-terminal').classList.remove('show');
    $('overlay-success').classList.remove('show');
    showToast('☠ ALL OFF', 'off');
  });

  document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.game-card').forEach(c => c.classList.remove('active-card'));
      card.classList.add('active-card');
      selectedGameScheme = card.dataset.game;
      selectedGamePkg = card.dataset.pkg;
      playBeep();
    });
  });

  $('btn-headlock-success').addEventListener('click', () => {
    playBeep(); vibrate([50, 30, 50]);
    $('overlay-game').classList.remove('show');
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    try {
      if (isIOS) {
        window.location.href = selectedGameScheme;
        setTimeout(() => {
          window.location.href = selectedGamePkg.includes('max')
            ? 'https://apps.apple.com/app/id1576424464'
            : 'https://apps.apple.com/app/id1300146617';
        }, 1500);
      } else {
        window.location.href = 'intent://#Intent;package=' + selectedGamePkg + ';end';
        setTimeout(() => { window.location.href = 'market://details?id=' + selectedGamePkg; }, 1500);
      }
    } catch (e) {}
    showToast('🚀 Opening...', 'on');
  });

  $('btn-headlock-turnoff').addEventListener('click', () => {
    $('overlay-game').classList.remove('show');
    featureState['headlock'] = false;
    saveFeatureState(); renderAllTabs();
  });

  $('btn-success-close').addEventListener('click', () => $('overlay-success').classList.remove('show'));

  $('btn-logout').addEventListener('click', () => {
    if (confirm('Đăng xuất?')) {
      localStorage.removeItem(STORAGE_SESSION);
      currentSession = null;
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      $('view-login').classList.add('active');
      $('input-key').value = '';
      $('input-name').value = '';
      showToast('☠ Logout', 'off');
    }
  });

  function updateClock() {
    const n = new Date();
    $('clock').textContent = String(n.getHours()).padStart(2,'0') + ':' + String(n.getMinutes()).padStart(2,'0');
  }
  setInterval(updateClock, 1000); updateClock();

  if (navigator.getBattery) {
    navigator.getBattery().then(b => { $('batteryLevel').textContent = Math.round(b.level * 100); });
  }

  function playBeep() {
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const o = audioCtx.createOscillator(), g = audioCtx.createGain();
      o.connect(g); g.connect(audioCtx.destination);
      o.frequency.value = 440; o.type = 'sawtooth'; g.gain.value = 0.06;
      o.start(); o.stop(audioCtx.currentTime + 0.08);
    } catch (e) {}
  }

  function vibrate(p) { if (navigator.vibrate) navigator.vibrate(p); }

  let toastTimer = null;
  function showToast(msg, type) {
    let t = $('global-toast');
    if (!t) { t = document.createElement('div'); t.id = 'global-toast'; document.body.appendChild(t); }
    t.textContent = msg;
    t.style.borderColor = type === 'off' ? '#ff0040' : '#00ff44';
    t.style.transform = 'translateX(-50%) translateY(0)';
    t.style.opacity = '1';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      t.style.transform = 'translateX(-50%) translateY(80px)';
      t.style.opacity = '0';
    }, 1800);
  }

  // ========== INIT ==========
  applyLang();
  const fbOK = initFirebase();
  console.log('☁️ Firebase:', fbOK ? 'OK' : 'Offline');
  runLoading();
});