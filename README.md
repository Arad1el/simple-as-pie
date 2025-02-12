<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<div align="center">
  
  [![Contributors][contributors-shield]][contributors-url]
  [![Forks][forks-shield]][forks-url]
  [![Stargazers][stars-shield]][stars-url]
  [![Issues][issues-shield]][issues-url]
  [![Unlicense License][license-shield]][license-url]
  
</div>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/Arad1el/simple-as-pie">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center">Simple-As-Pie</h3>

  <p align="center">
    Simple-As-Pie is a simple and lightweight open-source React.js module for displaying SVG pie charts with a dynamic data set.
    <!-- <br />
    <a href="https://github.com/Arad1el/simple-as-pie"><strong>Explore the docs »</strong></a>
    <br />-->
    <br />
    <a href="https://arad1el.github.io/simple-as-pie-demo-page/">View Demo</a>
    &middot;
    <a href="https://github.com/Arad1el/simple-as-pie/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/Arad1el/simple-as-pie/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#interactive-demo">Interactive Demo</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

For one of my own projects I needed to create multiple pie charts to display within a single SVG element, within a React app.

Whilst I found a few examples that I could use, they were a bit limited in that they would only show one sgement at once.

Rather than spending yet more time searching for a solution that met my needs, I instead decided to create my own.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

[![React][React.js]][React-url]
[![Typescript][typescript-badge]][Typescript-url]
[![Rollup][Rollup-badge]][Rollup-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Installation

Within your React app's directory, install the plugin via npm or yarn

* npm
  ```sh
  npm install simple-as-pie
  ```

* yarn
  ```sh
  yarn add simple-as-pie
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Import the module into your component
```
import { PieChart, DataSet } from 'simple-as-pie';
```

Construct the data for the segments
```
const segmentData: DataSet[] = [
  {
    value: 24,
    colour: "red"
  },
  {
    value: 76,
    colour: "blue"
  }
];
```

Create an SVG component, and call the component within it
```
<svg width="200px" height="200px">
  <PieChart x={100} y={100} data={segmentData} radius={75} />
</svg>
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Interactive Demo

[There is an interactive demo available here](https://arad1el.github.io/simple-as-pie-demo-page/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [ ] Enable background colour
- [ ] Switch to paths rather than circle elements
- [ ] Enable hover functions

See the [open issues](https://github.com/Arad1el/simple-as-pie/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Top contributors:

<a href="https://github.com/Arad1el/simple-as-pie/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Arad1el/simple-as-pie" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Project Link: [https://github.com/Arad1el/simple-as-pie/](https://github.com/Arad1el/simple-as-pie/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* The initial version of this project was inspired be the logic of [Lea Verou](https://www.smashingmagazine.com/2015/07/designing-simple-pie-charts-with-css/)
* Future development will probably lean on the logic of [David Gilbertson](https://david-gilbertson.medium.com/a-simple-pie-chart-in-svg-dbdd653b6936)
* This readme template was adapated from [Othneil Drew's template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Arad1el/simple-as-pie.svg?style=for-the-badge
[contributors-url]: https://github.com/Arad1el/simple-as-pie/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Arad1el/simple-as-pie.svg?style=for-the-badge
[forks-url]: https://github.com/Arad1el/simple-as-pie/network/members
[stars-shield]: https://img.shields.io/github/stars/Arad1el/simple-as-pie.svg?style=for-the-badge
[stars-url]: https://github.com/Arad1el/simple-as-pie/stargazers
[issues-shield]: https://img.shields.io/github/issues/Arad1el/simple-as-pie.svg?style=for-the-badge
[issues-url]: https://github.com/Arad1el/simple-as-pie/issues
[license-shield]: https://img.shields.io/github/license/Arad1el/simple-as-pie.svg?style=for-the-badge
[license-url]: https://github.com/Arad1el/simple-as-pie/blob/master/LICENSE.txt
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB
[React-url]: https://reactjs.org/
[Typescript-badge]: https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff
[Typescript-url]: https://www.typescriptlang.org/
[Rollup-badge]: https://img.shields.io/badge/-rollup.js-EC4A3F?logo=rollup.js&logoColor=white&style=flat
[Rollup-url]: https://rollupjs.org/
