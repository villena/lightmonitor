const ICONS = {
    pull: '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 2v9m0 0-3.5-3.5M8 11l3.5-3.5M3 14h10"/></svg>',
    ignore: '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8.5 6.5 12 13 4.5"/></svg>',
    restore: '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h6a4 4 0 1 1-2.83 6.83M3 6l2.5-2.5M3 6l2.5 2.5"/></svg>',
    recreate: '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 8a5.5 5.5 0 0 1 9.38-3.88L13.5 5.5M13.5 2v3.5H10M13.5 8a5.5 5.5 0 0 1-9.38 3.88L2.5 10.5M2.5 14v-3.5H6"/></svg>',
    pullAll: '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m4 4 4 4-4 4m5-8 4 4-4 4"/></svg>',
    check: '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="7" cy="7" r="4.5"/><path d="m10.5 10.5 3 3"/></svg>',
    progress: '<svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><circle cx="3.5" cy="8" r="1.3"/><circle cx="8" cy="8" r="1.3"/><circle cx="12.5" cy="8" r="1.3"/></svg>',
};

const BTN = {
    pull: `${ICONS.pull}<span>Pull</span>`,
    pulling: `${ICONS.progress}<span>Pulling</span>`,
    ignore: `${ICONS.ignore}<span>Ignore</span>`,
    restore: `${ICONS.restore}<span>Restore</span>`,
    recreate: `${ICONS.recreate}<span>Recreate</span>`,
    recreating: `${ICONS.progress}<span>Recreating</span>`,
    pull_all: `${ICONS.pullAll}<span>Pull &amp; Recreate All</span>`,
    updating_prefix: `${ICONS.progress}<span>Updating`,
    check: `${ICONS.check}<span>Check Now</span>`,
    checking: `${ICONS.progress}<span>Checking</span>`,
    progress_icon: ICONS.progress,
};

const INITIAL_DEMO_DATA = {
    lastScan: '2026-11-25 19:30:00',
    dhUser: 'homelab_demo',
    updates: [
        {
            name: 'caddy',
            stack: 'reverse-proxy',
            image: 'caddy:2.8-alpine',
            icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/caddy.png',
            pulled: false,
            layers: 4,
        },
        {
            name: 'immich-server',
            stack: 'photos',
            image: 'ghcr.io/immich-app/immich-server:release',
            icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/immich.png',
            pulled: true,
            layers: 7,
        },
        {
            name: 'vaultwarden',
            stack: 'security',
            image: 'vaultwarden/server:latest',
            icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/vaultwarden.png',
            pulled: false,
            layers: 5,
        },
    ],
    failed: [
        {
            name: 'custom-worker',
            stack: 'internal',
            image: 'registry.local:5000/homelab/worker:dev',
            icon: '',
            error: 'HTTP 401 (Unauthorized): manifest unknown or private registry credentials missing',
        },
    ],
    watched: [
        {
            name: 'adguard',
            stack: 'network',
            image: 'adguard/adguardhome:latest',
            icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/adguard-home.png',
            ignored: false,
        },
        {
            name: 'beszel',
            stack: 'monitoring',
            image: 'henrygd/beszel:latest',
            icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/beszel.png',
            ignored: false,
        },
        {
            name: 'dockge',
            stack: 'management',
            image: 'louislam/dockge:1',
            icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/dockge.png',
            ignored: false,
        },
        {
            name: 'grafana',
            stack: 'monitoring',
            image: 'grafana/grafana-oss:latest',
            icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/grafana.png',
            ignored: true,
        },
        {
            name: 'jellyfin',
            stack: 'media',
            image: 'jellyfin/jellyfin:latest',
            icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/jellyfin.png',
            ignored: false,
        },
        {
            name: 'uptime-kuma',
            stack: 'monitoring',
            image: 'louislam/uptime-kuma:1',
            icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/uptime-kuma.png',
            ignored: false,
        },
    ],
    excluded: [
        {
            name: 'postgres-immich',
            stack: 'photos',
            image: 'tensorchord/pgvecto-rs:pg16-v0.2.0',
            icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/postgres.png',
            reason: 'diun.enable=false',
        },
        {
            name: 'socket-proxy',
            stack: 'core',
            image: 'tecnativa/docker-socket-proxy:latest',
            icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/docker.png',
            reason: 'diun.enable=false',
        },
    ],
};

let demoState = JSON.parse(JSON.stringify(INITIAL_DEMO_DATA));
let isBatchUpdating = false;
let isScanning = false;
let activeRowTasks = 0;
let activeToastEntry = null;

