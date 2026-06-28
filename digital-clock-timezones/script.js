// List of all available timezones
const timezones = [
    'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
    'America/Anchorage', 'Pacific/Honolulu', 'Europe/London', 'Europe/Paris',
    'Europe/Berlin', 'Europe/Moscow', 'Asia/Dubai', 'Asia/Kolkata', 'Asia/Bangkok',
    'Asia/Hong_Kong', 'Asia/Shanghai', 'Asia/Tokyo', 'Asia/Seoul', 'Australia/Sydney',
    'Australia/Melbourne', 'Pacific/Auckland', 'America/Toronto', 'America/Mexico_City',
    'America/Sao_Paulo', 'Africa/Cairo', 'Africa/Johannesburg', 'Asia/Singapore',
    'Asia/Jakarta', 'Australia/Brisbane', 'Pacific/Fiji', 'America/Argentina/Buenos_Aires',
    'UTC', 'GMT', 'Asia/Karachi', 'Asia/Dhaka', 'Asia/Ho_Chi_Minh',
    'America/Panama', 'America/Lima', 'Pacific/Tongatapu', 'Australia/Perth',
    'Europe/Istanbul', 'Europe/Athens', 'Europe/Amsterdam', 'Europe/Madrid'
];

let selectedTimezones = ['America/New_York', 'Europe/London', 'Asia/Tokyo'];

// Initialize the application
function init() {
    populateTimezoneSelect();
    updateAllClocks();
    setInterval(updateAllClocks, 1000);
}

// Populate timezone select dropdown
function populateTimezoneSelect() {
    const select = document.getElementById('timezoneInput');
    timezones.forEach(tz => {
        const option = document.createElement('option');
        option.value = tz;
        option.textContent = tz.replace(/_/g, ' ');
        select.appendChild(option);
    });
}

// Handle timezone selection from dropdown
function handleTimezoneSelect() {
    const select = document.getElementById('timezoneInput');
    if (select.value) {
        addTimezoneToList(select.value);
        select.value = '';
    }
}

// Add timezone to list
function addTimezoneToList(tz) {
    if (!selectedTimezones.includes(tz)) {
        selectedTimezones.push(tz);
        renderClocks();
    }
}

// Add timezone button handler
function addTimeZone() {
    const searchBox = document.getElementById('timezoneSearch');
    const query = searchBox.value.toLowerCase().trim();

    if (!query) {
        alert('Please enter a timezone name');
        return;
    }

    const matching = timezones.filter(tz =>
        tz.toLowerCase().includes(query)
    );

    if (matching.length === 0) {
        alert('No matching timezone found');
        return;
    }

    if (matching.length === 1) {
        addTimezoneToList(matching[0]);
        searchBox.value = '';
    } else {
        // Show first match
        addTimezoneToList(matching[0]);
        searchBox.value = '';
    }
}

// Remove timezone
function removeTimezone(tz) {
    selectedTimezones = selectedTimezones.filter(t => t !== tz);
    renderClocks();
}

// Reset to default timezones
function resetClocks() {
    selectedTimezones = ['America/New_York', 'Europe/London', 'Asia/Tokyo'];
    document.getElementById('timezoneSearch').value = '';
    renderClocks();
}

// Format timezone name for display
function formatTimezoneName(tz) {
    const parts = tz.split('/');
    if (parts.length === 2) {
        return parts[1].replace(/_/g, ' ');
    }
    return tz;
}

// Get timezone offset
function getTimezoneOffset(tz) {
    const now = new Date();
    const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
    const tzDate = new Date(now.toLocaleString('en-US', { timeZone: tz }));
    const offset = (tzDate - utcDate) / (1000 * 60 * 60);
    return offset >= 0 ? `+${offset.toFixed(1)}` : offset.toFixed(1);
}

// Get current time in timezone
function getTimeInTimezone(tz) {
    const now = new Date();
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: tz
    };
    return now.toLocaleString('en-US', options);
}

// Get current date in timezone
function getDateInTimezone(tz) {
    const now = new Date();
    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        timeZone: tz
    };
    return now.toLocaleString('en-US', options);
}

// Get day period (Morning, Afternoon, Evening, Night)
function getDayPeriod(tz) {
    const now = new Date();
    const timeStr = now.toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: tz
    });
    const hour = parseInt(timeStr.split(':')[0]);

    if (hour >= 5 && hour < 12) return '🌅 Morning';
    if (hour >= 12 && hour < 17) return '☀️ Afternoon';
    if (hour >= 17 && hour < 21) return '🌆 Evening';
    return '🌙 Night';
}

// Render all clock cards
function renderClocks() {
    const container = document.getElementById('clocksContainer');
    const count = document.getElementById('timezoneCount');

    count.textContent = selectedTimezones.length;

    if (selectedTimezones.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1;">
                <div class="empty-state">
                    <i class="fas fa-clock"></i>
                    <p>No timezones selected</p>
                    <p style="font-size: 0.9rem;">Add a timezone to get started!</p>
                </div>
            </div>
        `;
        return;
    }

    container.innerHTML = selectedTimezones.map(tz => `
        <div class="clock-card">
            <button class="remove-btn" onclick="removeTimezone('${tz}')"
                    title="Remove this timezone">
                <i class="fas fa-times"></i>
            </button>
            <div class="timezone-name">${formatTimezoneName(tz)}</div>
            <div class="timezone-info">${tz}</div>
            <div class="digital-clock" id="clock-${tz}">${getTimeInTimezone(tz)}</div>
            <div class="date-display" id="date-${tz}">${getDateInTimezone(tz)}</div>
            <div class="time-status">
                <div class="status-item">
                    <span class="status-label">Offset</span>
                    <span class="status-value" id="offset-${tz}">UTC ${getTimezoneOffset(tz)}</span>
                </div>
                <div class="status-item">
                    <span class="status-label">Period</span>
                    <span class="status-value" id="period-${tz}">${getDayPeriod(tz)}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Update all clocks
function updateAllClocks() {
    selectedTimezones.forEach(tz => {
        const clockElement = document.getElementById(`clock-${tz}`);
        const dateElement = document.getElementById(`date-${tz}`);
        const periodElement = document.getElementById(`period-${tz}`);

        if (clockElement) {
            clockElement.textContent = getTimeInTimezone(tz);
        }
        if (dateElement) {
            dateElement.textContent = getDateInTimezone(tz);
        }
        if (periodElement) {
            periodElement.textContent = getDayPeriod(tz);
        }
    });

    // Update last updated time
    const now = new Date();
    const lastUpdateElement = document.getElementById('lastUpdate');
    if (lastUpdateElement) {
        lastUpdateElement.textContent = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
    }
}

// Allow adding timezone with Enter key
document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('timezoneSearch');
    if (searchBox) {
        searchBox.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTimeZone();
            }
        });
    }
    init();
});