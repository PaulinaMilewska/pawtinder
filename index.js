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

  // function show() {
  //   console.log("hello");
  // }

      document.addEventListener('DOMContentLoaded', () => {
          const d = sessionStorage.setItem('Cockpit-Token', 'e607a0cf025ec1d0a50d1f148d4bce');
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
     
        const html = data.entries.map( dog => {



             return ( 
             `
              <div class="dog-box ${dog.sex} age${dog.age} star${dog.stars}">
                <img class="dog-image" src="http://getcockpit.pmedia-test.pl${dog.image.path}" alt="">
                <div class="dog-box__content">
                  <ul>
                    <li class="dog-box__name"><p>${dog.name}, ${dog.age}</p></li>
                    <li><p class="dog-box__star">${dog.stars} <img class="dog-star" src="images/star.svg" alt=""><p/></li>
                  </ul>
                <p class="description">${dog.description}</p>
                </div>
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


        const tabs = document.querySelectorAll(".search__male ul li");
        const males = document.querySelectorAll(".piesek");
        const females = document.querySelectorAll(".suczka");
        const all = document.querySelectorAll(".box");


          tabs.forEach( (tab)=>{
            tab.addEventListener("click", () =>{
              tabs.forEach((tab) =>{
                tab.classList.remove("active");
              } ) 
              tab.classList.add("active");

              const value = tab.getAttribute("data-sex");
              console.log(value);

                  all.forEach((dog) => {
                    console.log(dog);
                    dog.style.display = "none";
                  })

                if(value == "piesek"){
                  // console.log(value)
                  males.forEach((male) => {
                    console.log("!!!!", male)
                    male.style.display = "grid";
                  })
                } else if( value == "grid"){
                  // console.log(value)
                  females.forEach((female) => {
                    console.log("----", female)
                    female.style.display = "grid";
                  })
                } 
                else {
                  all.forEach((dog) => {
                    dog.style.display = "grid";
                  })
                }
            } )
          })