const FALLBACK_ICON_HTML = `
<div class="svc-icon-fallback">
    <svg viewBox="0 0 24 24" width="18" height="18" fill="#38bdf8" aria-hidden="true">
        <path d="M5.2 6H11v4.2A4.8 4.8 0 0 0 15.8 15H17v.2A4.8 4.8 0 0 1 12.2 20h-7A5.2 5.2 0 0 1 0 14.8v-3.6A5.2 5.2 0 0 1 5.2 6Zm7.8 0h3.3A3.7 3.7 0 0 1 20 9.7 3.7 3.7 0 0 1 23.7 6H24v3.3a3.7 3.7 0 0 1-3.7 3.7H18v2.2a4.8 4.8 0 0 1-4.8 4.8h-.5A5.8 5.8 0 0 0 18 14.2V13h-2.2A2.8 2.8 0 0 1 13 10.2V6Z"/>
    </svg>
</div>`;

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function adaptIconContrast(img) {
    if (img.dataset.adapted) return;
    try {
        const w = img.naturalWidth || 64;
        const h = img.naturalHeight || 64;
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        ctx.drawImage(img, 0, 0, w, h);
        const imgData = ctx.getImageData(0, 0, w, h);
        const data = imgData.data;

        let weightedLum = 0;
        let totalAlpha = 0;

        for (let i = 0; i < data.length; i += 4) {
            const a = data[i + 3] / 255;
            if (a < 0.15) continue;
            const lum = 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
            weightedLum += lum * a;
            totalAlpha += a;
        }

        if (totalAlpha > 0 && (weightedLum / totalAlpha) < 75) {
            for (let i = 0; i < data.length; i += 4) {
                if (data[i + 3] === 0) continue;
                const r = 255 - data[i];
                const g = 255 - data[i + 1];
                const b = 255 - data[i + 2];
                const maxC = Math.max(r, g, b);
                const minC = Math.min(r, g, b);
                if (maxC - minC <= 40) {
                    data[i] = Math.min(245, r);
                    data[i + 1] = Math.min(245, g);
                    data[i + 2] = Math.min(245, b);
                }
            }
            ctx.putImageData(imgData, 0, 0);
            img.dataset.adapted = '1';
            img.src = canvas.toDataURL('image/png');
        }
    } catch (e) {}
}

function renderDockerHubButton() {
    const btn = document.getElementById('dh-open-btn');
    const clearBtn = document.getElementById('dh-clear-btn');
    if (!btn) return;
    const color = demoState.dhUser ? '#4ade80' : 'currentColor';
    const svg = `<svg viewBox="0 0 24 24" width="16" height="16" fill="${color}" aria-hidden="true"><path d="M5.2 6H11v4.2A4.8 4.8 0 0 0 15.8 15H17v.2A4.8 4.8 0 0 1 12.2 20h-7A5.2 5.2 0 0 1 0 14.8v-3.6A5.2 5.2 0 0 1 5.2 6Zm7.8 0h3.3A3.7 3.7 0 0 1 20 9.7 3.7 3.7 0 0 1 23.7 6H24v3.3a3.7 3.7 0 0 1-3.7 3.7H18v2.2a4.8 4.8 0 0 1-4.8 4.8h-.5A5.8 5.8 0 0 0 18 14.2V13h-2.2A2.8 2.8 0 0 1 13 10.2V6Z"/></svg>`;
    btn.innerHTML = demoState.dhUser ? `${svg} ${escapeHtml(demoState.dhUser)}` : `${svg} Docker Hub`;
    if (clearBtn) clearBtn.style.display = demoState.dhUser ? '' : 'none';
}

function buildIconHtml(iconUrl) {
    if (!iconUrl) return FALLBACK_ICON_HTML;
    return `<img src="${escapeHtml(iconUrl)}" crossorigin="anonymous" onload="adaptIconContrast(this)" class="svc-icon" alt="" onerror="this.outerHTML=\`${FALLBACK_ICON_HTML.replace(/"/g, '&quot;')}\`">`;
}

