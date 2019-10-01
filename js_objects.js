function names(arr){
    for(var i=0; i<arr.length; i++){
      console.log("name:", arr[i].name, "cohort:", arr[i].cohort)
    }
  }
people = [
      {name: 'Remy', cohort: 'Jan'},
      {name: 'Genevieve', cohort: 'March'},
      {name: 'Chuck', cohort: 'Jan'},
      {name: 'Osmund', cohort: 'June'},
      {name: 'Nikki', cohort: 'June'},
      {name: 'Boris', cohort: 'June'}
  ];
  names(people)
  
  function characters(arr){
    console.log("employees")
      for(var i=0; i<arr.employees.length; i++){
          console.log(i+1, arr.employees[i].first_name, arr.employees[i].last_name, (arr.employees[i].first_name.length + arr.employees[i].last_name.length))
      }
        console.log("managers")
      for(var i=0; i<arr.managers.length; i++){
          console.log(i+1, arr.managers[i].first_name, arr.managers[i].last_name, (arr.managers[i].first_name.length + arr.managers[i].last_name.length))
      }
  }
  users = {
      employees: [
          {'first_name':  'Miguel', 'last_name' : 'Jones'},
          {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
          {'first_name' : 'Nora', 'last_name' : 'Lu'},
          {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
      ],
      managers: [
         {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
         {'first_name' : 'Gordon', 'last_name' : 'Poe'}
      ]
  };
  characters(users)