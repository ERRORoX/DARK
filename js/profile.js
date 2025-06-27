// Profile page functionality
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateX(5px)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateX(0)';
        });
    });
    
    // Simulate real-time status updates
    setInterval(() => {
        const statusIndicator = document.querySelector('.status-indicator');
        if (statusIndicator) {
            // Random status changes for demo
            if (Math.random() > 0.95) {
                statusIndicator.classList.toggle('status-online');
                statusIndicator.classList.toggle('status-offline');
            }
        }
    }, 5000);
    
    // Add click handlers for navigation (demo)
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Show demo message
            const linkText = link.textContent;
            console.log(`Navigating to: ${linkText}`);
            
            // You can add actual navigation logic here
        });
    });
}); 