function buildRowHtml(item, type) {
    const stackBadge = item.stack ? `<span class="stack-tag">${escapeHtml(item.stack)}</span>` : '';
    const subLine = type === 'error'
        ? `${escapeHtml(item.image)} — <span style="color:#f87171">${escapeHtml(item.error)}</span>`
        : escapeHtml(item.image);

    let badgeClass = 'ok';
    let badgeText = 'Up to date';
    let btnsHtml = '';

    if (type === 'update') {
        badgeClass = 'upd';
        badgeText = 'Update';
        if (item.pulled) {
            btnsHtml = `<div class="btn-group"><button type="button" class="btn-recreate" data-action="recreate" data-name="${escapeHtml(item.name)}" data-image="${escapeHtml(item.image)}">${BTN.recreate}</button></div>`;
        } else {
            btnsHtml = `<div class="btn-group">
                <button type="button" class="btn-pull" data-action="pull" data-name="${escapeHtml(item.name)}" data-image="${escapeHtml(item.image)}">${BTN.pull}</button>
                <button type="button" class="btn-dismiss" data-action="ignore" data-name="${escapeHtml(item.name)}" data-image="${escapeHtml(item.image)}">${BTN.ignore}</button>
            </div>`;
        }
    } else if (type === 'error') {
        badgeClass = 'err';
        badgeText = 'Failed';
    } else if (type === 'excluded') {
        badgeClass = 'excl';
        badgeText = 'Excluded';
    } else if (item.ignored) {
        badgeClass = 'upd';
        badgeText = 'Ignored';
        btnsHtml = `<div class="btn-group"><button type="button" class="btn-dismiss" data-action="restore" data-name="${escapeHtml(item.name)}" data-image="${escapeHtml(item.image)}">${BTN.restore}</button></div>`;
    }

    return `
        <div class="item" data-name="${escapeHtml(item.name)}" data-image="${escapeHtml(item.image)}">
            <div class="item-left">
                ${buildIconHtml(item.icon)}
                <div class="item-info">
                    <div class="item-title">${escapeHtml(item.name)} ${stackBadge}</div>
                    <div class="item-sub">${subLine}</div>
                </div>
            </div>
            <div class="actions">
                <div class="actions-top">
                    <span class="badge ${badgeClass}">${badgeText}</span>
                    ${btnsHtml}
                </div>
            </div>
        </div>`;
}

function renderAllSections() {
    demoState.updates.sort((a, b) => a.name.localeCompare(b.name));
    demoState.failed.sort((a, b) => a.name.localeCompare(b.name));
    demoState.watched.sort((a, b) => a.name.localeCompare(b.name));
    demoState.excluded.sort((a, b) => a.name.localeCompare(b.name));

    document.getElementById('last-scan-time').textContent = demoState.lastScan;

    const lists = [
        { id: 'updates-list', items: demoState.updates, type: 'update' },
        { id: 'errors-list', items: demoState.failed, type: 'error' },
        { id: 'watched-list', items: demoState.watched, type: 'watched' },
        { id: 'excluded-list', items: demoState.excluded, type: 'excluded' },
    ];

    for (const sec of lists) {
        const container = document.getElementById(sec.id);
        container.innerHTML = sec.items.length
            ? sec.items.map((item) => buildRowHtml(item, sec.type)).join('')
            : '<div class="empty is-visible">No containers in this category</div>';
    }

    updateSectionCounts();
    renderDockerHubButton();
}

function syncHeaderBusyState() {
    const busy = isScanning || isBatchUpdating || activeRowTasks > 0;
    const headerControls = document.querySelectorAll('.header-btns button, #reset-demo-btn');

    headerControls.forEach((el) => {
        if (isScanning && el.id === 'scan-btn') return;
        el.disabled = busy;
        el.classList.toggle('ui-locked', busy);
        if (busy) el.setAttribute('aria-disabled', 'true');
        else el.removeAttribute('aria-disabled');
    });
}

function syncBatchAllButtonState() {
    syncHeaderBusyState();

    const allBtn = document.getElementById('pull-recreate-all-btn');
    if (!allBtn) return;
    if (isBatchUpdating) {
        allBtn.disabled = true;
        return;
    }
    const hasUpdRows = document.querySelectorAll('#updates-list .item:not(.row-hiding)').length > 0;
    const lockedByAction = isScanning || activeRowTasks > 0;
    allBtn.disabled = lockedByAction || !hasUpdRows;
    allBtn.classList.toggle('ui-locked', lockedByAction);
    if (lockedByAction) allBtn.setAttribute('aria-disabled', 'true');
    else allBtn.removeAttribute('aria-disabled');
}

