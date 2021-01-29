const slider = {
    elements: {
        btnRight: null,
        btnLeft: null,
        item: null,
        items: null,
        widthItem: null,
        sliderWrapper: null,
        sliderWrapperItems: null,
        widthValue: null,
        quantity: null,
        btnInput: null
    },
    value: {
        enterItems: null,
        nextItem: null,
        newItems: [],
        pixel: null,
        positionLeftItem: 0,
        localItem: 'quantityItems',
        localWidth: 'widthValue',
        currentElement: null,
        currentWidth: null
    },
    init() {
        this.value.enterItems = Number(localStorage.getItem(this.value.localItem))
        this.elements.items = document.querySelectorAll('.slider__item')
        this.elements.items.forEach((item, index) => {
            item.style.flexBasis = Number(localStorage.getItem(this.value.localWidth)) + 'px'
            this.value.newItems.push({ item: item, position: index, transform: 0 })
        })
        this.elements.btnLeft = document.querySelector('.btn__left')
        this.elements.btnRight = document.querySelector('.btn__right')
        this.elements.item = document.querySelector('.slider__item')
        this.elements.sliderWrapper = document.querySelector('.slider__wrapper')
        this.elements.sliderWrapperItems = document.querySelector('.slider__wrapper-items')
        this.elements.btnInput = document.querySelector('.input__btn');
        this.elements.widthItem = parseFloat(getComputedStyle(this.elements.item).width) // получаем длинну одного элемента
        this.value.currentElement = document.querySelector('.span__quantity')
        this.value.currentWidth = document.querySelector('.span__width')
        this.elements.sliderWrapper.style.width = ((this.value.enterItems * this.elements.widthItem) + 'px');
        this.currentItems()
        this.getElements();
        this.goSlider();
        console.log(this.elements.widthItem)
    },

    currentItems(){

        if(this.elements.widthItem === 35){
            this.value.currentWidth.innerHTML = 'Current width: 0px'
        } else {
        this.value.currentWidth.innerHTML = 'Current width: ' + this.elements.widthItem + 'px'    
        } 
        this.value.currentElement.innerHTML = 'Current elements: ' + this.value.enterItems
        localStorage.removeItem(this.value.localItem)
        localStorage.removeItem(this.value.localWidth)
    },

    getElements() {
        this.elements.btnInput.addEventListener('click', () => {
            this.elements.widthValue = document.querySelector('.input__width');
            this.elements.quantity = document.querySelector('.input__quantity');
            if (Number(this.elements.widthValue.value) >= 35 && Number(this.elements.widthValue.value) <= 600 && Number(this.elements.quantity.value) > 0 && Number(this.elements.quantity.value) <= 5) {
                localStorage.setItem(this.value.localItem, this.elements.quantity.value)
                localStorage.setItem(this.value.localWidth, this.elements.widthValue.value)
                window.location.reload();
            } else {
                alert('The values ​​are blank or incorrect')
            }
        })
    },
    getItemMin() {
        let indexItem = 0;
        this.value.newItems.forEach((item, index) => {
            if (item.position < this.value.newItems[indexItem].position) {
                indexItem = index
            }
        })
        return indexItem
    },
    getItemMax() {
        let indexItem = 0;
        this.value.newItems.forEach((item, index) => {
            if (item.position > this.value.newItems[indexItem].position) {
                indexItem = index
            }
        })
        return indexItem
    },
    getMax() {
        return this.value.newItems[this.getItemMax()].position;
    },
    getMin() {
        return this.value.newItems[this.getItemMin()].position;
    },
    goSlider() {
        this.elements.btnLeft.addEventListener('click', () => {
            this.value.positionLeftItem++;
            if ((this.value.positionLeftItem + this.value.enterItems - 1) > this.getMax()) {
                this.value.nextItem = this.getItemMin();
                this.value.newItems[this.value.nextItem].position = this.getMax() + 1;
                this.value.newItems[this.value.nextItem].transform += this.value.newItems.length * 100;
                this.value.newItems[this.value.nextItem].item.style.transform = 'translateX(' + this.value.newItems[this.value.nextItem].transform + '%)';
            }
            this.value.pixel -= (100 / this.value.enterItems)
            this.elements.sliderWrapperItems.style.transform = 'translateX(' + this.value.pixel + '%)'
        })
        this.elements.btnRight.addEventListener('click', () => {
            this.value.positionLeftItem--;
            if (this.value.positionLeftItem < this.getMin()) {
                this.value.nextItem = this.getItemMax();
                this.value.newItems[this.value.nextItem].position = this.getMin() - 1;
                this.value.newItems[this.value.nextItem].transform -= this.value.newItems.length * 100;
                this.value.newItems[this.value.nextItem].item.style.transform = 'translateX(' + this.value.newItems[this.value.nextItem].transform + '%)';
            }
            this.value.pixel += (100 / this.value.enterItems)
            this.elements.sliderWrapperItems.style.transform = 'translateX(' + this.value.pixel + '%)'
        })
    }
}
slider.init();