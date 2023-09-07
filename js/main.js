"user strict"
let app = {
    headerSmooth(element, classHidden){
        const headerElement = element
        let height1 = 0
        let height2 = 0
        function addHidden(){
            headerElement.classList.add(`${classHidden}`)
        }
        function removeHidden(){
            headerElement.classList.remove(`${classHidden}`)
        }
        window.addEventListener('scroll', function (e) {
            // console.log(window.pageYOffset)
            height2 = window.pageYOffset
            if(height2 >= height1){
                height1 = height2
                addHidden()
            } else {
                removeHidden()
                height1 = height2
            }
        })
    },
    showSmooth(listElement, classShow){
        function toggleAnimationElement(element) {
            var rect = element.getClientRects()[0]
            var heightScreen = window.innerHeight || document.documentElement.clientHeight
        
            //check xem element có trong màn hình k 
            if(!(rect.bottom < 0 || rect.top > heightScreen)) {
                element.classList.add(`${classShow}`)
            }
            else {
                element.classList.remove(`${classShow}`)
                }
        }
    
        function checkAnimation() {
            listElement.forEach((itemElement) => {
                toggleAnimationElement(itemElement)
            })
        }
        window.onscroll = checkAnimation
    },
    runNumber(element, number, speed = 200){
        let from = 0
        let step = number / speed
        const counter = setInterval(function () {
            from += step
            if (from > number) {
                clearInterval(counter)
                element.innerText = number + '+'
            } else {
                element.innerText = Math.ceil(from) + '+'
            }
        }, 1)
    },
    checkRunNumber(){
        const inforText1 = document.querySelector('.infor-text--1 strong')
        const inforText2 = document.querySelector('.infor-text--2 strong')
        const inforText3 = document.querySelector('.infor-text--3 strong')
        inforText1.addEventListener('click', () => {
            this.runNumber(document.querySelector('.infor-text--1 strong'), 1409, 500)
        })
        inforText2.addEventListener('click', () => {
            this.runNumber(document.querySelector('.infor-text--2 strong'), 30, 400)
        })
        inforText3.addEventListener('click', () => {
            this.runNumber(document.querySelector('.infor-text--3 strong'), 50, 300)
        })
    },
    sliderShow(){
        const prevElement = document.querySelector('.prev__box')
        const nextElement = document.querySelector('.next__box')
        const boxTestimonials = document.querySelectorAll('.box__testimonials')
        const dots = document.querySelectorAll('.dot-item')
        let index = 0
        let width = 0
        function active(){
            for(let i = 0; i < boxTestimonials.length; i++) {
                boxTestimonials[i].classList.remove('active')
            }
            boxTestimonials[index].classList.add('active')
        }
        function dotActive(){
            for(let i = 0; i < dots.length; i++){
                dots[i].classList.remove('active')
            }
            dots[index].classList.add('active')
        }
        function toRight(){
            if(index < boxTestimonials.length - 1){
                index = index + 1
                prevElement.classList.remove('end')
                if(index == boxTestimonials.length - 1){
                    nextElement.classList.add('end')
                }
                width = width - 100
                console.log(index)
                for(let i = 0; i < boxTestimonials.length; i++) {
                    boxTestimonials[i].style.transform = `translateX(${width}%)`
                }
                active()
                dotActive()
            }
            
        }
        function toLeft(){
            if(index > 0){
                index = index -1
                nextElement.classList.remove('end')
                if(index == 0){
                    prevElement.classList.add('end')
                }
                width = width + 100
                console.log(index)
                for(let i = 0; i < boxTestimonials.length; i++) {
                    boxTestimonials[i].style.transform = `translateX(${width}%)`
                }
                active()
                dotActive()
            }
            
        }
        prevElement.onclick = () => {
            console.log("sang trai")
            toLeft()
        }
        nextElement.onclick = function() {
            console.log("sang phai")
            toRight()
        }
    },
    hiddenOnTop(){
        const onTopElement = document.querySelector('.on__top')
        setInterval(function() {
            if(window.pageYOffset > 10){
                onTopElement.classList.remove('hidden')
            } else {
                onTopElement.classList.add('hidden')
            }
        })
    },
    run(){
        this.headerSmooth(document.querySelector('.header'), 'hidden')
        this.showSmooth(document.querySelectorAll('.box_show'), 'show')
        this.runNumber(document.querySelector('.infor-text--1 strong'), 1409, 500)
        this.runNumber(document.querySelector('.infor-text--2 strong'), 30, 400)
        this.runNumber(document.querySelector('.infor-text--3 strong'), 50, 300)
        this.checkRunNumber()
        this.sliderShow()
        this.hiddenOnTop()
    }
}
app.run()