function updateSectionCounts() {
    const updCount = document.querySelectorAll('#updates-list .item:not(.row-hiding)').length;
    const errCount = document.querySelectorAll('#errors-list .item:not(.row-hiding)').length;
    const watCount = document.querySelectorAll('#watched-list .item:not(.row-hiding)').length;
    const excCount = document.querySelectorAll('#excluded-list .item:not(.row-hiding)').length;

    document.getElementById('updates-title').textContent = `🟡 Available Updates (${updCount})`;
    document.getElementById('errors-title').textContent = `🔴 Registry Check Errors (${errCount})`;
    document.getElementById('watched-title').textContent = `🟢 Up-to-Date Containers (${watCount})`;
    document.getElementById('excluded-title').textContent = `🔵 Excluded Containers (${excCount})`;

    document.getElementById('stat-running').textContent = updCount + errCount + watCount;
    document.getElementById('stat-updates').textContent = updCount;
    document.getElementById('stat-errors').textContent = errCount;

    [
        { listId: 'updates-list', count: updCount },
        { listId: 'errors-list', count: errCount },
        { listId: 'watched-list', count: watCount },
        { listId: 'excluded-list', count: excCount },
    ].forEach(({ listId, count }) => {
        const listEl = document.getElementById(listId);
        let emptyMsg = listEl.querySelector('.empty');
        if (count === 0) {
            if (!emptyMsg) {
                emptyMsg = document.createElement('div');
                emptyMsg.className = 'empty';
                emptyMsg.textContent = 'No containers in this category';
                listEl.appendChild(emptyMsg);
            }
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    emptyMsg.classList.add('is-visible');
                });
            });
        } else if (emptyMsg) {
            emptyMsg.classList.remove('is-visible');
            emptyMsg.remove();
        }
    });

    const allBtn = document.getElementById('pull-recreate-all-btn');
    if (allBtn) {
        if (updCount > 0) {
            if (allBtn.classList.contains('hiding')) {
                void allBtn.offsetWidth;
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        allBtn.classList.remove('hiding');
                    });
                });
            }
        } else {
            allBtn.classList.add('hiding');
        }
    }

    resetBatchButton();
    syncBatchAllButtonState();
}

function resetBatchButton() {
    const allBtn = document.getElementById('pull-recreate-all-btn');
    if (!allBtn || isBatchUpdating) return;
    allBtn.disabled = false;
    allBtn.innerHTML = BTN.pull_all;
}

function dismissToastNode(node, immediate = false) {
    if (!node) return;
    if (immediate) {
        if (node.parentNode) node.parentNode.removeChild(node);
        return;
    }
    if (node.dataset.closing === '1') return;
    node.dataset.closing = '1';
    node.style.animation = 'none';
    requestAnimationFrame(() => node.classList.add('toast-leaving'));
    setTimeout(() => {
        if (node.parentNode) node.parentNode.removeChild(node);
    }, 245);
}

function clearActiveToast(immediate = false) {
    if (!activeToastEntry) return;
    if (activeToastEntry.timerId) {
        clearTimeout(activeToastEntry.timerId);
        activeToastEntry.timerId = null;
    }
    const node = activeToastEntry.node;
    activeToastEntry = null;
    dismissToastNode(node, immediate);
}

function renderTopToast() {
    const stack = document.getElementById('toast-stack');
    if (!stack) return;
    const wrap = document.getElementById('progress-wrapper');
    if (wrap && wrap.classList.contains('visible')) return;
    if (!activeToastEntry) return;
    if (!activeToastEntry.node.parentNode) {
        stack.appendChild(activeToastEntry.node);
    }
}

function showSingleToast(text, isErr = false, autoCloseMs = 4000, isBatch = false) {
    const stack = document.getElementById('toast-stack');
    if (!stack) return;

    if (isBatch && activeToastEntry && activeToastEntry.isBatch && activeToastEntry.node.parentNode) {
        activeToastEntry.setText(text, isErr);
        activeToastEntry.scheduleClose(autoCloseMs);
        return;
    }

    clearActiveToast(true);
    stack.querySelectorAll('.toast-item').forEach((n) => n.remove());

    const el = document.createElement('div');
    el.className = 'toast-item' + (isErr ? ' err' : '');
    el.style.opacity = '0';
    el.style.transform = 'translateY(6px)';
    el.style.transition = 'none';
    el.style.animation = 'none';

    const msgSpan = document.createElement('span');
    msgSpan.textContent = text;

    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'toast-close';
    closeBtn.title = 'Dismiss';
    closeBtn.textContent = '✕';

    const entry = {
        node: el,
        isBatch,
        timerId: null,
        setText(newText, newIsErr = false) {
            msgSpan.textContent = newText;
            el.className = 'toast-item' + (newIsErr ? ' err' : '');
        },
        scheduleClose(ms) {
            if (entry.timerId) {
                clearTimeout(entry.timerId);
                entry.timerId = null;
            }
            if (ms > 0) {
                entry.timerId = setTimeout(() => {
                    if (activeToastEntry === entry) clearActiveToast(false);
                }, ms);
            }
        },
    };

    closeBtn.onclick = (e) => {
        e.stopPropagation();
        if (activeToastEntry === entry) clearActiveToast(false);
    };

    el.append(msgSpan, closeBtn);
    activeToastEntry = entry;
    entry.scheduleClose(autoCloseMs);

    const wrap = document.getElementById('progress-wrapper');
    if (!wrap || !wrap.classList.contains('visible')) {
        stack.appendChild(el);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                el.style.transition = 'opacity 0.2s cubic-bezier(0.22, 1, 0.36, 1), transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                setTimeout(() => {
                    el.style.transition = '';
                    el.style.opacity = '';
                    el.style.transform = '';
                }, 210);
            });
        });
    }
}

