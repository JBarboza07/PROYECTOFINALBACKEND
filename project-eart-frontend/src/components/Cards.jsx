import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  TextField,
  Button,
  Box,
  CardMedia,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

// Componente individual de publicación
function PostCard({ post, onLike, onComment }) {
  // Mover los hooks arriba del return condicional
  const [liked, setLiked] = useState(post?.liked || false);
  const [likesCount, setLikesCount] = useState(post?.likes || 0);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState(post?.comments || []);

  if (!post) return <Typography color="error">Error: publicación no disponible</Typography>;

  const handleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    setLikesCount((prev) => prev + (newLiked ? 1 : -1));
    onLike(post.id, newLiked);
  };

  const handleAddComment = () => {
    const trimmed = commentText.trim();
    if (!trimmed) return;

    const newComment = { id: Date.now(), text: trimmed };
    setComments((prev) => [...prev, newComment]);
    setCommentText('');
    onComment(post.id, trimmed);
  };

  return (
    <Card sx={{ maxWidth: 600, margin: '20px auto' }}>
      <CardHeader
        avatar={<Avatar src={post.userAvatar} alt={post.username} />}
        title={post.username}
      />

      <CardMedia
        component="img"
        height="500"
        image={post.image}
        alt="publicación"
      />

      <CardActions disableSpacing>
        <IconButton onClick={handleLike}>
          {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </IconButton>
        <IconButton>
          <ChatBubbleOutlineIcon />
        </IconButton>
        <Typography variant="body2" sx={{ ml: 1 }}>
          {likesCount} {likesCount === 1 ? 'me gusta' : 'me gustas'}
        </Typography>
      </CardActions>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>

        <Box sx={{ mt: 2 }}>
          {comments.map((c) => (
            <Typography key={c.id} variant="body2" sx={{ mb: 0.5 }}>
              <strong>{post.username}:</strong> {c.text}
            </Typography>
          ))}
        </Box>

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Agrega un comentario..."
          size="small"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          sx={{ mt: 1 }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleAddComment();
          }}
        />

        <Button
          variant="contained"
          size="small"
          sx={{ mt: 1 }}
          onClick={handleAddComment}
        >
          Publicar
        </Button>
      </CardContent>
    </Card>
  );
}

// Componente principal que muestra todas las publicaciones
export default function Cards() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'usuario1',
      userAvatar: 'https://i.pravatar.cc/150?img=3',
      image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d',
      description: 'Un día increíble en la playa 🏖️',
      likes: 12,
      liked: false,
      comments: [{ id: 1, text: '¡Qué linda foto!' }],
    },
    {
      id: 2,
      username: 'usuario2',
      userAvatar: 'https://i.pravatar.cc/150?img=5',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
      description: 'Disfrutando el atardecer 🌇',
      likes: 34,
      liked: false,
      comments: [],
    },
  ]);

  const handleLike = (postId, liked) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, liked } : post
      )
    );
  };

  const handleComment = (postId, commentText) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [...post.comments, { id: Date.now(), text: commentText }],
            }
          : post
      )
    );
  };

  return (
    <div>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onLike={handleLike}
          onComment={handleComment}
        />
      ))}
    </div>
  );
}
