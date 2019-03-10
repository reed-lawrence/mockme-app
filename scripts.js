function convert(input) {

  let str = '';
  let isEven = true;
  for (let char of input)
  {
    console.log(char);

    if (isEven === true)
    {
      str += char.toUpperCase();
    } else
    {
      str += char.toLowerCase();
    }

    isEven = isEven === true ? false : true;
  }

  return str;
}

function copy() {

  // Create a "hidden" input
  var aux = document.createElement("input");

  // Assign it the value of the specified element
  aux.setAttribute("value", document.getElementById('output').innerHTML);

  // Append it to the body
  document.body.appendChild(aux);

  // Highlight its content
  aux.select();

  // Copy the highlighted text
  document.execCommand("copy");

  // Remove it from the body
  document.body.removeChild(aux);

  $('#copy-alert').slideDown('fast').delay(1000).slideUp('fast');
}

$(function () {
  console.log('document ready');
  $('#text-input').on('input', function () {
    const convertedStr = convert(this.value);
    if (convertedStr === null || convertedStr.length === 0)
    {
      $('#output').html('YoU WoUlDn\'t dOwNlOaD A CaR');
    } else
    {
      $('#output').html(convertedStr);
    }
  });
});