function pushToast(text, isErr = false, { silent = false } = {}) {
    if (silent) return;
    showSingleToast(text, isErr, 4000, false);
}

function setBatchToast(text, isErr = false, autoCloseMs = 0) {
    showSingleToast(text, isErr, autoCloseMs, true);
}

function showProgress(labelText) {
    const stack = document.getElementById('toast-stack');
    if (stack) stack.classList.add('scanning');
    const wrap = document.getElementById('progress-wrapper');
    if (wrap) wrap.classList.add('visible');
    const lbl = document.getElementById('progress-label');
    if (lbl) lbl.textContent = labelText;
}

function hideProgress() {
    const wrap = document.getElementById('progress-wrapper');
    if (wrap) wrap.classList.remove('visible');
    setTimeout(() => {
        const stack = document.getElementById('toast-stack');
        if (stack) stack.classList.remove('scanning');
        if (!isScanning) renderTopToast();
    }, 340);
}

function setProgress(pct, labelText) {
    document.getElementById('progress-fill').style.width = pct + '%';
    document.getElementById('progress-pct').textContent = Math.round(pct) + '%';
    if (labelText) document.getElementById('progress-label').textContent = labelText;
}

function setRowProgress(row, pct, labelText, isRecreate = false) {
    if (!row) return;
    const actions = row.querySelector('.actions');
    if (!actions) return;

    const prevPct = parseFloat(row.dataset.maxPct || '0');
    const safePct = Math.min(100, Math.max(prevPct, pct));
    row.dataset.maxPct = safePct.toString();

    let bar = actions.querySelector('.row-progress');
    if (!bar) {
        bar = document.createElement('div');
        bar.className = 'row-progress';
        bar.innerHTML = `
            <div class="row-progress-meta">
                <span class="rp-label"></span>
                <span class="rp-pct">0%</span>
            </div>
            <div class="row-progress-track">
                <div class="row-progress-fill"></div>
            </div>
        `;
        actions.appendChild(bar);
        requestAnimationFrame(() => requestAnimationFrame(() => bar.classList.add('visible')));
    }

    const fill = bar.querySelector('.row-progress-fill');
    fill.classList.toggle('recreate', isRecreate);
    fill.style.width = safePct + '%';
    bar.querySelector('.rp-pct').textContent = Math.round(safePct) + '%';
    if (labelText) bar.querySelector('.rp-label').textContent = labelText;
}

function clearRowProgress(row, delayMs = 350) {
    if (!row) return;
    delete row.dataset.maxPct;
    const bar = row.querySelector('.row-progress');
    if (!bar) return;
    setTimeout(() => {
        bar.classList.remove('visible');
        setTimeout(() => bar.remove(), 290);
    }, delayMs);
}

function insertAlphabetically(listEl, rowEl) {
    const name = (rowEl.dataset.name || '').toLowerCase();
    const existing = Array.from(listEl.querySelectorAll('.item:not(.row-hiding)'));
    const next = existing.find((el) => (el.dataset.name || '').toLowerCase().localeCompare(name) > 0);
    if (next) listEl.insertBefore(rowEl, next);
    else listEl.appendChild(rowEl);
}

