const main=  document.querySelector('#main')
const qrimage = document.querySelector('#qrimg')
const text = document.querySelector('#text')
const btn = document.querySelector('.btn')

btn.addEventListener('click',()=>{
    if (text.value.length > 0) {
        let qrvalue= text.value
        qrimage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`;
      main.classList.add('show-img')  
    }else{
        text.classList.add('error')
        setTimeout(()=>{
            text.classList.remove('error')

        },1000)
    }
})