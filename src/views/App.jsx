function App() {
	return (
		<main>
			<section>
				<article>
					<h4>학습지 상세 편집</h4>
				</article>
				<article>
					<div>
						<span>문제 유형</span>
						<span>문제 설명</span>
						<button>버튼</button>
						<button>버튼</button>
					</div>
					<div>
						<span>1</span>
						<img
							alt='문제 이미지'
							src='https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/9/h/1/1/01118/9_31101118_SVrl8_OBN_p.png'
						/>
					</div>
				</article>
			</section>
			<section>
				<article>
					<h4>문항 교체/추가</h4>
				</article>
				<article>
					<p>유사문항 버튼을 누르면</p>
					<p>해당 문제의 유사 문항을 볼 수 있습니다.</p>
				</article>
			</section>
		</main>
	);
}

export default App;