function animateRowMove(row, targetListId, setupNewActionsHtml, toastMsg) {
    return new Promise((resolve) => {
        const targetList = document.getElementById(targetListId);
        row.style.maxHeight = `${row.scrollHeight}px`;
        requestAnimationFrame(() => row.classList.add('row-hiding'));

        setTimeout(() => {
            row.classList.remove('row-hiding');
            row.style.maxHeight = '';
            const actions = row.querySelector('.actions');
            if (actions) actions.innerHTML = setupNewActionsHtml;

            if (targetList) {
                const prevRects = new Map();
                targetList.querySelectorAll('.item:not(.row-hiding)').forEach((el) => {
                    prevRects.set(el, el.getBoundingClientRect().top);
                });

                const emptyMsg = targetList.querySelector('.empty');
                if (emptyMsg) emptyMsg.remove();

                row.classList.remove('row-entering');
                row.style.animation = 'none';
                row.style.transition = 'none';
                row.style.opacity = '0';
                row.style.transform = 'translateY(-6px)';
                insertAlphabetically(targetList, row);

                const movedNeighbors = [];
                prevRects.forEach((oldTop, el) => {
                    if (el === row) return;
                    const deltaY = oldTop - el.getBoundingClientRect().top;
                    if (Math.abs(deltaY) > 1) {
                        el.style.transition = 'none';
                        el.style.transform = `translateY(${deltaY}px)`;
                        movedNeighbors.push(el);
                    }
                });

                void row.offsetWidth;

                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        row.style.transition = 'opacity 0.24s cubic-bezier(0.22, 1, 0.36, 1), transform 0.24s cubic-bezier(0.22, 1, 0.36, 1)';
                        row.style.opacity = '1';
                        row.style.transform = 'translateY(0)';

                        movedNeighbors.forEach((el) => {
                            el.style.transition = 'transform 0.28s cubic-bezier(0.22, 1, 0.36, 1)';
                            el.style.transform = '';
                        });

                        setTimeout(() => {
                            row.style.transition = '';
                            row.style.opacity = '';
                            row.style.transform = '';
                            row.style.animation = '';
                            movedNeighbors.forEach((el) => {
                                el.style.transition = '';
                            });
                        }, 280);
                    });
                });
            }

            updateSectionCounts();
            if (toastMsg) pushToast(toastMsg, false, { silent: isBatchUpdating });
            resolve();
        }, 280);
    });
}

function startSimulatedPull(btn, name, image) {
    return new Promise((resolve) => {
        const row = btn.closest('.item');
        const ignoreBtn = btn.nextElementSibling;
        activeRowTasks++;
        syncBatchAllButtonState();

        btn.innerHTML = BTN.pulling;
        btn.disabled = true;
        if (ignoreBtn) {
            ignoreBtn.disabled = true;
            ignoreBtn.style.opacity = '0.45';
        }

        const itemData = demoState.updates.find((u) => u.name === name);
        const totalLayers = itemData ? itemData.layers : 5;
        let step = 0;
        const maxSteps = totalLayers * 2 + 2;

        setRowProgress(row, 5, `(0/${totalLayers} layers) — Pulling fs layer`);

        const interval = setInterval(() => {
            step++;
            const completedLayers = Math.min(totalLayers, Math.floor((step / maxSteps) * totalLayers));
            const pct = Math.min(96, Math.round((step / maxSteps) * 96));
            const phase = step < maxSteps * 0.65 ? 'Downloading' : 'Extracting';
            setRowProgress(row, pct, `(${completedLayers}/${totalLayers} layers) — ${phase}`);

            if (step >= maxSteps) {
                clearInterval(interval);
                if (itemData) itemData.pulled = true;
                setRowProgress(row, 100, 'Pull complete');
                clearRowProgress(row, 250);

                setTimeout(() => {
                    const btnGroup = row.querySelector('.btn-group');
                    if (btnGroup) {
                        btnGroup.innerHTML = `<button type="button" class="btn-recreate" data-action="recreate" data-name="${escapeHtml(name)}" data-image="${escapeHtml(image)}">${BTN.recreate}</button>`;
                    }
                    pushToast(`Pulled ${image}. Ready to recreate ${name}.`, false, { silent: isBatchUpdating });
                    activeRowTasks = Math.max(0, activeRowTasks - 1);
                    syncBatchAllButtonState();
                    resolve(true);
                }, 220);
            }
        }, 180);
    });
}

function startSimulatedRecreate(btn, name, image) {
    return new Promise((resolve) => {
        const row = btn.closest('.item');
        activeRowTasks++;
        syncBatchAllButtonState();

        btn.innerHTML = BTN.recreating;
        btn.disabled = true;
        setRowProgress(row, 18, 'Recreating...', true);

        let p = 18;
        const timer = setInterval(() => {
            p = Math.min(92, p + 24);
            setRowProgress(row, p, 'Recreating...', true);
        }, 220);

        setTimeout(async () => {
            clearInterval(timer);
            setRowProgress(row, 100, 'Done', true);

            const idx = demoState.updates.findIndex((u) => u.name === name);
            if (idx !== -1) {
                const [moved] = demoState.updates.splice(idx, 1);
                demoState.watched.push({
                    name: moved.name,
                    stack: moved.stack,
                    image: moved.image,
                    icon: moved.icon,
                    ignored: false,
                });
            }

            setTimeout(async () => {
                await animateRowMove(
                    row,
                    'watched-list',
                    `<div class="actions-top"><span class="badge ok">Up to date</span></div>`,
                    `Container '${name}' recreated and running with latest image.`
                );
                activeRowTasks = Math.max(0, activeRowTasks - 1);
                syncBatchAllButtonState();
                resolve(true);
            }, 220);
        }, 720);
    });
}

