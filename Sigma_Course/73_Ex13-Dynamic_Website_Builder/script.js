function viewsConverter(views) {
  // 1K = 1000
  // 1M = 1000,000
  // 1B = 1000,000,000

  let div = views,
    count = -1,
    rem;
  for (let i = 0; div > 0; i++) {
    rem = div % 1000;
    div = Math.floor(div / 1000);
    count++;
  }

  // console.log(views);
  // console.log(div);
  // console.log(rem);
  // console.log(count);

  if (count == 0) return views;
  if (count == 1) return `${rem}K`;
  if (count == 2) return `${rem}M`;
  if (count == 3) return `${rem}B`;
}

function createCard(vTitle, cName, vViews, yearsOld, duration, thumbnail) {
  //* 1. First we have to create a main container to hold everything together named "div" having class "card".
  let card = document.createElement("div");
  // Then we assign it a class named "card".
  card.className = "card";
  // Now, lets append this main container "card" inside the body as its first element.
  document.body.prepend(card);
  // document.querySelector("body").prepend(card);

  // * 2. Now we gotta create two divs inside the .card first for the thumbnail and the another for rest of the data of the card.
  // For the thumbnail:
  let thumb = document.createElement("div");
  thumb.className = "thumbnail";
  document.querySelector(".card").append(thumb);

  // Inside .thumbnail there will be img tag to display the thumbnail, so lets create img element.
  let image = document.createElement("img");
  image.setAttribute("src", thumbnail);
  document.querySelector(".thumbnail").append(image);

  // Inside .thumbnail there will also be a .duration class:
  let dur = document.createElement("div");
  dur.className = "duration";
  dur.textContent = duration;
  document.querySelector(".thumbnail").append(dur);

  // For the data:
  let data = document.createElement("div");
  data.className = "data";
  document.querySelector(".card").append(data);

  // For the title element under data element:
  let title = document.createElement("div");
  title.className = "title";
  title.textContent = vTitle;
  document.querySelector(".data").append(title);

  // For the .about class inside .data class:
  let about = document.createElement("div");
  about.className = "about";
  document.querySelector(".data").append(about);

  // For the contents inside the .about class:
  let cn = document.createElement("p");
  cn.textContent = cName;
  document.querySelector(".about").append(cn);

  let circle1 = document.createElement("div");
  circle1.className = "circle1";
  document.querySelector(".about").append(circle1);

  let views = document.createElement("p");
  views.textContent = viewsConverter(vViews);
  document.querySelector(".about").append(views);

  let circle2 = document.createElement("div");
  circle2.className = "circle2";
  document.querySelector(".about").append(circle2);

  let old = document.createElement("p");
  old.textContent = yearsOld + " year ago";
  document.querySelector(".about").append(old);

  // * Now lets assign the styles to elements.
  // body:
  document.querySelector("body").style.color = "white";

  // .card:
  card.style.backgroundColor = "#0F0F0F";
  card.style.display = "flex";
  card.style.gap = "15px";
  card.style.padding = "10px";
  card.style.fontFamily = "'Roboto', sans-serif";
  // card.style.fontFamily = "'Comic Sans MS', 'Comic Sans', 'cursive'";

  // .thumbnail:
  thumb.style.position = "relative";

  // .img:
  image.style.borderRadius = "15px";
  image.style.width = "20rem";

  // .duration:
  dur.style.backgroundColor = "rgba(22, 22, 22, 0.6)";
  dur.style.position = "absolute";
  dur.style.borderRadius = "7px";
  dur.style.bottom = "10px";
  dur.style.right = "7px";
  dur.style.width = "50px";
  dur.style.height = "32px";
  dur.style.fontSize = "1.2rem";
  dur.style.fontWeight = "bold";
  dur.style.display = "grid";
  dur.style.placeItems = "center";

  // .title:
  title.style.width = "1118px";
  title.style.fontSize = "1.98rem";
  title.style.fontSize = "1.7rem";
  title.style.marginTop = "4px";
  title.style.textWrap = "nowrap";
  title.style.overflow = "hidden";
  title.style.textOverflow = "ellipsis";
  title.style.fontWeight = 600;

  // .about:
  about.style.color = "rgb(170, 170, 170)";
  about.style.display = "flex";
  about.style.gap = "10px";
  about.style.fontSize = "1.3rem";

  // .about .circle1:
  circle1.style.backgroundColor = "rgb(170, 170, 170)";
  circle1.style.width = "5px";
  circle1.style.height = "5px";
  circle1.style.borderRadius = "100%";
  circle1.style.marginTop = "32px";

  // .about .circle2:
  circle2.style.backgroundColor = "rgb(170, 170, 170)";
  circle2.style.width = "5px";
  circle2.style.height = "5px";
  circle2.style.borderRadius = "100%";
  circle2.style.marginTop = "32px";

  console.log(document.querySelector("body").innerHTML);
}

createCard(
  "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73",
  "CodeWithHarry",
  158000,
  1,
  "6:14",
  "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBy-oj2TIS9wHcc1zCvAkY4TfKkWA"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  56000000,
  1,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA"
);
