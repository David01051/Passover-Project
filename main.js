let userTable = document.getElementById("student-table-container");
userTable.style.display = "none";
let addUser = document.getElementById("student-add-user");
addUser.style.display = "none";
test.style.display = "none";
class User {
  constructor(id, picture, age, name, email, phone, index) {
    this.id = id;
    this.picture = picture;
    this.age = age;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.index = index;
  }
}
const usersArray = [];

const fetchUsers = async () => {
  const users = await (
    await fetch("https://next.json-generator.com/api/json/get/NJ-UoW2Xq")
  ).json();
  users.forEach((user) => {
    usersArray.push(
      new User(
        user._id,
        user.picture,
        user.age,
        `${user.name.first} ${user.name.last}`,
        user.email,
        user.phone,
        user.index
      )
    );

    let studentCard = document.createElement("div");
    studentCard.classList.add("studentClassCard");
    studentCard.innerHTML = `<div  onclick="showUser()"> <div class="student-details">
    <h2>${user.name}</h2><br>
    <span>Age:${user.age}</span><br>
    <span>Email:${user.email}</span><br>
    <span>Phone:${user.phone}</span><br>
    <span>ID:${user.id}</span>
    </div>
    <div class="student-image">
    <img src="${user.picture}" alt="">
    </div>
    </div>`;
    test.innerHTML = `<div onclick="showUser()"> <div class="student-details">
    <h2>${user.name}</h2><br>
    <span>Age:${user.age}</span><br>
    <span>Email:${user.email}</span><br>
    <span>Phone:${user.phone}</span><br>
    <span>ID:${user.id}</span>
    </div>
    <div class="student-image">
    <img src="${user.picture}" alt="">
    </div>
    </div>`;
  });
  return usersArray;
};

const createUserCard = (user) => {
  let studentCard = document.createElement("div");
  studentCard.classList.add("studentClassCard");
  studentCard.innerHTML = `<div onclick="showUser(${user.index})"> <div class="student-details">
    <h2>${user.name}</h2><br>
    <span>Age:${user.age}</span><br>
    <span>Email:${user.email}</span><br>
    <span>Phone:${user.phone}</span><br>
    <span>ID:${user.id}</span>
    </div>
    <div class="student-image">
        <img src="${user.picture}" alt="">
    </div>
    </div>`;

  return studentCard;
};

const createUserRow = (user) => {
  const studentTableRow = document.createElement("tr");
  studentTableRow.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        `;
  return studentTableRow;
};

const showTable = () => {
  const studentCards = document.getElementById("studentCards");
  const studentTable = document.getElementById("student-table-container");
  userTable.style.display = "flex";
  if (studentCards.style.display === "none") {
    studentCards.style.display = "flex";
    studentTable.style.display = "none";
  } else {
    studentCards.style.display = "none";
    studentTable.style.display = "block";
    addUser.style.display = "none";
  }
};

const init = async () => {
  const usersArray = await fetchUsers();
  const studentCards = document.getElementById("studentCards");
  const studentTable = document.getElementById("student-table");
  usersArray.forEach((user) => {
    studentCards.appendChild(createUserCard(user));
    studentTable.appendChild(createUserRow(user));
  });
};

init();

function showUser(a) {
  for (let user of usersArray) {
    if (a == user.index) {
      test.innerHTML = `<div onclick="showUser()"> <div class="student-details">
          <h2>${user.name}</h2><br>
          <span>Age:${user.age}</span><br>
          <span>Email:${user.email}</span><br>
          <span>Phone:${user.phone}</span><br>
          <span>ID:${user.id}</span>
          </div>
          <div class="student-image">
              <img src="${user.picture}" alt="">
          </div>
          </div>`;
    }
  }
  if (studentCards.style.display === "none") {
    studentCards.style.display = "flex";
    test.style.display = "none";
  } else {
    studentCards.style.display = "none";
    test.style.display = "flex";

    userTable.style.display = "none";
  }
}

function showSignUp() {
  if (studentCards.style.display === "none") {
    studentCards.style.display = "flex";
    addUser.style.display = "none";
  } else {
    studentCards.style.display = "none";
    test.style.display = "none";
    addUser.style.display = "";
  }
}
function validation() {
    //const firstName = document.getElementById("fname").value;
    //const lastName = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("mailconfirm").value;
    //const phone = document.getElementById("phone").value;
    //const age = document.getElementById("age").value;
  
    if(email === '' || confirmEmail === '') {
      return alert('Email or Confirm field are empty')
    };
  
    if(email !== confirmEmail) {
      return alert('The email and confirm email are not the same')
    };

    return alert('Access approved');
  }


