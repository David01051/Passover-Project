let x = document.getElementById("student-table-container");
x.style.display = "none";
let y = document.getElementById("student-add-user");
y.style.display = "none";
test.style.display = "none";
class User {
  constructor(id, picture, age, name, email, phone) {
    this.id = id;
    this.picture = picture;
    this.age = age;
    this.name = name;
    this.email = email;
    this.phone = phone;
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
        user.phone
      )
    );

    let studentCard = document.createElement("div");
    studentCard.classList.add("studentClassCard");
    studentCard.innerHTML = `<div id="studentId" onclick="showUser()"> <div class="student-details">
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
    test.innerHTML = `<div id="studentId" onclick="showUser()"> <div class="student-details">
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
    /*return studentCard;*/
  });
  return usersArray;
};

const createUserCard = (user) => {
  let studentCard = document.createElement("div");
  studentCard.classList.add("studentClassCard");
  studentCard.innerHTML = `<div id="studentId" onclick="showUser()"> <div class="student-details">
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
/*let x = document.getElementById("userIdCard");
    x.onclick = function(){
        if (studentUser.style.display === "none") {
            studentUser.style.display = "flex";
          } else {
            studentUser.style.display = "none";
          } 
    }*/
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
  x.style.display = "flex";
  if (studentCards.style.display === "none") {
    studentCards.style.display = "flex";
    studentTable.style.display = "none";
  } else {
    studentCards.style.display = "none";
    studentTable.style.display = "block";
    y.style.display = "none";
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
  for (let i = 0; i < usersArray.length; i++) {
    if (a == i) {
      test.innerHTML = `<div id="studentId" onclick="showUser()"> <div class="student-details">
          <h2>${usersArray[i].name}</h2><br>
          <span>Age:${usersArray[i].age}</span><br>
          <span>Email:${usersArray[i].email}</span><br>
          <span>Phone:${usersArray[i].phone}</span><br>
          <span>ID:${usersArray[i].id}</span>
          </div>
          <div class="student-image">
              <img src="${user.picture}" alt="">
          </div>
          </div>`;
      test.innerHTML = `<div id="studentId" onclick="showUser()"> <div class="student-details">
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
    studentId.style.display = "none";
  } else {
    studentCards.style.display = "none";
    test.style.display = "flex";
    studentId.style.display = "none";
    x.style.display = "none";
  }
}

function showSignUp() {
  if (studentCards.style.display === "none") {
    studentCards.style.display = "flex";
    y.style.display = "none";
  } else {
    studentCards.style.display = "none";
    test.style.display = "none";
    y.style.display = "";
  }
}
