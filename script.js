// Common JavaScript functions that can be used across all pages

// Function to change theme (for theme.html)
function changeTheme(theme) {
    const root = document.documentElement;
    
    switch(theme) {
        case 'light':
            root.style.setProperty('--primary', '#6a0dad');
            root.style.setProperty('--primary-dark', '#4a0072');
            root.style.setProperty('--secondary', '#9c27b0');
            root.style.setProperty('--text', '#333');
            root.style.setProperty('--text-secondary', '#666');
            root.style.setProperty('--bg', '#f5f5f5');
            root.style.setProperty('--bg-card', '#ffffff');
            root.style.setProperty('--bg-card-hover', '#f0f0f0');
            root.style.setProperty('--border', '#ddd');
            break;
            
        case 'blue':
            root.style.setProperty('--primary', '#1a237e');
            root.style.setProperty('--primary-dark', '#0d1452');
            root.style.setProperty('--secondary', '#283593');
            root.style.setProperty('--text', '#f0f0f0');
            root.style.setProperty('--text-secondary', '#b0b0b0');
            root.style.setProperty('--bg', '#121826');
            root.style.setProperty('--bg-card', '#1a2238');
            root.style.setProperty('--bg-card-hover', '#212b45');
            root.style.setProperty('--border', '#2a3655');
            break;
            
        case 'green':
            root.style.setProperty('--primary', '#1b5e20');
            root.style.setProperty('--primary-dark', '#0d3a10');
            root.style.setProperty('--secondary', '#2e7d32');
            root.style.setProperty('--text', '#f0f0f0');
            root.style.setProperty('--text-secondary', '#b0b0b0');
            root.style.setProperty('--bg', '#121f12');
            root.style.setProperty('--bg-card', '#1a2e1a');
            root.style.setProperty('--bg-card-hover', '#213d21');
            root.style.setProperty('--border', '#2a4d2a');
            break;
            
        default: // dark theme
            root.style.setProperty('--primary', '#6a0dad');
            root.style.setProperty('--primary-dark', '#4a0072');
            root.style.setProperty('--secondary', '#9c27b0');
            root.style.setProperty('--text', '#f0f0f0');
            root.style.setProperty('--text-secondary', '#b0b0b0');
            root.style.setProperty('--bg', '#121212');
            root.style.setProperty('--bg-card', '#1e1e1e');
            root.style.setProperty('--bg-card-hover', '#252525');
            root.style.setProperty('--border', '#333');
    }
    
    // Save theme preference to localStorage
    localStorage.setItem('voidcore-theme', theme);
}

// Load saved theme on page load for all pages
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('voidcore-theme') || 'dark';
    changeTheme(savedTheme);
});
