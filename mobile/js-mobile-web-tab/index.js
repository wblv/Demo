(function () {
  const outerBox = document.getElementsByClassName("outer-box")[0];
  const outerBox2 = document.getElementsByClassName("outer-box2")[0];

  const navArr = document.getElementsByClassName("nav-item");

  const data = [
    { title: "问题1", desc: "描述1" },
    { title: "问题2", desc: "描述2" },
    { title: "问题3", desc: "描述3" },
    { title: "问题4", desc: "描述4" },
  ];

  const data2 = [
    { title: "问题5", desc: "描述1" },
    { title: "问题6", desc: "描述2" },
    { title: "问题7", desc: "描述3" },
    { title: "问题8", desc: "描述4" },
  ];

  const allData = [data, data2];

  const items = [];
  const descs = [];

  allData.forEach((item, index) => {
    item.forEach((item2, index2) => {
      const odiv = document.createElement("DIV");
      const tdiv = document.createElement("DIV");
      const ddiv = document.createElement("DIV");
      tdiv.innerHTML = "<div class='icon'>Q</div>" + item2.title;
      ddiv.innerHTML = "<div class='icon'>A</div>" + item2.desc;

      odiv.className =
        "item-box " + "item-box" + index2 + " item-box-index" + index;
      odiv.setAttribute("data-box-index", index);

      tdiv.className = "item-title";
      ddiv.className = "item-desc";

      odiv.append(tdiv);
      odiv.append(ddiv);

      items.push(odiv);
      descs.push(ddiv);
      if (index === 0) {
        outerBox.append(odiv);
      } else {
        outerBox2.append(odiv);
      }
    });
  });

  navArr[0].addEventListener("click", function () {
    navArr[0].className = "nav-item nav-item1 active";
    navArr[1].className = "nav-item nav-item2";
    outerBox.className = "outer-box outer-box-item active";
    outerBox2.className = "outer-box2 outer-box-item";
  });

  navArr[1].addEventListener("click", function () {
    navArr[0].className = "nav-item nav-item1";
    navArr[1].className = "nav-item nav-item2 active";
    outerBox.className = "outer-box outer-box-item";
    outerBox2.className = "outer-box2 outer-box-item active";
  });

  let openIndex = 0;
  let openIndex2 = null;

  descs[0].className = "item-desc open";

  function setActiveItem(boxIndex, index) {
    if (boxIndex == 0) {
      if (openIndex === +openIndex) {
        descs[openIndex].className = "item-desc";
      }
      descs[index].className = "item-desc open";
      openIndex = index;
    } else {
      if (openIndex2 === +openIndex2) {
        descs[openIndex2].className = "item-desc";
      }
      descs[index].className = "item-desc open";
      openIndex2 = index;
    }
  }

  for (let i = 0, len = items.length; i < len; i++) {
    items[i].addEventListener("click", () => {
      const boxIndex = items[i].getAttribute("data-box-index");
      setActiveItem(boxIndex, i);
    });
  }
})();
