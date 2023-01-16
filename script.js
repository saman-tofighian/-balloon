let x,y
    document.getElementsByTagName('body')[0].addEventListener('mousemove', (event)=>{
        x = event.clientX
        y = event.clientY
        let r = Math.floor(Math.random()*256)
        let g = Math.floor(Math.random()*256)
        let b = Math.floor(Math.random()*256)
        let _span = document.createElement('span')
        let _num = Math.floor((Math.random()*100)+60)
        let _op = Math.random()
        _span.style.width = _num + 'px'
        _span.style.height = _num + 'px'
        _span.style.top = y + 'px'
        _span.style.left = x + 'px'
        _span.style.opacity = _op

        _span.style.background = 'rgb('+r+', '+g+', '+b+')'
        _span.style.animationName = 'span'

        let _body = document.getElementsByTagName('body')[0]
        _body.appendChild(_span)

        let _strong = document.createElement('strong')
        _strong.innerHTML = 'saman'

        _span.appendChild(_strong)
    })