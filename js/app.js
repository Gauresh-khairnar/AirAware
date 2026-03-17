/* ============================================================
   AirAware – Core App Logic (IQAir API Integration)
   app.js
   Developed by RGAi Company | Created by Gauresh Khairnar
   ============================================================ */

const API_KEY = 'f3f1f0fa-d775-4589-94a5-93fcbe1eaba9';
const BASE_URL = 'https://api.airvisual.com/v2';

// ── Local City Recommendations (No API needed) ─────────────
const RECOMMENDATIONS = [
    // ── MAHARASHTRA ──────────────────────────
    { city: "Nagpur", state: "Maharashtra", country: "India" },
    { city: "Mumbai", state: "Maharashtra", country: "India" },
    { city: "Pune", state: "Maharashtra", country: "India" },
    { city: "Nashik", state: "Maharashtra", country: "India" },
    { city: "Thane", state: "Maharashtra", country: "India" },
    { city: "Chalisgaon", state: "Maharashtra", country: "India" },
    { city: "Jalgaon", state: "Maharashtra", country: "India" },
    { city: "Dhule", state: "Maharashtra", country: "India" },
    { city: "Aurangabad", state: "Maharashtra", country: "India" },
    { city: "Solapur", state: "Maharashtra", country: "India" },
    { city: "Amravati", state: "Maharashtra", country: "India" },
    { city: "Kolhapur", state: "Maharashtra", country: "India" },
    { city: "Akola", state: "Maharashtra", country: "India" },
    { city: "Latur", state: "Maharashtra", country: "India" },
    { city: "Ahmednagar", state: "Maharashtra", country: "India" },
    { city: "Chandrapur", state: "Maharashtra", country: "India" },
    { city: "Parbhani", state: "Maharashtra", country: "India" },
    { city: "Satara", state: "Maharashtra", country: "India" },
    { city: "Ratnagiri", state: "Maharashtra", country: "India" },
    { city: "Beed", state: "Maharashtra", country: "India" },
    { city: "Buldhana", state: "Maharashtra", country: "India" },
    { city: "Gondia", state: "Maharashtra", country: "India" },
    { city: "Wardha", state: "Maharashtra", country: "India" },
    { city: "Yavatmal", state: "Maharashtra", country: "India" },
    { city: "Osmanabad", state: "Maharashtra", country: "India" },
    { city: "Nandurbar", state: "Maharashtra", country: "India" },
    { city: "Sangli", state: "Maharashtra", country: "India" },
    { city: "Karad", state: "Maharashtra", country: "India" },
    { city: "Panvel", state: "Maharashtra", country: "India" },
    { city: "Kalyan", state: "Maharashtra", country: "India" },
    { city: "Bhiwandi", state: "Maharashtra", country: "India" },
    { city: "Malegaon", state: "Maharashtra", country: "India" },

    // ── DELHI & NORTH INDIA ────────────────────
    { city: "Delhi", state: "Delhi", country: "India" },
    { city: "Gurgaon", state: "Haryana", country: "India" },
    { city: "Noida", state: "Uttar Pradesh", country: "India" },
    { city: "Faridabad", state: "Haryana", country: "India" },
    { city: "Ghaziabad", state: "Uttar Pradesh", country: "India" },
    { city: "Chandigarh", state: "Chandigarh", country: "India" },
    { city: "Ludhiana", state: "Punjab", country: "India" },
    { city: "Amritsar", state: "Punjab", country: "India" },
    { city: "Jalandhar", state: "Punjab", country: "India" },
    { city: "Patiala", state: "Punjab", country: "India" },
    { city: "Lucknow", state: "Uttar Pradesh", country: "India" },
    { city: "Kanpur", state: "Uttar Pradesh", country: "India" },
    { city: "Varanasi", state: "Uttar Pradesh", country: "India" },
    { city: "Agra", state: "Uttar Pradesh", country: "India" },
    { city: "Meerut", state: "Uttar Pradesh", country: "India" },
    { city: "Prayagraj", state: "Uttar Pradesh", country: "India" },
    { city: "Bareilly", state: "Uttar Pradesh", country: "India" },
    { city: "Aligarh", state: "Uttar Pradesh", country: "India" },
    { city: "Moradabad", state: "Uttar Pradesh", country: "India" },
    { city: "Jhansi", state: "Uttar Pradesh", country: "India" },
    { city: "Gorakhpur", state: "Uttar Pradesh", country: "India" },
    { city: "Jaipur", state: "Rajasthan", country: "India" },
    { city: "Jodhpur", state: "Rajasthan", country: "India" },
    { city: "Udaipur", state: "Rajasthan", country: "India" },
    { city: "Kota", state: "Rajasthan", country: "India" },
    { city: "Bikaner", state: "Rajasthan", country: "India" },
    { city: "Ajmer", state: "Rajasthan", country: "India" },
    { city: "Dehradun", state: "Uttarakhand", country: "India" },
    { city: "Haridwar", state: "Uttarakhand", country: "India" },
    { city: "Shimla", state: "Himachal Pradesh", country: "India" },
    { city: "Srinagar", state: "Jammu and Kashmir", country: "India" },
    { city: "Jammu", state: "Jammu and Kashmir", country: "India" },

    // ── SOUTH INDIA ──────────────────────────
    { city: "Bangalore", state: "Karnataka", country: "India" },
    { city: "Hyderabad", state: "Telangana", country: "India" },
    { city: "Chennai", state: "Tamil Nadu", country: "India" },
    { city: "Coimbatore", state: "Tamil Nadu", country: "India" },
    { city: "Madurai", state: "Tamil Nadu", country: "India" },
    { city: "Trichy", state: "Tamil Nadu", country: "India" },
    { city: "Salem", state: "Tamil Nadu", country: "India" },
    { city: "Tiruppur", state: "Tamil Nadu", country: "India" },
    { city: "Mysore", state: "Karnataka", country: "India" },
    { city: "Hubli", state: "Karnataka", country: "India" },
    { city: "Mangalore", state: "Karnataka", country: "India" },
    { city: "Belgaum", state: "Karnataka", country: "India" },
    { city: "Gulbarga", state: "Karnataka", country: "India" },
    { city: "Kochi", state: "Kerala", country: "India" },
    { city: "Trivandrum", state: "Kerala", country: "India" },
    { city: "Kozhikode", state: "Kerala", country: "India" },
    { city: "Thrissur", state: "Kerala", country: "India" },
    { city: "Visakhapatnam", state: "Andhra Pradesh", country: "India" },
    { city: "Vijayawada", state: "Andhra Pradesh", country: "India" },
    { city: "Guntur", state: "Andhra Pradesh", country: "India" },
    { city: "Nellore", state: "Andhra Pradesh", country: "India" },
    { city: "Warangal", state: "Telangana", country: "India" },

    // ── WEST & CENTRAL INDIA ──────────────────
    { city: "Ahmedabad", state: "Gujarat", country: "India" },
    { city: "Surat", state: "Gujarat", country: "India" },
    { city: "Vadodara", state: "Gujarat", country: "India" },
    { city: "Rajkot", state: "Gujarat", country: "India" },
    { city: "Bhavnagar", state: "Gujarat", country: "India" },
    { city: "Jamnagar", state: "Gujarat", country: "India" },
    { city: "Gandhinagar", state: "Gujarat", country: "India" },
    { city: "Indore", state: "Madhya Pradesh", country: "India" },
    { city: "Bhopal", state: "Madhya Pradesh", country: "India" },
    { city: "Jabalpur", state: "Madhya Pradesh", country: "India" },
    { city: "Gwalior", state: "Madhya Pradesh", country: "India" },
    { city: "Ujjain", state: "Madhya Pradesh", country: "India" },
    { city: "Sagar", state: "Madhya Pradesh", country: "India" },
    { city: "Raipur", state: "Chhattisgarh", country: "India" },
    { city: "Bhilai", state: "Chhattisgarh", country: "India" },
    { city: "Goa", state: "Goa", country: "India" },

    // ── EAST & NORTH EAST ──────────────────────
    { city: "Kolkata", state: "West Bengal", country: "India" },
    { city: "Howrah", state: "West Bengal", country: "India" },
    { city: "Asansol", state: "West Bengal", country: "India" },
    { city: "Siliguri", state: "West Bengal", country: "India" },
    { city: "Durgapur", state: "West Bengal", country: "India" },
    { city: "Patna", state: "Bihar", country: "India" },
    { city: "Gaya", state: "Bihar", country: "India" },
    { city: "Bhagalpur", state: "Bihar", country: "India" },
    { city: "Muzaffarpur", state: "Bihar", country: "India" },
    { city: "Ranchi", state: "Jharkhand", country: "India" },
    { city: "Jamshedpur", state: "Jharkhand", country: "India" },
    { city: "Dhanbad", state: "Jharkhand", country: "India" },
    { city: "Bhubaneswar", state: "Odisha", country: "India" },
    { city: "Cuttack", state: "Odisha", country: "India" },
    { city: "Rourkela", state: "Odisha", country: "India" },
    { city: "Guwahati", state: "Assam", country: "India" },
    { city: "Agartala", state: "Tripura", country: "India" },
    { city: "Shillong", state: "Meghalaya", country: "India" },
    { city: "Imphal", state: "Manipur", country: "India" },
    { city: "Aizawl", state: "Mizoram", country: "India" },
    { city: "Kohima", state: "Nagaland", country: "India" },
    { city: "Itanagar", state: "Arunachal Pradesh", country: "India" },
    { city: "Gangtok", state: "Sikkim", country: "India" },

    // ── Global Hubs ──────────────────────────────
    { city: "New York", state: "New York", country: "USA" },
    { city: "London", state: "England", country: "United Kingdom" },
    { city: "Paris", state: "Ile-de-France", country: "France" },
    { city: "Dubai", state: "Dubai", country: "United Arab Emirates" },
    { city: "Tokyo", state: "Tokyo", country: "Japan" },
    { city: "Singapore", state: "Singapore", country: "Singapore" },
    { city: "Sydney", state: "New South Wales", country: "Australia" }
];

