// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"
function bmi(weight, height) {
    const bmi = weight / (height * height);
    let result = '';
  
    switch(true) {
      case (bmi <= 18.5):
        result = "Underweight";
        break;
      case (bmi <= 25.0):
        result = "Normal";
        break;
      case (bmi <= 30.0):
        result = "Overweight";
        break;
      default:
        result = "Obese";
        break;
    }
  
    return result;
  }