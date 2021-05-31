const input = document.querySelector('.search-movie')
const discontent = document.querySelector('.discover-content')
const scontainer = document.querySelector('.search-container')
const hcontent = document.querySelector('.header-content')



let fetch_result


const main = async () => {


//input.addEventListener('search', (e) => { return console.log(e.target.value)} )
input.addEventListener('input', async (e) => {
    
     
const search_response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c969f74f81d74b8f32f57cdb33b7e971&query=${e.target.value}`)

const adata = await search_response.json()
  
//console.log(data)

 //return JSON.parse(data)


 search_fetch_result= await adata
             

   const reset = () => aelement = null


   let aelement = []

   for(i=0;i<10;i++){
      aelement[i] = search_fetch_result.results[i]
   }





scontainer.innerHTML= (() => { return aelement.map(ata => {
   return `
   <div class="s-movie-container">
      <div class="s-movie-container-picture">
             <img class="s-movie-img" src="https://image.tmdb.org/t/p/original/${ata.poster_path}">
            
      </div>    
            <div class="s-movie-container-content" >
                <div class='stitle'><span>Movie Title:</span><br><br>${ata.original_title}</div>
                <div class="soverview"><span>Storyline:</span><br><br>${ata.overview}</div>
                <div class="sdate"><span>Release Date:</span><br><br>${ata.release_date}</div>
               <div class="svote"><span>Viewers Vote:</span><br><br>${ata.vote_average}</div>
             </div>
   </div>`
})})()


scontainer.style.display = "inline"
scontainer.style.backgroundColor = "#ace7a4"
  



})


if(input.value){console.log('asdas')}

input.addEventListener('mouseenter', () => {if(input.value){scontainer.style.display = "inline"}})
input.addEventListener('focus', () => {if(input.value){scontainer.style.display = "inline"}})
scontainer.addEventListener('mouseleave', () => {scontainer.style.display = "none";input.value = "" })




const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c969f74f81d74b8f32f57cdb33b7e971&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate`)

const data = await response.json()

fetch_result= await data


 

const aresponse = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c969f74f81d74b8f32f57cdb33b7e971&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=2&with_watch_monetization_types=flatrate`)

const adata = await aresponse.json()

afetch_result= await adata


//let combined_result = {...fetch_result.results,...afetch_result.results}
//let combined_result = Object.assign({},fetch_result.results, afetch_result.results);
let combined_result = [...fetch_result.results,...afetch_result.results]
//console.log(combined_result[4])

discontent.innerHTML= (() => { return combined_result.map(at => {
   return `
   <div class="movie-container">
      <div class="movie-container-picture">
             <img class="movie-container-img" src="https://image.tmdb.org/t/p/original/${at.poster_path}">
            <div class="movie-container-content" >
                <div class='title'><span>Movie Title:</span><br><br>${at.original_title}</div>
                <div class="overview"><span>Storyline:</span><br><br>${at.overview}</div>
                <div class="date"><span>Release Date:</span><br><br>${at.release_date}</div>
               <div class="vote"><span>Viewers Vote:</span><br><br>${at.vote_average}</div>
             </div>
      </div>    
    
   </div>`
})})()







/* discontent.insertAdjacentHTML('afterbegin', (() => { return combined_result.map(at => {
   return `<div class="movie-container">
      <div class="movie-container-picture">
         <img src="https://image.tmdb.org/t/p/original/${at.poster_path}">
      </div>    
    <div class="movie-container-content" >
        
        <div class='title'>${at.original_title}</div>

        <div class="overview">${at.overview}</div>

        <div class="date">${at.release_date}</div>

        <div class="vote">${at.vote_average}</div>
    </div></div>`
})})());


 */

const trendresponse = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=c969f74f81d74b8f32f57cdb33b7e971`)

const trenddata = await trendresponse.json()

trendfetch_result= await trenddata

console.log('trendfetch_result is',trendfetch_result.results)

hcontent.innerHTML= (() => {
   
   let i = Math.floor(Math.random()*combined_result.length)
   console.log(i)
   
   return `
   <div class="header-content-container" >

       <div class="header-content-container-all">
              <div class="header-content-container-picture">
                      <img src="https://image.tmdb.org/t/p/original/${combined_result[i].poster_path}">
                  <div class="header-container-content" >

                      <div class='header-content-title'>${combined_result[i].original_title}</div><br>
                      <div class="header-content-overview"><br>${combined_result[i].overview}</div>
                
               
                  </div>
              </div>    
        </div>




      <div class="button-right"><i class="fas fa-angle-right"></i></div>
      <div class="header-content-trend">
         
         
            ${trendfetch_result.results.map(at => {
               return  `

<div class="trend-container">

               <div class="trend-main-container">
                  <img class="trend-img" src="https://image.tmdb.org/t/p/original/${at.poster_path}">                  
              </div>
              
              <div class="trend-main-container-content">
                      <div class='trend-content-title'>${at.original_title}</div>
                      
              </div>
              
      </div>        
              
              `    



            })}


         
      </div>
      
   </div>`


})()









}



document.addEventListener('DOMContentLoaded', main)

