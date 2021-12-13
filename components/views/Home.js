import html from "html-literal";
import sharkimage from "../../assets/image/funshark.jpeg";

//  Add the Kelvin converter
// const kelvinToFahrenheit = (kelvinTemp) =>
//   Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

export default () => html`
  <!-- Add the weather -->

  <section id="jumbotron">
    <h2>Savvy Coders Javascript Fullstack Cohort</h2>
    <a href="" onClick="alert('Hello! You clicked the Button!')"
      >"Call to Action Button"</a
    >
  </section>
  <div id="shark">
    <img src="${sharkimage}" />
  </div>
`;
