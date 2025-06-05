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
  if (!post) return <Typography color="error">Error: post no disponible</Typography>;

  const [liked, setLiked] = useState(post.liked);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState(post.comments || []);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
    onLike(post.id, !liked);
  };

  const handleAddComment = () => {
    if (!commentText.trim()) return;
    const newComment = { id: Date.now(), text: commentText };
    setComments([...comments, newComment]);
    setCommentText('');
    onComment(post.id, commentText);
  };

  return (
    <Card sx={{ maxWidth: 600, margin: '20px auto' }}>
      <CardHeader
<<<<<<< HEAD
        avatar={<Avatar src={post.userAvatar} alt={post.username} />}
        title={post.username}
=======
        avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
        action={
          
          <>
            <IconButton onClick={handleMenuOpen}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleEdit}>Editar publicación</MenuItem>
              <MenuItem onClick={handleDelete}>Eliminar publicación</MenuItem>
            </Menu>
          </>
        }
        title="usuario_earth"
        subheader="Hace un momento"
>>>>>>> e02536952659bd57ea27c11e00bd60779c66948f
      />
      <CardMedia
        component="img"
        height="500"
        image={post.image}
        alt="post"
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
              comments: [
                ...post.comments,
                { id: Date.now(), text: commentText },
              ],
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
