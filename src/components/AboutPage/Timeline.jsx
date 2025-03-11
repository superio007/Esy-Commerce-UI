// import React from "react";
// import HorizontalTimeline from "react-horizontal-timeline";

// const EXAMPLE = [
//   {
//     data: "2019-12-05",
//     status: "status",
//     statusB: "Admission Start",
//     statusE: "Admission Open",
//   },
//   {
//     data: "2020-01-21",
//     status: "status",
//     statusB: "Start 1st round",
//     statusE: "Open for Fillup",
//   },
//   {
//     data: "2020-02-25",
//     status: "status",
//     statusB: "Start 2nd round",
//     statusE: "process",
//   },
//   {
//     data: "2020-03-16",
//     status: "status",
//     statusB: "Start 3rd round",
//     statusE: "Done",
//   },
//   {
//     data: "2020-04-19",
//     status: "status",
//     statusB: "Start 4th round",
//     statusE: "Done",
//   },
//   {
//     data: "2020-05-23",
//     status: "status",
//     statusB: "Complete",
//     statusE: "Done",
//   },
// ];

// export default class Timeline extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       curIdx: 0,
//       prevIdx: -1,
//     };
//   }

//   //state = { value: 0, previous: 0 };

//   render() {
//     const { curIdx, prevIdx } = this.state;
//     const curStatus = EXAMPLE[curIdx].statusB;
//     const prevStatus = prevIdx >= 0 ? EXAMPLE[prevIdx].statusB : "";

//     return (
//       <div>
//         <div
//           style={{
//             width: "80%",
//             height: "100px",
//             margin: "0 auto",
//             marginTop: "20px",
//             fontSize: "15px",
//           }}
//         >
//           <HorizontalTimeline
//             styles={{
//               background: "#f8f8f8",
//               foreground: "#1A79AD",
//               outline: "#dfdfdf",
//             }}
//             index={this.state.curIdx}
//             indexClick={(index) => {
//               const curIdx = this.state.curIdx;
//               this.setState({ curIdx: index, prevIdx: curIdx });
//             }}
//             values={EXAMPLE.map((x) => x.data)}
//           />
//         </div>
//         <div className="text-center">
//           {/* Prevoius:-{prevStatus} - Current Select:-{curStatus} */}
//           {curStatus}
//         </div>
//       </div>
//     );
//   }
// }
