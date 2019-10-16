function appendRow() {
  // Write your code here.
  document.getElementByID('tbl').appendChild(node);
}

// Example case. 
document.body.innerHTML = `
<table id="tbl" border="1">
  <tbody>
    <tr>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>`;

appendRow();

console.log(document.body.innerHTML);