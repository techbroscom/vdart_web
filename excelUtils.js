// excelUtils.js
function arrayToExcel(array, filename) {
    const ws = XLSX.utils.aoa_to_sheet(array);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, filename + '.xlsx');
  }
  