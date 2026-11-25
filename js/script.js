const cars = [
  {
    id:1,
    name:"Toyota Fortuner",
    type:"SUV",
    price:5000,
    seats:7,
    transmission:"Automatic",
    fuel:"Diesel",
    status:"Available",
    image:"https://img-ik.cars.co.za/news-site-za/images/2023/03/PC3A9737.jpg?tr=w-1200,h-800"
  },
  {
    id:2,
    name:"Hyundai Creta",
    type:"SUV",
    price:2800,
    seats:5,
    transmission:"Automatic",
    fuel:"Petrol",
    status:"Available",
    image:"https://cdn.motor1.com/images/mgl/VznKZB/s1/hyundai-creta.jpg"
  },
  {
    id:3,
    name:"Tata Nexon",
    type:"SUV",
    price:3000,
    seats:5,
    transmission:"Manual",
    fuel:"Petrol",
    status:"Available",
    image:"https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/157339/tata-nexon-ev-facelift-right-front-three-quarter22.jpeg?isig=0&wm=4&q=80"
  },
  {
    id:4,
    name:"Honda City",
    type:"Sedan",
    price:3000,
    seats:5,
    transmission:"Automatic",
    fuel:"Petrol",
    status:"Available",
    image:"https://www.hyderabadtourstravelss.com/img/car-rental-imgs/economy-cars/honda-city.webp"
  },
  {
    id:5,
    name:"Maruti Swift",
    type:"Hatchback",
    price:2800,
    seats:5,
    transmission:"Manual",
    fuel:"Petrol",
    status:"Available",
    image:"https://stat.overdrive.in/wp-content/odgallery/2018/01/40157__ANI1352.JPG"
  },
  {
    id:6,
    name:"BMW 3 Series",
    type:"Luxury",
    price:6000,
    seats:5,
    transmission:"Automatic",
    fuel:"Petrol",
    status:"Available",
    image:"https://imgd.aeplcdn.com/1056x594/cw/ec/41781/BMW-New-3-Series-Exterior-167101.jpg?wm=1&q=75"
  },
  {
    id:7,
    name:"Suzuki Celerio",
    type:"Hatchback",
    price:2500,
    seats:5,
    transmission:"Automatic",
    fuel:"Petrol",
    status:"Available",
    image:"https://stat.overdrive.in/wp-content/uploads/2014/02/celerio.jpg"
  },
  {
    id:8,
    name:"Suzuki Beleno",
    type:"Hatchback",
    price:2800,
    seats:5,
    transmission:"Automatic",
    fuel:"Petrol",
    status:"Available",
    image:"https://tse2.mm.bing.net/th/id/OIP.W-y-YWDQ3IAfGPHooBefVwHaEN?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"

  },
  {
    id:9,
    name:"Suzuki Fronx",
    type:"Hatchback",
    price:3000,
    seats:5,
    transmission:"Automatic",
    fuel:"Petrol",
    status:"Available",
    image:"https://media.whichcar.com.au/uploads/2025/07/SUZUKI_FRONX_HERO_2_CROPPED-2880x1920.jpg"
  },
  {
    
    id:10,
    name:"Tata Safari",
    type:"SUV",
    price:3700,
    seats:7,
    transmission:"Automatic",
    fuel:"Petrol",
    status:"Available",
    image:"https://imgd.aeplcdn.com/1056x594/n/cw/ec/155631/safari-ev-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80&q=80&wm=1"
  },
  {
    id:11,
    name:"Mahindra Thar Roxx",
    type:"SUV",
    price:4500,
    seats:5,
    transmission:"Automatic",
    fuel:"Petrol",
    status:"Available",
    image:"https://www.team-bhp.com/sites/default/files/pictures2023/CoorgMay2309.jpg"

  },
  {
    id:12,
    name:"Mahindra XUV 700",
    type:"SUV",
    price:4800,
    seats:7,
    transmission:"Automatic",
    fuel:"Petrol",
    status:"Available",
    image:"https://wallpaperaccess.com/full/8665502.jpg"
  },
  {
    id:13,
    name:"Mahindra XUV 500",
    type:"SUV",
    price:4200,
    seats:5,
    transmission:"Automatic",
    fuel:"Petrol",
    status:"Available",
    image:"https://cdni.autocarindia.com/ExtraImages/20180420120334_2018-Mahindra-XUV500-white.jpg" 
  },
  {
    id:14,
    name:"Suzuki Ertiga",
    type:"SUV",
    price:4000,
    seats:7,
    transmission:"Automatic",
    fuel:"Petrol",
    status:"Available",
    image:"https://tse4.mm.bing.net/th/id/OIP.frADmQQdO2mqoA7v9XdnGwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" 
  }


];

