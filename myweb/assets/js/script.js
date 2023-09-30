const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('ul li a').forEach(link =>{
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})



let list =  document.querySelectorAll('.list-services');
let itemBox = document.querySelectorAll('.itemBox');

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click',function(){
        for(let j = 0; j < list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k<itemBox.length; k++){
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');

            if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            }
        }
    })
    
}

let listcontent =  document.querySelectorAll('.list-content');
let itemContent = document.querySelectorAll('.itemContent');

for (let i = 0; i < listcontent.length; i++) {
    listcontent[i].addEventListener('click', function() {
        // Hapus class 'active' dari semua elemen dengan class 'list-content'
        for (let j = 0; j < listcontent.length; j++) {
            listcontent[j].classList.remove('active');
        }
        // Tambahkan class 'active' ke elemen yang diklik
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for (let k = 0; k < itemContent.length; k++) {
            // Sembunyikan semua elemen '.itemContent' kecuali yang sesuai dengan data-filter yang terkait
            if (itemContent[k].getAttribute('data-item') == dataFilter) {
                itemContent[k].classList.remove('hide');
                itemContent[k].classList.add('active');
            } else {
                itemContent[k].classList.add('hide');
                itemContent[k].classList.remove('active');
            }
        }
    });
}

// Atur elemen pertama dengan class 'list-content' sebagai aktif secara default
listcontent[0].click(); // Ini akan mensimulasikan klik pada elemen pertama


