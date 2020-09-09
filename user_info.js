let user = sessionStorage.getItem("name");
let point = sessionStorage.getItem("point");
//let time = sessionStorage.getItem("time");

document.querySelector(".name").innerHTML = user;
document.querySelector(".points").innerHTML = point;
//document.querySelector(".time").innerHTML = time;

//time count 



 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">LeaderClasses</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Free Online Career Excellence Leadership Program</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Careers</a>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto">
    	<li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Faq</a>
      </li>
    </ul>
  </div>
</nav>