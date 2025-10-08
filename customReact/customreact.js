// now what we are doing is checking how react is making internally the components

// first is the basic approach
function customRender(reactElement, conatiner){
  
  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  domElement.setAttribute('href',reactElement.props.href)
  domElement.setAttribute('target',reactElement.props.target)

  conatiner.appendchild(domElement)
}



const reactElement = {
  type: 'a', // type of the tag whether it is anchor tag or div tag like that 
  props: { // now this tells us about the properties of the tag 
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit google' // what we have to wite inside the tag
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)