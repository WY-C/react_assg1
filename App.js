import styled from "styled-components";
import PostItem from "./PostItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const App = () => {
	return (
		<ParentComponent>
			<LeftComponent>
				<ImageContainer>
				<FontAwesomeIcon icon={faFacebook} />
				<FontAwesomeIcon icon={faGithub} />
				<FontAwesomeIcon icon={faGooglePlay} />
				<FontAwesomeIcon icon={faInstagram} />
				</ImageContainer>
				<Line> __________________ </Line>
				<Title> WY_C의 IT 블로그 </Title>

			</LeftComponent>		
			<RightComponent>
				<RightExplainComponent>				
					<PostItem></PostItem>
					<PostItem></PostItem>
					<PostItem></PostItem>
					<PostItem></PostItem>
				</RightExplainComponent>

			</RightComponent>

		</ParentComponent>
	);
}


/*
const App = () => {
	return (
		<ParentComponent>
			<LeftComponent>
				<ImageContainer>
					<Image1> ㅁ ㅁ ㅁ ㅁ </Image1>
				</ImageContainer>
				<Line> __________________ </Line>
				<Title> WY_C의 IT 블로그 </Title>

			</LeftComponent>		
			<RightComponent>
				<RightExplainComponent>				
					<PostItem></PostItem>
					<PostItem></PostItem>
					<PostItem></PostItem>
					<PostItem></PostItem>
				</RightExplainComponent>

			</RightComponent>

		</ParentComponent>
	);
}*/
const ParentComponent = styled.div`
    height: 100vh;
    width: 100vw;
    
    display: flex;
    flex-direction: row;
`;


const LeftComponent = styled.div`	//styled.tag
	height: 100vh;
	width: 325px;
	display: flex;
	background-color: rgb(22, 78, 171);
	flex-direction: column-reverse;
`;

const Title = styled.p`
	height: 0px;
	width: 170px;
	padding: 30px;
	margin: 0;
	color: rgb(255, 255, 255);
	display: flex;
	font-size: 40px;
`;

const ImageContainer = styled.div`	
height: 0px;
width: 270px;
padding: 35px;
color: rgb(255, 255, 255);
font-size: 30px;
display: flex;
justify-content: space-between;
flex-direction: row;
`

const Image = styled.p`
	height: 30px;
	width: 30px;
	padding: 30px;
	borderColor: rgb(255, 255, 255);
	border: '1px solid black';
`
const Line = styled.p`
height: 0px;
width: 400px;
margin: 1;
padding: 20px;
color: rgb(255, 255, 255);
display: flex;
font-size: 40px;
`;

const Image1 = styled.p`
	height: 0px;
	width: 150px;
	padding: 30px;
	margin: 2;
	color: rgb(255, 255, 255);
	font-size: 30px;
	display: flex;
	justify-content: space-around;
`;

const RightComponent = styled.div`
	width: 100%;
	height: 100%;
`

const RightExplainComponent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding: 100px;
`

export default App;


/*

import { useEffect, useState } from "react";

const App = () => {
	const [number, setNumber] = useState(0);
  const [arr, setArr] = useState(0);
useEffect(() => {
	return () => {
    
  };
}, [number]);
	
	useEffect(() => {
    
		// componentDidMount        //렌더링 되자마자
		// componentDidUpdate       //state값이 바뀌면서 화면을 다시 그리면서
		//그려지고나서 바로 실행됨
		return () => {
      //사라진 이후 실행됨
			// componentWillUnmount
		};
	}, [number]);
	// 배열에 특정 props, state 등의 변수 값을 넣을 수 있다.
	// 그러면, componentDidUpdate 생명 주기와 유사하지만,
	// 배열에 들어있는 값이 Update 된 경우에만 동작한다.
	// 빈 배열인 경우, Update를 확인할 값이 없으므로, 모든 Update에 반응하지 않는다.
	// 모든 Update에 반응하도록 하려면 배열을 생략한다.

  //ex) number값이 update 된 경우에만 componentDidMount, componentDidupdate가 실행된다.
  //[]이 없으면, 어떤 변수가 update되든간에 갱신됨. []만 있으면, 아예 갱신되지 않음. (componentDidupdate가 의미가 없어짐)
}
export default App;

*/
/*

import logo from './logo.svg';
import './App.css';

import { useState } from "react";

const App = () => {
	// 구조분해 할당 문법
	const [number, setNumber] = useState(0);    //단순 변수보다 state를 써야함.

	return (
		<>
			<h1> Number is {number} </h1>
			<button onClick={
				() => 
					setNumber(number + 1)   //변수의 값이 변한다고 자동으로 다시 그려주지 않음.
				}>Button</button>
		</>
	);
}

export default App;
*/