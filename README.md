# Angular Check Password App

## Get Started

If you want to see the project without deploying it locally, you can follow this link to GitHub Pages: https://georgedeyneka.github.io/AngularCheckPassword/

So, if you want to look at the project's code and deploy it, follow the steps below in the "Installation" section.

### Installation

1. Clone the repo
```sh
git clone https://github.com/GeorgeDeyneka/AngularCheckPassword.git
```
2. Install NPM packages
```sh
npm install
```
3. Run this command for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
```sh
ng serve -o
```

## About project

This is a simple password complexity checker app. However, it is noteworthy that I used Reactive Forms and also optimized it with RxJS.

This application was a good practice for creating custom validation as well as streamlining application form input.

In the future, perhaps, the function of saving and displaying user-created combinations on the page will be added.


### Built With

- [![Angular][Angular.io]][Angular-url]
- ![RxJS](https://img.shields.io/badge/rxjs-%23B7178C.svg?style=for-the-badge&logo=reactivex&logoColor=white)
- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
- ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

## Usage

### Main Page
<div>
  <ul>
    <li>
When you open the application, you see the main page.
    </li>
  </ul>
  </br>
<img src="demo-images/main-page.png" alt="main-page-demo" width="1000">
</div>

</br>

---

### Tooltip
<div>
  <ul>
    <li>
Before you start typing, you can access the hint by hovering over the question mark icon. Here are the basic rules for a valid password.
    </li>
  </ul>
  </br>
<img src="demo-images/tooltip.png" alt="tooltip-demo" width="1000">
</div>

</br>

---

### Simple password
<div>
  <ul>
    <li>
When you enter only letters, numbers or symbols, your password is considered simple and the corresponding field is highlighted.
    </li>
  </ul>
  </br>
<img src="demo-images/simple-pass.png" alt="simple-password-demo" width="1000">
</div>

</br>

---

### Middle password
<div>
  <ul>
    <li>
When you enter numbers-letters, letters-symbols, or numbers-symbols combinations, your password is considered a medium password.
    </li>
    </br>
    <li>
Two fields are highlighted as your value passes the complexity test of both a simple and medium password.
    </li>
  </ul>
  </br>
<img src="demo-images/middle-pass.png" alt="middle-password-demo" width="1000">
</div>

</br>

---

### Strong Password
<div>
  <ul>
    <li>
Your password is considered strong if you combine numbers, letters and symbols at the same time.
    </li>
    </br>
    <li>
Because your password is complex, that's why all three fields are highlighted.
    </li>
  </ul>
  </br>
<img src="demo-images/strong-pass.png" alt="strong-password-demo" width="1000">
  </br>
</div>

</br>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

If you want to improve the project code, you need to:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Don't forget to give the project a star! Thanks again!


## My Contacts (Links)

- <a href="https://www.linkedin.com/in/george-deyneka-910003238/">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a> 
- <a href="https://t.me/Deyneka_George">
    <img src="https://img.shields.io/badge/Telegram-blue?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram Badge"/>
  </a> 
- <a href="mailto: zhoradeynecka@gmail.com">
    <img src="https://img.shields.io/badge/Email-white?style=for-the-badge&logo=gmail&logoColor=red" alt="Email Badge"/>
  </a> 


[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
