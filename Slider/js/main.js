  const slider = {
    elements:{
        btnRight:null,
        btnLeft:null,
        sliderWrapperItems:null,
        sliderWrapper:null,
        Item:null,
        Items:null,
        widthItem:null,
        marginItem:null,
        valueItems:null,
        btnEnter:null
    }, 
    value:{
        enterItems:null, // сколько нужно отоброжать элементов
        translateX:0,
        widthAllItems:null,
        localItem: 'quantityItems'
    },
    init(){
        this.elements.btnLeft = document.querySelector('.btn__left');
        this.elements.btnRight = document.querySelector('.btn__right');
        this.elements.sliderWrapperItems = document.querySelector('.slider__wrapper-items');
        this.elements.sliderWrapper = document.querySelector('.slider__wrapper');
        this.elements.Item = document.querySelector('.slider__item'); //один элимент
        this.elements.Items = document.querySelectorAll('.slider__item'); // все элементы
        this.elements.valueItems = document.querySelector('.input__number');
        this.elements.btnEnter = document.querySelector('.btn__enter');      
        this.elements.widthItem = parseFloat(getComputedStyle(this.elements.Item).width) // получаем длинну одного элемента
        this.elements.marginItem = parseFloat(getComputedStyle(this.elements.Item).marginLeft) // получаем отступ одного элемента
        this.getLocalItem();
        this.getLength();
        this.itemsValue();
        this.goSlider();
    },
    getLocalItem(){
        if (Number(localStorage.getItem(this.value.localItem))=== 0){
            this.value.enterItems = 3;
        } else{
        this.value.enterItems = Number(localStorage.getItem(this.value.localItem));            
        }
        localStorage.removeItem(this.value.localItem);
    },
    getLength(){
        this.elements.sliderWrapper.style.width = ((this.value.enterItems * this.elements.widthItem) + (this.value.enterItems * this.elements.marginItem) + this.elements.marginItem) +'px'; // устанавливает ширину для показываемых элементов
        this.value.widthAllItems = (this.elements.widthItem + this.elements.marginItem) * this.elements.Items.length //получаем длинну всех элементов вместе с отступом слева!
    },
    itemsValue(){
        this.elements.btnEnter.addEventListener('click', ()=>{
            if(this.elements.valueItems.value === '1' || this.elements.valueItems.value === '2' || this.elements.valueItems.value === '3' || this.elements.valueItems.value === '4' ){
            localStorage.setItem(this.value.localItem, this.elements.valueItems.value) 
            window.location.reload();                           
            } else {
                alert('Invalid value entered')
            }
     })
    },
    goSlider(){
        this.elements.btnRight.addEventListener('click', ()=>{
            if( this.value.translateX === -1 *(this.value.widthAllItems - ((this.elements.widthItem + this.elements.marginItem) * (this.value.enterItems)))){
                this.value.translateX = this.elements.widthItem + this.elements.marginItem;
            }
            this.value.translateX -= (this.elements.widthItem + this.elements.marginItem)
            this.elements.sliderWrapperItems.style.transform = 'translateX('+ this.value.translateX +'px)'
        })
        this.elements.btnLeft.addEventListener('click', ()=>{
            if(this.value.translateX === 0){
                this.value.translateX =  -1 * (this.value.widthAllItems - ((this.elements.widthItem + this.elements.marginItem) * (this.value.enterItems - 1)));
            }
            this.value.translateX += (this.elements.widthItem + this.elements.marginItem);
            this.elements.sliderWrapperItems.style.transform = 'translateX('+ this.value.translateX +'px)'
        })
    }
}
slider.init();