function renderCars(targetId,list){
  const target=document.getElementById(targetId);
  if(!target) return;

  target.innerHTML=list.map(car=>`
    <article class="car-card">
      <img class="car-img" src="${car.image}" alt="${car.name}">
      <div class="car-info">
        <h3>${car.name}</h3>
        <div class="car-type">${car.type} • ${car.fuel}</div>
        <div class="specs">
          <span>👤 ${car.seats} Seats</span>
          <span>⚙ ${car.transmission}</span>
        </div>
        <div class="price-row">
          <div class="price">₹${car.price.toLocaleString("en-IN")} <small>/ day</small></div>
          ${car.status === "Available"
            ? `<button class="btn" onclick="selectCar(${car.id})">Book Now</button>`
            : `<span class="status maintenance">Maintenance</span>`}
        </div>
      </div>
    </article>
  `).join("");
}

function filterCars(){

  const search=
    (document.getElementById("carSearch")?.value || "")
    .toLowerCase();

  const type=
    document.getElementById("carType")?.value || "all";

  const sort=
    document.getElementById("sortCars")?.value || "default";

  let list=cars.filter(c=>
    c.status==="Available" &&
    c.name.toLowerCase().includes(search) &&
    (type==="all" || c.type===type)
  );

  if(sort==="low"){
    list.sort((a,b)=>a.price-b.price);
  }

  if(sort==="high"){
    list.sort((a,b)=>b.price-a.price);
  }

  renderCars("allCars",list);

  const count=document.getElementById("resultCount");

  if(count){
    count.textContent=list.length;
  }
}

function selectCar(id){

  const car=cars.find(c=>c.id===id);

  localStorage.setItem(
    "selectedCar",
    JSON.stringify(car)
  );

  location.href="booking.html";
}

function homeSearch(){

  const locationName=
    document.getElementById("homeLocation").value;

  const pickup=
    document.getElementById("homePickup").value;

  const ret=
    document.getElementById("homeReturn").value;

  if(!locationName || !pickup || !ret){
    alert("Please enter pickup location and dates.");
    return;
  }

  localStorage.setItem(
    "searchData",
    JSON.stringify({
      locationName,
      pickup,
      ret
    })
  );

  location.href="cars.html";
}

function loadBookingCar(){

  const car=
    JSON.parse(localStorage.getItem("selectedCar"));

  const box=
    document.getElementById("bookingCar");

  if(!car){
    box.innerHTML=
      "<p>No car selected. <a class='text-link' href='cars.html'>Choose a car first.</a></p>";

    return;
  }

  box.innerHTML=`
    <div class="summary-car">

      <img src="${car.image}" alt="${car.name}">

      <div>
        <strong>${car.name}</strong>
        <p class="car-type">
          ${car.type} • ${car.seats} seats
        </p>
      </div>

    </div>
  `;

  document.getElementById("summaryPrice").textContent=
    "₹"+car.price.toLocaleString("en-IN");

  const search=
    JSON.parse(localStorage.getItem("searchData"));

  if(search){

    document.getElementById("pickupLocation").value=
      search.locationName;

    document.getElementById("pickupDate").value=
      search.pickup;

    document.getElementById("returnDate").value=
      search.ret;

    updateTotal();
  }
}

function setMinDates(){

  const today=
    new Date().toISOString().split("T")[0];

  const p=
    document.getElementById("pickupDate");

  const r=
    document.getElementById("returnDate");

  if(p) p.min=today;

  if(r) r.min=today;
}

function updateTotal(){

  const car=
    JSON.parse(localStorage.getItem("selectedCar"));

  const p=
    document.getElementById("pickupDate")?.value;

  const r=
    document.getElementById("returnDate")?.value;

  if(!car || !p || !r) return;

  const days=
    Math.ceil(
      (new Date(r)-new Date(p))/86400000
    );

  if(days<=0){

    document.getElementById("summaryDays").textContent=
      "Invalid dates";

    document.getElementById("summaryTotal").textContent=
      "₹0";

    return;
  }

  document.getElementById("summaryDays").textContent=
    days;

  document.getElementById("summaryTotal").textContent=
    "₹"+(days*car.price).toLocaleString("en-IN");
}

function confirmBooking(e){

  e.preventDefault();

  const car=
    JSON.parse(localStorage.getItem("selectedCar"));

  if(!car){
    alert("Please select a car first.");
    location.href="cars.html";
    return;
  }

  const p=
    document.getElementById("pickupDate").value;

  const r=
    document.getElementById("returnDate").value;

  const days=
    Math.ceil(
      (new Date(r)-new Date(p))/86400000
    );

  if(days<=0){
    alert("Return date must be after pickup date.");
    return;
  }

  const booking={

    id:"CR"+Math.floor(1000+Math.random()*9000),

    name:
      document.getElementById("customerName").value,

    phone:
      document.getElementById("customerPhone").value,

    email:
      document.getElementById("customerEmail").value,

    location:
      document.getElementById("pickupLocation").value,

    pickup:p,

    returnDate:r,

    payment:
      document.getElementById("paymentMethod").value,

    car:car.name,

    price:car.price,

    days:days,

    total:car.price*days
  };

  const bookings=
    JSON.parse(
      localStorage.getItem("bookings") || "[]"
    );

  bookings.push(booking);

  localStorage.setItem(
    "bookings",
    JSON.stringify(bookings)
  );

  localStorage.setItem(
    "lastBooking",
    JSON.stringify(booking)
  );

  location.href="confirmation.html";
}