async function pullAndRecreateAll() {
    if (isBatchUpdating || isScanning || activeRowTasks > 0) return;
    const rows = Array.from(document.querySelectorAll('#updates-list .item:not(.row-hiding)'));
    const total = rows.length;
    if (total === 0) {
        resetBatchButton();
        return;
    }

    isBatchUpdating = true;
    const allBtn = document.getElementById('pull-recreate-all-btn');
    const setUpdatingLabel = (currentStep) => {
        if (allBtn) {
            const clamped = Math.min(total, Math.max(1, currentStep));
            allBtn.innerHTML = `${BTN.updating_prefix} (${clamped}/${total})</span>`;
            allBtn.disabled = true;
        }
    };

    setUpdatingLabel(1);
    syncBatchAllButtonState();
    setBatchToast(`Updating (1/${total}): starting batch...`, false, 0);

    let okCount = 0;

    try {
        for (let idx = 0; idx < rows.length; idx++) {
            const row = rows[idx];
            const step = idx + 1;
            setUpdatingLabel(step);

            const name = row.dataset.name;
            const image = row.dataset.image;
            let recreateBtn = row.querySelector('[data-action="recreate"]');
            const pullBtn = row.querySelector('[data-action="pull"]');

            if (!recreateBtn && pullBtn) {
                setBatchToast(`Pulling (${step}/${total}): ${name}...`, false, 0);
                const pulled = await startSimulatedPull(pullBtn, name, image);
                if (!pulled) {
                    setBatchToast(`Pull failed (${step}/${total}): ${name}`, true, 0);
                    continue;
                }
                recreateBtn = row.querySelector('[data-action="recreate"]');
            }

            if (recreateBtn) {
                setBatchToast(`Recreating (${step}/${total}): ${name}...`, false, 0);
                const recreated = await startSimulatedRecreate(recreateBtn, name, image);
                if (recreated) okCount++;
            }
        }

        setBatchToast(
            `Batch update finished: ${okCount}/${total} container(s) updated.`,
            okCount < total,
            4500
        );
    } finally {
        isBatchUpdating = false;
        updateSectionCounts();
        const btnAfter = document.getElementById('pull-recreate-all-btn');
        const remaining = document.querySelectorAll('#updates-list .item:not(.row-hiding)').length;
        if (btnAfter) {
            btnAfter.disabled = false;
            btnAfter.innerHTML = BTN.pull_all;
            if (remaining === 0) {
                btnAfter.classList.remove('hiding');
                void btnAfter.offsetWidth;
                requestAnimationFrame(() => btnAfter.classList.add('hiding'));
            } else {
                btnAfter.classList.remove('hiding');
            }
        }
        syncBatchAllButtonState();
    }
}

function runLiveScan() {
    if (isScanning || isBatchUpdating || activeRowTasks > 0) return;
    isScanning = true;
    syncBatchAllButtonState();

    const btn = document.getElementById('scan-btn');
    btn.disabled = true;
    btn.innerHTML = BTN.checking;
    showProgress('Fetching running containers...');
    const fillEl = document.getElementById('progress-fill');
    const pctEl = document.getElementById('progress-pct');
    if (fillEl) {
        fillEl.style.transition = 'none';
        fillEl.style.width = '0%';
        void fillEl.offsetWidth;
        fillEl.style.transition = '';
    }
    if (pctEl) pctEl.textContent = '0%';
    setProgress(3);

    const allMonitored = [
        ...demoState.updates.map((c) => c.name),
        ...demoState.failed.map((c) => c.name),
        ...demoState.watched.map((c) => c.name),
    ].sort((a, b) => a.localeCompare(b));

    let current = 0;
    const total = allMonitored.length || 1;

    const timer = setInterval(() => {
        if (current < total) {
            const cname = allMonitored[current];
            current++;
            const pct = Math.max(5, (current / total) * 100);
            setProgress(pct, `Checking (${current}/${total}): ${cname}...`);
            return;
        }

        clearInterval(timer);
        setProgress(100, 'Comparison complete! Updating view...');

        setTimeout(() => {
            const now = new Date();
            const pad = (n) => String(n).padStart(2, '0');
            demoState.lastScan = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
            document.getElementById('last-scan-time').textContent = demoState.lastScan;

            isScanning = false;
            hideProgress();
            btn.disabled = false;
            btn.innerHTML = BTN.check;
            syncBatchAllButtonState();
            pushToast(`Checked ${total} containers: ${demoState.updates.length} update(s) available.`);
        }, 320);
    }, 240);
}

