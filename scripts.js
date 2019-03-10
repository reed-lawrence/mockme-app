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

function copyNoniOS(elementId) {

  // Create a "hidden" input
  var aux = document.createElement("input");

  // Assign it the value of the specified element
  aux.setAttribute("value", document.getElementById(elementId).innerHTML);

  // Append it to the body
  document.body.appendChild(aux);

  // Highlight its content
  aux.select();

  // Copy the highlighted text
  document.execCommand("copy");

  // Remove it from the body
  document.body.removeChild(aux);


}

function copy(elementId) {

  var input = document.getElementById(elementId);
  var isiOSDevice = navigator.userAgent.match(/ipad|iphone/i);

  if (isiOSDevice)
  {

    var editable = input.contentEditable;
    var readOnly = input.readOnly;

    input.contentEditable = true;
    input.readOnly = false;

    var range = document.createRange();
    range.selectNodeContents(input);

    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    input.setSelectionRange(0, 999999);
    input.contentEditable = editable;
    input.readOnly = readOnly;

    document.execCommand('copy');
  }
  else
  {
    copyNoniOS(elementId);
  }

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