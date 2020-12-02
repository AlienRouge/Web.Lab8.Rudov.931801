let container = document.querySelector(".container").cloneNode(true);

AddLine = (count) => {
  for (let i = 0; i < count; i++) {
    document.querySelector(".list").append(container.cloneNode(true));
  }
};

RemoveLine = (pointer) => {
  pointer.parentElement.remove();
};

RemoveAll = () => {
  childs = document.querySelector(".list");
  while (childs.firstChild) {
    childs.removeChild(childs.firstChild);
  }
};

MoveUp = (pointer) => {
  previous = pointer.parentElement.previousElementSibling;
  if (previous) pointer.parentElement.after(previous);
};

MoveDown = (pointer) => {
  next = pointer.parentElement.nextElementSibling;
  if (next) pointer.parentElement.before(next);
};

GetJSON = () => {
  Mass = document.getElementsByClassName("container");
  JSON_string = {};
  for (let item of Mass) {
    fields = item.getElementsByTagName("input");
    JSON_string[fields[0].value] = fields[1].value;
  }
  delete JSON_string[""];
  document.querySelector(".output").innerHTML = JSON.stringify(JSON_string);
};
