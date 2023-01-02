// BaguetteBox
window.addEventListener('load', function() {
    baguetteBox.run('.gallery', {
        animation: 'fadeIn',
        buttons: true,
    }
    );
});
// Passing object with custom options

// Search Function
const thumbSearch = document.getElementById('query');
thumbSearch.addEventListener('keyup', x => {

    let searchValue = x.target.value.toLowerCase();
    console.log(searchValue);
    let captions = document.querySelectorAll('a[data-caption]');
    console.log(captions);

    captions.forEach(caption => {
        // dataset.caption accesses data-set html attribute 
        if (caption.dataset.caption.toLowerCase().includes(searchValue)) {
            caption.style.display = 'block';
        } else {
            caption.style.display = 'none';
        }
    })
});

// Random value for CSS fade in
const thumbnails = document.querySelectorAll('.thumbnail');
// Loop through all the .thumbnail (s) and add CSS to each individual thumbnail (aka iniNail)
thumbnails.forEach(indiNail => {
    let randomAniDelay = Math.floor(Math.random() * 50)
    indiNail.style.animation = `fadeIn 1s .${randomAniDelay}s ease forwards`;
});