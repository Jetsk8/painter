const paintings = [
    'img/gal/2018 г. 40х50 х.м. Вечер в Симеизе.jpg',
    'img/gal/2019 г. 40х40 акв. Гангстеры.jpg',
    'img/gal/2019 г. 40х40 акв. Елагин пруд. Вечер.jpg',
    'img/gal/2022 г. 20х40 х.м. Байкал.jpg',
    'img/gal/2022 г. 30х40 х.м. Вечер в Архызе.jpg',
    'img/gal/2022 г. 37х45 х.м. А за окном февраль.jpg',
    'img/gal/2022 г. 40х40 х.м. Айва моего сада.jpg',
    'img/gal/2022 г. 40х40 х.м. Алые маки.jpg',
    'img/gal/2022 г. 40х40 х.м. Байкальские русалки.jpg',
    'img/gal/2022 г. 40х40 х.м. Башня Честа. Сан-Марино.jpg',
    'img/gal/2022 г. 40х40 х.м. Бизонище.jpg',
    'img/gal/2022 г. 40х40 х.м. Бизоны идут.jpg',
    'img/gal/2022 г. 40х40 х.м. Букет мимозы.jpg',
    'img/gal/2022 г. 40х40 х.м. Букет осенних цветов.jpg',
    'img/gal/2022 г. 40х40 х.м. Букет под солнцем.jpg',
    'img/gal/2022 г. 40х40 х.м. Букет тюльпанов.jpg',
    'img/gal/2022 г. 40х40 х.м. В дыму пожаров.jpg',
    'img/gal/2022 г. 40х40 х.м. Весеннее утро.jpg',
    'img/gal/2022 г. 40х40 х.м. Весенний букет.jpg',
    'img/gal/2022 г. 40х40 х.м. Весенний, теплый вечер.jpg',
    'img/gal/2022 г. 40х40 х.м. Вид на озеро с горы.jpg',
    'img/gal/2022 г. 40х40 х.м. Готовые цветы.jpg',
    'img/gal/2022 г. 40х40 х.м. Да. просто берег.jpg',
    'img/gal/2022 г. 40х40 х.м. Два бизона.jpg',
    'img/gal/2022 г. 40х40 х.м. Долинка.jpg',
    'img/gal/2022 г. 40х40 х.м. Еще лодки.jpg',
    'img/gal/2022 г. 40х40 х.м. Озерцо.jpg',
    'img/gal/2022 г. 40х40 х.м. Ущельице.jpg',
    'img/gal/2022 г. 60х50 х.м. Вершина Домбай-Ульген.jpg',
    'img/gal/2022 г. 60х50 х.м. Вечерний пик Игу.jpg',
];

const gallery = document.querySelector('.gallery__paintings__pics'); 

paintings.forEach((src, index) => {
    const div = document.createElement('div');
    div.id = index + 1 + 50;
    div.classList.add('img-wrapper');
    gallery.appendChild(div); 
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('new-image');
    document.getElementById(div.id).appendChild(img);

    const smallDiv = document.createElement('div');
    smallDiv.id = 1001 + index + 50; 
    smallDiv.classList.add('img-caption');
    document.getElementById(div.id).appendChild(smallDiv);
    
    const para = document.createElement('p');
    para.innerText = src.substr(0, (src.length - 4)).slice(27); 
    document.getElementById(smallDiv.id).appendChild(para);
    
    const para2 = document.createElement('p');
    para2.innerText = src.slice(8, 26);  
    document.getElementById(smallDiv.id).appendChild(para2);
}); 