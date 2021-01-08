$(function(){
$('.action__slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="arrows-right">',
    nextArrow: '<img class="slider-arrows slider-arrows__right "src="img/arrows-right.svg" alt="arrows-right">',
    responsive: [
      {
        breakpoint: 1551,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1151,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 781,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
$('.plumbing__slider').slick({
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="arrows-right">',
    nextArrow: '<img class="slider-arrows slider-arrows__right "src="img/arrows-right.svg" alt="arrows-right">',
    responsive: [
      {
        breakpoint: 1551,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1151,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 781,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.autumn__slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="arrows-right">',
    nextArrow: '<img class="slider-arrows slider-arrows__right "src="img/arrows-right.svg" alt="arrows-right">',
    responsive: [
      {
        breakpoint: 1551,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1151,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 781,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.acquisition__slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="arrows-right">',
    nextArrow: '<img class="slider-arrows slider-arrows__right "src="img/arrows-right.svg" alt="arrows-right">',
    responsive: [
      {
        breakpoint: 1551,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1151,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 781,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(document).ready(function(){
    $('.input__phone').inputmask({"mask": "+375 (99) 999-99-99"})
  })
});
new WOW().init();
const burgerMenu = {
	elements:{
		row:null,
		btnMenu:null,
    header:null,
    body:null
	},
	init(){
	this.elements.row = document.querySelectorAll('.row');
	this.elements.btnMenu = document.querySelector('.burger__menu');
  this.elements.header = document.querySelector('.header__contact');
  this.elements.body = document.querySelector('.body');

	this.elements.btnMenu.addEventListener('click', ()=>{
  this.elements.body.classList.toggle('hidden');
	this.elements.header.classList.toggle('active');
	this.elements.row.forEach(elem =>{
	elem.classList.toggle('row'+ elem.dataset.row)
			});
		})
	}
}
burgerMenu.init();

const aboutCall = {
  elements:{
    wrapper:null,
    about:null,
    btnClose:null,
    btnCall:null,
    btnItem:null,
    tel:null,
    btnAboutCall:null,
    errorNumber:true,
    div:null
  },
  init(){
    this.elements.wrapper = document.querySelector('.about__call-wrapper');
    this.elements.btnClose = document.querySelector('.close__call');
    this.elements.btnCall = document.querySelector('.header__contact-call');
    this.elements.about = document.querySelector('.about__call');
    this.elements.btnItem = document.querySelectorAll('.causes__img-item');
    this.elements.btnAboutCall =document.querySelector('.call__btn');
    this.pushBtn();
    this.errorValue();
  },
  pushBtn(){
    this.elements.btnCall.addEventListener('click', ()=>{
      this.elements.wrapper.classList.add('active__call');
      this.elements.about.classList.add('active__call');
      let div = document.createElement('div');
      div.className = 'error_tel disable';
      div.innerHTML = 'Номер телефона некорректный';
      if(this.elements.errorNumber){
          this.elements.about.append(div); 
          this.elements.errorNumber = false;
      };
      this.elements.div = document.querySelector('.error_tel')
    })
    this.elements.wrapper.addEventListener('click', ()=>{
      this.elements.wrapper.classList.remove('active__call');
      this.elements.about.classList.remove('active__call');
      this.elements.tel.value = '';
      this.elements.div.classList.add('disable');
    })
    this.elements.btnClose.addEventListener('click', ()=>{
      this.elements.wrapper.classList.remove('active__call');
      this.elements.about.classList.remove('active__call');
      this.elements.tel.value = '';
      this.elements.div.classList.add('disable');
    })
    this.elements.btnItem.forEach(elem =>{
      elem.addEventListener('click', ()=>{
        this.elements.wrapper.classList.add('active__call');
        this.elements.about.classList.add('active__call');
      })
    })
  },
  errorValue(){
    this.elements.btnAboutCall.addEventListener('click', ()=>{
      this.elements.tel = document.querySelector('.input__phone');
      if (String(this.elements.tel.value.replace(/_/g,"").replace(/ /g,"").replace(/-/g,"").replace('(',"").replace(")","")).length<13){      
        this.elements.div.classList.remove('disable');
      } else{
        this.elements.div.classList.add('disable')
      }
    })
  }
}
aboutCall.init();