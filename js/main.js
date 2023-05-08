function createElemWithText(HTMLElem = "p", textContentOfEl = "", className) {
  let newEl = document.createElement(HTMLElem);

  newEl.textContent = textContentOfEl;

  if (className) {
    newEl.className = className;
  }
  return newEl;
}

users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
];

function createSelectOptions(users) {
  if (users === undefined || users === null) {
    return undefined;
  }
  optionArray = [];
  for (user of users) {
    console.log(user);
    var opt = document.createElement("option");
    opt.value = user.id;
    opt.innerHTML = user.name;
    optionArray.push(opt);
  }
  return optionArray;
}

function toggleCommentSection(postId) {
  if (!postId) {
    return undefined;
  }
  let section = document.querySelector(`section[data-post-id="${postId}"]`);
  if (section) {
    section.classList.toggle("hide");
  }
  return section;
}

function toggleCommentButton(postID) {
  if (!postID) {
    return;
  }
  const btnSelectedEl = document.querySelector(
    `button[data-post-id = "${postID}"`
  );
  if (btnSelectedEl != null) {
    btnSelectedEl.textContent === "Show Comments"
      ? (btnSelectedEl.textContent = "Hide Comments")
      : (btnSelectedEl.textContent = "Show Comments");
  }
  return btnSelectedEl;
}

function deleteChildElements(parentElement) {
  if (!parentElement || !parentElement.nodeType) {
    return undefined;
  }
  let child = parentElement.lastElementChild;
  while (child) {
    parentElement.removeChild(child);
    child = parentElement.lastElementChild;
  }
  return parentElement;
}
let parentElement = document.getElementById("container");
deleteChildElements(parentElement);

const addButtonListeners = function () {
  const buttons = document
    .querySelectorAll("main")[0]
    .querySelectorAll("button")
    buttons.forEach(button => {
      const postId = button.dataset.postId;
      button.addEventListener("click", function () {
        toggleComments(event, postId);
      });
    });
  return buttons;
}

function removeButtonListeners() {
  const buttons = document.querySelectorAll("main")[0].querySelectorAll("button");
  let x = [];
  buttons.forEach((button) => {
    const postId = button.dataset.postId;
    button.removeEventListener("click", button.getEventListeners);
  })
  return buttons;
}
addButtonListeners()

function createComments(comments) {
  if (!comments) {
    return undefined;
  }
  let frag = document.createDocumentFragment();
  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];
    let a = document.createElement("article");
    let h3 = createElemWithText("h3", comment.name);
    let p1 = createElemWithText("p", comment.body);
    let p2 = createElemWithText("p", `From: ${comment.email}`);
    a.appendChild(h3);
    a.appendChild(p1);
    a.appendChild(p2);
    frag.appendChild(a);
  }
  return frag;
}

function populateSelectMenu(users) {
  if (!users) {
    return;
  }
  let menu = document.querySelector("#selectMenu");
  let options = createSelectOptions(users);

  for (let i = 0; i < options.length; i++) {
    let option = options[i];
    menu.append(option);
  }
  return menu;
}

let getUsers = async () => {
  let response;
  try {
    response = await fetch("https://jsonplaceholder.typicode.com/users");
  } catch (error) {
    console.log(error);
  }
  return await response.json();
};

let getUserPosts = async (userId) => {
  if (!userId)
    return undefined;
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
console.log(getUserPosts())

let getUser = async (userId) => {
  if (!userId) return;
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const jsonUserIdData = await response.json();
    console.log(userId);
    return jsonUserIdData;
  } catch (error) {
    console.log(error);
  }
  console.log(jsonUserIdData);
};
console.log(getUser());

const getPostComments = async (postId) => {
  if (!postId) return;
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    const jsonPostComments = await response.json();
    return jsonPostComments;
  } catch (error) {
    console.log(error);
  }
};

const displayComments = async (postId) => {
  if (!postId) return;
  let section = document.createElement("section");
  section.dataset.postId = postId;
  section.classList.add("comments", "hide");
  const comments = await getPostComments(postId);
  const fragment = createComments(comments);
  section.append(fragment);
  console.log(section);
  return section;
};
console.log(displayComments(5));

const createPosts = async (jsonPosts) => {
  if(!jsonPosts) {
    return undefined;
  }
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < jsonPosts.length; i++) {
    let post = jsonPosts[i];
    let article = document.createElement("article");
    let section = await displayComments(post.id);
    let author = await getUser(post.userId);

    let h2 = createElemWithText("h2", post.title);
    let p1 = createElemWithText("p", post.body);
    let p2 = createElemWithText("p", `Post ID: ${post.id}`);
    let p3 = createElemWithText(
      "p",
      `Author: ${author.name} with ${author.company.name}`
    );
    let p4 = createElemWithText("p", author.company.catchPhrase);
    let button = createElemWithText("button", "Show Comments");
    button.dataset.postId = post.id;
    article.append(h2, p1, p2, p3, p4, button, section);
    fragment.append(article);
  }
  console.log(fragment);
  return fragment;
};

const displayPosts = async (posts) => {
  let myMain = document.querySelector("main");
  let element = posts
    ? await createPosts(posts)
    : document.querySelector("main p");
  myMain.append(element);
  return element;
};

function toggleComments(event, postId) {
  if (!event || !postId) {
    return undefined;
  }
  event.target.listener = true;
  let section = toggleCommentSection(postId);
  let button = toggleCommentButton(postId);
  return [section, button];
}

const refreshPosts = async (posts) => {
  if (!posts) {
    return undefined;
  }
  let buttons = removeButtonListeners();
  let myMain = deleteChildElements(document.querySelector("main"));
  let fragment = await displayPosts(posts);
  let button = addButtonListeners();
  return [buttons, myMain, fragment, button];
};

const selectMenuChangeEventHandler = async (e) => {
  if (!e) {
    return undefined;
  }
  let userId = e?.target?.value || 1;
  let posts = await getUserPosts(userId);
  let refreshPostsArray = await refreshPosts(posts);
  return [userId, posts, refreshPostsArray];
};

const initPage = async () => {
  let users = await getUsers();
  let select = populateSelectMenu(users);
  return [users, select];
};

function initApp() {
  initPage();
  let select = document.getElementById("selectMenu");
  select.addEventListener("change", selectMenuChangeEventHandler, false);
}
document.addEventListener("DOMContentLoaded", initApp, false);