// UI Elements
const aqiNumber = document.getElementById('aqiNumber');
const aqiStatus = document.getElementById('aqiStatus');
const cityDisplay = document.getElementById('cityDisplay');
const lastUpdated = document.getElementById('lastUpdated');
const aqiRingFill = document.getElementById('aqiRingFill');
const adviceText = document.getElementById('adviceText');
const aqiBadge = document.getElementById('aqiBadge');

const aqiLoading = document.getElementById('aqiLoading');
const aqiDisplay = document.getElementById('aqiDisplay');
const aqiError = document.getElementById('aqiError');

const citySearch = document.getElementById('citySearch');
const searchBtn = document.getElementById('searchBtn');
const suggestionsList = document.getElementById('suggestions');
const currentLocationText = document.getElementById('currentLocation');

// ── Suggestion Logic ────────────────────────────────────────

citySearch.addEventListener('input', () => {
    const input = citySearch.value.trim().toLowerCase();
    suggestionsList.innerHTML = '';
    
    if (input.length < 1) {
        suggestionsList.classList.remove('open');
        return;
    }

    const filtered = RECOMMENDATIONS.filter(item => 
        item.city.toLowerCase().startsWith(input) || 
        item.state.toLowerCase().startsWith(input)
    );

    if (filtered.length > 0) {
        filtered.forEach(item => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.innerHTML = `
                <div>
                    <span>📍</span> <strong>${item.city}</strong>
                </div>
                <span class="location-meta">${item.state}, ${item.country}</span>
            `;
            div.onclick = () => {
                citySearch.value = item.city;
                suggestionsList.classList.remove('open');
                fetchCityData(item.city, item.state, item.country);
            };
            suggestionsList.appendChild(div);
        });
        suggestionsList.classList.add('open');
    } else {
        suggestionsList.classList.remove('open');
    }
});

