import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const APIContainer = styled.div`
  margin: 20px;
  text-align: center;
`;

const SearchContainer = styled.div`
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #333;
  border-radius: 8px;
  width: 300px;
  margin-right: 10px;

  &:focus {
    border-color: #646cff;
    outline: none;
  }
`;

const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

const PostCard = styled.div`
  width: 250px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const PostTitle = styled.h3`
  font-size: 1.1rem;
  padding: 10px;
`;

const PostDescription = styled.p`
  font-size: 0.9rem;
  padding: 0 10px 10px;
`;

const postImage = "https://img.freepik.com/fotos-gratis/fundo-texturizado-abstrato_1258-30515.jpg?semt=ais_hybrid";


function PostList() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Erro ao carregar posts:', error);
      }
    };

    fetchPosts();
  }, []);


  
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  return (
    <APIContainer>
      <h2>YouTube</h2>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Pesquisar vídeos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchContainer>
      <PostContainer>
        {filteredPosts.map((post) => (
          <PostCard key={post.id}>
            <Thumbnail src={postImage} alt="Thumbnail" />
            <PostTitle>{post.title}</PostTitle>
            <PostDescription>{post.body}</PostDescription>
          </PostCard>
        ))}
      </PostContainer>
    </APIContainer>
  );
}

export default PostList;