function simulateRefresh() {
    if (isScanning || isBatchUpdating || activeRowTasks > 0) return;
    renderAllSections();
    pushToast('Dashboard view refreshed from sandbox state.');
}

function resetDemoSandbox() {
    if (isScanning || isBatchUpdating || activeRowTasks > 0) return;
    demoState = JSON.parse(JSON.stringify(INITIAL_DEMO_DATA));
    renderAllSections();
    pushToast('Sandbox reset to initial demo dataset.');
}

function handleDemoDockerHub(event) {
    event.preventDefault();
    const user = document.getElementById('dh-username').value.trim();
    const token = document.getElementById('dh-token').value.trim();
    const modal = document.getElementById('dh-modal');
    if (!user || !token) {
        modal.close();
        pushToast('Docker Hub auth failed: Username and token are required.', true);
        return;
    }
    demoState.dhUser = user;
    renderDockerHubButton();
    modal.close();
    pushToast(`Docker Hub connected as ${user}! (Sandbox simulated)`);
}

function clearDemoDockerHub() {
    demoState.dhUser = '';
    document.getElementById('dh-username').value = '';
    document.getElementById('dh-token').value = '';
    renderDockerHubButton();
    document.getElementById('dh-modal').close();
    pushToast('Docker Hub credentials removed.');
}

document.addEventListener('click', async (e) => {
    if (isScanning || isBatchUpdating) {
        const actionEl = e.target.closest('header button, section button, #reset-demo-btn');
        if (actionEl && actionEl.id !== 'scan-btn' && actionEl.id !== 'pull-recreate-all-btn') {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
    }

    const btn = e.target.closest('button[data-action]');
    if (!btn) return;

    const action = btn.dataset.action;
    const name = btn.dataset.name;
    const image = btn.dataset.image;
    const row = btn.closest('.item');

    if (action === 'pull') {
        await startSimulatedPull(btn, name, image);
    } else if (action === 'recreate') {
        await startSimulatedRecreate(btn, name, image);
    } else if (action === 'ignore') {
        const idx = demoState.updates.findIndex((u) => u.name === name);
        if (idx !== -1) {
            const [moved] = demoState.updates.splice(idx, 1);
            demoState.watched.push({
                name: moved.name,
                stack: moved.stack,
                image: moved.image,
                icon: moved.icon,
                ignored: true,
            });
        }
        await animateRowMove(
            row,
            'watched-list',
            `<div class="actions-top">
                <span class="badge upd">Ignored</span>
                <div class="btn-group">
                    <button type="button" class="btn-dismiss" data-action="restore" data-name="${escapeHtml(name)}" data-image="${escapeHtml(image)}">${BTN.restore}</button>
                </div>
            </div>`,
            `Ignored current update for ${image}`
        );
    } else if (action === 'restore') {
        const idx = demoState.watched.findIndex((w) => w.name === name);
        if (idx !== -1) {
            const [moved] = demoState.watched.splice(idx, 1);
            demoState.updates.push({
                name: moved.name,
                stack: moved.stack,
                image: moved.image,
                icon: moved.icon,
                pulled: false,
                layers: 5,
            });
        }
        await animateRowMove(
            row,
            'updates-list',
            `<div class="actions-top">
                <span class="badge upd">Update</span>
                <div class="btn-group">
                    <button type="button" class="btn-pull" data-action="pull" data-name="${escapeHtml(name)}" data-image="${escapeHtml(image)}">${BTN.pull}</button>
                    <button type="button" class="btn-dismiss" data-action="ignore" data-name="${escapeHtml(name)}" data-image="${escapeHtml(image)}">${BTN.ignore}</button>
                </div>
            </div>`,
            `Restored watch for ${image}`
        );
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const scanBtn = document.getElementById('scan-btn');
    if (scanBtn) scanBtn.innerHTML = BTN.check;
    renderAllSections();
    pushToast('Sandbox loaded: try Check Now, Pull, Recreate, Ignore or Pull & Recreate All.');
});