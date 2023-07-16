const getTimes = (city) => {
  // axios
  //   .get(
  //     "http://api.aladhan.com/v1/timingsByCity?city=+" +
  //       city +
  //       "&country=JO"
  //   )

  // , {
  //   headers: {
  //     "x-apikey": "API_KEY",
  //   },
  //   responseType: "json",
  // })

  axios
    .get("https://api.aladhan.com/v1/timingsByCity", {
      params: {
        city: city,
        country: "JO",
      },
    })
    .then((response) => {
      const weekday = response.data.data.date.hijri.weekday.ar;
      const readable = response.data.data.date.readable;
      // let date = response.data.data.date.gregorian.date;
      let date = weekday + " " + readable;
      console.log("================");
      console.log(response.data.data.timings);
      console.log("================");
      let test = ``;
      let data = response.data.data.timings;
      let asr = parseInt(response.data.data.timings.Asr) - 12;
      console.log(asr);
      /**
       *
       * response.data.data.timings.Fajr
       * response.data.data.timings.Sunrise
       * ${response.data.data.timings.Dhuhr}
       * response.data.data.timings.Asr
       * response.data.data.timings.Isha
       * response.data.data.timings.Imsak
       *
       *
       */
      test = `
          <div class="card">
            <div class="header">فجر</div>
            <div class="body">${response.data.data.timings.Fajr}</div>
          </div>
          <div class="card">
            <div class="header">الشروق</div>
            <div class="body">${response.data.data.timings.Sunrise}</div>
          </div>
          <div class="card">
            <div class="header">الظهر</div>
            <div class="body">${response.data.data.timings.Dhuhr}</div>
          </div>
          <div class="card">
            <div class="header">العصر</div>
            <div class="body">${response.data.data.timings.Asr}</div>
          </div>
          <div class="card">
            <div class="header">المغرب</div>
            <div class="body">${response.data.data.timings.Maghrib}</div>
          </div>
          <div class="card">
            <div class="header">العشاء</div>
            <div class="body">${response.data.data.timings.Isha}</div>
          </div>
          <div class="card">
            <div class="header">الإمساك</div>
            <div class="body">${response.data.data.timings.Imsak}</div>
          </div>
      `;

      document.querySelector("#times").innerHTML = "";
      document.querySelector("#times").innerHTML += test;
      document.querySelector("#date").innerHTML = date;
      document.querySelector("#city-name").innerHTML = city;
      console.log(date);
    })
    .catch((err) => {
      console.log(err);
    });
};

// document.getElementById("city").addEventListener("change", () => {
//   console.log(this.value);
//   fillList();
// });

let fillList = () => {
  let listCity = document.getElementById("city");
  let listCityValue = listCity.value;
  console.log(listCityValue);
  getTimes(listCityValue);
};

getTimes("Amman");
// fillList();

new Date().getDay();
