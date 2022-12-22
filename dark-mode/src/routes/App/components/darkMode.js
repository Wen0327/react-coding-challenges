// import { useEffect, useState } from "react";

// const DarkMode =()=>{
//     const [theme,setTheme]=useState('light-mode')

//     const toggleTheme = ()=>{
//         if(theme==='dark-mode'){
//             setTheme('light-mode')
//         }else{
//             setTheme('dark-theme')
//         }
//     };
//     useEffect(()=>{
//         document.body.className = theme;
//     },[theme]);

//     return <></>;
// };
// export default DarkMode;

// import React from 'react';

// class Toggle extends React.Component{
    
//     constructor(props){
//       super(props);
//       this.state ={
//         isToggle: true
//       }
//       this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick(){
//       this.setState(prevState =>({
//         isToggle: !prevState.isToggle
//       }));
//     }
//   }

//   export default Toggle;