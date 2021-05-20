

<h3 align="center">De Boerderij</h3>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li>
        <a href="#local">Local</a>
            <ul>
                <li><a href="#prerequisites">Prerequisites</a></li>
                <li><a href="#installation">Installation</a></li>
            </ul>
        </li>
        <li>
        <a href="#Cloud">Cloud</a>
            <ul>
                <li><a href="#prerequisites">Prerequisites</a></li>
                <li><a href="#Deploy">Deploy</a></li>
            </ul>
            </li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->

## About The Project

Its a basic app for farmers to track the incomes, costs and orders. A "jófogás" copy is currently under development (the piac section).

To visit the project: Boerderij.hu

If you dont want to register a new account you can use a test account: email: test@test.com password: test123

Spring Boot
React
Java
Hibernate
JWT
OAuth2 (not used, but implemented)
### Built With


* Spring Boot
* OAuth2
* React
* PostgreSQL database
* Java
* Hibernate
* JWT

<!-- GETTING STARTED -->

## Getting Started

### Local

#### Prerequisites

- NPM packages
#### Installation

1. a.) Clone the backend repo
   ```sh
   git clone https://github.com/maryn1421/boerderij-backend.git
   ```
   b.) Clone the frontend repo
   ```sh
   git clone https://github.com/maryn1421/boerderij-frontend.git
   ```
   
2. Install NPM packages
   ```sh
   npm install
   ```
3. set environment variables
   * PASSWORD -> password for postgresql user
   * USERNAME -> postgresql username
   
### Cloud

#### Prerequisites

* heroku
  Register at [https://www.heroku.com/](https://www.heroku.com/)
#### Deploy

1. Create application on Heroku
2. Create Config Vars on "Settings" tab

3. Connect heroku to github repository
4. Select a branch to deploy. Currently "heroku_deploy" is created for this purpose.

