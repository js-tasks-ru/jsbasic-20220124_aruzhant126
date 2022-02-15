function highlight(table) {
  // ваш код...

  for (const row of table.rows) {
    for (let i = 0; i < row.cells.length; i++) {
      const td = row.cells[i];
      if (td.dataset.available ==='true') {
        td.closest("tr").classList.add("available")
      } else if (td.dataset.available ==='false') {
        td.closest("tr").classList.add("unavailable") 
      }
      
      if (!td.dataset.available) {
        td.closest('tr').hidden = true;
      }

      if (td.innerHTML === 'm') {
        td.closest("tr").classList.add("male");
      } else {
        td.closest("tr").classList.add("female");
      } 
      
      if (td.innerHTML < 18) {
        td.closest("tr").style.textDecoration = 'line-through';
      }
    }
  }

}