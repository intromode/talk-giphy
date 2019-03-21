export default function madLibTemplate(name, activity, adj1, activity2, randomPic) {
    const html = `
 <li>
 <div class="dev-img-container">
  <img src="${randomPic}">
  </div>
  <div class="name">  
   <h2>${name}</h2>   
   <p>Hi, my name is ${name}. I like to ${activity}... I guess. My spirit animal is a ${adj1} giraffe. In my spare time I like to ${activity2}. </p>
   </div>
 </li>
 `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}