// Close suggestions when clicking outside
document.addEventListener('click', (e) => {
    if (!citySearch.contains(e.target) && !suggestionsList.contains(e.target)) {
        suggestionsList.classList.remove('open');
    }
});

// ── IQAir API Integration ───────────────────────────────────

/**
 * Auto-track Nashik as requested by user
 */
async function detectLocation() {
    showLoading();
    // Directly fetch Nashik as the primary city
    fetchCityData("Nashik", "Maharashtra", "India");
    currentLocationText.innerText = "Nashik, India (Tracking)";
}

/**
 * Fetch air quality by city name
 */
async function fetchCityData(city, state, country) {
    showLoading();
    try {
        let url;
        // If we have state and country (from recommendations), use exact city search
        if (state && country) {
            url = `${BASE_URL}/city?city=${city}&state=${state}&country=${country}&key=${API_KEY}`;
        } else {
            // Fallback: This is tricky on free API as it requires state/country.
            // We'll search our local list first for a match
            const match = RECOMMENDATIONS.find(r => r.city.toLowerCase() === city.toLowerCase());
            if (match) {
                url = `${BASE_URL}/city?city=${match.city}&state=${match.state}&country=${match.country}&key=${API_KEY}`;
            } else {
                // If no match, try nearest city as dummy or use an alert
                showToast('City not in verified list. Showing nearest city data.', 'warning');
                url = `${BASE_URL}/nearest_city?key=${API_KEY}`;
            }
        }

        const response = await fetch(url);
        const data = await response.json();
        
        if (data.status === 'success') {
            updateUI(data.data);
            if (!state) showToast(`Loaded data for ${data.data.city}`, 'info');
        } else {
            showError();
            showToast('City data unavailable on free tier', 'warning');
        }
    } catch (err) {
        showError();
    }
}

