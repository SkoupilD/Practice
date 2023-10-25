const getSleepHours = day => {
    switch(day){
      case 'monday': return 7;
      break;
      case 'tuesday': return 6.5;
      break;
      case 'wednesday': return 8;
      break;
      case 'thuesday': return 5.5;
      break;
      case 'friday': return 7.5;
      break;
      case 'saturday': return 5.5;
      break;
      case 'sunday': return 9.5;
      break;
    }
  }
  const getActualSleepHours = () => 
    7 + 6.5 + 8 + 5.5 + 7.5 + 5.5 + 9.5;
  
  const getIdealSleepHours = day =>{
    if (day === 'monday'|| day === 'tuesday' || day === 'wednesday' || day === 'thuesday' || day === 'friday'|| day === 'saturday' || day === 'sunday'){
      return 8;
    }
  }
  const getIdealSleepHoursTotal = ideal =>  7 * ideal;
  
  const calculateSleepDebt = day => {
    return getIdealSleepHours(day) - getSleepHours(day)};
    
  const calculateSleepDebtTotal = () => {
    return getIdealSleepHoursTotal(8) - getActualSleepHours()};
  
  
  
  