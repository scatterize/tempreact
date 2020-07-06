import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app/';
// class WhoIAm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 26,
//       test: '',
//     };
//     this.nextYear = this.nextYear.bind(this);
//   }
//   nextYear() {
//     //console.log(1);
//     // this.setState((state) => ({
//     //   years: ++state.years,
//     // }));
//     this.setState(function (s, p) {
//       return { years: ++s.years, test: p.name + p.surfname };
//     });
//   }

//   render() {
//     const { name, surfname, link } = this.props;
//     const { years, test } = this.state;
//     return (
//       <>
//         <button onClick={this.nextYear}>++</button>
//         <h1>
//           My name {test} is {name}, surfname - {surfname}, years - {years}
//         </h1>
//         <a href={link}>godlike link</a>
//       </>
//     );
//   }
// }

// const All = () => {
//   return (
//     <>
//       <WhoIAm name="jonh" surfname="jpehon" link="godlike.com" />
//       <WhoIAm name="bill" surfname="kill" link="like.com" />
//       <WhoIAm name="hohn" surfname="chpohan" link="god.com" />
//     </>
//   );
// };

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<All />, document.getElementById('root'));
