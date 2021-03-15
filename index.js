function getVals(){
    const parent = this.parentNode;
    const slides = parent.getElementsByTagName("input");
      const slide1 = parseFloat( slides[0].value );
      const slide2 = parseFloat( slides[1].value );
    if( slide1 > slide2 ){ var tmp = slide2; slide2 = slide1; slide1 = tmp; }
    
    const displayElement = parent.getElementsByClassName("rangeValues")[0];
        displayElement.innerHTML =  slide1 + " - " + slide2 ;
  }

  
  window.onload = function(){
    var sliderSections = document.getElementsByClassName("range-slider");
        for( var x = 0; x < sliderSections.length; x++ ){
          var sliders = sliderSections[x].getElementsByTagName("input");
          for( var y = 0; y < sliders.length; y++ ){
            if( sliders[y].type ==="range" ){
              sliders[y].oninput = getVals;
              sliders[y].oninput();
            }
          }
        }
  }

  function show() {
    console.log("hello");
  }

      document.addEventListener('DOMContentLoaded', () => {
        //   const btn = document.querySelector('#btn');
        //   const gallery = document.querySelector('.gallery');
          const d = sessionStorage.setItem('Cockpit-Token', 'e607a0cf025ec1d0a50d1f148d4bce');
        //   const e = sessionStorage.setItem("Cockpit-Token": "e607a0cf025ec1d0a50d1f148d4bce");
          
        // btn.addEventListener('click', sendReq);
        // gallery.addEventListener

        // const male = document.querySelector("#xxx");
        // male.addEventListener("click", () =>{
            
        //     console.log(data.entries.sex);
        //     // data.entries.filter(d => d.sex == "piesek");
    
        // }
        // );


      } )

  let sendReq = (event) => {
    let url = 'http://getcockpit.pmedia-test.pl/rekrutacja/api/collections/get/pieski';

    // let header = new Headers();


    let req = new Request(url, {
        method: 'GET',
        headers: {'Cockpit-Token': 'e607a0cf025ec1d0a50d1f148d4bce'},
        mode: 'cors'
    });
    fetch(req)
    .then(resp => {
        if(!resp.ok){
            throw Error('Wrong HTTP status');
        }
        return resp.json();})
    .then(data => {
        // console.log(data.entries);
        const male = document.querySelector("#xxx");

        // let arr = [];
        // const filterData = data.entries.map(function (el) {

        //     male.addEventListener('click', () => {
            
        //     if(el.sex == "piesek"){
        //       arr.push(el);

        //       console.log("111222", el);
        //       return el;
        //     }
        //   } );
        //     // console.log("array", arr);
        //     return el;
        //   });

        // console.log(male.attributes )
        // data.entries = filterData;


     

        const html = data.entries.map( dog => {
            
            // if(dog.sex == "piesek")
             return ( 
             `
             <div class="dog-box">
             <img class="dog-image" src="http://getcockpit.pmedia-test.pl${dog.image.path}" alt="">
             <ul>
                <li><p>${dog.name}, ${dog.age}</p></li>
                <li><p>${dog.stars} <img class="dog-star" src="images/star.svg" alt=""><p/></li>
             </ul>
             <p>${dog.description}</p>
             </div>
             `
             )
        }).join('');
        
        const box = document.querySelector("#box").insertAdjacentHTML("afterbegin", html);
        
    })
    .catch(err => {
        console.log("err",err.message);
    })
  }
  sendReq();


  const maleFilter = () =>{
    const male = document.querySelector("#xxx");
    male.addEventListener("click", () =>{
        
        data.entries.filter(d => d.sex = "piesek");

    });
  }