// (function (){
//     const buttons=document.querySelectorAll(".counterbtn")
//     let count=0
//     buttons.forEach(function(button){
//         button.addEventListener('click',function(){
//          if(button.classList.contains('prevbtn')){
//             count--
//          }
//        else{
//        (button.classList.contains('nextbtn'))
//         count++
//        }
//      const counter=document.querySelector('#counter')
//      counter.textContent=count
//      if(count<0){
//         counter.style.color='red'
//      }
//      else if(count>0){
//         counter.style.color='green'


    //      }
    //      else{
    //         counter.style.color='#333333'

    //      }
    //         }
    //         )
    //     }

    //     )
    // })()

    (function () {
        const buttons = document.querySelectorAll('.counterbtn')
        let count = 0
        buttons.forEach(function (button) {
            button.addEventListener('click', function () {
                if (button.classList.contains('prevbtn')) {
                    count--
                }
                else {
                    (button.classList.contains('nextbtn'))
                    count++
                }
                const counter = document.querySelector('#counter')
                counter.textContent = count
                if (count < 0) {
                    counter.style.color = 'red'

                }
                else if (count > 0) {
                    counter.style.color = 'green'

                }
                else {
                    counter.style.color = '#333333'

                }
            }
            )
        }

        )
    }

    )
    ()
