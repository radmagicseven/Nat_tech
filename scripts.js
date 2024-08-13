document.addEventListener('DOMContentLoaded', () => {
    const devices = document.querySelectorAll('.device');
    const slider = document.querySelector('.slider-range');
    const image2 = document.querySelector('.image2');

    devices.forEach(device => {
        device.addEventListener('click', () => {
            devices.forEach(d => d.classList.remove('selected'));
            device.classList.add('selected');
        });
    });

    slider.addEventListener('input', () => {
        const value = slider.value;
        image2.style.clip = `rect(0, ${value}%, 100%, 0)`;
    });
});