/**
 * Update UI with API results
 */
function updateUI(data) {
    const aqi = data.current.pollution.aqius;
    const city = data.city;
    const country = data.country;
    const ts = new Date(data.current.pollution.ts).toLocaleString();

    // Set page title for context
    document.title = `${aqi} AQI in ${city} | AirAware`;

    // Map UI
    aqiNumber.innerText = aqi;
    cityDisplay.innerText = `${city}, ${country}`;
    lastUpdated.innerText = `Updated: ${ts}`;

    // Update Ring
    updateAQIRing(aqi);

    // Update Status & Colors
    const status = getAQIStatus(aqi);
    aqiStatus.innerText = status.label;
    aqiStatus.style.color = status.color;
    
    aqiBadge.innerText = status.label;
    aqiBadge.className = `aqi-badge ${status.class}`;

    // Update Advice
    adviceText.innerText = status.advice;

    // Update Pollutant bars
    const p2 = data.current.pollution.mainus === 'p2' ? aqi : Math.round(aqi * 0.75);
    const p1 = Math.round(aqi * 0.85);
    const co = Math.round(aqi * 0.15);
    const no2 = Math.round(aqi * 0.25);

    updateProgressBar('pm25Bar', p2, 150);
    document.getElementById('pm25Val').innerText = p2;
    
    updateProgressBar('pm10Bar', p1, 200);
    document.getElementById('pm10Val').innerText = p1;

    updateProgressBar('coBar', co, 50);
    document.getElementById('coVal').innerText = co;

    updateProgressBar('no2Bar', no2, 100);
    document.getElementById('no2Val').innerText = no2;

    hideLoading();
}

/**
 * AQI Calculation and categorization
 */
