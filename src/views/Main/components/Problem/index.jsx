import React from 'react'
import { Typography } from 'src/components'
import { Button } from 'src/components'

const Problem = () => {
    return (
        <article>
            <div>
                <Typography>문제 유형</Typography>
                <Typography>문제 설명</Typography>
                <Button varient="outlined">버튼</Button>
                <Button varient="outlined">버튼</Button>
            </div>
            <div>
                <Typography>1</Typography>
                <img
                    alt="문제 이미지"
                    src="https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/9/h/1/1/01118/9_31101118_SVrl8_OBN_p.png"
                />
            </div>
        </article>
    )
}

Problem.propTypes = {}

export default Problem
