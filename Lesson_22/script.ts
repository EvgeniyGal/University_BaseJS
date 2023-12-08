const Elements = {
  form: <HTMLFormElement>document.querySelector(".js-search"),
  addBtn: <HTMLButtonElement>document.querySelector(".js-add"),
  inputContainer: <HTMLDivElement>document.querySelector(".js-form-container"),
  list: <HTMLDataListElement>document.querySelector(".js-list"),
};

Elements.addBtn.addEventListener("click", handlerAddField);

function handlerAddField() {
  Elements.inputContainer.insertAdjacentHTML(
    "beforeend",
    '<input type="text" name="country" />'
  );
}

Elements.form.addEventListener("submit", handlerSubmit);

async function handlerSubmit(ev: Event) {
  ev.preventDefault();

  const countries = getFormData(ev.target as HTMLFormElement);

  try {
    const capitals = await serviceGetCapitals(countries);
    const weatherData = await serviceGetWeatherData(capitals || []);

    Elements.list.innerHTML = createMarkup(weatherData);
  } catch (error) {
    console.log(error);
  }
}

function createMarkup(data) {
  return data
    .map(
      ({ name, country, temp_c, icon, text }) => `
        <li>
          <img src="${icon}" alt="${text}">
          <h2>${name}</h2>
          <p>${country}</p>
          <p class=".temp">${temp_c}</p>
          <p>${text}</p>
        </li>
        `
    )
    .join("");
}

async function serviceGetWeatherData(capitals: string[]) {
  try {
    const responses = capitals.map(async (city) => {
      const params = new URLSearchParams({
        key: "6410346f89264d6e919165208231505",
        q: city,
        lang: "uk",
      });

      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?${params}`
      );

      if (!response.ok) {
        throw new Error("Wrong city name");
      }

      return response.json();
    });

    const data = await Promise.allSettled(responses);

    return data
      .filter(({ status }) => status === "fulfilled")
      .map((el) => {
        if (el.status === "fulfilled") {
          const { name = "", country = "" } = { ...el.value.location };
          const { temp_c = 0.0, condition: { icon = "", text = "" } = {} } = {
            ...el.value.current,
          };

          return { name, country, temp_c, icon, text };
        }
      });
  } catch (error) {
    console.log(error);
  }
}

function getFormData(data: HTMLFormElement): string[] {
  return new FormData(data)
    .getAll("country")
    .map((el) => el.toString().trim())
    .filter((el) => el !== "");
}

async function serviceGetCapitals(countries: string[]) {
  try {
    const responses = countries.map(async (country) => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${country}`
      );

      if (!response.ok) {
        throw new Error("Wrong country name");
      }

      return response.json();
    });

    const data = await Promise.allSettled(responses);

    return <string[]>(
      data
        .filter(({ status }) => status === "fulfilled")
        .map((el) => (el.status === "fulfilled" ? el.value[0].capital[0] : ""))
    );
  } catch (error) {
    console.log(error);
  }
}
