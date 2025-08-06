// Website template by https://github.com/Pathetic420

document.addEventListener('DOMContentLoaded', function() {
    const preEnter = document.getElementById('pre-enter');
    const jsEnter = document.getElementById('js-enter');
    if (preEnter && jsEnter) {
        jsEnter.addEventListener('click', function() {
            preEnter.classList.add('hide');
            setTimeout(() => {
                preEnter.style.display = 'none';
            }, 800); // Match the longest transition (background-color)
        });
    }
});

var titleText = " " + document.title + " ";

function titleMarquee() {
    titleText = titleText.substring(1, titleText.length) + titleText.substring(0, 1);
    document.title = titleText;
    setTimeout(titleMarquee, 500);
}

window.onload = titleMarquee;

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const video = document.getElementById('background');

    audio.oncanplay = function() {
        video.play();
        audio.play();
    };
});

document.addEventListener('DOMContentLoaded', function() {
    const preEnter = document.getElementById('pre-enter');
    const jsEnter = document.getElementById('js-enter');
    if (preEnter && jsEnter) {
        jsEnter.addEventListener('click', function() {
            preEnter.classList.add('hide');
            setTimeout(() => {
                preEnter.style.display = 'none';
            }, 800); // Match the longest transition (background-color)
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById("myAudio");

    var playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
            audio.loop = true;
            audio.volume = 0.2;
        }).catch(error => {
            console.log('Autoplay was prevented:', error);
            
            document.addEventListener('click', function() {
                audio.loop = true;
                audio.volume = 0.2;
                audio.play();
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card:not(.social-card)');
    const socialCard = document.querySelector('.card.social-card');
    const MAX_ANGLE_MAIN = 30;
    const MAX_ANGLE_SOCIAL = 20;

    // Set fast transition for normal movement
    if (card) card.style.transition = 'transform 0.1s cubic-bezier(0.4,0,0.2,1)';
    if (socialCard) socialCard.style.transition = 'transform 0.1s cubic-bezier(0.4,0,0.2,1)';

    document.addEventListener('mousemove', function(e) {
        if (!card) return;

        // Always use fast transition for movement
        card.style.transition = 'transform 0.1s cubic-bezier(0.4,0,0.2,1)';
        if (socialCard) socialCard.style.transition = 'transform 0.1s cubic-bezier(0.4,0,0.2,1)';

        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;

        const deltaX = e.clientX - cardCenterX;
        const deltaY = e.clientY - cardCenterY;

        let angleX = (deltaY / cardRect.height) * 30;
        let angleY = (deltaX / cardRect.width) * -30;
        angleX = Math.max(-MAX_ANGLE_MAIN, Math.min(MAX_ANGLE_MAIN, angleX));
        angleY = Math.max(-MAX_ANGLE_MAIN, Math.min(MAX_ANGLE_MAIN, angleY));
        card.style.transform = `translate(-50%, -50%) rotateX(${angleX}deg) rotateY(${angleY}deg)`;

        if (socialCard) {
            let socialAngleX = Math.max(-MAX_ANGLE_SOCIAL, Math.min(MAX_ANGLE_SOCIAL, angleX));
            let socialAngleY = Math.max(-MAX_ANGLE_SOCIAL, Math.min(MAX_ANGLE_SOCIAL, angleY));
            socialCard.style.transform = `translate(-50%, -50%) rotateX(${socialAngleX}deg) rotateY(${socialAngleY}deg)`;
        }
    });

    // Reset cards smoothly when mouse leaves the window
    window.addEventListener('mouseout', function(e) {
        if (!e.relatedTarget && !e.toElement) {
            // Use slow transition for reset
            if (card) card.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';
            if (socialCard) socialCard.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';

            if (card) card.style.transform = 'translate(-50%, -50%) rotateX(0deg) rotateY(0deg)';
            if (socialCard) socialCard.style.transform = 'translate(-50%, -50%) rotateX(0deg) rotateY(0deg)';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const profileName = document.getElementById('profile-name');
    if (profileName) {
        profileName.addEventListener('click', function() {
            window.location.href = "kiki.html"; // Change to your desired URL
        });
    }
});

jQuery(document).ready(function(){
    jQuery(function() {
        jQuery(this).bind("contextmenu", function(event) {
            event.preventDefault();
        });
    });
});

