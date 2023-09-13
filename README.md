# A Slide Show Builder
### How to use:
- first head over to the github repository and clone it ,by either using the CLI on your device:
```bash
  git clone https://github.com/saranatour1/Slider-Builder.git
```
- next, go to the directory where the repo was cloned:
```bash
  cd Slider Builder
```
- next download the dependencies:
```bash
  pnpm i 
```
- after the download has finished, run the dev server:
```bash
  pnpm run dev 
```
- then head over to [localhost:5173](http://localhost:5173/), and voilà! the server will render the main page.
    
### Tools used 
- Vite JavaScript+SWC plugin & ReactJS & TailwindCSS

### Features and Screenshots 
> Quick note: I did not use either local storage or indexedDb for saving the projects, and edit, delete items should be added Soon after the edition of Srorage.

- when you visit the page for the first time:



<p float="center">
  <img src="https://github.com/saranatour1/Slider-Builder/assets/77834808/f623a838-fea3-482c-b486-fba86c20bf2e" alt="Screen Shot 1" width="45%">
  <img src="https://github.com/saranatour1/Slider-Builder/assets/77834808/924c78b3-a6d6-4b5e-9e33-891ce9ab04d5" alt="Screen Shot 2" width="45%">
</p>

- When You click the button to start adding a Project to your collection:
![Screen Shot 2023-09-14 at 01 15 06](https://github.com/saranatour1/Slider-Builder/assets/77834808/452904dc-fcd5-474e-9cee-e9b28da5179c)
  - after Succesfully adding a Title, along with descreption, you can start adding Slides to Your project!
     ![Screen Shot 2023-09-14 at 01 17 45](https://github.com/saranatour1/Slider-Builder/assets/77834808/55ced7c5-fd45-423d-aa1a-dec28f022ea5)
  - after adding a few slides, specifically more than 1 slide, you can see the submit button at the bottom right corner,
     ![Screen Shot 2023-09-14 at 01 47 58](https://github.com/saranatour1/Slider-Builder/assets/77834808/450065db-e052-4051-9c43-2b5f1be9233b)

- When submitting, you'll be redirectd to the main Page, where now the side bar has Your Projects.
  ![Screen Shot 2023-09-14 at 01 22 55](https://github.com/saranatour1/Slider-Builder/assets/77834808/bda89657-c0e1-424a-bf79-2fbe394bc600)

  - when You click on the title, you'll be redirected to the Project Page:
  ![Screen Shot 2023-09-14 at 01 23 05](https://github.com/saranatour1/Slider-Builder/assets/77834808/4fdc9cd4-e5bd-4cfa-b5a3-b5a053b7b163)
  > You can intuitivly go left and right.

### What's Next? 
  - Fix it.
  - create a local Storage intance of the Projects, and Create a hook accordingly to manipulate the CRUD operations, on the entirity,
  - use unique id's for things added to the instance.
  - transitions,user options to colors, give the person options to do their own creations (connot be done within 2 days :D:D:D:D:D:D::D)
  - I'd change the "form" into markdown.
  - more validations, error boundaries (:D:D:D:D:D)

all comments are welcome.

