function customRender(reactElement,a){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
    a.appendChild(domElement)
}
const reactElement={
    type:'a',
    props:{
        href:'http://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}

const a=document.querySelector(".name");

// a.innertext="hiesgies";
customRender(reactElement,a)