document.querySelector('button').addEventListener('click', nameAndNation)

function nameAndNation(){
    let name = document.querySelector('input').value
    let nameURL = `https://api.nationalize.io?name=${name}`

    fetch(nameURL)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)

      if(data.country.length < 1 ){
        document.querySelector('.flagOne').innerText = 'Data not available'
      }
      
      const countryOne = document.createElement('span') 
      const countryTwo = document.createElement('span') 
      const countryThree = document.createElement('span') 
      
      countryOne.innerText = data.country[0].country_id
      countryTwo.innerText = data.country[1].country_id
      countryThree.innerText = data.country[2].country_id
      console.log( data.country[0].country_id)

      
      let flagURLOne= `https://countryflagsapi.com/png/${data.country[0].country_id}`
      let flagURLTwo= `https://countryflagsapi.com/png/${data.country[1].country_id}`
      let flagURLThree= `https://countryflagsapi.com/png/${data.country[2].country_id}`
      
      flagPicOne = document.createElement('img') 
      flagPicTwo = document.createElement('img') 
      flagPicThree = document.createElement('img') 
      
      flagPicOne.src = flagURLOne
      flagPicTwo.src = flagURLTwo
      flagPicThree.src = flagURLThree
      
      
      
      document.querySelector('.flagOne').appendChild(flagPicOne)
      document.querySelector('.flagOne').appendChild(countryOne)
      document.querySelector('.flagTwo').appendChild(flagPicTwo)
      document.querySelector('.flagTwo').appendChild(countryTwo)
      document.querySelector('.flagThree').appendChild(flagPicThree)
      document.querySelector('.flagThree').appendChild(countryThree)
  
      
     })

    .catch(err => {
        console.log(`error ${err}`)
    });
}

// COLLEGE
// document.querySelector('button').addEventListener('click', collegeNameAndLocation)
// let collegeName = document.getElementById('input')

// function collegeNameAndLocation() {
//   collegeName = collegeName.value
//   let collegeURL = `https://api.data.gov/ed/collegescorecard/v1/schools?per_page=1&school.name=${collegeName}&api_key=1oObTHNsUMaRhWypmuFYheAQRXtDDZ3AtAduNkSd`


//   fetch(collegeURL)
//     // console.log(collegeName)
//     .then((res) => res.json()) // parse response as JSON
//     .then((data) => {
//       console.log(data.results[0].latest.school.name)
//       document.querySelector('.name').innerText = data.results[0].latest.school.name
//       document.querySelector('.city').innerText = data.results[0].latest.school.city
//       document.querySelector('.state').innerText = data.results[0].latest.school.state
//       document.querySelector('zip').innerText = data.results[0].latest.school.zip
//       document.querySelector('.schoolURL').innerText = data.results[0].latest.school.school_url

//       let location = data.results[0].latest.school.city
      
//       const url = `https://api.teleport.org/api/urban_areas/slug:${location.toLowerCase()}/scores/`

//       https://api.data.gov/ed/collegescorecard/v1/schools.json?school.degrees_awarded.predominant=2,3&fields=id,school.name,2013.student.size
      
//       getScore(url)
//     })
// }

// function getScore(url) {
//       fetch(url)
//         .then(res => res.json()) // parse response as JSON
//         .then(data => {
//           console.log(data)
//         })
//         .catch(err => {
//           console.log(`error ${err}`)
//         })
//     // })
//     .catch(err => {
//       console.log(`error ${err}`)
//     });
//   // })
//   }
