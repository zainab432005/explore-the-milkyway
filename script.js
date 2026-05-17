// Planet data object (stores all planet info for modal)
const planetData = {
    'The Sun':  {
        dist: '0 km — The Center',
        desc: 'The Sun is the star at the center of our Solar System. It accounts for 99.86% of the total mass of the Solar System. About 1.3 million Earths could fit inside it.',
        emoji: '☀️', age: '4.6 Billion Years', temp: '5,500°C Surface',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/600px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg'
    },
    'Mercury':  {
        dist: '57.9 Million km',
        desc: 'Mercury is the smallest planet and closest to the Sun. It has no atmosphere and swings between -180°C at night and 430°C during the day.',
        emoji: '🪨', age: '4.5 Billion Years', temp: '-180°C to 430°C',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/600px-Mercury_in_true_color.jpg'
    },
    'Venus':    {
        dist: '108.2 Million km',
        desc: 'Venus is the hottest planet despite not being closest to the Sun. Its thick atmosphere traps heat, pushing surface temperatures to around 465°C — hot enough to melt lead.',
        emoji: '🌋', age: '4.5 Billion Years', temp: '465°C',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/600px-Venus-real_color.jpg'
    },
    'Earth':    {
        dist: '149.6 Million km',
        desc: 'Earth is the only planet known to harbor life. It has one natural satellite — the Moon — and is the densest planet in the Solar System.',
        emoji: '🌍', age: '4.5 Billion Years', temp: '15°C Average',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/600px-The_Earth_seen_from_Apollo_17.jpg'
    },
    'Mars':     {
        dist: '227.9 Million km',
        desc: 'Mars is home to Olympus Mons, the tallest volcano in the Solar System at 21 km high. Scientists believe liquid water once flowed on its surface.',
        emoji: '🔴', age: '4.5 Billion Years', temp: '-60°C Average',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/600px-OSIRIS_Mars_true_color.jpg'
    },
    'Jupiter':  {
        dist: '778.5 Million km',
        desc: 'Jupiter is the largest planet in the Solar System. Its Great Red Spot is a storm that has been raging for over 350 years.',
        emoji: '🌀', age: '4.5 Billion Years', temp: '-110°C Cloud Top',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/600px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg'
    },
    'Saturn':   {
        dist: '1.4 Billion km',
        desc: 'Saturn is famous for its stunning ring system made of ice and rock. It is the least dense planet and could theoretically float on water.',
        emoji: '💍', age: '4.5 Billion Years', temp: '-140°C Cloud Top',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/600px-Saturn_during_Equinox.jpg'
    },
    'Uranus':   {
        dist: '2.9 Billion km',
        desc: 'Uranus rotates on its side with an axial tilt of 98 degrees. It is an ice giant with a blue-green color caused by methane in its atmosphere.',
        emoji: '🧊', age: '4.5 Billion Years', temp: '-195°C',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/600px-Uranus2.jpg'
    },
    'Neptune':  {
        dist: '4.5 Billion km',
        desc: 'Neptune has the strongest winds in the Solar System, reaching over 2,000 km/h. It takes 165 Earth years to complete one orbit around the Sun.',
        emoji: '🌊', age: '4.5 Billion Years', temp: '-200°C',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/600px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg'
    },
};

/* Wait for page load before attaching events */
document.addEventListener('DOMContentLoaded', function () {

    /* Add click event to each planet card */
    document.querySelectorAll('.planet-card').forEach(function (card) {
        card.addEventListener('click', function () {

            /* Get planet name from card heading */
            const name = card.querySelector('h3').innerText;

            /* Open modal with selected planet data */
            openDetails(name);
        });
    });

    /* Close modal when clicking background overlay */
    document.getElementById('modal-bg').addEventListener('click', closeDetails);
});

/* Open planet details modal */
function openDetails(name) {
    const p = planetData[name];
    if (!p) return;

    /* Fill modal content with planet data */
    document.getElementById('planet-emoji').innerText      = p.emoji;
    document.getElementById('planet-name-label').innerText = name;
    document.getElementById('planet-dist-label').innerText = p.dist;
    document.getElementById('planet-desc-label').innerText = p.desc;
    document.getElementById('planet-age').innerText        = p.age;
    document.getElementById('planet-temp').innerText       = p.temp;

    /* Set modal image and accessibility text */
    const imgEl = document.getElementById('modal-planet-img');
    imgEl.src = p.img;
    imgEl.alt = name;

    /* Show modal and background */
    document.getElementById('modal-bg').style.display   = 'block';
    document.getElementById('info-modal').style.display = 'block';
}

/* Close modal */
function closeDetails() {
    document.getElementById('modal-bg').style.display   = 'none';
    document.getElementById('info-modal').style.display = 'none';
}

/* Close modal using ESC key */
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDetails();
});

/* Filter planets by category */
function filterPlanets(type, btn) {

    /* Remove active state from all buttons */
    document.querySelectorAll('.filter-btn').forEach(b =>
        b.classList.remove('active-filter')
    );

    /* Highlight selected filter button */
    btn.classList.add('active-filter');

    /* Show or hide planets based on type */
    document.querySelectorAll('.planet-card').forEach(function (card) {

        if (type === 'all' || card.dataset.type === type) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.4s ease';
        } else {
            card.style.display = 'none';
        }
    });
}