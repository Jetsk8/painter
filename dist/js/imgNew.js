const paintings = [
    'img/new/2022 г. 40х40 х.м. Букет мимозы.jpg',
    'img/new/2022 г. 35х45 х.м. Осень на Бадукских озёрах.jpg',
    'img/new/2022 г. 37х45 х.м. А за окном февраль.jpg',
    'img/new/2022 г. 40х30 х.м. Улочки Сан-Марино.jpg',
    'img/new/2022 г. 35х45 х.м. Айва моего сада.jpg',
    'img/new/2022 г. 40х50 х.м. Полевые ромашки.jpg',
];

const gallery = document.querySelector('.home__new-paintings__pics'); 

paintings.forEach((src, index) => {
    const div = document.createElement('div');
    div.id = index + 1;
    div.classList.add('img-wrapper');
    gallery.appendChild(div); 
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('new-image');
    document.getElementById(div.id).appendChild(img);

    const smallDiv = document.createElement('div');
    smallDiv.id = 1001 + index; 
    smallDiv.classList.add('img-caption');
    document.getElementById(div.id).appendChild(smallDiv);
    
    const para = document.createElement('p');
    para.innerText = src.substr(0, (src.length - 4)).slice(27); 
    document.getElementById(smallDiv.id).appendChild(para);
    
    const para2 = document.createElement('p');
    para2.innerText = src.slice(8, 26);  
    document.getElementById(smallDiv.id).appendChild(para2);
}); 