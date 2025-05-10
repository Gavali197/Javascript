const customName = document.querySelector("#customName");
const button = document.querySelector("#randomize");
const story = document.querySelector(".story");



function randomValuefromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

const insertx = ['hemant', 'jay', 'rohit', 'nimesh']
const inserty = ['kitchen', 'garden', 'park', 'beach']
const insertz = ['melt into a pudle on the walk', 'jump into a pond', 'run away screaming', 'eat a sandwich']

button.addEventListener("click", result)

function result() {
    let newStory = storyText;
    
    const zItem = randomValuefromArray(insertx);
    const xItem = randomValuefromArray(inserty);
    const yItem = randomValuefromArray(insertz);

  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replaceAll(':inserty:', yItem);
  newStory = newStory.replaceAll(':insertz:', zItem);

    if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }



    story.textContent = newStory;
     story.style.visibility = 'visible';
}