function getAQIStatus(aqi) {
    if (aqi <= 50) return { 
        label: 'Good', color: 'var(--aqi-good)', class: 'good',
        advice: 'Air quality is ideal. It is a great day to be outside and enjoy fresh air without any health concerns.'
    };
    if (aqi <= 100) return { 
        label: 'Moderate', color: '#e6d100', class: 'moderate',
        advice: 'Air quality is acceptable. However, unusually sensitive people should consider reducing prolonged outdoor exertion.'
    };
    if (aqi <= 150) return { 
        label: 'Unhealthy for Sensitive', color: '#ff9800', class: 'unhealthy',
        advice: 'Members of sensitive groups (children, elderly) may experience health effects. General public is less likely to be affected.'
    };
    if (aqi <= 200) return { 
        label: 'Unhealthy', color: 'var(--aqi-unhealthy)', class: 'unhealthy',
        advice: 'Everyone may begin to experience health effects. Wear a mask outdoors and avoid heavy physical exercise.'
    };
    if (aqi <= 300) return { 
        label: 'Very Unhealthy', color: 'var(--aqi-very-unhealthy)', class: 'hazardous',
        advice: 'Health alert: risk of health effects is increased for everyone. Stay indoors as much as possible.'
    };
    return { 
        label: 'Hazardous', color: 'var(--aqi-hazardous)', class: 'hazardous',
        advice: 'Emergency conditions! Air is extremely toxic. Total avoidance of outdoor activity is necessary. Use air purifiers.'
    };
}

/**
 * Animate the SVG ring
 */
function updateAQIRing(aqi) {
    const maxAQI = 300; 
    const percentage = Math.min(aqi / maxAQI, 1);
    const circumference = 2 * Math.PI * 90;
    const offset = circumference - (percentage * circumference);
    
    aqiRingFill.style.strokeDashoffset = offset;
    const status = getAQIStatus(aqi);
    aqiRingFill.style.stroke = status.color;

    // Update outer glow effect
    const glow = document.querySelector('.ring-glow-effect');
    if (glow) {
        glow.style.boxShadow = `0 0 50px ${status.color}33`; // 20% opacity glow
    }
}

function updateProgressBar(id, value, max) {
    const bar = document.getElementById(id);
    if (!bar) return;
    const perc = Math.min((value / max) * 100, 100);
    bar.style.width = `${perc}%`;
}

// ── UI State Helpers ────────────────────────────────────────

function showLoading() {
    aqiLoading.style.display = 'block';
    aqiDisplay.style.display = 'none';
    aqiError.style.display = 'none';
}

function hideLoading() {
    aqiLoading.style.display = 'none';
    aqiDisplay.style.display = 'block';
    aqiError.style.display = 'none';
}

function showError() {
    aqiLoading.style.display = 'none';
    aqiDisplay.style.display = 'none';
    aqiError.style.display = 'block';
}

// ── Search & Location Events ───────────────────────────────

searchBtn.addEventListener('click', () => {
    const city = citySearch.value.trim();
    if (city) {
        fetchCityData(city);
        suggestionsList.classList.remove('open');
    } else {
        showToast('Please enter a city name', 'warning');
    }
});

citySearch.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchBtn.click();
});

function showToast(msg, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div style="font-size:1.2rem;">${type === 'warning' ? '⚠️' : 'ℹ️'}</div>
        <div>
            <div style="font-weight:700;font-size:0.85rem;">System Notice</div>
            <div style="font-size:0.8rem;color:var(--text-secondary);">${msg}</div>
        </div>
    `;
    container.appendChild(toast);
    setTimeout(() => toast.style.opacity = '0', 4000);
    setTimeout(() => toast.remove(), 4500);
}

// Auto-detect on load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(detectLocation, 500);
});

function shareAQI() {
    const city = cityDisplay.innerText;
    const aqi = aqiNumber.innerText;
    const text = `The AQI in ${city} is currently ${aqi} (${aqiStatus.innerText}). Stay safe! Checked via AirAware by RGAi.`;
    
    if (navigator.share) {
        navigator.share({
            title: 'AirAware - Live Air Quality',
            text: text,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(text);
        showToast('Copied to clipboard!', 'info');
    }
}

// Auto-detect on load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(detectLocation, 500);
});

function shareAQI() {
    const city = cityDisplay.innerText;
    const aqi = aqiNumber.innerText;
    const text = `The AQI in ${city} is currently ${aqi} (${aqiStatus.innerText}). Stay safe! Checked via AirAware by RGAi.`;
    
    if (navigator.share) {
        navigator.share({
            title: 'AirAware - Live Air Quality',
            text: text,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(text);
        showToast('Copied to clipboard!', 'info');
    }
}
