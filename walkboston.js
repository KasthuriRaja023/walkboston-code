function rendertopSalaryPeople(boston, container) {
  const people = boston.data;
  const len = boston.data.length;
  var topSalaryPeople=[];
  topSalaryPeople=people.sort((a,b)=>b[11]-a[11]).slice(0,5)
  
  let html = '';
  
  for (let i = 0; i < topSalaryPeople.length; i++) 
  {
    html += 
      '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
  }
 
  // TODO: add code to display the html variable inside a ul element with id="data"
  // Hint: you can use the container parameter's innerHTML property to insert Html tags
  container.innerHTML = '<ul id = "topSalaryPeople">' + html + '</ul>';
  
}


//Find Filter Length

function rendertopEmp(boston, container) {
  const people = boston.data;
  const len = boston.data.length;
    var topSalaryPeople1=[];
  topSalaryPeople1=people.filter((a)=>a[11]>200000)
  
  let html = '';
  
  for (let i = 0; i < topSalaryPeople1.length; i++) 
  {
    html += 
      '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
  }
 
  // TODO: add code to display the html variable inside a ul element with id="data"
  // Hint: you can use the container parameter's innerHTML property to insert Html tags
  container.innerHTML = '<ul id = "topEmp">' + html + '</ul>';
  
}

rendertopEmp(boston, document.getElementById('container'));
rendertopSalaryPeople(boston, document.getElementById('container'));