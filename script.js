const input = document.querySelector("#imageSelector");
const img = document.querySelector("#image");

input.addEventListener("change", function () {
  const inputValue = input.value;
  const imageUrl = getImage(inputValue);

  if (imageUrl) {
    img.src = imageUrl;
} else {
    img.src = "";
}
});

function getImage(param) {
  switch (param) {
    case "horse":
      return `https://cdn.pixabay.com/photo/2017/12/10/15/16/white-horse-3010129_1280.jpg`;
      break;

    case "cat":
      return `https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg`;
      break;

    case "dog":
      return `https://media.istockphoto.com/id/1482199015/photo/happy-puppy-welsh-corgi-14-weeks-old-dog-winking-panting-and-sitting-isolated-on-white.jpg?s=2048x2048&w=is&k=20&c=UBaAi_GXC9a2OP4i5_mWYmIivpGHPBURZV--1kBpaTI=`;
      break;

    case "snake":
      return `https://cdn.pixabay.com/photo/2013/08/09/00/31/snake-170897_1280.jpg`;
      break;

    case "default":
      return "https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_1280.jpg";
  }
}
