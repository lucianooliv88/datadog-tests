class Fetch {
  async getCurrent(input) {
    const myKey = "3651082e2019468a5a1754db60967130";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
