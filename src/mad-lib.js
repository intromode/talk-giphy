export default function madLibTemplate(name, noun, adj1, adj2, adj3, randomPic) {
    const html = `
 <li>
   <p>${name}</p>
   <img src="${randomPic}">
   <p>Description: ${name} is a ${noun} something. Lorem ipsum dolor sit amet, consectetur adipiscing ${adj1}, sed do eiusmod tempor incididunt ut labore et ${adj2} magna aliqua. Ut enim ad ${adj3} veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
 </li>
 `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}
