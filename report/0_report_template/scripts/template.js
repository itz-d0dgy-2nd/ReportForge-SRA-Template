window.onload = function() {

  document.querySelectorAll('.risk-matrices-section td').forEach(tableData => {
    [...tableData.querySelectorAll('a')].forEach((link, i) => {
      if (i % 3 === 2) link.after(document.createElement('br'));
    });
  });

  document.querySelectorAll('img').forEach(img => {
    const caption = document.createElement('figcaption');
    caption.innerHTML = "<strong>Figure: </strong>" + img.alt;
    img.parentNode.insertBefore(caption, img.nextSibling);
  });
};
