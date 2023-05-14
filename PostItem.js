import styled from "styled-components";

const PostItem = () => {
    return (
        <>
        <PostItemContainer>
            <ImageComponent>Post Image!!</ImageComponent>
            <PostNameContainer>
                <PostTitle> Post Title</PostTitle>
                <PostDate> May 14, 2023</PostDate>
                <PostTag> #CECOM #Mentoring</PostTag>
            </PostNameContainer>


        </PostItemContainer>
        </>
    )
}

const PostItemContainer = styled.div`
    height: 150px;
    width: 450px;
    display: flex;
    flex-direction: row;
`

const ImageComponent = styled.div`
    height: 150px;
    width: 150px;
    font-weight: 700;
    background-color: lightblue;
`

const PostNameContainer = styled.div`
    height: 150px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const PostTitle = styled.p`
margin: 0 0 20px 0;
font-weight: 700;
    color: blue;
`

const PostDate = styled.p`
    margin: 0;
    color: gray;
`

const PostTag = styled.p`
    margin: 0;
    color: gray;
`

export default PostItem;