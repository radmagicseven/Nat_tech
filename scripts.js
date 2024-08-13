document.addEventListener('DOMContentLoaded', () => {
    const devices = document.querySelectorAll('.device');
    
    devices.forEach(device => {
        device.addEventListener('click', () => {
            // Toggle a class on click to highlight the selected device
            devices.forEach(d => d.classList.remove('selected'));
            device.classList.add('selected');
        });
    });
});
