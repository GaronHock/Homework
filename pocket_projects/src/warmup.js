
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {

  
   let paragraph = document.createElement("p");
   let paragraphContent = document.createTextNode(string);
   paragraph.appendChild(paragraphContent);
    const html = htmlElement.appendChild(paragraph);
};

htmlGenerator("I <3 vanilla DOM Manipulation", partyHeader);