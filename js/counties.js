const loadCounties = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCounties(data));
};
const displayCounties = (countries) => {
  // console.log(countries)
  const divContainer = document.getElementById("all-counties");

  countries.forEach((country) => {
    console.log(country);
    const div = document.createElement("div");
    div.classList.add("country");
    div.innerHTML = `  
    <h2>Country: ${country.name.common}</h2>
    <h4>Capital:${country.capital ? country.capital[0] : "No Capital"} </h4>
    <button onclick="loadCountiesBtn('${country.cca2}')" type="">Clicked</button>
    `;
    divContainer.appendChild(div);
  });
};
const loadCountiesBtn=(code)=>{
    const url=`https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data=>showCountryDetail(data[0]))
    // const h2=document.getElementById('countryName')
    // h2.innerText=`${code}`
// console.log(`clicked ${code}`)

}

const showCountryDetail=country=>{
    const detailsContainer=document.getElementById('countryDetails');
    detailsContainer.innerHTML=`
    <h2>Nama: ${country.name.common}</h2>
    <img src="${country.flags.png}" alt="">
<h4>Map: ${country.maps.googleMaps}</h4>
    <h4>Region: ${country.region}</h4>
    <h4>Population : ${country.population}</h4>
    <h4>Independent : ${country.independent}</h4>
    <h4>Timezones : ${country.timezones[0]}</h4>
    `
}
loadCounties();
