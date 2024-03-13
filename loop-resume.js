fetch('resume.json')
  .then(response => response.json())
  .then(data => {
  //for Loop
  // console.log(data);
  // to print entire resume basic details
  let resumeBasics = data.basics;
  let resumeBasicKeys = Object.keys(resumeBasics);
  console.log("Basic Information");
  for(let i=0; i < resumeBasicKeys.length; i++) {
    let key = resumeBasicKeys[i];
    console.log(`${key} : ${resumeBasics[key]}`);
  }
  console.log("\n");

  //for Each loop to print work experience
  let workExp = data.work;
  console.log("Work Experience");
  Object.entries(workExp).forEach(([key, value]) => {
    Object.entries(value).forEach(([key1,value1])=> console.log(`${key1} : ${value1}`));
  });
  console.log("\n");

  //for In loop
  // to print education
  let edu = data.education[0];
  for (let key in edu) {
      if (edu.hasOwnProperty(key)) {
      console.log(`${key}:${edu[key]}`);  
      }
  }
  console.log("\n");

  //for Of loop
  // to print skills
  let skillSet = data.skills;
  console.log("Skills");
  for (let skillNum of Object.values(skillSet)) {
    for(let [key, value] of Object.entries(skillNum)) {
      console.log(`${key} : ${value}`);
    }
  }

  })
  .catch(error => {
    console.error('Error reading the JSON file:', error);
  });