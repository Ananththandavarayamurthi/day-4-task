const xxh = new XMLHttpRequest();

xxh.open("GET","https://restcountries.com/v2/all");
xxh.send();

xxh.responseType = "json";

xxh.onload = function displayresult()  {
    const countries = xxh.response;

// countries flag

    for(let i=0;i<=249;i++){
        
            console.log(`${countries[i].name}
            ${countries[i].flag}`);
    }

//  countries name region subregion population
            for(let i=0;i<=249;i++){
        
                console.log(`${countries[i].name}
                ${countries[i].region}
                ${countries[i].subregion}
                ${countries[i].population}`);
            }}
