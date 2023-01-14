function daysInMonth(month, year){
    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
      }
      
      const date = new Date();
      const currentYear = date.getFullYear();
      const currentMonth = date.getMonth() + 1; 
      
      const daysInSeptember = getDaysInMonth(year, month);
      console.log(daysInSeptember); 
}

daysInMonth(2, 2021);