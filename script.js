
window.addEventListener('scroll', function() {
    let posicaoScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    const header =  document.querySelector("header")
    if (posicaoScroll === 0) {
      header.style.background = '#000000'
    } else {
      header.style.background = '#000000a1'
    }
  })