function showConfirmation(){

  const b=
    JSON.parse(
      localStorage.getItem("lastBooking")
    );

  const box=
    document.getElementById("receipt");

  if(!b){
    box.innerHTML="<p>No booking found.</p>";
    return;
  }

  box.innerHTML=`

    <div class="receipt-row">
      <span>Booking ID</span>
      <strong>${b.id}</strong>
    </div>

    <div class="receipt-row">
      <span>Customer</span>
      <strong>${b.name}</strong>
    </div>

    <div class="receipt-row">
      <span>Vehicle</span>
      <strong>${b.car}</strong>
    </div>

    <div class="receipt-row">
      <span>Pickup Location</span>
      <strong>${b.location}</strong>
    </div>

    <div class="receipt-row">
      <span>Dates</span>
      <strong>${b.pickup} → ${b.returnDate}</strong>
    </div>

    <div class="receipt-row">
      <span>Rental Days</span>
      <strong>${b.days}</strong>
    </div>

    <div class="receipt-row">
      <span>Payment</span>
      <strong>${b.payment}</strong>
    </div>

    <div class="receipt-row">
      <span>Total Amount</span>
      <strong>₹${b.total.toLocaleString("en-IN")}</strong>
    </div>
  `;
}

function registerUser(e){

  e.preventDefault();

  const user={
    name:
      document.getElementById("regName").value,

    email:
      document.getElementById("regEmail").value,

    password:
      document.getElementById("regPassword").value
  };

  localStorage.setItem(
    "driveUser",
    JSON.stringify(user)
  );

  const msg=
    document.getElementById("registerMessage");

  msg.textContent=
    "Account created! Redirecting...";

  msg.style.color="green";

  setTimeout(()=>{
    location.href="login.html";
  },800);
}

function loginUser(e){

  e.preventDefault();

  const saved=
    JSON.parse(
      localStorage.getItem("driveUser")
    );

  const email=
    document.getElementById("loginEmail").value;

  const password=
    document.getElementById("loginPassword").value;

  const msg=
    document.getElementById("loginMessage");

  if(
    email==="admin@driveeasy.com" &&
    password==="admin123"
  ){

    msg.textContent=
      "Admin login successful!";

    msg.style.color="green";

    setTimeout(()=>{
      location.href="admin.html";
    },600);

  }

  else if(
    saved &&
    saved.email===email &&
    saved.password===password
  ){

    localStorage.setItem(
      "loggedIn",
      "true"
    );

    msg.textContent=
      "Login successful!";

    msg.style.color="green";

    setTimeout(()=>{
      location.href="index.html";
    },600);

  }

  else{

    msg.textContent=
      "Invalid email or password.";

    msg.style.color="red";
  }
}

function loadAdmin(){

  document.getElementById("statCars").textContent=
    cars.length;

  document.getElementById("statAvailable").textContent=
    cars.filter(c=>c.status==="Available").length;

  document.getElementById("statMaintenance").textContent=
    cars.filter(c=>c.status==="Maintenance").length;

  const bookings=
    JSON.parse(
      localStorage.getItem("bookings") || "[]"
    );

  document.getElementById("statBookings").textContent=
    bookings.length;

  document.getElementById("vehicleTable").innerHTML=
    cars.map(c=>`

      <tr>

        <td>
          <strong>${c.name}</strong>
        </td>

        <td>${c.type}</td>

        <td>
          ₹${c.price.toLocaleString("en-IN")}
        </td>

        <td>

          <span class="status ${
            c.status==="Available"
            ?"available"
            :"maintenance"
          }">

            ${c.status}

          </span>

        </td>

        <td>

          <button
            class="action-btn"
            onclick="toggleMaintenance(${c.id})">

            Change Status

          </button>

        </td>

      </tr>

    `).join("");

  document.getElementById("bookingTable").innerHTML=

    bookings.length

    ?

    bookings.slice().reverse().map(b=>`

      <tr>

        <td>${b.id}</td>

        <td>${b.name}</td>

        <td>${b.car}</td>

        <td>
          ${b.pickup} → ${b.returnDate}
        </td>

        <td>
          ₹${b.total.toLocaleString("en-IN")}
        </td>

      </tr>

    `).join("")

    :

    "<tr><td colspan='5'>No bookings yet.</td></tr>";
}

function toggleMaintenance(id){

  const car=
    cars.find(c=>c.id===id);

  car.status=
    car.status==="Available"
    ?"Maintenance"
    :"Available";

  loadAdmin();
}

function addDemoCar(){

  alert(
    "Demo feature: connect this button to a database/backend in the advanced version."
  );
}
